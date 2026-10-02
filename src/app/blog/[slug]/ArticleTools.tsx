"use client";

import { useEffect, useState } from "react";

export type ArticleHeading = { id: string; text: string };

// Thin bar under the site header that fills as the article is read.
export function ReadingProgress({ targetId }: { targetId: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const target = document.getElementById(targetId);
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const distance = rect.height - window.innerHeight * 0.6;
      const done = distance > 0 ? -rect.top / distance : rect.top < 0 ? 1 : 0;
      setProgress(Math.min(1, Math.max(0, done)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [targetId]);

  return (
    <div className="bd-progress" aria-hidden="true">
      <span style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}

// Section list that highlights the heading currently being read.
export function TableOfContents({ headings }: { headings: ArticleHeading[] }) {
  const [active, setActive] = useState(headings[0]?.id ?? "");

  useEffect(() => {
    const update = () => {
      let current = headings[0]?.id ?? "";
      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (element && element.getBoundingClientRect().top <= 160) current = heading.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [headings]);

  return (
    <nav className="bd-toc" aria-label="Table of contents">
      <h2 className="bd-aside__title">In This Article</h2>
      <ol className="bd-toc__list">
        {headings.map((heading, index) => (
          <li key={heading.id} className={heading.id === active ? "is-active" : undefined}>
            <a href={`#${heading.id}`} aria-current={heading.id === active ? "location" : undefined}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function CopyLinkButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <button
      type="button"
      className="bd-share__btn"
      aria-label="Copy link to this article"
      onClick={() => {
        navigator.clipboard?.writeText(url).then(
          () => setCopied(true),
          () => undefined,
        );
      }}
    >
      <i className={`fa ${copied ? "fa-check" : "fa-link"}`} aria-hidden="true" />
      <span className="bd-share__tip" role="status">
        {copied ? "Link copied" : ""}
      </span>
    </button>
  );
}
