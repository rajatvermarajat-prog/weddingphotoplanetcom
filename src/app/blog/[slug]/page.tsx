import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PublicLayout } from "@/app/_wpp-pages/Legacy";
import { blogDetailPages } from "@/app/_wpp-pages/blog-detail-data";
import { blogInlineImages, blogLocationInfo, type BlogInlineImage, type BlogLocationInfo } from "@/app/_wpp-pages/blog-inline-images";
import { CopyLinkButton, ReadingProgress, TableOfContents, type ArticleHeading } from "./ArticleTools";
import "./blog-detail.css";

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

const ARTICLE_ID = "bd-article";

function siteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.weddingphotoplanet.com/").replace(/\/$/, "");
}

const ENTITIES: Record<string, string> = { nbsp: " ", ndash: "–", mdash: "—", amp: "&", quot: '"', apos: "'", rsquo: "’", lsquo: "‘", rdquo: "”", ldquo: "“", hellip: "…" };

function decodeEntities(text: string): string {
  return text
    .replace(/&#(\d+);/g, (_match, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&([a-z]+);/gi, (match, name: string) => ENTITIES[name.toLowerCase()] ?? match);
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function figureHtml(image: BlogInlineImage): string {
  const caption = image.caption ? `<figcaption>${escapeHtml(image.caption)}</figcaption>` : "";
  return `<figure class="bd-figure"><img src="${escapeHtml(encodeURI(image.src))}" alt="${escapeHtml(image.alt)}" loading="lazy" decoding="async">${caption}</figure>`;
}

function locationHtml(info: BlogLocationInfo): string {
  const permission = info.permission ? `<span class="bd-place__item"><i class="fa fa-ticket" aria-hidden="true"></i>${escapeHtml(info.permission)}</span>` : "";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.mapQuery)}`;
  return `<div class="bd-place">${permission}<a class="bd-place__item" href="${mapUrl}" target="_blank" rel="noopener noreferrer"><i class="fa fa-map-marker" aria-hidden="true"></i>View on Google Maps</a></div>`;
}

// Prepares the article HTML: gives every <h2> an id so the table of contents can link to it,
// and drops the post's inline photos and location details under their heading (or after their paragraph).
function prepareArticle(html: string, images: BlogInlineImage[], locations: BlogLocationInfo[]): { html: string; headings: ArticleHeading[] } {
  const headings: ArticleHeading[] = [];
  const figuresFor = (key: "afterHeading" | "afterParagraph", position: number) =>
    images.filter((image) => image[key] === position).map(figureHtml).join("");

  let out = html.replace(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/gi, (_match, attrs: string, inner: string) => {
    // Plain label for the contents list: no tags, entities decoded, and no "1." prefix (the list numbers itself).
    const text = decodeEntities(inner.replace(/<[^>]+>/g, ""))
      .replace(/\s+/g, " ")
      .trim()
      .replace(/^\d+[.)]\s*/, "");
    if (!text) return `<h2${attrs}>${inner}</h2>`;
    const id = `section-${headings.length + 1}`;
    headings.push({ id, text });
    return `<h2${attrs.replace(/\sid="[^"]*"/i, "")} id="${id}">${inner}</h2>${figuresFor("afterHeading", headings.length)}${locations.filter((info) => info.afterHeading === headings.length).map(locationHtml).join("")}`;
  });

  let paragraph = 0;
  out = out.replace(/<\/p>/gi, (match) => {
    paragraph += 1;
    return match + figuresFor("afterParagraph", paragraph);
  });

  return { html: out, headings };
}

