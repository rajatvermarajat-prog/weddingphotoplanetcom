export default function AdminSettingsPage() {
  const writesEnabled = process.env.ALLOW_DB_WRITES === "true";
  const hasAdminEmail = Boolean(process.env.ADMIN_EMAIL);
  const hasAdminHash = Boolean(process.env.ADMIN_PASSWORD_HASH);
  const hasSessionSecret = Boolean(process.env.ADMIN_SESSION_SECRET);

  return (
    <>
      <header className="admin-topbar">
        <div>
          <p className="admin-kicker">Settings</p>
          <h1 className="admin-title">CMS Configuration</h1>
        </div>
      </header>
      <section className="admin-section">
        <table className="admin-table">
          <tbody>
            <tr><th>Database Writes</th><td>{writesEnabled ? "Enabled" : "Disabled by current Phase 2A guard"}</td></tr>
            <tr><th>Admin Email</th><td>{hasAdminEmail ? "Configured" : "Missing"}</td></tr>
            <tr><th>Password Hash</th><td>{hasAdminHash ? "Configured" : "Missing"}</td></tr>
            <tr><th>Session Secret</th><td>{hasSessionSecret ? "Configured" : "Missing"}</td></tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
