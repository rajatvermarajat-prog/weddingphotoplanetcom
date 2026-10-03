import { mainReadDb } from "@/server/db";

export const dynamic = "force-dynamic";

export default async function AdminPagesPage() {
  const [home, gallery, wedding, preWedding, video, contact] = await Promise.all([
    mainReadDb.widHome.count(),
    mainReadDb.widGallery.count(),
    mainReadDb.widWeddingPage.count(),
    mainReadDb.widPreWeddingPage.count(),
    mainReadDb.widVideoDescription.count(),
    mainReadDb.widContact.count(),
  ]);

  const rows = [
    ["Home", home],
    ["Images / Gallery", gallery],
    ["Wedding", wedding],
    ["Pre Wedding", preWedding],
    ["Cinematography", video],
    ["Contact Us", contact],
  ] as const;

  return (
    <>
      <header className="admin-topbar">
        <div>
          <p className="admin-kicker">Website Content</p>
          <h1 className="admin-title">Public Page Records</h1>
        </div>
      </header>
      <section className="admin-section">
        <table className="admin-table">
          <thead><tr><th>Page</th><th>Existing Records</th><th>Status</th></tr></thead>
          <tbody>
            {rows.map(([label, count]) => (
              <tr key={label}><td>{label}</td><td>{count}</td><td>Read-only connected</td></tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
