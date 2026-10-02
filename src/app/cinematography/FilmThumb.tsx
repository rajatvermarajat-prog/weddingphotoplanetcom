"use client";

import { useState } from "react";

// Video ids in the page data may carry share params ("id?si=...").
export function youTubeId(id: string) {
  return id.split("?")[0] ?? id;
}

// `muted` is for players that start on page load: muted, inline and looping.
export function youTubeEmbedUrl(id: string, { muted = false }: { muted?: boolean } = {}) {
  const videoId = youTubeId(id);
  const onLoad = muted ? `&mute=1&playsinline=1&loop=1&playlist=${videoId}` : "";
  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&autoplay=1${onLoad}`;
}

// YouTube poster image. Starts with the 16:9 HD thumbnail; videos without one answer with a
// 120px placeholder, so those fall back to the 4:3 thumbnail (its black bars are cropped in CSS).
export function FilmThumb({ id, alt = "", className = "", eager = false }: { id: string; alt?: string; className?: string; eager?: boolean }) {
  const [fallback, setFallback] = useState(false);
  const videoId = youTubeId(id);

  const check = (img: HTMLImageElement | null) => {
    if (img && img.complete && img.naturalWidth > 0 && img.naturalWidth < 200) setFallback(true);
  };

  return (
    <img
      ref={check}
      src={`https://i.ytimg.com/vi/${videoId}/${fallback ? "hqdefault" : "maxresdefault"}.jpg`}
      alt={alt}
      className={`${className}${fallback ? " is-letterboxed" : ""}`}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      width={1280}
      height={720}
      onLoad={(event) => check(event.currentTarget)}
      onError={() => setFallback(true)}
    />
  );
}
