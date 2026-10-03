import Link from "next/link";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/admin/session";

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/gallery", label: "Gallery" },
  { href: "/admin/clients", label: "Clients" },
  { href: "/admin/blog", label: "Blog" },
  { href: "/admin/pages", label: "Website Content" },
  { href: "/admin/settings", label: "Settings" },
];

export default async function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar" aria-label="Admin navigation">
        <div className="admin-brand">
          <strong>Wedding Photo Planet</strong>
          <span>Admin CMS</span>
        </div>
        <nav className="admin-nav">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>
        <div className="admin-sidebar-footer">
          <small>Signed in as {session.email}</small>
          <form action="/api/admin/auth/logout" method="post">
            <button className="admin-logout" type="submit">Logout</button>
          </form>
        </div>
      </aside>
      <main className="admin-main">{children}</main>
    </div>
  );
}
