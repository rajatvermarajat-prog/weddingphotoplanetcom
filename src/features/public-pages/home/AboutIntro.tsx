"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { HomepageImage } from "./types";

const HAPPY_COUPLES = 1000;

const features = [
  { icon: "fa-camera", title: "Professional", subtitle: "Photography" },
  { icon: "fa-video-camera", title: "Cinematic", subtitle: "Videography" },
  { icon: "fa-heart-o", title: "Memorable", subtitle: "Experiences" },
] as const;

type Style = React.CSSProperties & Record<`--${string}`, string | number>;

function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useCountUp(target: number, active: boolean, duration = 2200): number {
  const [value, setValue] = useState(target);

  useEffect(() => {
    if (!active) {
      return;
    }

    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutExpo: fast start, long soft landing
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setValue(Math.round(target * eased));
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    setValue(0);
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, duration, target]);

  return value;
}

function Photo({ image, className, sizes, delay }: { image: HomepageImage | undefined; className: string; sizes: string; delay: number }) {
  if (!image) {
    return null;
  }

  return (
    <figure className={`wpp-about__photo ${className}`} style={{ "--d": delay } as Style}>
      <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={sizes} loading="lazy" unoptimized />
    </figure>
  );
}

export function AboutIntro({
  heading,
  lead,
  html,
  images,
}: {
  heading: string;
  lead: string;
  html: string;
  images: HomepageImage[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const moreId = useId();
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const count = useCountUp(HAPPY_COUPLES, visible);

  // Reveal on scroll. Content stays visible until JS opts the section into animation,
  // so nothing is hidden if scripts fail.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return;
    }

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    section.dataset.anim = "on";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Scroll-linked parallax: writes a -1..1 progress value to a CSS variable.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) {
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      if (rect.bottom < 0 || rect.top > viewport) {
        return;
      }
      const progress = (rect.top + rect.height / 2 - viewport / 2) / (viewport / 2 + rect.height / 2);
      section.style.setProperty("--wpp-about-p", Math.max(-1, Math.min(1, progress)).toFixed(4));
    };
    const onScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (!heading.trim() && !html.trim()) {
    return null;
  }

  const [main, top, bottom, accent] = images;

  return (
    <section ref={sectionRef} className={`wpp-about${visible ? " is-visible" : ""}`} aria-labelledby="wpp-about-heading">
      <span className="wpp-about__watermark" aria-hidden="true">
        Love
      </span>

      <div className="wpp-about__inner">
        <div className="wpp-about__copy">
          <h1 id="wpp-about-heading" className="wpp-about__eyebrow wpp-about__reveal" style={{ "--d": 0 } as Style}>
            <span className="wpp-about__eyebrow-line" aria-hidden="true" />
            <span>{heading}</span>
          </h1>

          <p className="wpp-about__title">
            <span className="wpp-about__line">
              <span style={{ "--d": 1 } as Style}>We Capture Emotions,</span>
            </span>
            <span className="wpp-about__line">
              <em style={{ "--d": 2 } as Style}>Not Just Photos</em>
            </span>
          </p>

          <p className="wpp-about__lead wpp-about__reveal" style={{ "--d": 3 } as Style}>
            {lead}
          </p>

          <div id={moreId} className={`wpp-about__more${expanded ? " is-open" : ""}`} inert={!expanded}>
            <div className="wpp-about__more-inner">
              <div className="wpp-about__text" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>

          <ul className="wpp-about__features">
            {features.map((feature, index) => (
              <li key={feature.title} className="wpp-about__feature wpp-about__reveal" style={{ "--d": 4 + index * 0.6 } as Style}>
                <span className="wpp-about__feature-icon" aria-hidden="true">
                  <i className={`fa ${feature.icon}`} />
                </span>
                <span>
                  <strong>{feature.title}</strong>
                  <small>{feature.subtitle}</small>
                </span>
              </li>
            ))}
          </ul>

          <div className="wpp-about__actions wpp-about__reveal" style={{ "--d": 6 } as Style}>
            <Link className="wpp-about__cta" href="/contact" title="Contact Wedding Photo Planet">
              <span>Get In Touch</span>
              <i className="fa fa-long-arrow-right" aria-hidden="true" />
            </Link>
            <button
              type="button"
              className="wpp-about__toggle"
              aria-expanded={expanded}
              aria-controls={moreId}
              onClick={() => setExpanded((open) => !open)}
            >
              {expanded ? "Show less" : "Read our story"}
              <i className="fa fa-angle-down" aria-hidden="true" />
            </button>
          </div>
        </div>

        {main ? (
          <div className="wpp-about__collage">
            <span className="wpp-about__arch-frame" aria-hidden="true" />
            <Photo image={main} className="wpp-about__photo--main" sizes="(max-width: 991px) 60vw, 26vw" delay={1} />
            <Photo image={top} className="wpp-about__photo--top" sizes="(max-width: 991px) 40vw, 18vw" delay={2.2} />
            <Photo image={bottom} className="wpp-about__photo--bottom" sizes="(max-width: 991px) 45vw, 20vw" delay={3.2} />
            <Photo image={accent} className="wpp-about__photo--accent" sizes="160px" delay={4.2} />

            <svg className="wpp-about__badge" viewBox="0 0 120 120" aria-hidden="true">
              <defs>
                <path id="wpp-about-badge-path" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
              </defs>
              <text>
                <textPath href="#wpp-about-badge-path">CANDID • CINEMATIC • TIMELESS • </textPath>
              </text>
              <path className="wpp-about__badge-heart" d="M60 72s-14-8.6-14-18a8 8 0 0 1 14-5.3A8 8 0 0 1 74 54c0 9.4-14 18-14 18z" />
            </svg>

            <div className="wpp-about__stat" role="img" aria-label={`${HAPPY_COUPLES}+ happy couples`}>
              <span className="wpp-about__stat-icon" aria-hidden="true">
                <i className="fa fa-users" />
              </span>
              <span aria-hidden="true">
                <strong>{count.toLocaleString("en-IN")}+</strong>
                <small>Happy Couples</small>
              </span>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
