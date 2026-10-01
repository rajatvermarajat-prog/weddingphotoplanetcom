"use client";

import { useCallback, useEffect, useState } from "react";

const AUTO_MS = 4000;

export default function WeddingExperienceSlider({ slides, alt }: { slides: string[]; alt: string }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;

  const step = useCallback((delta: number) => setCurrent((c) => (c + delta + total) % total), [total]);

  useEffect(() => {
    if (paused || total < 2) return;
    const timer = setInterval(() => step(1), AUTO_MS);
    return () => clearInterval(timer);
  }, [paused, total, step]);

  return (
    <div className="we-slider" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="we-slider__stage">
        {slides.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`${alt} ${index + 1}`}
            className={`we-slider__img${index === current ? " is-active" : ""}`}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            width={960}
            height={720}
            aria-hidden={index !== current}
          />
        ))}
        <div className="we-slider__bar">
          <span className="we-slider__count">
            {String(current + 1).padStart(2, "0")} <i>/ {String(total).padStart(2, "0")}</i>
          </span>
          <span className="we-slider__nav">
            <button type="button" onClick={() => step(-1)} aria-label="Previous photo">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button type="button" onClick={() => step(1)} aria-label="Next photo">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
