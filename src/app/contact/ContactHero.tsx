"use client";

import { useEffect, useState } from "react";

const AUTO_MS = 5500;

export default function ContactHero({
  slides,
  eyebrow,
  title,
  text,
  whatsappUrl,
}: {
  slides: readonly string[];
  eyebrow: string;
  title: string;
  text: string;
  whatsappUrl: string;
}) {
  // Only the current photo and the one it fades in over are mounted, so the rest load on demand.
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const total = slides.length;

  useEffect(() => {
    if (total < 2) return;
    const timer = setInterval(() => {
      setCurrent((c) => {
        setPrevious(c);
        return (c + 1) % total;
      });
    }, AUTO_MS);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <section className="main-banner ct-hero">
      {previous !== null ? <img key={slides[previous]} src={slides[previous]} alt="" className="ct-hero__img" decoding="async" /> : null}
      <img key={slides[current]} src={slides[current]} alt="" className="ct-hero__img ct-hero__img--in" fetchPriority="high" decoding="async" />
      <span className="ct-hero__shade" aria-hidden="true" />
      <div className="ct-hero__content">
        <p className="ct-hero__eyebrow">{eyebrow}</p>
        <h1 className="ct-hero__title">{title}</h1>
        <span className="ct-hero__line" aria-hidden="true" />
        <p className="ct-hero__text">{text}</p>
        <div className="ct-hero__actions">
          <a className="ct-btn ct-btn--gold" href="#enquiry">
            Send an Enquiry
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
          <a className="ct-btn ct-btn--ghost" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
