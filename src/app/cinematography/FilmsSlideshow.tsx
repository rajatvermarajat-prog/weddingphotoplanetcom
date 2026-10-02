"use client";

import { useEffect, useState } from "react";
import { useStripSlider } from "@/app/wedding/useStripSlider";
import { FilmThumb, youTubeEmbedUrl } from "./FilmThumb";
import "@/app/wedding/wedding-grid.css";

type Film = { id: string; title: string };

export default function FilmsSlideshow({ films }: { films: readonly Film[] }) {
  const [playing, setPlaying] = useState<Film | null>(null);
  const { perView, start, maxIndex, base, hovered, hoveredVisible, isVisible, widthOf, step, setHovered, setPaused } = useStripSlider(
    films.length,
    playing !== null,
  );

  useEffect(() => {
    if (!playing) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPlaying(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [playing]);

  return (
    <section className="wg-section wg-section--films" aria-label="Wedding films">
      <div className="wg-header">
        <p className="wg-eyebrow">Our Films</p>
        <h2 className="wg-title">Wedding Films We&rsquo;ve Created</h2>
        <span className="wg-line" aria-hidden="true" />
        <p className="wg-subtitle">Hover to preview, click any film to watch it</p>
      </div>

      <div
        className="wg-frame"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => {
          setPaused(false);
          setHovered(null);
        }}
      >
        <button type="button" className="wg-arrow wg-arrow--prev" onClick={() => step(-1)} aria-label="Previous films">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="wg-viewport">
          <div className="wg-track" style={{ transform: `translateX(-${start * base}%)` }}>
            {films.map((film, index) => {
              const visible = isVisible(index);
              return (
                <button
                  type="button"
                  key={film.id}
                  className={`wg-panel cf-panel${hoveredVisible && index === hovered ? " is-active" : ""}`}
                  style={{ flexBasis: `${widthOf(index)}%` }}
                  onMouseEnter={() => setHovered(index)}
                  onClick={() => setPlaying(film)}
                  tabIndex={visible ? 0 : -1}
                  aria-hidden={!visible}
                  aria-label={`Play ${film.title}`}
                >
                  <span className="wg-panel__inner">
                    <FilmThumb id={film.id} className="wg-panel__img" eager={index < start + perView + 2} />
                    <span className="wg-panel__shade" aria-hidden="true" />
                    <span className="cf-play cf-panel__play" aria-hidden="true" />
                    <span className="wg-panel__text">
                      <span className="wg-panel__count">Film {String(index + 1).padStart(2, "0")}</span>
                      <span className="wg-panel__name">{film.title}</span>
                      <span className="wg-panel__cta">
                        Watch Film
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M7 4l13 8-13 8z" />
                        </svg>
                      </span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <button type="button" className="wg-arrow wg-arrow--next" onClick={() => step(1)} aria-label="Next films">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="wg-footer">
        <span className="wg-footer__count">
          {String(start + 1).padStart(2, "0")} <i>/ {String(maxIndex + 1).padStart(2, "0")}</i>
        </span>
        <span className="wg-footer__rail" aria-hidden="true">
          <span className="wg-footer__fill" style={{ width: `${((start + 1) / (maxIndex + 1)) * 100}%` }} />
        </span>
      </div>

      {playing ? (
        <div className="cf-modal" role="dialog" aria-modal="true" aria-label={playing.title} onClick={() => setPlaying(null)}>
          <div className="cf-modal__box" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="cf-modal__close" onClick={() => setPlaying(null)} aria-label="Close video" autoFocus>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <div className="cf-modal__frame">
              <iframe
                src={youTubeEmbedUrl(playing.id)}
                title={playing.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="cf-modal__title">{playing.title}</p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
