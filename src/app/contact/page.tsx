import type { Metadata } from "next";
import { CarouselBanner, FullBanner, PublicLayout } from "@/app/_wpp-pages/Legacy";
import { contactPageContent } from "@/app/_wpp-pages/contact-data";

const { content } = contactPageContent;

export const metadata: Metadata = {
  title: contactPageContent.metadata.title,
  description: contactPageContent.metadata.description,
};

function Field({ id, label, name, placeholder, type = "text" }: { id: string; label: string; name: string; placeholder: string; type?: string }) {
  return (
    <div className="col-md-12">
      <label className="wpp-contact-label" htmlFor={id}>{label}</label>
      <div className="form-element">
        <input id={id} type={type} name={name} placeholder={placeholder} required />
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <form action="" method="post" className="wpp-contact-form">
      <div className="row">
        <Field id="wpp-c-name" label="Name" name="user_name" placeholder="Your name" />
        <Field id="wpp-c-email" label="Email" name="user_email" placeholder="you@example.com" type="email" />
        <Field id="wpp-c-phone" label="Phone" name="user_number" placeholder="Phone number" type="tel" />
        <Field id="wpp-c-subject" label="Subject" name="subject" placeholder="e.g. Wedding date enquiry" />
        <div className="col-md-12">
          <label className="wpp-contact-label" htmlFor="wpp-c-msg">Message</label>
          <div className="form-element">
            <textarea
              id="wpp-c-msg"
              className="wpp-contact-textarea"
              name="comment"
              cols={30}
              rows={4}
              placeholder="Tell us about your wedding date, location, and what you are looking for"
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-element wpp-contact-submit-wrap">
            <button type="submit" className="wpp-contact-submit"><span>Submit enquiry</span></button>
          </div>
        </div>
      </div>
    </form>
  );
}

function ContactLead() {
  return (
    <section className="blog-main-top wpp-contact-lead">
      <div className="container">
        <div className="col-md-12">
          <div className="titlebar">
            <h2>{content.main_heading}</h2>
            <span className="b-line" />
          </div>
          <p className="wpp-contact-intro">{content.intro_text}</p>
          <div className="row wpp-contact-split">
            <div className="col-md-6 wpp-contact-gallery-col">
              <div className="wpp-contact-gallery-card">
                <CarouselBanner id="carousel-2" slides={[...contactPageContent.gallerySlides]} alt="Wedding photography preview" />
              </div>
            </div>
            <div className="col-md-6 wpp-contact-form-col">
              <div className="wpp-contact-form-card">
                <h3 className="wpp-contact-form-title">{content.heading2}</h3>
                <p className="wpp-contact-form-lead">{content.desc1}</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoriesCarousel() {
  return (
    <section className="two-part-contact wpp-contact-stories">
      <div className="container-fluid wpp-contact-stories-inner">
        <header className="wpp-contact-stories-head">
          <h2 className="wpp-contact-stories-title">Stories &amp; moments</h2>
          <p className="wpp-contact-stories-desc">
            Short notes from recent celebrations alongside photographs. From candid rituals to portraits with family, here is a little more context around the frames you see in our galleries. Use the arrows to browse.
          </p>
        </header>
        <div id="carousel-3" className="carousel slide wpp-contact-stories-carousel" data-ride="carousel">
          <div className="carousel-inner">
            {contactPageContent.stories.map((story, index) => (
              <div className={`item ${index === 0 ? "active" : ""}`} key={story.image}>
                <div className="wpp-contact-slide">
                  <div className="wpp-contact-slide-text-col">
                    <h3 className="wpp-contact-slide-title">{story.title}</h3>
                    <p className="wpp-contact-slide-text">{story.text}</p>
                    <p className="wpp-contact-slide-hint">Planning something similar? Mention your city and season in the form above—we will suggest the best way to cover your story.</p>
                  </div>
                  <div className="wpp-contact-slide-media-col">
                    <div className="wpp-contact-slide-img-wrap">
                      <img src={story.image} alt={story.title} loading="lazy" decoding="async" width="640" height="360" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a className="left carousel-control" href="#carousel-3" data-slide="prev">
            <i className="fa fa-chevron-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#carousel-3" data-slide="next">
            <i className="fa fa-chevron-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <PublicLayout activePath="/contact">
      <div className="wpp-contact-page">
        <section className="main-banner wpp-contact-hero">
          <CarouselBanner slides={[...contactPageContent.heroSlides]} alt="Contact - Wedding Photo Planet" />
        </section>
        <ContactLead />
        <FullBanner src={content.banner1} alt="Wedding Photo Planet" />
        <StoriesCarousel />
        <FullBanner src={content.banner2} alt="Wedding Photo Planet" />
      </div>
    </PublicLayout>
  );
}
