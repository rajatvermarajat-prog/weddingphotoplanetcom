import type { Metadata } from "next";
import { CarouselBanner, FullBanner, ProductGrid, PublicLayout, TitleTextSection } from "@/app/_wpp-pages/Legacy";
import { weddingPageContent } from "@/app/_wpp-pages/wedding-data";

const { content } = weddingPageContent;

export const metadata: Metadata = {
  title: weddingPageContent.metadata.title,
  description: weddingPageContent.metadata.description,
};

function TwoImageSection() {
  return (
    <section className="images-page-content-sec">
      <div className="container">
        <div className="col-md-12">
          <div className="titlebar">
            <h2>{content.heading3}</h2>
            <span className="b-line" />
          </div>
          <p dangerouslySetInnerHTML={{ __html: content.desc4 }} />
          <br />
        </div>
        <div className="col-md-6 wedding-col-2">
          <img className="img-responsive" src={content.banner2} alt="Indian Best Wedding Photographers" loading="lazy" decoding="async" width="640" height="360" />
        </div>
        <div className="col-md-6 wedding-col-2">
          <img className="img-responsive" src={content.banner3} alt="Candid Photography in Delhi NCR" loading="lazy" decoding="async" width="640" height="360" />
        </div>
      </div>
    </section>
  );
}

function WeddingIdea() {
  return (
    <section className="wedding-idea">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlebar">
              <h2>{content.heading4}</h2>
              <span className="b-line" />
            </div>
          </div>
        </div>
        <div className="row wpp-media-text-row">
          <div className="col-md-4 col-sm-12 wpp-split-media">
            <div id="carousel-3" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                {weddingPageContent.ideaSlides.map((src, index) => (
                  <div className={`item ${index === 0 ? "active" : ""}`} key={src}>
                    <img src={src} alt="banner" style={{ width: "100%" }} {...(index === 0 ? {} : { loading: "lazy" as const, decoding: "async" as const })} width="640" height="480" />
                  </div>
                ))}
              </div>
              <a className="left carousel-control" href="#carousel-3" data-slide="prev">
                <i className="fa fa-chevron-left" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#carousel-3" data-slide="next">
                <i className="fa fa-chevron-right" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="col-md-8 col-sm-12 wpp-split-text images-page-content-sec">
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
            <h2>{content.heading5}</h2>
            <span className="b-line" />
          </div>
          <div className="images-page-content-sec">
            <p dangerouslySetInnerHTML={{ __html: content.desc5 }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function WeddingPage() {
  return (
    <PublicLayout activePath="/wedding">
      <CarouselBanner slides={weddingPageContent.heroSlides} alt="Wedding photography banner" />
      <ProductGrid products={weddingPageContent.products} />
      <TitleTextSection heading={content.heading1} html={content.desc1} />
      <FullBanner src={content.banner1} alt="Celebrity Photography" />
      <TitleTextSection heading={content.heading2} html={content.desc2} />
      <TwoImageSection />
      <WeddingIdea />
      <FooterLastImages />
      <FullBanner src={content.banner5} alt="Celebrity Photography" strip />
    </PublicLayout>
  );
}
