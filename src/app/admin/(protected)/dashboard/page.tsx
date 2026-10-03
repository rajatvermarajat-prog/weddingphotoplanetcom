import { blogReadDb, mainReadDb } from "@/server/db";
import { AdminDatabaseNotice, safeAdminRead } from "@/lib/admin/safe-read";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const { data, state } = await safeAdminRead(async () => {
    const [images, products, posts, pages] = await Promise.all([
      mainReadDb.widProductImage.count(),
      mainReadDb.widProduct.count(),
      blogReadDb.blogPost.count(),
      Promise.all([
        mainReadDb.widHome.count(),
        mainReadDb.widGallery.count(),
        mainReadDb.widWeddingPage.count(),
        mainReadDb.widPreWeddingPage.count(),
        mainReadDb.widVideoDescription.count(),
        mainReadDb.widContact.count(),
      ]).then((counts) => counts.reduce((sum, count) => sum + count, 0)),
    ]);

    return { images, products, posts, pages };
  }, { images: 0, products: 0, posts: 0, pages: 0 });

  return (
    <>
      <header className="admin-topbar">
        <div>
          <p className="admin-kicker">Admin Dashboard</p>
          <h1 className="admin-title">Content Control Center</h1>
        </div>
        <div className="admin-actions">
          <a className="admin-button" href="/admin/gallery/upload">Upload</a>
          <a className="admin-button-secondary" href="/admin/blog/new">New Post</a>
        </div>
      </header>

      <section className="admin-grid" aria-label="CMS overview">
        <article className="admin-card"><span className="admin-muted">Gallery Images</span><strong>{data.images}</strong></article>
        <article className="admin-card"><span className="admin-muted">Clients / Albums</span><strong>{data.products}</strong></article>
        <article className="admin-card"><span className="admin-muted">Blog Posts</span><strong>{data.posts}</strong></article>
        <article className="admin-card"><span className="admin-muted">Page Records</span><strong>{data.pages}</strong></article>
      </section>

      <AdminDatabaseNotice state={state} />

      <section className="admin-section">
        <h2>Implementation Status</h2>
        <div className="admin-status">
          The admin panel is protected and connected to the existing main/blog databases in read-only mode. Write workflows are intentionally disabled until the project leaves the current Phase 2A write-blocked boundary.
        </div>
      </section>
    </>
  );
}
