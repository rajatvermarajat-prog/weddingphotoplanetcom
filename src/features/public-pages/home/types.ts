export type HomepageImage = {
  src: string;
  legacyHref?: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
};

export type HomepageService = {
  title: string;
  descriptionHtml: string;
  href: string;
  linkTitle: string;
  image: HomepageImage | null;
};

export type HomepageGalleryImage = {
  id: number;
  src: string;
  href: string;
  alt: string;
};

export type HomepageTestimonial = {
  id: number;
  quote: string;
  clientName: string;
  image: HomepageImage | null;
};

export type HomepageFooter = {
  social: {
    facebook: string;
    instagram: string;
    youtube: string;
    twitter: string;
    linkedin: string;
    tumblr: string;
  };
  heading1: string;
  heading2: string;
  address: string;
  mobile: string;
  email1: string;
  email2: string;
  copyright: string;
};

export type HomepageData = {
  seo: {
    title: string;
    description: string;
    keywords: string;
    canonicalPath: "/";
    ogImage: string;
  };
  heroSlides: HomepageImage[];
  intro: {
    heading: string;
    html: string;
  };
  firstBanner: HomepageImage | null;
  story: {
    heading: string;
    html: string;
  };
  services: HomepageService[];
  galleryImages: HomepageGalleryImage[];
  testimonials: {
    heading: string;
    items: HomepageTestimonial[];
  };
  whyChoose: {
    heading: string;
    html: string;
    points: string[];
    closingHtml: string;
  };
  secondBanner: HomepageImage | null;
  about: {
    heading: string;
    html: string;
    slides: HomepageImage[];
  };
  photography: {
    heading: string;
    html: string;
  };
  thirdBanner: HomepageImage | null;
  footer: HomepageFooter;
};
