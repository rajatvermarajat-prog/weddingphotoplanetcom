import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PublicLayout } from "@/app/_wpp-pages/Legacy";
import { blogDetailPages } from "@/app/_wpp-pages/blog-detail-data";

type BlogDetailProps = {
  params: Promise<{ slug: string }>;
};

function findPost(slug: string) {
  return blogDetailPages.find((post) => post.slug === slug);
}

export function generateStaticParams() {
  return blogDetailPages.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) {
    return { title: "Blog | Wedding Photo Planet" };
  }

  const robots = post.metadata.robots as string;

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    keywords: post.metadata.keywords || undefined,
    robots: robots === "noindex, nofollow" ? { index: false, follow: false } : { index: true, follow: true },
    alternates: post.metadata.canonical ? { canonical: post.metadata.canonical } : undefined,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      images: post.image ? [{ url: post.image, alt: post.imageAlt }] : undefined,
      type: "article",
    },
  };
}

function BlogRelatedCard({ post }: { post: (typeof blogDetailPages)[number]["related"][number] }) {
  return (
    <article className="wpp-blog-grid-card">
      <Link className="wpp-blog-grid-card__media" href={post.href}>
        <img src={post.image} alt={post.imageAlt} loading="lazy" decoding="async" />
      </Link>
      <div className="wpp-blog-grid-card__body">
        <div className="wpp-blog-grid-card__meta">
          <span className="ubs-badge">{post.category}</span>
          <span className="ubs-badge ubs-badge--muted">{post.date}</span>
          <span className="ubs-badge ubs-badge--muted">{post.readText}</span>
        </div>
        <h3 className="wpp-blog-grid-card__title">
          <Link href={post.href}>{post.title}</Link>
        </h3>
        <p className="wpp-blog-grid-card__excerpt">{post.excerpt}</p>
        <Link className="wpp-blog-grid-card__btn" href={post.href}>Read More</Link>
      </div>
    </article>
  );
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <PublicLayout activePath="/blog">
      <div className="ubs ubs-blog-detail-page">
        <section
          className={post.heroClass}
          style={post.image ? { backgroundImage: `url("${encodeURI(post.image)}")` } : undefined}
        >
          <div className="ubs-page-hero__overlay" />
          <div className="container-fluid wpp-blog-detail-hero__inner">
            <nav className="ubs-page-hero__breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/blog/">Blog</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Article</span>
            </nav>
            <div className="ubs-page-hero__meta">
              <span className="ubs-badge ubs-badge--hero">{post.category}</span>
              <span className="ubs-badge ubs-badge--hero ubs-badge--muted">{post.date}</span>
              <span className="ubs-badge ubs-badge--hero ubs-badge--muted">{post.readText}</span>
            </div>
            <h1 className="ubs-page-hero__title">{post.title}</h1>
          </div>
        </section>

        <article className="ubs-article ubs-article--detail">
          <div className="container-fluid wpp-blog-detail__container">
            <div className="wpp-blog-detail__content">
              <div className="ubs-prose blog-article-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
              <div className="wpp-blog-detail__actions">
                <Link href="/blog/" className="wpp-blog-detail__btn wpp-blog-detail__btn--ghost">All posts</Link>
                <Link href="/contact" className="wpp-blog-detail__btn">Contact us</Link>
              </div>

              {post.related.length > 0 ? (
                <section className="wpp-blog-detail-related" aria-labelledby="related-articles-title">
                  <h2 id="related-articles-title" className="wpp-blog-detail-related__title">Related articles</h2>
                  <div className="owl-carousel wpp-blog-related-slider" data-items="3" data-margin="24" data-nav="true" data-dots="false">
                    {post.related.map((relatedPost) => (
                      <BlogRelatedCard post={relatedPost} key={relatedPost.slug} />
                    ))}
                  </div>
                </section>
              ) : null}
            </div>
          </div>
        </article>
      </div>
    </PublicLayout>
  );
}
