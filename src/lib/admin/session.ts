import "server-only";

import { createHmac, pbkdf2Sync, randomBytes, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const adminSessionCookieName = "wpp_admin_session";

const sessionMaxAgeSeconds = 60 * 60 * 8;

type AdminSessionPayload = {
  email: string;
  exp: number;
};

function getSessionSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("ADMIN_SESSION_SECRET must be set to at least 32 characters.");
  }
  return secret;
}

function sign(value: string): string {
  return createHmac("sha256", getSessionSecret()).update(value).digest("base64url");
}

function encodeSession(payload: AdminSessionPayload): string {
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${body}.${sign(body)}`;
}

function decodeSession(token: string | undefined): AdminSessionPayload | null {
  if (!token) return null;
  const [body, signature] = token.split(".");
  if (!body || !signature) return null;

  const expected = sign(body);
  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (signatureBuffer.length !== expectedBuffer.length || !timingSafeEqual(signatureBuffer, expectedBuffer)) {
    return null;
  }

  try {
    const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as AdminSessionPayload;
    if (!payload.email || payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}

export function createPasswordHash(password: string): string {
  const salt = randomBytes(16).toString("base64url");
  const iterations = 210_000;
  const digest = pbkdf2Sync(password, salt, iterations, 32, "sha256").toString("base64url");
  return `pbkdf2_sha256$${iterations}$${salt}$${digest}`;
}

export function verifyPasswordHash(password: string, encodedHash: string): boolean {
  const [algorithm, iterationsText, salt, digest] = encodedHash.split("$");
  if (algorithm !== "pbkdf2_sha256" || !iterationsText || !salt || !digest) return false;

  const iterations = Number(iterationsText);
  if (!Number.isSafeInteger(iterations) || iterations < 100_000) return false;

  const candidate = pbkdf2Sync(password, salt, iterations, 32, "sha256").toString("base64url");
  const candidateBuffer = Buffer.from(candidate);
  const digestBuffer = Buffer.from(digest);
  return candidateBuffer.length === digestBuffer.length && timingSafeEqual(candidateBuffer, digestBuffer);
}

export async function getAdminSession(): Promise<AdminSessionPayload | null> {
  const cookieStore = await cookies();
  return decodeSession(cookieStore.get(adminSessionCookieName)?.value);
}

export async function setAdminSession(email: string): Promise<void> {
  const cookieStore = await cookies();
  const exp = Math.floor(Date.now() / 1000) + sessionMaxAgeSeconds;
  cookieStore.set(adminSessionCookieName, encodeSession({ email, exp }), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: sessionMaxAgeSeconds,
  });
}

export async function clearAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(adminSessionCookieName, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
}

export function verifyAdminCredentials(email: string, password: string): boolean {
  const configuredEmail = process.env.ADMIN_EMAIL;
  const configuredHash = process.env.ADMIN_PASSWORD_HASH;
  if (!configuredEmail || !configuredHash) return false;
  return email.trim().toLowerCase() === configuredEmail.trim().toLowerCase() && verifyPasswordHash(password, configuredHash);
}
