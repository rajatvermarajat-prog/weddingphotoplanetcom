import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CarouselBanner, PublicLayout } from "@/app/_wpp-pages/Legacy";
import { detailPages, type DetailGalleryImage } from "@/app/_wpp-pages/details-data";
import { jpegRatio } from "@/app/_wpp-pages/jpeg-ratio";
import { GalleryShowcase } from "@/features/public-pages/home/GalleryShowcase";
import "../../gallery-showcase.css";
import "./details-page.css";

type DetailPageProps = {
  params: Promise<{ slug: string }>;
};

// Below this many photos the gallery stays in one block instead of splitting around the pinned banner.
const MIN_PHOTOS_TO_SPLIT = 8;
const WIDE_STRIP_RATIO = 2;

function findDetail(slug: string) {
  return detailPages.find((page) => page.slug === slug);
}

export function generateStaticParams() {
  return detailPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: DetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = findDetail(slug);
  if (!detail) return {};
  return {
    title: detail.metadata.title,
    description: detail.metadata.description,
  };
}

function absolute(src: string) {
  return src.startsWith("/") ? src : `/${src}`;
}

function toGalleryImages(images: readonly DetailGalleryImage[], idOffset: number) {
  return images.map((image, index) => {
    const src = absolute(image.src);
    return { id: idOffset + index, src, href: src, alt: image.alt, ratio: jpegRatio(src) };
  });
}

function DetailIntro({ category, name, html }: { category: string; name: string; html?: string }) {
  return (
    <section className="wd-text wd-text--intro">
      <div className="wd-text__inner">
        <p className="wd-eyebrow">{category === "PRE WEDDING" ? "Pre Wedding Story" : "Wedding Story"}</p>
        <h1 className="wd-title">{name}</h1>
        <span className="wd-line" aria-hidden="true" />
        {html ? <div className="wd-body" dangerouslySetInnerHTML={{ __html: html }} /> : null}
      </div>
    </section>
  );
}

function DetailText({ heading, html }: { heading?: string; html?: string }) {
  if (!heading && !html) return null;
  return (
    <section className="wd-text">
      <div className="wd-text__inner">
        {heading ? (
          <>
            <h2 className="wd-title wd-title--sm">{heading}</h2>
            <span className="wd-line" aria-hidden="true" />
          </>
        ) : null}
        {html ? <div className="wd-body" dangerouslySetInnerHTML={{ __html: html }} /> : null}
      </div>
    </section>
  );
}

// `pinned` keeps the photo still in the background while the page scrolls over it.
// Wide strips stay at their natural size; taller photos fill the screen width and are windowed to one screen.
function DetailBanner({ src, alt, pinned = false }: { src?: string; alt: string; pinned?: boolean }) {
  if (!src) return null;
  const ratio = pinned ? jpegRatio(src) : undefined;
  const className = ratio ? ` wd-banner--pinned${ratio < WIDE_STRIP_RATIO ? " wd-banner--tall" : ""}` : "";
  return (
    <section className={`main-banner wd-banner${className}`} style={ratio ? { aspectRatio: ratio } : undefined}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </section>
  );
}

export default async function DetailPage({ params }: DetailPageProps) {
  const { slug } = await params;
  const detail = findDetail(slug);
  if (!detail) notFound();

  const { content } = detail;
  const photos: readonly DetailGalleryImage[] = detail.gallery;
  const split = photos.length >= MIN_PHOTOS_TO_SPLIT ? Math.ceil(photos.length / 2) : photos.length;
  const firstHalf = toGalleryImages(photos.slice(0, split), 0);
  const secondHalf = toGalleryImages(photos.slice(split), split);

  return (
    <PublicLayout activePath={detail.category === "PRE WEDDING" ? "/pre-wedding" : "/wedding"}>
      <CarouselBanner slides={detail.heroSlides.length ? [...detail.heroSlides] : [content.banner1]} alt={`${detail.name} banner`} className="wpp-page-hero" />
      <DetailIntro category={detail.category} name={detail.name} html={content.desc4} />
      <GalleryShowcase images={firstHalf} heading={null} maxImages={Infinity} showMore={false} full />
      <DetailText heading={content.heading1} html={content.desc1} />
      <DetailBanner src={content.banner1} alt={`${detail.name} by Wedding Photo Planet`} pinned />
      {secondHalf.length ? <GalleryShowcase images={secondHalf} heading={null} maxImages={Infinity} showMore={false} full /> : null}
      <DetailText heading={content.heading2} html={content.desc2} />
      <DetailText heading={content.heading3} html={content.desc3} />
      <DetailBanner src={content.banner2} alt={`${detail.name} wedding photography`} />
    </PublicLayout>
  );
}
