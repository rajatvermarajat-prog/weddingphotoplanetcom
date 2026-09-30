import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AboutIntro } from "./AboutIntro";
import { GalleryShowcase } from "./GalleryShowcase";
import { ServicesSlider } from "./ServicesSlider";
import { SiteFooter } from "./SiteFooter";
import { TestimonialsCarousel } from "./TestimonialsCarousel";
import { WhyChooseCarousel } from "./WhyChooseCarousel";
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
        <GalleryShowcase images={data.galleryImages} />
        <TestimonialsCarousel testimonials={data.testimonials} />
        <WhyChooseCarousel whyChoose={data.whyChoose} images={data.galleryImages} />
        <Banner image={data.secondBanner} />
        <AboutPhotography about={data.about} />
        <TextSection heading={data.photography.heading} html={data.photography.html} />
        <Banner image={data.thirdBanner} />
      </main>
      <SiteFooter footer={data.footer} />
    </div>
  );
}
