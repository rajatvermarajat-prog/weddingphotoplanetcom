"use client";

import { FilmThumb, youTubeEmbedUrl } from "./FilmThumb";

// Featured film: starts playing on load. Browsers only allow autoplay when muted,
// so it starts without sound and the viewer unmutes from the player controls.
export default function FilmHero({ id, title }: { id: string; title: string }) {
  return (
    <section className="main-banner cf-hero">
      <FilmThumb id={id} className="cf-hero__img" eager />
      <iframe
        className="cf-hero__frame"
        src={youTubeEmbedUrl(id, { muted: true })}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </section>
  );
}
