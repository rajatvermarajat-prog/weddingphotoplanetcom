"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { HomepageGalleryImage } from "./types";

const MAX_IMAGES = 40;
const COLUMNS = 5;
// Per-column parallax travel in px (alternating directions).
const SPEEDS = [-70, 50, -110, 40, -60];

function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Full-bleed parallax masonry with scroll reveals and a built-in lightbox.
export function GalleryShowcase({ images }: { images: HomepageGalleryImage[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  const shown = images.slice(0, MAX_IMAGES);

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
  }, [shown.length]);

  // Column parallax: -1..1 progress through the section, written to a CSS variable.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) {
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < 0 || rect.top > vh) {
        return;
      }
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      section.style.setProperty("--p", Math.max(-1, Math.min(1, progress)).toFixed(4));
    };
    const onScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

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
    <section ref={sectionRef} className="wpp-gallery" aria-labelledby="wpp-gallery-heading">
      <div className="titlebar">
        <h2 id="wpp-gallery-heading">Our Gallery</h2>
        <span className="b-line" aria-hidden="true" />
      </div>

      <div className="wpp-gallery__grid">
        {columns.map((column, columnIndex) => (
          <div className="wpp-gallery__col" key={columnIndex} style={{ "--speed": `${SPEEDS[columnIndex] ?? 0}px` } as React.CSSProperties}>
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

      <div className="wpp-gallery__more">
        <a href="/images" title="Wedding & Pre Wedding Photos" className="wpp-gallery__cta">
          <span>View All Photos</span>
          <i className="fa fa-long-arrow-right" aria-hidden="true" />
        </a>
      </div>

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
