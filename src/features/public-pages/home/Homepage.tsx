import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AboutIntro } from "./AboutIntro";
import { ServicesSlider } from "./ServicesSlider";
import { VisionStory } from "./VisionStory";
import type { HomepageData, HomepageImage } from "./types";

const navItems = [
  { href: "/", label: "Home", title: "Wedding Photo Planet" },
  { href: "/images", label: "Images", title: "Our Images" },
  { href: "/wedding", label: "wedding", title: "Wedding Photography" },
  { href: "/pre-wedding", label: "pre wedding", title: "Pre Wedding Photography" },
  { href: "/cinematography", label: "cinematography", title: "Our Cinematography" },
  { href: "/blog/", label: "Blog", title: "Our Blog" },
  { href: "/contact", label: "contact us", title: "Contact Wedding Photo Planet" },
] as const;

const footerLinks = [
  { href: "/", label: "Home", title: "Wedding Photo Planet" },
  { href: "/images", label: "Images", title: "Our Images" },
  { href: "/wedding", label: "Wedding", title: "Wedding Photography" },
  { href: "/pre-wedding", label: "Pre Wedding", title: "Pre Wedding Photography" },
  { href: "/cinematography", label: "Cinematography", title: "Our Cinematography" },
  { href: "/blog/", label: "Blog", title: "Our Blog" },
  { href: "/contact", label: "Contact Us", title: "Contact Wedding Photo Planet" },
  { href: "/sitemap", label: "Site Map", title: "Our Site Map" },
] as const;

