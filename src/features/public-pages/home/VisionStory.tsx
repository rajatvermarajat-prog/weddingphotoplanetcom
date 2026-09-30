import React from "react";
import Image from "next/image";
import type { HomepageImage } from "./types";

function FixedWindow({ image, className = "" }: { image: HomepageImage; className?: string }) {
  return (
    <section className={`wpp-vision wpp-vision--has-media ${className}`.trim()} aria-hidden="true">
      <div className="wpp-vision__media">
        <Image src={image.src} alt="" width={image.width} height={image.height} sizes="100vw" loading="lazy" unoptimized />
      </div>
    </section>
  );
}

// Fixed "window" banner before and after the original "Our Vision" text block;
// the same photo stays still while the page scrolls past both windows.
export function VisionStory({ image, heading, html }: { image: HomepageImage | null; heading: string; html: string }) {
  if (!image && !heading.trim() && !html.trim()) {
    return null;
  }

  return (
    <>
      {image ? <FixedWindow image={image} /> : null}

      {heading.trim() || html.trim() ? (
        <section className="about-us wpp-vision__text-section">
          <div className="container">
            <div className="col-md-12">
              <div className="titlebar">
                <h2>{heading}</h2>
                <span className="b-line" aria-hidden="true" />
              </div>
              <div className="wpp-rich-text">
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {image ? <FixedWindow image={image} className="wpp-vision--gap" /> : null}
    </>
  );
}
