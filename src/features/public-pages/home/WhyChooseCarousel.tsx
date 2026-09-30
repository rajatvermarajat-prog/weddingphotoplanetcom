"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import type { HomepageData, HomepageGalleryImage } from "./types";

const AUTOPLAY_MS = 5000;
const ICONS = ["fa-users", "fa-camera-retro", "fa-search", "fa-magic", "fa-trophy", "fa-sliders", "fa-clock-o", "fa-heart-o", "fa-smile-o"];

// Points arrive as "<b>Title: </b>Description" HTML; split them for the layout.
function splitPoint(html: string): { title: string; text: string } {
  const strip = (value: string) =>
    value
      .replace(/<[^>]*>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/\s+/g, " ")
      .trim();
  const match = html.match(/<b>([\s\S]*?)<\/b>([\s\S]*)/i);
  if (!match) {
    const text = strip(html);
    // The privacy point has no bold title in the CMS data.
    return { title: /privacy/i.test(text) ? "Privacy & Security" : "", text };
  }
  return { title: strip(match[1] ?? "").replace(/[:\-\s]+$/, ""), text: strip(match[2] ?? "") };
}

// Split layout: numbered list of reasons on the left (tabs with autoplay progress),
// a large detail panel for the active reason on the right.
export function WhyChooseCarousel({ whyChoose, images = [] }: { whyChoose: HomepageData["whyChoose"]; images?: HomepageGalleryImage[] }) {
  const points = whyChoose.points.map(splitPoint);
  const count = points.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || count < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const timer = window.setTimeout(() => setActive((index) => (index + 1) % count), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [active, paused, count]);

  if (!whyChoose.heading.trim() && count === 0) {
    return null;
  }

  const current = points[active];
  const closing = whyChoose.closingHtml.trim();

  return (
    <section
      className="wpp-why"
      aria-labelledby="wpp-why-heading"
      onFocus={(event) => setPaused(event.target.matches(":focus-visible"))}
      onBlur={() => setPaused(false)}
    >
      <div className="titlebar">
        <h2 id="wpp-why-heading">{whyChoose.heading}</h2>
        <span className="b-line" aria-hidden="true" />
      </div>

      {count > 0 && current ? (
        <div className="wpp-why__layout">
          <ol className="wpp-why__list" role="tablist" aria-label="Reasons">
            {points.map((point, index) => (
              <li key={`${index}-${point.title}`}>
                <button
                  type="button"
                  role="tab"
                  id={`wpp-why-tab-${index}`}
                  aria-selected={index === active}
                  aria-controls="wpp-why-panel"
                  className={index === active ? "is-active" : undefined}
                  onClick={() => setActive(index)}
                >
                  <span className="wpp-why__idx">{String(index + 1).padStart(2, "0")}</span>
                  <span className="wpp-why__name">{point.title || `Reason ${index + 1}`}</span>
                  <span className="wpp-why__bar" aria-hidden="true">
                    <i key={index === active ? `run-${active}` : "idle"} style={{ animationDuration: `${AUTOPLAY_MS}ms` }} />
                  </span>
                </button>
              </li>
            ))}
          </ol>

          <div id="wpp-why-panel" role="tabpanel" aria-labelledby={`wpp-why-tab-${active}`} className="wpp-why__panel">
            {points.map((point, index) => {
              const image = images.length > 0 ? images[(index * 5) % images.length] : undefined;
              return image ? (
                <Image
                  key={`${image.id}-${index}`}
                  className={`wpp-why__photo${index === active ? " is-active" : ""}`}
                  src={image.src}
                  alt=""
                  aria-hidden="true"
                  width={900}
                  height={600}
                  sizes="(max-width: 900px) 100vw, 55vw"
                  loading="lazy"
                  unoptimized
                />
              ) : null;
            })}
            <div className="wpp-why__panel-inner" key={active}>
              <span className="wpp-why__bignum" aria-hidden="true">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="wpp-why__icon" aria-hidden="true">
                <i className={`fa ${ICONS[active % ICONS.length]}`} />
              </span>
              {current.title ? <h3 className="wpp-why__title">{current.title}</h3> : null}
              <p className="wpp-why__text">{current.text}</p>
            </div>
          </div>
        </div>
      ) : null}

      {closing ? <div className="wpp-why__closing" dangerouslySetInnerHTML={{ __html: closing }} /> : null}
    </section>
  );
}
