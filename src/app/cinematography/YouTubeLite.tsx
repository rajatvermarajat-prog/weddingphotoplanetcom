"use client";

import { useState } from "react";

function cleanYouTubeId(id: string) {
  return id.split("?")[0] ?? id;
}

export function YouTubeLite({
  id,
  title,
  className,
  height = 220,
}: {
  id: string;
  title: string;
  className?: string;
  height?: number;
}) {
  const [active, setActive] = useState(false);
  const videoId = cleanYouTubeId(id);
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&autoplay=1`;
  const thumbUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  if (active) {
    return (
      <iframe
        className={className}
        width="100%"
        height={height}
        src={embedUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      className={`wpp-youtube-lite${className ? ` ${className}` : ""}`}
      style={{ minHeight: height }}
      onClick={() => setActive(true)}
      aria-label={`Play ${title}`}
    >
      <img src={thumbUrl} alt="" loading="lazy" decoding="async" />
      <span className="wpp-youtube-lite__play" aria-hidden="true" />
      <span className="wpp-youtube-lite__title">{title}</span>
    </button>
  );
}
