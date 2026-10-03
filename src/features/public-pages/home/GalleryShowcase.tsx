"use client";

import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import type { HomepageGalleryImage } from "./types";

const MAX_IMAGES = 40;
const COLUMNS = 5;

function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type GalleryImage = HomepageGalleryImage & { ratio?: number };
type Placed = { image: GalleryImage; index: number };

const DEFAULT_RATIO = 1.5;

// Justified rows: split images into rows whose aspect ratios sum to roughly `perRow`,
// so every row spans the full width and the gallery ends on a flat edge.
function justifyRows(images: GalleryImage[], perRow: number): Placed[][] {
  const ratioOf = (image: GalleryImage) => image.ratio ?? DEFAULT_RATIO;
  const total = images.reduce((sum, image) => sum + ratioOf(image), 0);
  const rowCount = Math.max(1, Math.round(total / perRow));
  const target = total / rowCount;
  const rows: Placed[][] = [[]];
  let acc = 0;

  images.forEach((image, index) => {
    const ratio = ratioOf(image);
    const row = rows[rows.length - 1];
    if (row.length > 0 && rows.length < rowCount && acc + ratio / 2 > target * rows.length) {
      rows.push([{ image, index }]);
    } else {
      row.push({ image, index });
    }
    acc += ratio;
  });

  return rows;
}

function perRowForWidth(width: number): number {
  if (width <= 640) return 2.6;
  if (width <= 1024) return 4.2;
  return 6.4;
}

// Full-bleed parallax masonry with scroll reveals and a built-in lightbox.
export function GalleryShowcase({
  images,
  heading = "Our Gallery",
  maxImages = MAX_IMAGES,
  showMore = true,
  full = false,
}: {
  images: GalleryImage[];
  heading?: string | null;
  maxImages?: number;
  showMore?: boolean;
  /** Show every image (no fixed-height wall); used on the /images page. */
  full?: boolean;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingId = useId();
  const [open, setOpen] = useState<number | null>(null);
  const [perRow, setPerRow] = useState(() => perRowForWidth(1440));
  const shown = images.slice(0, maxImages);
  const rows = full ? justifyRows(shown, perRow) : [];

  useEffect(() => {
    if (!full) {
      return;
    }
    const update = () => setPerRow(perRowForWidth(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [full]);

  const columns: { image: HomepageGalleryImage; index: number }[][] = Array.from({ length: COLUMNS }, () => []);
  shown.forEach((image, index) => columns[index % COLUMNS]?.push({ image, index }));

  // Reveal each tile as it enters the viewport.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const tiles = section.querySelectorAll<HTMLElement>(".wpp-gallery__tile");
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      tiles.forEach((tile) => tile.classList.add("is-in"));
      return;
    }

    section.dataset.anim = "on";
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    tiles.forEach((tile) => observer.observe(tile));
    return () => observer.disconnect();
  }, [shown.length, perRow]);

  const step = useCallback(
    (delta: number) => setOpen((current) => (current === null ? current : (current + delta + shown.length) % shown.length)),
    [shown.length],
  );

  // Lightbox keyboard controls + scroll lock.
  useEffect(() => {
    if (open === null) {
      return;
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step]);

  if (shown.length === 0) {
    return null;
  }

  const current = open === null ? null : shown[open];

  return (
    <section ref={sectionRef} className={`wpp-gallery${full ? " wpp-gallery--full" : ""}`} aria-labelledby={heading ? headingId : undefined} aria-label={heading ? undefined : "Photo gallery"}>
      {heading ? (
        <div className="titlebar">
          <h2 id={headingId}>{heading}</h2>
          <span className="b-line" aria-hidden="true" />
        </div>
      ) : null}

      {full ? (
        <div className="wpp-gallery__rows">
          {rows.map((row, rowIndex) => (
            <div className="wpp-gallery__row" key={rowIndex}>
              {row.map(({ image, index }, i) => {
                const ratio = image.ratio ?? DEFAULT_RATIO;
                return (
                  <button
                    type="button"
                    className="wpp-gallery__tile"
                    key={image.id}
                    onClick={() => setOpen(index)}
                    aria-label={`Open photo: ${image.alt}`}
                    style={{ "--delay": `${i * 80}ms`, aspectRatio: ratio, flex: `${ratio} 1 0` } as React.CSSProperties}
                  >
                    <span className="wpp-gallery__reveal">
                      <Image src={image.src} alt={image.alt} width={640} height={Math.round(640 / ratio)} loading="lazy" sizes="(max-width: 700px) 50vw, 25vw" unoptimized />
                      <span className="wpp-gallery__shine" aria-hidden="true" />
                      <span className="wpp-gallery__zoom" aria-hidden="true">
                        <i className="fa fa-expand" />
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      ) : (
      <div className="wpp-gallery__grid">
        {columns.map((column, columnIndex) => (
          <div className="wpp-gallery__col" key={columnIndex}>
            {column.map(({ image, index }, rowIndex) => (
              <button
                type="button"
                className="wpp-gallery__tile"
                key={image.id}
                onClick={() => setOpen(index)}
                aria-label={`Open photo: ${image.alt}`}
                style={{ "--delay": `${(columnIndex * 90 + rowIndex * 60) % 480}ms` } as React.CSSProperties}
              >
                {/* Clip-path lives on this inner wrapper: a fully clipped target never reports as intersecting. */}
                <span className="wpp-gallery__reveal">
                  <Image src={image.src} alt={image.alt} width={640} height={480} loading="lazy" sizes="(max-width: 700px) 50vw, 20vw" unoptimized />
                  <span className="wpp-gallery__shine" aria-hidden="true" />
                  <span className="wpp-gallery__zoom" aria-hidden="true">
                    <i className="fa fa-expand" />
                  </span>
                </span>
              </button>
            ))}
          </div>
        ))}
      </div>
      )}

      {showMore ? (
        <div className="wpp-gallery__more">
          <a href="/images" title="Wedding & Pre Wedding Photos" className="wpp-gallery__cta">
            <span>View All Photos</span>
            <i className="fa fa-long-arrow-right" aria-hidden="true" />
          </a>
        </div>
      ) : null}

      {current ? (
        <div className="wpp-lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={() => setOpen(null)}>
          <button type="button" className="wpp-lightbox__close" aria-label="Close" onClick={() => setOpen(null)}>
            <i className="fa fa-times" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="wpp-lightbox__nav wpp-lightbox__nav--prev"
            aria-label="Previous photo"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
          >
            <i className="fa fa-angle-left" aria-hidden="true" />
          </button>
          <figure className="wpp-lightbox__figure" key={current.id} onClick={(event) => event.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={current.href} alt={current.alt} />
            <figcaption>
              {(open ?? 0) + 1} / {shown.length}
            </figcaption>
          </figure>
          <button
            type="button"
            className="wpp-lightbox__nav wpp-lightbox__nav--next"
            aria-label="Next photo"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
          >
            <i className="fa fa-angle-right" aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
