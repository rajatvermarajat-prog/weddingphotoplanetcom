import { mainReadDb } from "@/server/db";
import { AdminDatabaseNotice, safeAdminRead } from "@/lib/admin/safe-read";

export const dynamic = "force-dynamic";

export default async function AdminGalleryPage() {
  const { data: images, state } = await safeAdminRead(() => mainReadDb.widProductImage.findMany({
    orderBy: { id: "desc" },
    take: 40,
  }), []);

  return (
    <>
      <header className="admin-topbar">
        <div>
          <p className="admin-kicker">Gallery</p>
          <h1 className="admin-title">Image Management</h1>
        </div>
        <a className="admin-button" href="/admin/gallery/upload">Upload Images</a>
      </header>
      <AdminDatabaseNotice state={state} />
      <section className="admin-section">
        <table className="admin-table">
          <thead>
            <tr><th>ID</th><th>Image</th><th>Product / Album</th><th>Type</th><th>Status</th></tr>
          </thead>
          <tbody>
            {images.map((image) => (
              <tr key={image.id}>
                <td>{image.id}</td>
                <td>{image.name}</td>
                <td>{image.pid}</td>
                <td>{image.type}</td>
                <td>{image.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
