"use client";

import { useCallback, useEffect, useState } from "react";
import { FilmThumb, youTubeEmbedUrl } from "./FilmThumb";

const AUTO_MS = 4000;

// Video version of the wedding experience slider: posters rotate until one is played.
export default function FilmReel({ ids, title }: { ids: readonly string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState(false);
  const total = ids.length;

  const step = useCallback(
    (delta: number) => {
      setPlaying(false);
      setCurrent((c) => (c + delta + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (paused || playing || total < 2) return;
    const timer = setInterval(() => step(1), AUTO_MS);
    return () => clearInterval(timer);
  }, [paused, playing, total, step]);

  const label = `${title} ${current + 1}`;

  return (
    <div className="we-slider cf-reel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="we-slider__stage cf-reel__stage">
        {ids.map((id, index) => (
          <FilmThumb key={id} id={id} className={`we-slider__img${index === current ? " is-active" : ""}`} eager={index === 0} />
        ))}
        {playing ? (
          <iframe
            className="cf-reel__frame"
            src={youTubeEmbedUrl(ids[current])}
            title={label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button type="button" className="cf-reel__poster" onClick={() => setPlaying(true)} aria-label={`Play ${label}`}>
            <span className="cf-play" aria-hidden="true" />
          </button>
        )}
      </div>
      <div className="cf-reel__bar">
        <span className="cf-reel__count">
          {String(current + 1).padStart(2, "0")} <i>/ {String(total).padStart(2, "0")}</i>
        </span>
        <span className="we-slider__nav cf-reel__nav">
          <button type="button" onClick={() => step(-1)} aria-label="Previous film">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button type="button" onClick={() => step(1)} aria-label="Next film">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </span>
      </div>
    </div>
  );
}
