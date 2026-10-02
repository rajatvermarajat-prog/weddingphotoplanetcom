import type { Metadata } from "next";
import { FullBanner, PublicLayout } from "@/app/_wpp-pages/Legacy";
import { contactPageContent } from "@/app/_wpp-pages/contact-data";
import { footer } from "@/app/_wpp-pages/data";
import ContactHero from "./ContactHero";
import EnquiryForm from "./EnquiryForm";
import StoriesShowcase from "./StoriesShowcase";
import "./contact-page.css";

const { content } = contactPageContent;

export const metadata: Metadata = {
  title: contactPageContent.metadata.title,
  description: contactPageContent.metadata.description,
};

const phones = footer.mobile.split(",").map((phone) => phone.trim());
const emails = [footer.email1, footer.email2];
const dial = (phone: string) => phone.replace(/[^\d+]/g, "");
// Same WhatsApp line as the site footer and the floating chat button.
const whatsappPhone = phones[1] ?? phones[0];
const whatsappNumber = whatsappPhone.replace(/\D/g, "");
const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;

const steps = [
  { title: "Share your details", text: "Your dates, venue, and what you have in mind." },
  { title: "We get back to you", text: "We read every enquiry and usually reply within one business day." },
  { title: "Plan your coverage", text: "We suggest the best way to cover your story." },
];

function Icon({ path }: { path: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

function ContactCards() {
  return (
    <section className="ct-cards" aria-label="Ways to reach us">
      <div className="ct-cards__grid">
        <div className="ct-card">
          <span className="ct-card__icon">
            <Icon path="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </span>
          <h2 className="ct-card__title">Call Us</h2>
          {phones.map((phone) => (
            <a className="ct-card__link" href={`tel:${dial(phone)}`} key={phone}>
              {phone}
            </a>
          ))}
        </div>
        <div className="ct-card">
          <span className="ct-card__icon">
            <Icon path="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </span>
          <h2 className="ct-card__title">WhatsApp</h2>
          <a className="ct-card__link" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            {whatsappPhone}
          </a>
          <a className="ct-card__link ct-card__link--action" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Start a chat
          </a>
        </div>
        <div className="ct-card">
          <span className="ct-card__icon">
            <Icon path="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" />
          </span>
          <h2 className="ct-card__title">Email</h2>
          {emails.map((email) => (
            <a className="ct-card__link" href={`mailto:${email}`} key={email}>
              {email}
            </a>
          ))}
        </div>
        <div className="ct-card">
          <span className="ct-card__icon">
            <Icon path="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </span>
          <h2 className="ct-card__title">Find Us</h2>
          <p className="ct-card__text">Wedding Photo Planet</p>
          <p className="ct-card__text">{footer.address}</p>
        </div>
      </div>
    </section>
  );
}

function EnquirySection() {
  return (
    <section className="ct-enquiry" id="enquiry">
      <div className="ct-enquiry__inner">
        <div className="ct-enquiry__side">
          <p className="ct-eyebrow">{content.heading2}</p>
          <h2 className="ct-title">Tell Us About Your Day</h2>
          <span className="ct-line" aria-hidden="true" />
          <p className="ct-enquiry__text">{content.desc1}</p>
          <ol className="ct-steps">
            {steps.map((step, index) => (
              <li className="ct-step" key={step.title}>
                <span className="ct-step__num">{String(index + 1).padStart(2, "0")}</span>
                <span className="ct-step__copy">
                  <strong>{step.title}</strong>
                  {step.text}
                </span>
              </li>
            ))}
          </ol>
        </div>
        <div className="ct-enquiry__card">
          <EnquiryForm whatsappNumber={whatsappNumber} email={emails[0]} />
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <PublicLayout activePath="/contact">
      <ContactHero
        slides={contactPageContent.heroSlides}
        eyebrow={content.main_heading}
        title="Let&rsquo;s Capture Your Story"
        text={content.intro_text}
        whatsappUrl={whatsappUrl}
      />
      <ContactCards />
      <EnquirySection />
      <FullBanner src={content.banner1} alt="Wedding Photo Planet" />
      <StoriesShowcase stories={contactPageContent.stories} />
      <FullBanner src={content.banner2} alt="Wedding Photo Planet" />
    </PublicLayout>
  );
}
