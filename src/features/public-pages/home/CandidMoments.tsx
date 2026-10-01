import React from "react";
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

export function CandidMoments({ heading, html, photos }: { heading: string; html: string; photos: Photo[] }) {
  const moments = parseMoments(html);
  const cards = (moments.length ? moments : [{ title: "", body: "" }])
    .map((moment, i) => ({ ...moment, photo: photos[i % Math.max(photos.length, 1)] }))
    .filter((card) => card.photo);

  if (!heading.trim() || cards.length === 0) {
    return null;
  }

  return (
    <section className="wpp-candid" aria-labelledby="wpp-candid-title">
      <div className="wpp-candid__inner">
        <h2 id="wpp-candid-title" className="wpp-candid__title">
          {heading}
        </h2>
        <span className="wpp-candid__rule" aria-hidden="true" />

        <ul className="wpp-candid__grid">
          {cards.map((card, i) => (
            <li className="wpp-candid__card" key={`${card.photo.src}-${i}`} tabIndex={0}>
              <span className="wpp-candid__tape" aria-hidden="true" />
              <div className="wpp-candid__photo">
                <Image src={card.photo.src} alt={card.photo.alt} fill sizes="(max-width: 700px) 86vw, 540px" />
                {card.body ? <p className="wpp-candid__card-body">{card.body}</p> : null}
              </div>
              <div className="wpp-candid__caption">
                <span className="wpp-candid__num">{String(i + 1).padStart(2, "0")}</span>
                {card.title ? <h3 className="wpp-candid__card-title">{card.title}</h3> : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
