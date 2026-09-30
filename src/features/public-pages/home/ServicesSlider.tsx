"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { HomepageService } from "./types";

const AUTOPLAY_MS = 6000;

// Services as a premium slider: copy on the left, photo on the right.
// Auto-advances (pausing only for keyboard focus) and has prev/next arrows.
export function ServicesSlider({ services }: { services: HomepageService[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = services.length;

  const go = useCallback((step: number) => setActive((index) => (index + step + count) % count), [count]);

  useEffect(() => {
    if (paused || count < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const timer = window.setTimeout(() => go(1), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [active, paused, count, go]);

  if (count === 0) {
    return null;
  }

  return (
    <section
      className={`wpp-services${paused ? " is-paused" : ""}`}
      aria-roledescription="carousel"
      aria-label="Our services"
      // Pause only for keyboard users; mouse clicks on the arrows just restart the timer.
      onFocus={(event) => setPaused(event.target.matches(":focus-visible"))}
      onBlur={() => setPaused(false)}
    >
      <div className="titlebar">
        <h2>Our Services</h2>
        <span className="b-line" aria-hidden="true" />
      </div>

      <div className="wpp-services__stage">
        <div className="wpp-services__copy">
          <div className="wpp-services__slides">
            {services.map((service, index) => (
              <article
                key={service.href}
                className={`wpp-services__slide${index === active ? " is-active" : ""}`}
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${count}`}
                aria-hidden={index !== active}
                inert={index !== active}
              >
                <p className="wpp-services__count">
                  <span>{String(index + 1).padStart(2, "0")}</span> / {String(count).padStart(2, "0")}
                </p>
                <h3 className="wpp-services__title">{service.title}</h3>
                <div className="wpp-services__desc" dangerouslySetInnerHTML={{ __html: service.descriptionHtml }} />
                <a className="wpp-services__cta" href={service.href} title={service.linkTitle}>
                  Read More
                  <i className="fa fa-long-arrow-right" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>

          <div className="wpp-services__controls">
            <button type="button" className="wpp-services__arrow" onClick={() => go(-1)} aria-label="Previous service">
              <i className="fa fa-angle-left" aria-hidden="true" />
            </button>
            <button type="button" className="wpp-services__arrow" onClick={() => go(1)} aria-label="Next service">
              <i className="fa fa-angle-right" aria-hidden="true" />
            </button>
            <div className="wpp-services__progress" aria-hidden="true">
              {services.map((service, index) => (
                <span key={service.href} className={index === active ? "is-active" : index < active ? "is-done" : undefined}>
                  <i key={index === active ? `run-${active}` : "idle"} style={{ animationDuration: `${AUTOPLAY_MS}ms` }} />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="wpp-services__deck">
          {services.map((service, index) => {
            const offset = (index - active + count) % count;
            return service.image ? (
              <a
                key={service.href}
                href={service.href}
                className={`wpp-services__card wpp-services__card--${Math.min(offset, 2)}`}
                aria-hidden={offset !== 0}
                tabIndex={-1}
              >
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  width={service.image.width}
                  height={service.image.height}
                  sizes="(max-width: 900px) 90vw, 50vw"
                  loading="lazy"
                  unoptimized
                />
                <span className="wpp-services__card-label">
                  <em>{String(index + 1).padStart(2, "0")}</em>
                  {service.title}
                </span>
              </a>
            ) : null;
          })}
        </div>
      </div>
    </section>
  );
}
