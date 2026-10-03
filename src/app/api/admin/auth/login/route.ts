import { NextResponse } from "next/server";
import { setAdminSession, verifyAdminCredentials } from "@/lib/admin/session";

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  if (!verifyAdminCredentials(email, password)) {
    return NextResponse.redirect(new URL("/admin/login?error=invalid", request.url), { status: 303 });
  }

  await setAdminSession(email);
  return NextResponse.redirect(new URL("/admin/dashboard", request.url), { status: 303 });
}
