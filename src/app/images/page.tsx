import { readFileSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { CarouselBanner, FullBanner, PublicLayout, TitleTextSection } from "@/app/_wpp-pages/Legacy";
import { imagePageContent } from "@/app/_wpp-pages/images-data";
import { GalleryShowcase } from "@/features/public-pages/home/GalleryShowcase";
import "../gallery-showcase.css";

export const metadata: Metadata = {
  title: "Our Images | Wedding Photo Planet",
  description: "Wedding Photo Planet gallery with wedding, pre-wedding and candid photography images.",
};

// Width/height ratio from the JPEG frame header, so the gallery can lay out justified rows without layout shift.
function jpegRatio(src: string): number | undefined {
  try {
    const data = readFileSync(path.join(process.cwd(), "public", src));
    let offset = 2;
    while (offset + 9 < data.length && data[offset] === 0xff) {
      const marker = data[offset + 1];
      const isFrame = marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
      if (isFrame) {
        const height = data.readUInt16BE(offset + 5);
        const width = data.readUInt16BE(offset + 7);
        return width > 0 && height > 0 ? width / height : undefined;
      }
      offset += 2 + data.readUInt16BE(offset + 2);
    }
  } catch {
    // Missing or unreadable file: fall back to the gallery's default ratio.
  }
  return undefined;
}

function toGalleryImages(images: readonly { src: string; alt: string }[]) {
  return images.map((image, index) => ({ id: index, src: image.src, href: image.src, alt: image.alt, ratio: jpegRatio(image.src) }));
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
    </div>
  );
}

export default function ImagesPage() {
  return (
    <PublicLayout activePath="/images">
      <CarouselBanner slides={[...imagePageContent.slides]} alt="Gallery page banner" className="wpp-page-hero" />
      <IntroGallery />
      <GalleryShowcase images={toGalleryImages(imagePageContent.gallery)} heading={null} maxImages={Infinity} showMore={false} full />
      <TitleTextSection heading={imagePageContent.beforeHeading} html={imagePageContent.beforeHtml} className="images-page-content-sec wpp-before-banner" />
      {/* This banner file (2700x900) has ~150px white bands baked in above and below the photos. */}
      <FullBanner src={imagePageContent.banner} alt="Celebrity Photography" strip trim={{ top: 151, bottom: 152, width: 2700 }} />
      <TitleTextSection heading={imagePageContent.afterHeading} html={imagePageContent.afterHtml} className="images-page-content-sec-2 wpp-after-banner" />
      <GalleryShowcase images={toGalleryImages(imagePageContent.gallery2)} heading={null} maxImages={Infinity} showMore={false} full />
    </PublicLayout>
  );
}
