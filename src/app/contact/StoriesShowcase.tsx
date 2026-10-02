"use client";

import { useEffect, useState } from "react";

const AUTO_MS = 6000;

type Story = { title: string; text: string; image: string };

export default function StoriesShowcase({ stories }: { stories: readonly Story[] }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = stories.length;

  useEffect(() => {
    if (paused || total < 2) return;
    const timer = setTimeout(() => setCurrent((c) => (c + 1) % total), AUTO_MS);
    return () => clearTimeout(timer);
  }, [paused, total, current]);

  return (
    <section className="ct-stories" aria-label="Stories and moments">
      <div className="ct-stories__inner" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="ct-stories__stage">
          {stories.map((story, index) => (
            <img
              key={story.image}
              src={story.image}
              alt={story.title}
              className={`ct-stories__img${index === current ? " is-active" : ""}`}
              loading="lazy"
              decoding="async"
              width={960}
              height={600}
              aria-hidden={index !== current}
            />
          ))}
          <span className="ct-stories__count">
            {String(current + 1).padStart(2, "0")} <i>/ {String(total).padStart(2, "0")}</i>
          </span>
        </div>

        <div className="ct-stories__copy">
          <p className="ct-eyebrow">Stories &amp; Moments</p>
          <h2 className="ct-title ct-title--light">A Little More Behind the Frames</h2>
          <span className="ct-line" aria-hidden="true" />
          <ul className="ct-stories__list">
            {stories.map((story, index) => {
              const active = index === current;
              return (
                <li key={story.image} className={`ct-story${active ? " is-active" : ""}`}>
                  <button type="button" className="ct-story__head" onClick={() => setCurrent(index)} aria-expanded={active}>
                    <span className="ct-story__num">{String(index + 1).padStart(2, "0")}</span>
                    <span className="ct-story__title">{story.title}</span>
                  </button>
                  <div className="ct-story__body">
                    <p>{story.text}</p>
                  </div>
                  {/* Restarting the key replays the fill for each newly active story. */}
                  <span className="ct-story__rail" aria-hidden="true">
                    {active ? <span key={current} className={`ct-story__fill${paused ? " is-paused" : ""}`} style={{ animationDuration: `${AUTO_MS}ms` }} /> : null}
                  </span>
                </li>
              );
            })}
          </ul>
          <p className="ct-stories__hint">
            Planning something similar? Mention your city and season in the <a href="#enquiry">enquiry form</a> and we will suggest the best way to cover your story.
          </p>
        </div>
      </div>
    </section>
  );
}
