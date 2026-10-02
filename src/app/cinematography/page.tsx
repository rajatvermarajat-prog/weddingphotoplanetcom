import type { Metadata } from "next";
import { FullBanner, PublicLayout, TitleTextSection } from "@/app/_wpp-pages/Legacy";
import { cinematographyPageContent } from "@/app/_wpp-pages/cinematography-data";
import FilmHero from "./FilmHero";
import FilmReel from "./FilmReel";
import FilmsSlideshow from "./FilmsSlideshow";
import "../wedding/wedding-page.css";
import "./cinematography-page.css";

const { content } = cinematographyPageContent;

export const metadata: Metadata = {
  title: cinematographyPageContent.metadata.title,
  description: cinematographyPageContent.metadata.description,
};

function FilmExperience() {
  return (
    <section className="we-section cf-experience">
      <div className="we-inner">
        <FilmReel ids={cinematographyPageContent.owlVideos} title="Wedding film by Wedding Photo Planet" />
        <div className="we-copy">
          <p className="we-eyebrow">Our Experience</p>
          <h2 className="we-title">{content.heading3}</h2>
          <span className="we-line" aria-hidden="true" />
          <div className="we-text">
            <p dangerouslySetInnerHTML={{ __html: content.desc3 }} />
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
            <h2>{content.heading4}</h2>
            <span className="b-line" />
          </div>
          <div className="images-page-content-sec">
            <div className="wpp-html-content" dangerouslySetInnerHTML={{ __html: content.desc4 }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CinematographyPage() {
  return (
    <PublicLayout activePath="/cinematography">
      <FilmHero id={cinematographyPageContent.heroVideos[0]} title="Featured wedding film by Wedding Photo Planet" />
      <FilmsSlideshow films={cinematographyPageContent.videos} />
      <TitleTextSection heading={content.heading1} html={content.desc1} className="images-page-content-sec wpp-before-fixed" />
      <FullBanner src={content.banner1} alt="Wedding cinematography" className="wpp-banner-fixed cf-banner-fixed" />
      <TitleTextSection heading={content.heading2} html={content.desc2} className="images-page-content-sec wpp-after-fixed" />
      <FullBanner src={content.banner2} alt="Wedding cinematography" />
      <FilmExperience />
      <FooterLastImages />
      <FullBanner src={content.banner3} alt="Wedding cinematography" />
    </PublicLayout>
  );
}
