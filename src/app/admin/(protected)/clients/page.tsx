import { mainReadDb } from "@/server/db";
import { AdminDatabaseNotice, safeAdminRead } from "@/lib/admin/safe-read";

export const dynamic = "force-dynamic";

export default async function AdminClientsPage() {
  const { data: products, state } = await safeAdminRead(() => mainReadDb.widProduct.findMany({
    orderBy: { id: "desc" },
    take: 40,
  }), []);

  return (
    <>
      <header className="admin-topbar">
        <div>
          <p className="admin-kicker">Clients</p>
          <h1 className="admin-title">Clients & Albums</h1>
        </div>
        <a className="admin-button-secondary" href="/admin/settings">Configure Writes</a>
      </header>
      <AdminDatabaseNotice state={state} />
      <section className="admin-section">
        <table className="admin-table">
          <thead>
            <tr><th>ID</th><th>Name</th><th>Category</th><th>Slug</th><th>Hero Image</th></tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.category}</td>
                <td>{product.pageSlug}</td>
                <td>{product.heroImg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
