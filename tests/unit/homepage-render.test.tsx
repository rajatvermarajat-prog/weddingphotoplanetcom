import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Homepage } from "@/features/public-pages/home/Homepage";
import type { HomepageData } from "@/features/public-pages/home/types";

const fixture: HomepageData = {
  seo: {
    title: "SEO title",
    description: "SEO description",
    keywords: "one, two",
    canonicalPath: "/",
    ogImage: "/assets/images/favicon.png",
  },
  heroSlides: [
    {
      src: "/uploads/admin_image/slider/hero.jpg",
      alt: "Wedding photography banner slide 1",
      width: 960,
      height: 480,
      priority: true,
    },
  ],
  intro: {
    heading: "Intro Heading",
    html: "<p>Intro copy</p>",
  },
  firstBanner: {
    src: "/uploads/admin_image/slider/banner-one.jpg",
    alt: "Celebrity Photography",
    width: 960,
    height: 480,
  },
  story: {
    heading: "Story Heading",
    html: "<p>Story copy</p>",
  },
  services: [
    {
      title: "Wedding",
      descriptionHtml: "<p>Wedding service</p>",
      href: "/wedding",
      linkTitle: "Read more about wedding photography",
      image: {
        src: "/uploads/admin_image/slider/service.jpg",
        alt: "Wedding Photography",
        width: 400,
        height: 300,
      },
    },
    {
      title: "Pre Wedding",
      descriptionHtml: "",
      href: "/pre-wedding",
      linkTitle: "Read more about pre-wedding photography",
      image: null,
    },
    {
      title: "Cinematography",
      descriptionHtml: "",
      href: "/cinematography",
      linkTitle: "Read more about cinematography",
      image: null,
    },
  ],
  galleryImages: [
    {
      id: 1,
      src: "/uploads/admin_image/slider/gallery.jpg",
      href: "/admin_image/slider/gallery.jpg",
      alt: "Gallery alt",
    },
  ],
  testimonials: {
    heading: "Client Reviews",
    items: [
      {
        id: 2,
        quote: "Lovely work",
        clientName: "Client Name",
        image: null,
      },
    ],
  },
  whyChoose: {
    heading: "Why Choose Us",
    html: "<p>Reason intro</p>",
    points: ["Point one"],
    closingHtml: "",
  },
  secondBanner: null,
  about: {
    heading: "About Heading",
    html: "About copy",
    slides: [],
  },
  photography: {
    heading: "Photography Heading",
    html: "<p>Photography copy</p>",
  },
  thirdBanner: null,
  footer: {
    social: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
      twitter: "#",
      linkedin: "#",
      tumblr: "#",
    },
    heading1: "Contact Details",
    heading2: "Studio",
    address: "Delhi",
    mobile: "123",
    email1: "hello@example.com",
    email2: "",
    copyright: "Copyright",
  },
};

describe("Homepage render", () => {
  it("renders expected legacy homepage sections and critical links", () => {
    const html = renderToStaticMarkup(<Homepage data={fixture} />);

    expect(html).toContain("Intro Heading");
    expect(html).toContain("Our Services");
    expect(html).toContain("Our Gallery");
    expect(html).toContain("Client Reviews");
    expect(html).toContain("Why Choose Us");
    expect(html).toContain("Photography Heading");
    expect(html).toContain('href="/wedding"');
    expect(html).toContain('href="/pre-wedding"');
    expect(html).toContain('href="/cinematography"');
    expect(html).toContain('href="/images"');
    expect(html).toContain('href="/blog/"');
    expect(html).toContain('href="/contact"');
    expect(html).toContain('href="https://api.whatsapp.com/send?phone=919990905195"');
    expect(html).toContain('href="tel:919990951995"');
  });

  it("renders legacy media paths without moving or renaming them", () => {
    const html = renderToStaticMarkup(<Homepage data={fixture} />);

    expect(html).toContain("/uploads/admin_image/slider/hero.jpg");
    expect(html).toContain("/uploads/admin_image/slider/gallery.jpg");
    expect(html).toContain("/admin_image/slider/gallery.jpg");
    expect(html).toContain("Gallery alt");
  });

  it("gracefully omits missing media while keeping text and links", () => {
    const data: HomepageData = {
      ...fixture,
      heroSlides: [],
      firstBanner: null,
      galleryImages: [],
      testimonials: { heading: "", items: [] },
    };

    const html = renderToStaticMarkup(<Homepage data={data} />);

    expect(html).toContain("Intro Heading");
    expect(html).toContain("Our Gallery");
    expect(html).toContain('href="/images"');
    expect(html).not.toContain("/uploads/admin_image/slider/hero.jpg");
  });
});
