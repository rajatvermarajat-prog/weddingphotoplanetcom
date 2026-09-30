"use client";

import React, { useCallback, useEffect, useState } from "react";

const AUTOPLAY_MS = 5000;

// Centered card carousel: the active card sits in the middle, neighbours peek at
// the sides. Auto-advances (pausing only for keyboard focus), with arrows and dots.
export function CenterCarousel<T>({
  id,
  heading,
  items,
  itemKey,
  itemLabel,
  renderItem,
  className = "",
  footer,
}: {
  id: string;
  heading: string;
  items: T[];
  itemKey: (item: T, index: number) => React.Key;
  itemLabel: string;
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
}) {
  const count = items.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((step: number) => setActive((index) => (index + step + count) % count), [count]);

  useEffect(() => {
    if (paused || count < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const timer = window.setTimeout(() => go(1), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [active, paused, count, go]);

  if (!heading.trim() && count === 0) {
    return null;
  }

  return (
    <section
      className={`wpp-reviews ${className}`.trim()}
      aria-roledescription="carousel"
      aria-labelledby={id}
      onFocus={(event) => setPaused(event.target.matches(":focus-visible"))}
      onBlur={() => setPaused(false)}
    >
      <div className="titlebar">
        <h2 id={id}>{heading}</h2>
        <span className="b-line" aria-hidden="true" />
      </div>

      {count > 0 ? (
        <>
          <div className="wpp-reviews__stage">
            {items.map((item, index) => {
              // Shortest circular distance from the active card: -1 left, 0 centre, 1 right.
              let offset = (index - active + count) % count;
              if (offset > count / 2) offset -= count;
              const position =
                offset === 0 ? "center" : offset === -1 ? "left" : offset === 1 ? "right" : offset < 0 ? "hidden-left" : "hidden-right";

              return (
                <figure
                  key={itemKey(item, index)}
                  className={`wpp-reviews__card is-${position}`}
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${count}`}
                  aria-hidden={offset !== 0}
                  onClick={() => Math.abs(offset) === 1 && go(offset)}
                >
                  {renderItem(item, index)}
                </figure>
              );
            })}
          </div>

          <div className="wpp-reviews__controls">
            <button type="button" className="wpp-reviews__arrow" onClick={() => go(-1)} aria-label={`Previous ${itemLabel}`}>
              <i className="fa fa-angle-left" aria-hidden="true" />
            </button>
            <div className="wpp-reviews__dots">
              {items.map((item, index) => (
                <button
                  type="button"
                  key={itemKey(item, index)}
                  className={index === active ? "is-active" : undefined}
                  onClick={() => setActive(index)}
                  aria-label={`Show ${itemLabel} ${index + 1}`}
                  aria-current={index === active}
                >
                  <i key={index === active ? `run-${active}` : "idle"} style={{ animationDuration: `${AUTOPLAY_MS}ms` }} />
                </button>
              ))}
            </div>
            <button type="button" className="wpp-reviews__arrow" onClick={() => go(1)} aria-label={`Next ${itemLabel}`}>
              <i className="fa fa-angle-right" aria-hidden="true" />
            </button>
          </div>
        </>
      ) : null}

      {footer}
    </section>
  );
}
