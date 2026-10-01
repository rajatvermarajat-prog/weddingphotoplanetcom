import type { Metadata } from "next";
import { CarouselBanner, FullBanner, ProductGrid, PublicLayout, TitleTextSection } from "@/app/_wpp-pages/Legacy";
import { preWeddingPageContent } from "@/app/_wpp-pages/pre-wedding-data";

const { content } = preWeddingPageContent;

export const metadata: Metadata = {
  title: preWeddingPageContent.metadata.title,
  description: preWeddingPageContent.metadata.description,
};

function SplitCarousel({
  id,
  heading,
  slides,
  html,
}: {
  id: string;
  heading: string;
  slides: string[];
  html: string;
}) {
  return (
    <section className="wedding-idea">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlebar">
              <h2>{heading}</h2>
              <span className="b-line" />
            </div>
          </div>
        </div>
        <div className="row wpp-media-text-row">
          <div className="col-md-4 col-sm-12 wpp-split-media">
            <div id={id} className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                {slides.map((src, index) => (
                  <div className={`item ${index === 0 ? "active" : ""}`} key={src}>
                    <img src={src} alt="banner" style={{ width: "100%" }} />
                  </div>
                ))}
              </div>
              <a className="left carousel-control" href={`#${id}`} data-slide="prev">
                <i className="fa fa-chevron-left" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href={`#${id}`} data-slide="next">
                <i className="fa fa-chevron-right" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="col-md-8 col-sm-12 wpp-split-text images-page-content-sec">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ThreeImageBlock() {
  return (
    <section className="images-page-content-sec">
      <div className="container">
        <div className="col-md-12">
          <div dangerouslySetInnerHTML={{ __html: content.desc5 }} />
          <br />
        </div>
        <div className="col-md-4 wedding-col-2">
          <img
            className="img-responsive"
            src={content.banner5}
            style={{ width: "100%", height: "auto" }}
            alt="Pre Wedding"
            loading="lazy"
            decoding="async"
            width="800"
            height="500"
          />
        </div>
        <div className="col-md-4 wedding-col-2">
          <img
            className="img-responsive"
            src={content.banner6}
            style={{ width: "100%", height: "auto" }}
            alt="Best Pre Wedding"
            loading="lazy"
            decoding="async"
            width="800"
            height="500"
          />
        </div>
        <div className="col-md-4 wedding-col-2">
          <img
            className="img-responsive"
            src={content.banner7}
            style={{ width: "100%", height: "auto" }}
            alt="Best Pre Wedding Photography in India"
            loading="lazy"
            decoding="async"
            width="800"
            height="500"
          />
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
            <div dangerouslySetInnerHTML={{ __html: content.desc6 }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PreWeddingPage() {
  return (
    <PublicLayout activePath="/pre-wedding">
      <CarouselBanner slides={preWeddingPageContent.heroSlides} alt="Pre-wedding photography banner" />
      <ProductGrid products={preWeddingPageContent.products} />
      <TitleTextSection heading={content.heading1} html={content.disc1} />
      <FullBanner src={content.banner1} alt="Pre-wedding photography" />
      <TitleTextSection heading={content.heading2} html={content.desc2} />
      <SplitCarousel id="carousel-3" heading={content.heading3} slides={preWeddingPageContent.ideaSlides} html={content.desc3} />
      <FullBanner src={content.banner3} alt="Pre-wedding photography" />
      <SplitCarousel id="carousel-4" heading={content.heading4} slides={preWeddingPageContent.locationSlides} html={content.desc4} />
      <ThreeImageBlock />
      <div className="gap" />
      <FooterLastImages />
      <FullBanner src={content.banner8} alt="Pre-wedding photography" strip />
    </PublicLayout>
  );
}
