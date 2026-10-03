export default function AdminBlogNewPage() {
  return (
    <>
      <header className="admin-topbar">
        <div>
          <p className="admin-kicker">Blog</p>
          <h1 className="admin-title">New Blog Post</h1>
        </div>
      </header>
      <section className="admin-section">
        <div className="admin-status">Draft creation is scaffolded but disabled while database writes are blocked.</div>
        <form className="admin-form admin-disabled">
          <div className="admin-field"><label htmlFor="title">Title</label><input id="title" disabled /></div>
          <div className="admin-field"><label htmlFor="slug">Slug</label><input id="slug" disabled /></div>
          <div className="admin-field"><label htmlFor="excerpt">Excerpt</label><textarea id="excerpt" disabled /></div>
          <div className="admin-field"><label htmlFor="content">Content</label><textarea id="content" disabled /></div>
          <button className="admin-button" type="button" disabled>Save Draft</button>
        </form>
      </section>
    </>
  );
}