function HtmlBlock({ html }: { html: string }) {
  if (!html.trim()) {
    return null;
  }

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

function LegacyImage({
  image,
  className,
  sizes = "100vw",
}: {
  image: HomepageImage | null;
  className?: string;
  sizes?: string;
}) {
  if (!image) {
    return null;
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      priority={image.priority}
      loading={image.priority ? "eager" : "lazy"}
      sizes={sizes}
      className={className}
      unoptimized
    />
  );
}

function Header() {
  return (
    <header className="header s12">
      <div className="row row-p wpp-header-bar">
        <div className="wpp-header-bar__logo-col">
          <Link id="logo" className="wpp-site-logo" href="/" aria-label="Wedding Photo Planet - Home">
            <Image src="/assets/images/logo.png" alt="Wedding Photo Planet" width={200} height={50} unoptimized priority />
          </Link>
        </div>
        <nav className="wpp-header-bar__nav-col" aria-label="Primary navigation">
          <ul className="menu">
            {navItems.map((item) => (
              <li key={item.href} className={item.href === "/" ? "active" : "noactive"}>
                <Link href={item.href} title={item.title}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function TitleBar({ as = "h2", children }: { as?: "h1" | "h2"; children: string }) {
  const Heading = as;

  if (!children.trim()) {
    return null;
  }

  return (
    <div className="titlebar">
      <Heading>{children}</Heading>
      <span className="b-line" aria-hidden="true" />
    </div>
  );
}

function Hero({ slides }: { slides: HomepageImage[] }) {
  if (slides.length === 0) {
    return null;
  }

  return (
    <section className="main-banner wpp-home-hero" aria-label="Wedding photography banner">
      <div className="container-fluid">
        <div className="row">
          <div id="carousel-1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {slides.map((slide, index) => (
                <div className={`item${index === 0 ? " active" : ""}`} key={slide.src}>
                  <Image
                    src={slide.src}
                    alt=""
                    width={slide.width}
                    height={slide.height}
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                    sizes="100vw"
                    className="wpp-hero-slide-bg"
                    aria-hidden="true"
                    unoptimized
                  />
                  <LegacyImage image={slide} className="wpp-hero-slide-image" />
                </div>
              ))}
            </div>
            <a className="left carousel-control" href="#carousel-1" data-slide="prev" aria-label="Previous banner slide">
              <i className="fa fa-chevron-left" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#carousel-1" data-slide="next" aria-label="Next banner slide">
              <i className="fa fa-chevron-right" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Banner({ image }: { image: HomepageImage | null }) {
  if (!image) {
    return null;
  }

  return (
    <section className="main-banner wpp-banner-image">
      <LegacyImage image={image} className="wpp-full-banner" />
    </section>
  );
}

function TextSection({ heading, html, headingLevel = "h2" }: { heading: string; html: string; headingLevel?: "h1" | "h2" }) {
  if (!heading.trim() && !html.trim()) {
    return null;
  }

  return (
    <section className="about-us">
      <div className="container">
        <div className="col-md-12">
          <TitleBar as={headingLevel}>{heading}</TitleBar>
          <div className="wpp-rich-text">
            <HtmlBlock html={html} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery({ images }: { images: HomepageData["galleryImages"] }) {
  return (
    <div className="row row-p p-t-10">
      <TitleBar>Our Gallery</TitleBar>
      <div className="p-25 s12">
        {images.length > 0 ? (
          <div id="latest-work">
            {images.map((image) => (
              <a className="img-link" href={image.href} data-src={image.href} aria-label={image.alt} key={image.id}>
                <Image
                  className="img-responsive"
                  src={image.src}
                  alt={image.alt}
                  width={640}
                  height={427}
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  unoptimized
                />
                <span>
                  <i className="icon-zoom" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        ) : null}
        <div className="home-service-button">
          <a href="/images" title="Wedding & Pre Wedding Photos">
            View All
          </a>
        </div>
      </div>
    </div>
  );
}

function Testimonials({ testimonials }: { testimonials: HomepageData["testimonials"] }) {
  if (!testimonials.heading.trim() && testimonials.items.length === 0) {
    return null;
  }

  return (
    <section className="testimonial-bg">
      <div className="container">
        <div className="testimonial-titlebar">
          <h2>{testimonials.heading}</h2>
          <span className="testimonial-b-line" aria-hidden="true" />
        </div>
        <div className="testiSlide">
          {testimonials.items.map((testimonial) => (
            <div key={testimonial.id}>
              <figure className="testimonial">
                <blockquote>
                  {testimonial.quote}
                  <div className="btn" />
                </blockquote>
                <LegacyImage image={testimonial.image} sizes="120px" />
                <div className="peopl">
                  <h3>{testimonial.clientName} </h3>
                  <p className="indentity">Client</p>
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose({ whyChoose }: { whyChoose: HomepageData["whyChoose"] }) {
  if (!whyChoose.heading.trim() && !whyChoose.html.trim() && whyChoose.points.length === 0) {
    return null;
  }

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="col-md-12">
          <TitleBar>{whyChoose.heading}</TitleBar>
          <HtmlBlock html={whyChoose.html} />
        </div>
        <div className="col-md-12">
          {whyChoose.points.length > 0 ? (
            <ul className="why-list">
              {whyChoose.points.map((point, index) => (
                <li key={`${index}-${point}`}>
                  <span>
                    <i className="fa fa-check" />
                  </span>{" "}
                  <HtmlBlock html={point} />
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="col-md-12">
          <HtmlBlock html={whyChoose.closingHtml} />
          <br />
        </div>
      </div>
    </section>
  );
}

function AboutPhotography({ about }: { about: HomepageData["about"] }) {
  if (!about.heading.trim() && !about.html.trim() && about.slides.length === 0) {
    return null;
  }

  return (
    <div className="row row-p p-t-0 about-content">
      <div className="s12 p-25 p-t-0 about-content">
        <br />
        <br />
        <h2>
          <b>{about.heading}</b>
        </h2>
        <div className="s12 l7 p-10">
          <ul className="why-list">
            <li>
              <HtmlBlock html={about.html.replaceAll("\n", "<br>")} />
            </li>
          </ul>
        </div>
        {about.slides.length > 0 ? (
          <div className="s12 l5 p-10">
            <div id="carousel-2" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                {about.slides.map((slide, index) => (
                  <div className={`item${index === 0 ? " active" : ""}`} key={slide.src}>
                    <LegacyImage image={slide} sizes="(max-width: 768px) 100vw, 40vw" />
                  </div>
                ))}
              </div>
              <a className="left carousel-control" href="#carousel-2" data-slide="prev" aria-label="Previous photography slide">
                <i className="fa fa-chevron-left" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#carousel-2" data-slide="next" aria-label="Next photography slide">
                <i className="fa fa-chevron-right" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Footer({ footer }: { footer: HomepageData["footer"] }) {
  const socials = [
    ["facebook", "Facebook", "fa-facebook", footer.social.facebook],
    ["instagram", "Instagram", "fa-instagram", footer.social.instagram],
    ["youtube", "YouTube", "fa-youtube-play", footer.social.youtube],
    ["twitter", "Twitter", "fa-twitter", footer.social.twitter],
    ["linkedin", "LinkedIn", "fa-linkedin", footer.social.linkedin],
    ["tumblr", "Tumblr", "fa-tumblr", footer.social.tumblr],
  ] as const;

  return (
    <footer>
      <section className="footer-main wpp-footer">
        <div className="container-fluid wpp-footer__grid">
          <div className="col-md-2 social-line wpp-footer__col wpp-footer__col--social">
            <ul className="foter-social-menu wpp-footer-social">
              {socials.map(([key, label, icon, href]) => (
                <li key={key}>
                  <a
                    href={href}
                    className={`wpp-footer-social__link wpp-footer-social__link--${key}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${label}`}
                  >
                    <i className={`fa ${icon}`} aria-hidden="true" />
                    <span className="sr-only">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-7 wpp-footer__col wpp-footer__col--contact">
            <div className="footer-middle-content wpp-footer__contact-inner">
              <h4>{footer.heading1}</h4>
              <p>
                <strong>{footer.heading2}</strong>
                <br />
                {footer.address}
              </p>
              <p className="wpp-footer__contact-meta">
                <strong>Phone No</strong> - {footer.mobile}
                <br />
                <strong>E-Mail ID</strong> - {footer.email1}
                <br />
                <strong>E-Mail ID</strong> {footer.email2}
              </p>
            </div>
          </div>
          <div className="col-md-3 footer-right-line wpp-footer__col wpp-footer__col--links">
            <div className="footer-right-content wpp-footer__links-inner">
              <h4>Quick Link</h4>
              <ul className="footer-menu">
                {footerLinks.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} title={item.title}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-copyright">
        <div className="container">
          <div className="copyright-content">
            <p>{footer.copyright}</p>
          </div>
        </div>
      </section>
      <a href="https://api.whatsapp.com/send?phone=919990905195" className="float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <i className="fa fa-whatsapp my-float" aria-hidden="true" />
      </a>
      <a href="tel:919990951995" className="float-mobile" aria-label="Call us">
        <i className="fa fa-phone my-float" aria-hidden="true" />
      </a>
      <a id="back2Top" href="#main-content" aria-label="Back to top">
        &#10148;
      </a>
    </footer>
  );
}

// Hand-picked bright, colourful frames from the existing gallery for the About collage.
const ABOUT_INTRO_IMAGES: HomepageImage[] = [
  { src: "/admin_image/slider/6282115301753530749Wedding.jpg", alt: "Bride and groom varmala ceremony under a bright sky", width: 575, height: 719 },
  { src: "/admin_image/slider/4949957621753530719Pre Wedding Loaction.jpg", alt: "Pre-wedding couple in a white palace courtyard", width: 740, height: 493 },
  {
    src: "/uploads/admin_image/slider/17851336832093288691best wedding photographers in delhi.jpg",
    alt: "Couple showered with flower petals at their wedding",
    width: 4342,
    height: 2617,
  },
  { src: "/admin_image/slider/95503499517535306498Z7A9648 copy.jpg", alt: "Close-up of a smiling bride in bridal jewellery", width: 750, height: 500 },
];

const ABOUT_INTRO_LEAD =
  "We are the leading best Wedding photographers in Delhi, capturing your special moments in a unique style with artistry and creativity. Weddings, pre-wedding shoots, ceremonies or any family function \u2014 we are always near you, ready to turn your moments into memories you will relive for years.";

export function Homepage({ data }: { data: HomepageData }) {
  return (
    <div className="wrapper home">
      <Header />
      <main id="main-content" role="main">
        <Hero slides={data.heroSlides} />
        <AboutIntro heading={data.intro.heading} lead={ABOUT_INTRO_LEAD} html={data.intro.html} images={ABOUT_INTRO_IMAGES} />
        <VisionStory image={data.firstBanner} heading={data.story.heading} html={data.story.html} />
        <ServicesSlider services={data.services} />
        <Gallery images={data.galleryImages} />
        <Testimonials testimonials={data.testimonials} />
        <WhyChoose whyChoose={data.whyChoose} />
        <Banner image={data.secondBanner} />
        <AboutPhotography about={data.about} />
        <TextSection heading={data.photography.heading} html={data.photography.html} />
        <Banner image={data.thirdBanner} />
      </main>
      <Footer footer={data.footer} />
    </div>
  );
}