function RelatedCard({ post }: { post: (typeof blogDetailPages)[number]["related"][number] }) {
  return (
    <article className="bd-card">
      <Link className="bd-card__media" href={post.href} tabIndex={-1} aria-hidden="true">
        <img src={post.image} alt="" loading="lazy" decoding="async" width="640" height="400" />
      </Link>
      <p className="bd-card__category">{post.category}</p>
      <h3 className="bd-card__title">
        <Link href={post.href}>{post.title}</Link>
      </h3>
      <p className="bd-card__meta">
        {post.date} &middot; {post.readText}
      </p>
    </article>
  );
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) {
    notFound();
  }

  const { html, headings } = prepareArticle(post.contentHtml, blogInlineImages[post.slug] ?? [], blogLocationInfo[post.slug] ?? []);
  const index = blogDetailPages.findIndex((item) => item.slug === post.slug);
  const newer = blogDetailPages[index - 1];
  const older = blogDetailPages[index + 1];
  const recent = blogDetailPages.filter((item) => item.slug !== post.slug).slice(0, 5);
  const url = `${siteUrl()}${post.href}`;
  const shareText = encodeURIComponent(post.title);
  const shareUrl = encodeURIComponent(url);

  return (
    <PublicLayout activePath="/blog">
      <div className="bd">
        <ReadingProgress targetId={ARTICLE_ID} />

        <header className="bd-head">
          <div className="bd-head__inner">
            <nav className="bd-crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/blog/">Blog</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{post.category}</span>
            </nav>
            <h1 className="bd-title">{post.title}</h1>
            <ul className="bd-meta">
              <li>
                <i className="fa fa-calendar-o" aria-hidden="true" />
                {post.date}
              </li>
              <li>
                <i className="fa fa-folder-open-o" aria-hidden="true" />
                {post.category}
              </li>
              <li>
                <i className="fa fa-clock-o" aria-hidden="true" />
                {post.readText}
              </li>
            </ul>
          </div>
        </header>

        <div className="bd-body">
          {post.image ? (
            <figure className="bd-cover">
              <img src={post.image} alt={post.imageAlt} fetchPriority="high" width="1240" height="700" />
            </figure>
          ) : null}

          <div className="bd-layout">
            <div className="bd-main">
              <article id={ARTICLE_ID} className="bd-prose" dangerouslySetInnerHTML={{ __html: html }} />

              <div className="bd-foot">
                <div className="bd-share">
                  <span className="bd-share__label">Share</span>
                  <a className="bd-share__btn" href={`https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp">
                    <i className="fa fa-whatsapp" aria-hidden="true" />
                  </a>
                  <a className="bd-share__btn" href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                  <a className="bd-share__btn" href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                  <CopyLinkButton url={url} />
                </div>
                <div className="bd-actions">
                  <Link href="/blog/" className="bd-btn bd-btn--line">All Posts</Link>
                  <Link href="/contact" className="bd-btn">Contact Us</Link>
                </div>
              </div>

              {newer || older ? (
                <nav className="bd-pager" aria-label="More articles">
                  {newer ? (
                    <Link className="bd-pager__link" href={newer.href}>
                      <span>&larr; Previous</span>
                      {newer.title}
                    </Link>
                  ) : (
                    <span />
                  )}
                  {older ? (
                    <Link className="bd-pager__link bd-pager__link--next" href={older.href}>
                      <span>Next &rarr;</span>
                      {older.title}
                    </Link>
                  ) : null}
                </nav>
              ) : null}
            </div>

            <aside className="bd-aside">
              <section className="bd-recent" aria-labelledby="bd-recent-title">
                <h2 id="bd-recent-title" className="bd-aside__title">Recent Posts</h2>
                <ul className="bd-recent__list">
                  {recent.map((item) => (
                    <li key={item.slug}>
                      <Link href={item.href}>
                        <img src={item.image} alt="" loading="lazy" decoding="async" width="72" height="72" />
                        <span>
                          {item.title}
                          <em>{item.date}</em>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>

              <div className="bd-aside__sticky">
                {headings.length > 1 ? <TableOfContents headings={headings} /> : null}
                <section className="bd-cta">
                  <h2>Planning your wedding?</h2>
                  <p>Tell us your dates and venue. We usually reply within one business day.</p>
                  <Link href="/contact" className="bd-btn bd-btn--gold">Send an Enquiry</Link>
                </section>
              </div>
            </aside>
          </div>
        </div>

        {post.related.length > 0 ? (
          <section className="bd-related" aria-labelledby="bd-related-title">
            <div className="bd-related__inner">
              <p className="bd-eyebrow">Keep Reading</p>
              <h2 id="bd-related-title" className="bd-related__title">You May Also Like</h2>
              <span className="bd-line" aria-hidden="true" />
              <div className="bd-related__grid">
                {post.related.slice(0, 3).map((relatedPost) => (
                  <RelatedCard post={relatedPost} key={relatedPost.slug} />
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </PublicLayout>
  );
}
