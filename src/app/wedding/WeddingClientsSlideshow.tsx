"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { ProductCard } from "@/app/_wpp-pages/data";
import "./wedding-grid.css";

const AUTO_MS = 3500;
const HOVER_GROW = 1.4;

function perViewForWidth(width: number): number {
  if (width <= 640) return 1;
  if (width <= 1000) return 2;
  return 3;
}

export default function WeddingClientsSlideshow({
  products,
  title = "Wedding Stories We’ve Captured",
  label = "Wedding client galleries",
}: {
  products: ProductCard[];
  title?: string;
  label?: string;
}) {
  const total = products.length;
  const [perView, setPerView] = useState(3);
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  const maxIndex = Math.max(0, total - perView);
  const start = Math.min(current, maxIndex);

  useEffect(() => {
    const update = () => setPerView(perViewForWidth(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const step = useCallback(
    (delta: number) => {
      setCurrent((c) => {
        const from = Math.min(c, maxIndex);
        const to = from + delta;
        if (to > maxIndex) return 0;
        if (to < 0) return maxIndex;
        return to;
      });
    },
    [maxIndex],
  );

  useEffect(() => {
    if (paused || maxIndex === 0) return;
    const timer = setInterval(() => step(1), AUTO_MS);
    return () => clearInterval(timer);
  }, [paused, maxIndex, step]);

  const base = 100 / perView;
  const hoveredVisible = hovered !== null && hovered >= start && hovered < start + perView && perView > 1;
  const grown = base * HOVER_GROW;
  const shrunk = (100 - grown) / (perView - 1);

  const widthOf = (index: number) => {
    const visible = index >= start && index < start + perView;
    if (!hoveredVisible || !visible) return base;
    return index === hovered ? grown : shrunk;
  };

  return (
    <section className="wg-section" aria-label={label}>
      <div className="wg-header">
        <p className="wg-eyebrow">Our Clients</p>
        <h2 className="wg-title">{title}</h2>
        <span className="wg-line" aria-hidden="true" />
        <p className="wg-subtitle">Hover to preview, click any couple to open their full gallery</p>
      </div>

      <div
        className="wg-frame"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => {
          setPaused(false);
          setHovered(null);
        }}
      >
        <button type="button" className="wg-arrow wg-arrow--prev" onClick={() => step(-1)} aria-label="Previous couples">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="wg-viewport">
          <div className="wg-track" style={{ transform: `translateX(-${start * base}%)` }}>
            {products.map((product, index) => {
              const visible = index >= start && index < start + perView;
              return (
                <Link
                  href={product.href}
                  key={product.href}
                  className={`wg-panel${hoveredVisible && index === hovered ? " is-active" : ""}`}
                  style={{ flexBasis: `${widthOf(index)}%` }}
                  onMouseEnter={() => setHovered(index)}
                  tabIndex={visible ? 0 : -1}
                  aria-hidden={!visible}
                >
                  <span className="wg-panel__inner">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="wg-panel__img"
                      loading={index < start + perView + 2 ? "eager" : "lazy"}
                      decoding="async"
                      width={720}
                      height={540}
                    />
                    <span className="wg-panel__shade" aria-hidden="true" />
                    <span className="wg-panel__text">
                      <span className="wg-panel__count">{product.photos} photos</span>
                      <span className="wg-panel__name">{product.title}</span>
                      <span className="wg-panel__cta">
                        Explore Gallery
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <button type="button" className="wg-arrow wg-arrow--next" onClick={() => step(1)} aria-label="Next couples">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="wg-footer">
        <span className="wg-footer__count">
          {String(start + 1).padStart(2, "0")} <i>/ {String(maxIndex + 1).padStart(2, "0")}</i>
        </span>
        <span className="wg-footer__rail" aria-hidden="true">
          <span className="wg-footer__fill" style={{ width: `${((start + 1) / (maxIndex + 1)) * 100}%` }} />
        </span>
      </div>
    </section>
  );
}
