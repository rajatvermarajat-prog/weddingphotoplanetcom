"use client";

import { useCallback, useEffect, useState } from "react";

const AUTO_MS = 3500;
const HOVER_GROW = 1.4;

function perViewForWidth(width: number): number {
  if (width <= 640) return 1;
  if (width <= 1000) return 2;
  return 3;
}

// State for the sliding panel strip: panels per view, auto-advance, and the hovered panel's extra width.
// `hold` stops the auto-advance from outside, e.g. while a video is open.
export function useStripSlider(total: number, hold = false) {
  const [perView, setPerView] = useState(3);
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  const maxIndex = Math.max(0, total - perView);
  const start = Math.min(current, maxIndex);

  useEffect(() => {
    const update = () => setPerView(perViewForWidth(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const step = useCallback(
    (delta: number) => {
      setCurrent((c) => {
        const from = Math.min(c, maxIndex);
        const to = from + delta;
        if (to > maxIndex) return 0;
        if (to < 0) return maxIndex;
        return to;
      });
    },
    [maxIndex],
  );

  useEffect(() => {
    if (paused || hold || maxIndex === 0) return;
    const timer = setInterval(() => step(1), AUTO_MS);
    return () => clearInterval(timer);
  }, [paused, hold, maxIndex, step]);

  const base = 100 / perView;
  const isVisible = (index: number) => index >= start && index < start + perView;
  const hoveredVisible = hovered !== null && isVisible(hovered) && perView > 1;
  const grown = base * HOVER_GROW;
  const shrunk = (100 - grown) / (perView - 1);

  const widthOf = (index: number) => {
    if (!hoveredVisible || !isVisible(index)) return base;
    return index === hovered ? grown : shrunk;
  };

  return { perView, start, maxIndex, base, hovered, hoveredVisible, isVisible, widthOf, step, setHovered, setPaused };
}
