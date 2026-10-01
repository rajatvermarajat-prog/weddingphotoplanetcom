import type { Metadata } from "next";
import { FullBanner, PublicLayout, TitleTextSection } from "@/app/_wpp-pages/Legacy";
import { cinematographyPageContent } from "@/app/_wpp-pages/cinematography-data";

const { content } = cinematographyPageContent;

export const metadata: Metadata = {
  title: cinematographyPageContent.metadata.title,
  description: cinematographyPageContent.metadata.description,
};

function YouTubeEmbed({ id, title, className, height = 220 }: { id: string; title: string; className?: string; height?: number }) {
  return (
    <iframe
      className={className}
      width="100%"
      height={height}
      src={`https://www.youtube.com/embed/${id}?rel=0`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
  );
}

function HeroVideoCarousel() {
  return (
    <section className="main-banner">
      <div className="container-fluid">
        <div className="row">
          <div id="carousel-1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {cinematographyPageContent.heroVideos.map((id, index) => (
                <div className={`item ${index === 0 ? "active" : ""}`} key={id}>
                  <YouTubeEmbed id={id} title="YouTube video player" height={506} />
                </div>
              ))}
            </div>
            <a className="left carousel-control" href="#carousel-1" data-slide="prev">
              <i className="fa fa-chevron-left" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#carousel-1" data-slide="next">
              <i className="fa fa-chevron-right" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoGrid() {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="wedding-main">
            {cinematographyPageContent.videos.map((video) => (
              <div className="col-md-3 wedding-col" key={video.id}>
                <div className="wedding-link">
                  <YouTubeEmbed id={video.id} title={video.title} className="wpp-yt--grid" />
                </div>
                <div className="album-caption">
                  <h2 className="album-title s12">{video.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OwlVideoSlider() {
  return (
    <section className="instagram-main home-icon wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
      <div className="gallery-slider">
        <div
          className="owl-carousel owl-theme"
          data-items="4"
          data-laptop="4"
          data-tablet="4"
          data-mobile="1"
          data-nav="true"
          data-dots="false"
          data-autoplay="false"
          data-speed="2000"
          data-autotime="3000"
        >
          {cinematographyPageContent.owlVideos.map((id) => (
            <div className="item thumbnail" key={id}>
              <YouTubeEmbed id={id} title="YouTube video player" className="wpp-yt-owl-embed" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CinematographyPage() {
  return (
    <PublicLayout activePath="/cinematography">
      <HeroVideoCarousel />
      <VideoGrid />
      <TitleTextSection heading={content.heading1} html={content.desc1} />
      <FullBanner src={content.banner1} alt="Celebrity Photography" />
      <TitleTextSection heading={content.heading2} html={content.desc2} />
      <FullBanner src={content.banner2} alt="Celebrity Photography" />
      <TitleTextSection heading={content.heading3} html={content.desc3} />
      <OwlVideoSlider />
      <TitleTextSection heading={content.heading4} html={content.desc3} />
      <div className="gap" />
      <FullBanner src={content.banner3} alt="Celebrity Photography" />
    </PublicLayout>
  );
}
