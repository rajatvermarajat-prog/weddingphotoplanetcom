export default async function AdminBlogEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <>
      <header className="admin-topbar">
        <div>
          <p className="admin-kicker">Blog</p>
          <h1 className="admin-title">Edit Post {id}</h1>
        </div>
      </header>
      <section className="admin-section">
        <div className="admin-status">Post editing will be enabled after write access and storage rules are explicitly configured.</div>
      </section>
    </>
  );
}
