"use client";

import React from "react";
import Image from "next/image";
import { CenterCarousel } from "./CenterCarousel";
import type { HomepageData } from "./types";

export function TestimonialsCarousel({ testimonials }: { testimonials: HomepageData["testimonials"] }) {
  return (
    <CenterCarousel
      id="wpp-reviews-heading"
      heading={testimonials.heading}
      items={testimonials.items}
      itemKey={(item) => item.id}
      itemLabel="review"
      renderItem={(item) => (
        <>
          <span className="wpp-reviews__mark" aria-hidden="true">
            &ldquo;
          </span>
          <blockquote>{item.quote}</blockquote>
          <figcaption>
            {item.image ? <Image src={item.image.src} alt={item.image.alt} width={56} height={56} loading="lazy" unoptimized /> : null}
            <span>
              <strong>{item.clientName}</strong>
              <small>Happy Client</small>
            </span>
          </figcaption>
        </>
      )}
    />
  );
}
