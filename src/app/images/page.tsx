import type { Metadata } from "next";
import { CarouselBanner, FullBanner, PublicLayout, TitleTextSection } from "@/app/_wpp-pages/Legacy";
import { imagePageContent } from "@/app/_wpp-pages/images-data";

export const metadata: Metadata = {
  title: "Our Images | Wedding Photo Planet",
  description: "Wedding Photo Planet gallery with wedding, pre-wedding and candid photography images.",
};

function GalleryLinks({ id, images }: { id: string; images: { src: string; alt: string }[] }) {
  return (
    <div id={id}>
      {images.map((image) => {
        const clean = image.src.replace(/^\/+/, "");
        return (
          <a
            className="img-link"
            href={clean}
            data-responsive={`${clean} 375, ${clean} 480, ${clean} 800`}
            data-src={clean}
            data-sub-html=""
            key={image.src}
          >
            <img className="img-responsive" src={clean} alt={image.alt} />
            <span><i className="icon-zoom" /></span>
          </a>
        );
      })}
    </div>
  );
}

function IntroGallery() {
  return (
    <div className="row row-p p-t-10">
      <div className="titlebar">
        <h2>{imagePageContent.heading}</h2>
        <span className="b-line" />
      </div>
      <div className="col-md-12 images-page-content-sec">
        <div className="wpp-html-content" dangerouslySetInnerHTML={{ __html: imagePageContent.introHtml }} />
      </div>
      <div className="p-25 s12">
        <GalleryLinks id="latest-work" images={[...imagePageContent.gallery]} />
      </div>
    </div>
  );
}

function SecondGallery() {
  return (
    <div className="row row-p p-t-10">
      <br />
      <div className="p-25 s12">
        <GalleryLinks id="latest-work-2" images={[...imagePageContent.gallery2]} />
      </div>
    </div>
  );
}

export default function ImagesPage() {
  return (
    <PublicLayout activePath="/images">
      <CarouselBanner slides={[...imagePageContent.slides]} alt="Gallery page banner" className="wpp-page-hero" />
      <IntroGallery />
      <TitleTextSection heading={imagePageContent.beforeHeading} html={imagePageContent.beforeHtml} className="images-page-content-sec wpp-before-banner" />
      <FullBanner src={imagePageContent.banner} alt="Celebrity Photography" strip />
      <TitleTextSection heading={imagePageContent.afterHeading} html={imagePageContent.afterHtml} className="images-page-content-sec-2 wpp-after-banner" />
      <SecondGallery />
    </PublicLayout>
  );
}
