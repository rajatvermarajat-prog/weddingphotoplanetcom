import { blogReadDb } from "@/server/db";

export const dynamic = "force-dynamic";

export default async function AdminBlogPage() {
  const posts = await blogReadDb.blogPost.findMany({
    include: { author: true },
    orderBy: { createdAt: "desc" },
    take: 40,
  });

  return (
    <>
      <header className="admin-topbar">
        <div>
          <p className="admin-kicker">Blog</p>
          <h1 className="admin-title">Blog CMS</h1>
        </div>
        <a className="admin-button" href="/admin/blog/new">New Post</a>
      </header>
      <section className="admin-section">
        <table className="admin-table">
          <thead>
            <tr><th>Title</th><th>Status</th><th>Author</th><th>Published</th></tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.status}</td>
                <td>{post.author.displayName ?? post.author.username}</td>
                <td>{post.publishedAt?.toLocaleDateString() ?? "Draft"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
