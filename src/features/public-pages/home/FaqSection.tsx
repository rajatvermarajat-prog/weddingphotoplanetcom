"use client";

import React, { useState } from "react";
import Link from "next/link";

type Faq = { question: string; answer: string };

const FAQS: Faq[] = [
  {
    question: "What services does Wedding Photo Planet offer?",
    answer:
      "We cover wedding photography, pre-wedding shoots and cinematography, along with candid coverage of engagements, ceremonies and family functions.",
  },
  {
    question: "Which cities do you cover?",
    answer:
      "We are based in Delhi NCR and shoot across India. Our pre-wedding shoots have taken us to Jaipur, Udaipur, Rishikesh, Agra, Manali, Shimla, Goa, Mussoorie, Nainital and Kashmir.",
  },
  {
    question: "How do I book my date?",
    answer:
      "Send us an enquiry from the contact page, or call or WhatsApp us with your dates and venue. We read every enquiry and usually reply within one business day.",
  },
  {
    question: "What is candid photography?",
    answer:
      "Candid photography captures real, unposed moments as they happen: the laughter, the happy tears and the little details. Our photographers work discreetly so you stay at ease and the pictures reflect the natural spirit of your day.",
  },
  {
    question: "How does a pre-wedding shoot work?",
    answer:
      "We start with a consultation to understand your style, then suggest locations that suit your story. On the shoot day our team keeps things relaxed so you can be yourselves, and every photograph is edited before delivery.",
  },
  {
    question: "Do you offer both photography and films?",
    answer:
      "Yes. The same team handles candid photography and cinematic wedding films, including pre-wedding films and teasers, so your photos and films tell one story.",
  },
];

// FAQ accordion: one answer open at a time. Also emits FAQPage structured data for search engines.
export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section className="wpp-faq" aria-labelledby="wpp-faq-title">
      <div className="wpp-faq__inner">
        <div className="wpp-faq__intro">
          <p className="wpp-faq__eyebrow">FAQ</p>
          <h2 id="wpp-faq-title" className="wpp-faq__title">
            Questions Couples Ask Us
          </h2>
          <span className="wpp-faq__rule" aria-hidden="true" />
          <p className="wpp-faq__lead">Quick answers before you book. If yours is not here, ask us directly and we will get back to you.</p>
          <Link className="wpp-faq__cta" href="/contact">
            Ask a Question
            <i className="fa fa-long-arrow-right" aria-hidden="true" />
          </Link>
        </div>

        <ul className="wpp-faq__list">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <li className={`wpp-faq__item${isOpen ? " is-open" : ""}`} key={faq.question}>
                <h3 className="wpp-faq__question">
                  <button type="button" aria-expanded={isOpen} aria-controls={`wpp-faq-a-${i}`} id={`wpp-faq-q-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                    <span className="wpp-faq__num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="wpp-faq__text">{faq.question}</span>
                    <span className="wpp-faq__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div className="wpp-faq__answer" id={`wpp-faq-a-${i}`} role="region" aria-labelledby={`wpp-faq-q-${i}`} inert={!isOpen}>
                  <p>{faq.answer}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </section>
  );
}
