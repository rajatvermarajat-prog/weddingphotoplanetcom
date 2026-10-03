import { notFound } from "next/navigation";
import { mainReadDb } from "@/server/db";

export const dynamic = "force-dynamic";

export default async function AdminClientDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const productId = Number(id);
  if (!Number.isInteger(productId)) notFound();

  const product = await mainReadDb.widProduct.findUnique({ where: { id: productId } });
  if (!product) notFound();

  return (
    <>
      <header className="admin-topbar">
        <div>
          <p className="admin-kicker">Client / Album</p>
          <h1 className="admin-title">{product.productName ?? `Record ${product.id}`}</h1>
        </div>
      </header>
      <section className="admin-section">
        <dl className="admin-form">
          <div><dt className="admin-muted">Category</dt><dd>{product.category}</dd></div>
          <div><dt className="admin-muted">Slug</dt><dd>{product.pageSlug}</dd></div>
          <div><dt className="admin-muted">SEO Title</dt><dd>{product.seoTitle}</dd></div>
        </dl>
      </section>
    </>
  );
}
