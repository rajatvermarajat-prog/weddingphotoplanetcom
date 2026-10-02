"use client";

import React, { useState } from "react";
import Image from "next/image";

type Photo = { src: string; alt: string };
type Moment = { title: string; body: string };

// The CMS stores this copy as "<b>Title</b><br>Body<br><b>Title</b>..." — split it into cards.
function parseMoments(html: string): Moment[] {
  const strip = (s: string) =>
    s
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim();

  return [...html.matchAll(/<b>([\s\S]*?)<\/b>([\s\S]*?)(?=<b>|$)/gi)]
    .map((match) => ({ title: strip(match[1]), body: strip(match[2]) }))
    .filter((moment) => moment.title && moment.body);
}

// Glimpses as an expanding strip: one panel is open with its story, the rest wait as slim
// photo spines. Hover, focus or tap opens a panel.
export function CandidMoments({ heading, html, photos }: { heading: string; html: string; photos: Photo[] }) {
  const [active, setActive] = useState(0);
  const moments = parseMoments(html);
  const cards = (moments.length ? moments : [{ title: "", body: "" }])
    .map((moment, i) => ({ ...moment, photo: photos[i % Math.max(photos.length, 1)] }))
    .filter((card) => card.photo);

  if (!heading.trim() || cards.length === 0) {
    return null;
  }

  const total = String(cards.length).padStart(2, "0");

  return (
    <section className="wpp-candid" aria-labelledby="wpp-candid-title">
      <div className="wpp-candid__inner">
        <p className="wpp-candid__eyebrow">Candid Moments</p>
        <h2 id="wpp-candid-title" className="wpp-candid__title">
          {heading}
        </h2>
        <span className="wpp-candid__rule" aria-hidden="true" />

        <ul className="wpp-candid__strip">
          {cards.map((card, i) => {
            const open = i === active;
            const num = String(i + 1).padStart(2, "0");
            return (
              <li className={`wpp-candid__panel${open ? " is-active" : ""}`} key={`${card.photo.src}-${i}`} onMouseEnter={() => setActive(i)}>
                <Image src={card.photo.src} alt={card.photo.alt} fill sizes="(max-width: 800px) 100vw, 800px" />
                <span className="wpp-candid__shade" aria-hidden="true" />
                <button
                  type="button"
                  className="wpp-candid__toggle"
                  aria-expanded={open}
                  aria-label={card.title || `Photo ${num}`}
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                />
                <span className="wpp-candid__spine" aria-hidden="true">
                  <span className="wpp-candid__spine-num">{num}</span>
                  <span className="wpp-candid__spine-title">{card.title}</span>
                </span>
                <div className="wpp-candid__content" aria-hidden={!open}>
                  <p className="wpp-candid__num">
                    {num} <i>/ {total}</i>
                  </p>
                  {card.title ? <h3 className="wpp-candid__card-title">{card.title}</h3> : null}
                  {card.body ? <p className="wpp-candid__card-body">{card.body}</p> : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
