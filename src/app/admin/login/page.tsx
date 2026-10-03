import type { Metadata } from "next";
import Link from "next/link";
import { PasswordField } from "./PasswordField";
import "../admin.css";

export const metadata: Metadata = {
  title: "Admin Login | Wedding Photo Planet",
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;

  return (
    <main className="admin-login">
      <section className="admin-login-card" aria-labelledby="admin-login-title">
        <p className="admin-kicker">Wedding Photo Planet CMS</p>
        <h1 id="admin-login-title">Admin Login</h1>
        <p className="admin-muted">Use the secure admin credentials configured on the server.</p>
        {params.error ? <p className="admin-error">Invalid email or password.</p> : null}
        <form className="admin-form" action="/api/admin/auth/login" method="post">
          <div className="admin-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="username" required />
          </div>
          <PasswordField />
          <button className="admin-button" type="submit">Login</button>
        </form>
        <p className="admin-muted">
          <Link href="/">Return to public website</Link>
        </p>
      </section>
    </main>
  );
}
