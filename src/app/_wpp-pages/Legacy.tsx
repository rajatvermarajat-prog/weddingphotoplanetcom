import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter } from "@/features/public-pages/home/SiteFooter";
import type { HomepageData } from "@/features/public-pages/home/types";
import { footer, navItems, type ProductCard } from "./data";

function activeHref(href: string) {
  return href.endsWith("/") && href !== "/" ? href.slice(0, -1) : href;
}

const sharedFooter: HomepageData["footer"] = {
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    twitter: "#",
    linkedin: "#",
    tumblr: "#",
  },
  heading1: "Contact Details",
  heading2: "Wedding Photo Planet",
  address: footer.address,
  mobile: footer.mobile,
  email1: footer.email1,
  email2: footer.email2,
  copyright: "© 2010-2026 Wedding Photo Planet. All Rights Reserved.",
};

export function LegacyPage({ children, activePath }: { children: ReactNode; activePath: string }) {
  return (
    <div className="wrapper home">
      <div className="header s12">
        <div className="row row-p wpp-header-bar">
          <div className="wpp-header-bar__logo-col">
            <Link id="logo" className="wpp-site-logo" href="/" aria-label="Wedding Photo Planet - Home">
              <img src="/assets/images/logo.png" alt="Wedding Photo Planet" width="200" height="50" />
            </Link>
          </div>
          <nav className="wpp-header-bar__nav-col" aria-label="Primary navigation">
            <ul className="menu">
              {navItems.map((item) => (
                <li key={item.href} className={activeHref(item.href) === activePath ? "active" : "noactive"}>
                  <Link href={item.href} title={item.title}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <main id="main-content" role="main">{children}</main>
      <SiteFooter footer={sharedFooter} />
    </div>
  );
}

export const PublicLayout = LegacyPage;

export function CarouselBanner({ id = "carousel-1", slides, alt, className = "" }: { id?: string; slides: string[]; alt: string; className?: string }) {
  return (
    <section className={`main-banner${className ? ` ${className}` : ""}`}>
      <div className="container-fluid"><div className="row"><div id={id} className="carousel slide" data-ride="carousel"><div className="carousel-inner">
        {slides.map((src, index) => <div className={`item ${index === 0 ? "active" : ""}`} key={src}><img src={src} alt={`${alt} ${index + 1}`} style={{ width: "100%" }} {...(index === 0 ? { fetchPriority: "high" as const } : { loading: "lazy" as const, decoding: "async" as const })} /></div>)}
      </div><a className="left carousel-control" href={`#${id}`} data-slide="prev"><i className="fa fa-chevron-left" aria-hidden="true" /><span className="sr-only">Previous</span></a><a className="right carousel-control" href={`#${id}`} data-slide="next"><i className="fa fa-chevron-right" aria-hidden="true" /><span className="sr-only">Next</span></a></div></div></div>
    </section>
  );
}

export function TextSection({ heading, body, html, className = "images-page-content-sec" }: { heading: string; body?: string; html?: string; className?: string }) {
  return (
    <section className={className}>
      <div className="container">
        <div className="col-md-12">
          <div className="titlebar"><h2>{heading}</h2><span className="b-line" /></div>
          {html ? <div className="wpp-html-content" dangerouslySetInnerHTML={{ __html: html }} /> : <p>{body}</p>}
        </div>
      </div>
    </section>
  );
}

export const TitleTextSection = TextSection;

// `trim` hides blank bands baked into the image file: pixels to cut from the top/bottom, plus the file's pixel width.
export function FullBanner({ src, alt = "Wedding Photo Planet", strip = false, trim, className = "" }: { src: string; alt?: string; strip?: boolean; trim?: { top: number; bottom: number; width: number }; className?: string }) {
  // Strip banners also get the photo as a CSS background so desktop can pin it (background-attachment: fixed).
  const background = strip ? { backgroundImage: `url("${encodeURI(src)}")` } : undefined;
  // Vertical margins in % resolve against the container width, so px / file width scales with the rendered image.
  const trimStyle = trim ? { marginTop: `${(-trim.top / trim.width) * 100}%`, marginBottom: `${(-trim.bottom / trim.width) * 100}%` } : undefined;
  return <section className={`main-banner wpp-banner-image${strip ? " wpp-banner-strip" : ""}${className ? ` ${className}` : ""}`} style={background}><img src={src} alt={alt} loading="lazy" decoding="async" style={{ width: "100%", height: "auto", display: "block", ...trimStyle }} /></section>;
}

export function GalleryGrid({ id, images }: { id: string; images: { src: string; alt: string }[] }) {
  return (
    <div className="row row-p p-t-10">
      <div className="p-25 s12">
        <div id={id}>
          {images.map((image) => {
            const clean = image.src.replace(/^\/+/, "");
            return (
              <a className="img-link" href={clean} data-responsive={`${clean} 375, ${clean} 480, ${clean} 800`} data-src={clean} data-sub-html="" key={image.src}>
                <img className="img-responsive" src={clean} alt={image.alt} />
                <span><i className="icon-zoom" /></span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function ProductGrid({ products }: { products: ProductCard[] }) {
  return <section><div className="container-fluid"><div className="row"><div className="wedding-main">{products.map((product) => <div className="col-md-3 wedding-col" key={product.title}><Link className="wedding-link" href={product.href}><img className="img-responsive" src={product.image} alt={product.title} loading="lazy" decoding="async" width="400" height="300" /></Link><div className="album-caption"><h2 className="album-title s12"><Link href={product.href}>{product.title}</Link></h2><p className="album-meta s12">{product.photos} photos</p></div></div>)}</div></div></div></section>;
}

export function LegacyServicePage({
  activePath,
  heroSlides,
  products,
  blocks,
  banners,
}: {
  activePath: string;
  heroSlides: string[];
  products: ProductCard[];
  blocks: { heading: string; body: string }[];
  banners: string[];
  carouselSlides?: string[];
  carouselText?: string;
}) {
  return (
    <LegacyPage activePath={activePath}>
      <CarouselBanner slides={heroSlides} alt="Wedding Photo Planet banner" />
      <ProductGrid products={products} />
      {blocks[0] ? <TextSection heading={blocks[0].heading} body={blocks[0].body} /> : null}
      {banners[0] ? <FullBanner src={banners[0]} /> : null}
      {blocks[1] ? <TextSection heading={blocks[1].heading} body={blocks[1].body} /> : null}
      {blocks[2] ? <TextSection heading={blocks[2].heading} body={blocks[2].body} /> : null}
      {blocks[3] ? <TextSection heading={blocks[3].heading} body={blocks[3].body} /> : null}
      {banners[3] ? <FullBanner src={banners[3]} /> : null}
    </LegacyPage>
  );
}
