import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { HomepageData } from "./types";

const footerLinks = [
  { href: "/", label: "Home", title: "Wedding Photo Planet" },
  { href: "/images", label: "Images", title: "Our Images" },
  { href: "/wedding", label: "Wedding", title: "Wedding Photography" },
  { href: "/pre-wedding", label: "Pre Wedding", title: "Pre Wedding Photography" },
  { href: "/cinematography", label: "Cinematography", title: "Our Cinematography" },
  { href: "/blog/", label: "Blog", title: "Our Blog" },
  { href: "/contact", label: "Contact Us", title: "Contact Wedding Photo Planet" },
  { href: "/sitemap", label: "Site Map", title: "Our Site Map" },
] as const;

type Style = React.CSSProperties & Record<`--${string}`, string | number>;

export function SiteFooter({ footer }: { footer: HomepageData["footer"] }) {
  const socials = [
    ["facebook", "Facebook", "fa-facebook", footer.social.facebook],
    ["instagram", "Instagram", "fa-instagram", footer.social.instagram],
    ["youtube", "YouTube", "fa-youtube-play", footer.social.youtube],
    ["twitter", "Twitter", "fa-twitter", footer.social.twitter],
    ["linkedin", "LinkedIn", "fa-linkedin", footer.social.linkedin],
    ["tumblr", "Tumblr", "fa-tumblr", footer.social.tumblr],
  ] as const;
  // The field can hold several comma-separated numbers; dial the first.
  const phone = (footer.mobile.split(/[,/]/)[0] ?? "").replace(/[^\d+]/g, "");
  const emails = [footer.email1, footer.email2].map((email) => email.replace(/^[\s:-]+/, "").trim()).filter(Boolean);

  return (
    <footer className="wpp-foot is-visible">
      <div className="wpp-foot__cta wpp-foot__reveal" style={{ "--d": 0 } as Style}>
        <div>
          <h2 className="wpp-foot__headline">Planning your wedding?</h2>
          <p className="wpp-foot__sub">Let&rsquo;s talk about your dates and how we can capture your day.</p>
        </div>
        <div className="wpp-foot__cta-actions">
          <Link className="wpp-foot__btn wpp-foot__btn--solid" href="/contact" title="Contact Wedding Photo Planet">
            <span>Book Your Date</span>
            <i className="fa fa-long-arrow-right" aria-hidden="true" />
          </Link>
          <a className="wpp-foot__btn" href="https://api.whatsapp.com/send?phone=919990905195" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-whatsapp" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      <div className="wpp-foot__grid">
        <div className="wpp-foot__col wpp-foot__reveal" style={{ "--d": 1 } as Style}>
          <Image className="wpp-foot__logo" src="/assets/images/logo.png" alt="Wedding Photo Planet" width={200} height={50} loading="lazy" unoptimized />
          <p className="wpp-foot__about">Candid wedding photography &amp; cinematography that turns your moments into memories for a lifetime.</p>
          <ul className="wpp-foot__social">
            {socials.map(([key, label, icon, href]) => (
              <li key={key}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${label}`}>
                  <i className={`fa ${icon}`} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="wpp-foot__col wpp-foot__reveal" style={{ "--d": 2 } as Style}>
          <h4>Visit Us</h4>
          <p className="wpp-foot__label">{footer.heading2}</p>
          <p>{footer.address}</p>
        </div>

        <div className="wpp-foot__col wpp-foot__reveal" style={{ "--d": 3 } as Style}>
          <h4>Get In Touch</h4>
          <ul className="wpp-foot__contact">
            {phone ? (
              <li>
                <i className="fa fa-phone" aria-hidden="true" />
                <a className="wpp-foot__link" href={`tel:${phone}`}>
                  {footer.mobile}
                </a>
              </li>
            ) : null}
            {emails.map((email) => (
              <li key={email}>
                <i className="fa fa-envelope-o" aria-hidden="true" />
                <a className="wpp-foot__link" href={`mailto:${email}`}>
                  {email}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="wpp-foot__col wpp-foot__reveal" style={{ "--d": 4 } as Style} aria-label="Footer">
          <h4>Quick Links</h4>
          <ul className="wpp-foot__links">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link className="wpp-foot__link" href={item.href} title={item.title}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="wpp-foot__bottom">
        <p>{footer.copyright}</p>
        <a href="#main-content" className="wpp-foot__top">
          Back to top <i className="fa fa-long-arrow-up" aria-hidden="true" />
        </a>
      </div>

      <a href="https://api.whatsapp.com/send?phone=919990905195" className="float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <i className="fa fa-whatsapp my-float" aria-hidden="true" />
      </a>
      <a href="tel:919990951995" className="float-mobile" aria-label="Call us">
        <i className="fa fa-phone my-float" aria-hidden="true" />
      </a>
      <a id="back2Top" href="#main-content" aria-label="Back to top">
        &#10148;
      </a>
    </footer>
  );
}
