import { NextResponse } from "next/server";
import net from "node:net";
import tls from "node:tls";

type EnquiryPayload = {
  name?: string;
  phone?: string;
  email?: string;
  eventType?: string;
  date?: string;
  location?: string;
  message?: string;
};

type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  password: string;
  to: string;
};

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim().slice(0, 1000) : "";
}

function validate(payload: EnquiryPayload): string[] {
  const errors: string[] = [];
  const name = clean(payload.name);
  const phone = clean(payload.phone);
  const email = clean(payload.email);
  const digits = phone.replace(/\D/g, "");

  if (name.length < 2) errors.push("Name is required");
  if (digits.length < 10 || digits.length > 13) errors.push("Valid phone number is required");
  if (email && !/^\S+@\S+\.\S+$/.test(email)) errors.push("Valid email address is required");

  return errors;
}

function getConfig(): SmtpConfig {
  const host = clean(process.env.SMTP_HOST);
  const port = Number(clean(process.env.SMTP_PORT));
  const user = clean(process.env.SMTP_USER);
  const password = clean(process.env.SMTP_PASSWORD);
  const to = clean(process.env.MAIL_TO);

  if (!host || !port || !user || !password || !to) {
    throw new Error("SMTP environment variables are not configured");
  }

  return { host, port, user, password, to };
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char] ?? char);
}

function encodeHeader(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function buildBodies(payload: Required<EnquiryPayload>): { html: string; text: string } {
  const rows: [string, string][] = [
    ["Name", payload.name],
    ["Phone", payload.phone],
    ["Email", payload.email],
    ["Event", payload.eventType],
    ["Date", payload.date],
    ["Location", payload.location],
    ["Message", payload.message],
  ];

  const htmlRows = rows
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:10px 12px;border:1px solid #e5e5e5;background:#f8f8f8;font-weight:700">${escapeHtml(label)}</td><td style="padding:10px 12px;border:1px solid #e5e5e5">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");

  return {
    html: `<!doctype html><html><body style="margin:0;padding:32px;background:#f5f5f5;font-family:Arial,sans-serif"><table width="650" align="center" cellpadding="0" cellspacing="0" style="background:#fff;border:1px solid #ddd"><tr><td style="background:#111;color:#fff;padding:24px;text-align:center"><h1 style="margin:0;font-size:28px">Wedding Photo Planet</h1><p style="margin:8px 0 0;color:#ddd">New Contact Enquiry</p></td></tr><tr><td style="padding:28px"><table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">${htmlRows}</table></td></tr></table></body></html>`,
    text: rows
      .filter(([, value]) => value)
      .map(([label, value]) => `${label}: ${value}`)
      .join("\n"),
  };
}

function readLine(socket: net.Socket): Promise<string> {
  return new Promise((resolve, reject) => {
    let data = "";
    const onData = (chunk: Buffer) => {
      data += chunk.toString("utf8");
      if (/\r?\n$/.test(data) && /^\d{3} /.test(data.split(/\r?\n/).filter(Boolean).at(-1) ?? "")) {
        socket.off("data", onData);
        socket.off("error", onError);
        resolve(data);
      }
    };
    const onError = (error: Error) => {
      socket.off("data", onData);
      reject(error);
    };
    socket.on("data", onData);
    socket.once("error", onError);
  });
}

async function sendCommand(socket: net.Socket, command: string, expected: number[]): Promise<string> {
  socket.write(`${command}\r\n`);
  const response = await readLine(socket);
  const code = Number(response.slice(0, 3));
  if (!expected.includes(code)) throw new Error(`SMTP command failed: ${response.trim()}`);
  return response;
}

async function sendMail(config: SmtpConfig, subject: string, replyTo: string, html: string, text: string): Promise<void> {
  const socket =
    config.port === 465
      ? tls.connect({ host: config.host, port: config.port, servername: config.host })
      : net.connect({ host: config.host, port: config.port });

  await readLine(socket);
  await sendCommand(socket, `EHLO ${config.host}`, [250]);

  if (config.port !== 465) {
    await sendCommand(socket, "STARTTLS", [220]);
    const secureSocket = tls.connect({ socket, servername: config.host });
    await sendCommand(secureSocket, `EHLO ${config.host}`, [250]);
    await authenticateAndSend(secureSocket, config, subject, replyTo, html, text);
    return;
  }

  await authenticateAndSend(socket, config, subject, replyTo, html, text);
}

async function authenticateAndSend(socket: net.Socket, config: SmtpConfig, subject: string, replyTo: string, html: string, text: string): Promise<void> {
  await sendCommand(socket, "AUTH LOGIN", [334]);
  await sendCommand(socket, Buffer.from(config.user).toString("base64"), [334]);
  await sendCommand(socket, Buffer.from(config.password).toString("base64"), [235]);
  await sendCommand(socket, `MAIL FROM:<${config.user}>`, [250]);
  await sendCommand(socket, `RCPT TO:<${config.to}>`, [250, 251]);
  await sendCommand(socket, "DATA", [354]);

  const boundary = `wpp-${Date.now()}`;
  const message = [
    `From: Wedding Photo Planet <${config.user}>`,
    `To: ${config.to}`,
    `Reply-To: ${replyTo || config.user}`,
    `Subject: ${encodeHeader(subject)}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    "Content-Type: text/plain; charset=UTF-8",
    "",
    text,
    "",
    `--${boundary}`,
    "Content-Type: text/html; charset=UTF-8",
    "",
    html,
    "",
    `--${boundary}--`,
    ".",
  ].join("\r\n");

  await sendCommand(socket, message, [250]);
  await sendCommand(socket, "QUIT", [221]);
  socket.end();
}

export async function POST(request: Request) {
  let payload: EnquiryPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request body" }, { status: 400 });
  }

  const errors = validate(payload);
  if (errors.length) {
    return NextResponse.json({ success: false, message: errors.join(", "), errors }, { status: 400 });
  }

  const values: Required<EnquiryPayload> = {
    name: clean(payload.name),
    phone: clean(payload.phone),
    email: clean(payload.email),
    eventType: clean(payload.eventType),
    date: clean(payload.date),
    location: clean(payload.location),
    message: clean(payload.message),
  };

  try {
    const config = getConfig();
    const { html, text } = buildBodies(values);
    await sendMail(config, `New Contact Enquiry - ${values.name}`, values.email, html, text);
    return NextResponse.json({ success: true, message: "Thank you for contacting us. We will get back to you soon." });
  } catch (error) {
    console.error("Enquiry email failed", error);
    return NextResponse.json({ success: false, message: "Email could not be sent. Please call us directly." }, { status: 500 });
  }
}
