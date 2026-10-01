import type { Metadata } from "next";
import Link from "next/link";
import { PublicLayout } from "@/app/_wpp-pages/Legacy";
import { blogPageContent } from "@/app/_wpp-pages/blog-data";

export const metadata: Metadata = {
  title: blogPageContent.metadata.title,
  description: blogPageContent.metadata.description,
};

function BlogHero() {
  return (
    <section className="main-banner wpp-blog-hero wpp-blog-hero--manual" aria-label="Blog banner">
      <div className="container-fluid">
        <div className="row">
          <div id="carousel-1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {blogPageContent.heroBanners.map((banner, index) => (
                <div className={`item${index === 0 ? " active" : ""}`} key={banner.src}>
                  <img
                    src={banner.src}
                    alt={banner.alt}
                    width="1600"
                    height="520"
                    {...(index === 0 ? { fetchPriority: "high" as const } : { loading: "lazy" as const, decoding: "async" as const })}
                    sizes="100vw"
                  />
                </div>
              ))}
            </div>
            <a className="left carousel-control" href="#carousel-1" data-slide="prev" aria-label="Previous slide">
              <i className="fa fa-chevron-left" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#carousel-1" data-slide="next" aria-label="Next slide">
              <i className="fa fa-chevron-right" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div className="wpp-blog-hero__overlay" aria-hidden="true" />
      <div className="wpp-blog-hero__caption">
        <div className="titlebar wpp-blog-hero__titlebar">
          <h1>Blog</h1>
          <span className="b-line" />
        </div>
        <nav className="wpp-blog-hero__breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="wpp-blog-hero__breadcrumb-sep" aria-hidden="true">/</span>
          <span aria-current="page">Blog</span>
        </nav>
      </div>
    </section>
  );
}

function FeaturedPosts() {
  return (
    <div className="wpp-blog-featured-list">
      {blogPageContent.posts.slice(0, 2).map((post, index) => (
        <article className={`wpp-blog-featured${index % 2 === 1 ? " wpp-blog-featured--flip" : ""}`} key={post.slug}>
          <h2 className="wpp-blog-featured__title">
            <Link href={post.href}>{post.title}</Link>
          </h2>
          <div className="wpp-blog-featured__row">
            <Link className="wpp-blog-featured__media" href={post.href}>
              <img src={post.image} alt={post.title} />
            </Link>
            <div className="wpp-blog-featured__body">
              <p className="wpp-blog-featured__excerpt">{post.excerptLong}</p>
              <Link className="wpp-blog-featured__btn" href={post.href}>Read More</Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function BlogGrid() {
  return (
    <div className="wpp-blog-grid row g-4">
      {blogPageContent.posts.slice(2, 12).map((post) => (
        <div className="col-6 col-lg-3" key={post.slug}>
          <article className="wpp-blog-grid-card">
            <Link className="wpp-blog-grid-card__media" href={post.href}>
              <img src={post.image} alt={post.title} />
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
        </div>
      ))}
    </div>
  );
}

export default function BlogPage() {
  return (
    <PublicLayout activePath="/blog">
      <BlogHero />
      <div className="wpp-blog-archive-page">
        <div className="ubs ubs-blog-list-page">
          <section className="ubs-blog-list">
            <div className="container-fluid wpp-blog-archive__container">
              <FeaturedPosts />
              <BlogGrid />
            </div>
          </section>
        </div>
      </div>
    </PublicLayout>
  );
}
