export default function AdminGalleryUploadPage() {
  return (
    <>
      <header className="admin-topbar">
        <div>
          <p className="admin-kicker">Gallery</p>
          <h1 className="admin-title">Upload Images</h1>
        </div>
      </header>
      <section className="admin-section">
        <div className="admin-status">
          Upload storage is pending final file-storage configuration. This form is scaffolded but disabled so no files are written to an unknown destination.
        </div>
        <form className="admin-form admin-disabled">
          <div className="admin-field"><label htmlFor="files">Images</label><input id="files" type="file" multiple disabled /></div>
          <div className="admin-field"><label htmlFor="title">Title</label><input id="title" disabled /></div>
          <div className="admin-field"><label htmlFor="category">Category</label><select id="category" disabled><option>Wedding</option><option>Pre Wedding</option><option>Cinematography</option><option>General / Other</option></select></div>
          <div className="admin-field"><label htmlFor="description">Description</label><textarea id="description" disabled /></div>
          <button className="admin-button" type="button" disabled>Publish</button>
        </form>
      </section>
    </>
  );
}
