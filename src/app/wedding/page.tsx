import type { Metadata } from "next";
import { CarouselBanner, FullBanner, PublicLayout, TitleTextSection } from "@/app/_wpp-pages/Legacy";
import { weddingPageContent } from "@/app/_wpp-pages/wedding-data";
import WeddingClientsSlideshow from "./WeddingClientsSlideshow";
import WeddingExperienceSlider from "./WeddingExperienceSlider";
import "./wedding-page.css";

const { content } = weddingPageContent;

export const metadata: Metadata = {
  title: weddingPageContent.metadata.title,
  description: weddingPageContent.metadata.description,
};

function TwoImageSection() {
  return (
    <section className="wx-section">
      <div className="wx-inner">
        <div className="wx-copy">
          <p className="wx-eyebrow">Our Expertise</p>
          <h2 className="wx-title">{content.heading3}</h2>
          <span className="wx-line" aria-hidden="true" />
          <div className="wx-text" dangerouslySetInnerHTML={{ __html: content.desc4 }} />
        </div>
        <div className="wx-media">
          <span className="wx-frame" aria-hidden="true" />
          <figure className="wx-photo wx-photo--back">
            <img src={content.banner2} alt="Indian Best Wedding Photographers" loading="lazy" decoding="async" width="960" height="640" />
          </figure>
          <figure className="wx-photo wx-photo--front">
            <img src={content.banner3} alt="Candid Photography in Delhi NCR" loading="lazy" decoding="async" width="960" height="640" />
          </figure>
        </div>
      </div>
    </section>
  );
}

function WeddingIdea() {
  return (
    <section className="we-section">
      <div className="we-inner">
        <WeddingExperienceSlider slides={weddingPageContent.ideaSlides} alt="Wedding photography by Wedding Photo Planet" />
        <div className="we-copy">
          <p className="we-eyebrow">Our Experience</p>
          <h2 className="we-title">{content.heading4}</h2>
          <span className="we-line" aria-hidden="true" />
          <div className="we-text">
            {content.desc3.split(/\n{2,}/).map((paragraph) => (
              <p key={paragraph.slice(0, 32)} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
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
            <div className="wpp-html-content" dangerouslySetInnerHTML={{ __html: content.desc5 }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function WeddingPage() {
  return (
    <PublicLayout activePath="/wedding">
      <CarouselBanner slides={weddingPageContent.heroSlides} alt="Wedding photography banner" className="wpp-page-hero" />
      <WeddingClientsSlideshow products={weddingPageContent.products} />
      <TitleTextSection heading={content.heading1} html={content.desc1} className="images-page-content-sec wpp-before-fixed" />
      <FullBanner src={content.banner1} alt="Celebrity Photography" className="wpp-banner-fixed" />
      <TitleTextSection heading={content.heading2} html={content.desc2} className="images-page-content-sec wpp-after-fixed" />
      <TwoImageSection />
      <WeddingIdea />
      <FooterLastImages />
      <FullBanner src={content.banner5} alt="Celebrity Photography" />
    </PublicLayout>
  );
}
