import type { Metadata } from "next";
import Link from "next/link";
import { PublicLayout } from "@/app/_wpp-pages/Legacy";
import { blogPageContent } from "@/app/_wpp-pages/blog-data";
import "./blog-list.css";

export const metadata: Metadata = {
  title: blogPageContent.metadata.title,
  description: blogPageContent.metadata.description,
};

function BlogHero() {
  return (
    <section className="main-banner wpp-blog-hero wpp-blog-hero--manual bl-hero" aria-label="Blog banner">
      <div className="container-fluid">
        <div className="row">
          <div id="carousel-1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {blogPageContent.heroBanners.map((banner, index) => (
                <div className={`item${index === 0 ? " active" : ""}`} key={banner.src} style={{ backgroundImage: `url("${banner.src}")` }}>
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
    </section>
  );
}

function PostList() {
  return (
    <section className="bl-section" aria-labelledby="bl-title">
      <div className="bl-inner">
        <header className="bl-header">
          <p className="bl-eyebrow">Our Journal</p>
          <h2 id="bl-title" className="bl-heading">Latest Stories &amp; Guides</h2>
          <span className="bl-line" aria-hidden="true" />
        </header>
        <ol className="bl-list">
          {blogPageContent.posts.map((post, index) => (
            <li className="bl-post" key={post.slug}>
              <Link className="bl-post__media" href={post.href} tabIndex={-1} aria-hidden="true">
                <img src={post.image} alt="" loading={index < 2 ? "eager" : "lazy"} decoding="async" width="816" height="460" />
              </Link>
              <div className="bl-post__body">
                <p className="bl-post__category">{post.category}</p>
                <h3 className="bl-post__title">
                  <Link href={post.href}>{post.title}</Link>
                </h3>
                <p className="bl-post__excerpt">{post.excerptLong}</p>
                <div className="bl-post__meta">
                  <span>{post.readText}</span>
                  <time>{post.date}</time>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default function BlogPage() {
  return (
    <PublicLayout activePath="/blog">
      <BlogHero />
      <PostList />
    </PublicLayout>
  );
}
