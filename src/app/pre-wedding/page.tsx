import type { Metadata } from "next";
import { CarouselBanner, FullBanner, PublicLayout, TitleTextSection } from "@/app/_wpp-pages/Legacy";
import { preWeddingPageContent } from "@/app/_wpp-pages/pre-wedding-data";
import WeddingClientsSlideshow from "../wedding/WeddingClientsSlideshow";
import WeddingExperienceSlider from "../wedding/WeddingExperienceSlider";
import "../wedding/wedding-page.css";
import "./pre-wedding-page.css";

const { content } = preWeddingPageContent;

export const metadata: Metadata = {
  title: preWeddingPageContent.metadata.title,
  description: preWeddingPageContent.metadata.description,
};

// Page copy separates blocks with blank lines: wrap loose text in <p>, keep headings as they are.
function toBlocks(html: string): string {
  return html
    .replace(/<\/?br\s*\/?>/gi, "")
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => (/^<h[1-6]/i.test(block) ? block : `<p>${block}</p>`))
    .join("");
}

function SliderCopySection({
  eyebrow,
  heading,
  slides,
  html,
  alt,
  flip = false,
}: {
  eyebrow: string;
  heading: string;
  slides: string[];
  html: string;
  alt: string;
  flip?: boolean;
}) {
  return (
    <section className={`we-section pw-split${flip ? " pw-split--flip" : ""}`}>
      <div className="we-inner">
        <WeddingExperienceSlider slides={slides} alt={alt} />
        <div className="we-copy">
          <p className="we-eyebrow">{eyebrow}</p>
          <h2 className="we-title">{heading}</h2>
          <span className="we-line" aria-hidden="true" />
          <div className="we-text pw-rich" dangerouslySetInnerHTML={{ __html: toBlocks(html) }} />
        </div>
      </div>
    </section>
  );
}

const trioPhotos = [
  { src: content.banner5, alt: "Pre Wedding" },
  { src: content.banner6, alt: "Best Pre Wedding" },
  { src: content.banner7, alt: "Best Pre Wedding Photography in India" },
];

function LocationsTrio() {
  return (
    <section className="pw-trio">
      <div className="pw-trio__inner">
        <div className="pw-trio__copy">
          <p className="we-eyebrow">Free Locations</p>
          <span className="we-line" aria-hidden="true" />
          <div className="we-text pw-rich" dangerouslySetInnerHTML={{ __html: toBlocks(content.desc5) }} />
        </div>
        <div className="pw-trio__photos">
          {trioPhotos.map((photo) => (
            <figure className="pw-trio__photo" key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" width="640" height="960" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterLastImages() {
  return (
    <section className="footer-last-images">
      <div className="container">
        <div className="col-md-12">
          <div className="titlebar">
            <h2>{content.heading5}</h2>
            <span className="b-line" />
          </div>
          <div className="images-page-content-sec">
            <div className="wpp-html-content" dangerouslySetInnerHTML={{ __html: toBlocks(content.desc6) }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PreWeddingPage() {
  return (
    <PublicLayout activePath="/pre-wedding">
      <CarouselBanner slides={preWeddingPageContent.heroSlides} alt="Pre-wedding photography banner" className="wpp-page-hero" />
      <WeddingClientsSlideshow
        products={preWeddingPageContent.products}
        title="Pre-Wedding Stories We&rsquo;ve Captured"
        label="Pre-wedding client galleries"
      />
      <TitleTextSection heading={content.heading1} html={toBlocks(content.disc1)} className="images-page-content-sec wpp-before-fixed" />
      <FullBanner src={content.banner1} alt="Pre-wedding photography" className="wpp-banner-fixed" />
      <TitleTextSection heading={content.heading2} html={content.desc2} className="images-page-content-sec wpp-after-fixed" />
      <SliderCopySection
        eyebrow="Our Experience"
        heading={content.heading3}
        slides={preWeddingPageContent.ideaSlides}
        html={content.desc3}
        alt="Pre-wedding photography by Wedding Photo Planet"
      />
      <FullBanner src={content.banner3} alt="Pre-wedding photography" />
      <SliderCopySection
        eyebrow="Shoot Locations"
        heading={content.heading4}
        slides={preWeddingPageContent.locationSlides}
        html={content.desc4}
        alt="Pre-wedding shoot location near Delhi NCR"
        flip
      />
      <LocationsTrio />
      <FooterLastImages />
      <FullBanner src={content.banner8} alt="Pre-wedding photography" />
    </PublicLayout>
  );
}
