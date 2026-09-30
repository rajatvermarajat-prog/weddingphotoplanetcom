import fs from "node:fs";
import path from "node:path";
import { mainReadDb } from "@/server/db";
import { normalizeLegacyMediaPath, resolveOriginalMedia } from "@/server/services/media";
import type { HomepageData, HomepageFooter, HomepageImage } from "./types";

const LEGACY_DEFAULT_SEO = {
  title: "Wedding Photo Planet - Top Candid Photographer, Best Wedding Photography in Delhi, India",
  description:
    "Find out the best candid wedding photographers in Delhi NCR? Wedding Photo Planet is one of the top candid wedding photographer, provides top rated pre-wedding and cinematography in Delhi NCR, India. Fore further details, visit us!!",
  keywords:
    "Best Wedding Photographers in Delhi, Best Wedding Photographers in Delhi NCR, Candid Photographer, Best Wedding photographer, Candid Wedding Photographer, Best Wedding Photographers, Candid Photography in Delhi, Best Candid Wedding Photographers in Delhi",
  ogImage: "/assets/images/favicon.png",
} as const;

export const homepageQueryPlan = Object.freeze({
  queryCount: 5,
  tables: ["wid_home", "wid_slide", "wid_product_image", "wid_testimonial", "wid_footer"],
});

function text(value: string | null | undefined): string {
  return value ?? "";
}

function pagePath(route: string): string {
  const routes: Record<string, string> = {
    home: "/",
    images: "/images",
    wedding: "/wedding",
    "pre-wedding": "/pre-wedding",
    cinematography: "/cinematography",
    contact: "/contact",
    sitemap: "/sitemap",
  };

  return routes[route] ?? `/${route.replace(/^\/+/, "")}`;
}

function normalizeSliderPath(filename: string | null | undefined): string {
  const raw = text(filename).trim();

  if (!raw) {
    return "";
  }

  const normalized = normalizeLegacyMediaPath(raw);

  if (normalized.startsWith("uploads/admin_image/")) {
    return normalized;
  }

  if (normalized.startsWith("admin_image/")) {
    return normalizeLegacyMediaPath(normalized);
  }

  return normalizeLegacyMediaPath(`admin_image/slider/${normalized}`);
}

function sliderImage(
  filename: string | null | undefined,
  alt: string,
  width: number,
  height: number,
  priority = false,
): HomepageImage | null {
  const normalized = normalizeSliderPath(filename);

  if (!normalized) {
    return null;
  }

  return {
    src: resolveOriginalMedia(normalized).publicPath,
    alt,
    width,
    height,
    priority,
  };
}

function galleryFullPath(filename: string | null | undefined): string {
  const raw = text(filename).trim();

  if (!raw) {
    return "";
  }

  return `/admin_image/slider/${raw.replace(/^\/+/, "")}`;
}

function galleryImagePath(filename: string | null | undefined): string {
  const href = galleryFullPath(filename);

  if (!href) {
    return "";
  }

  return resolveOriginalMedia(href).publicPath;
}

function fallback(value: string | null | undefined, fallbackValue: string): string {
  const clean = text(value).trim();
  return clean || fallbackValue;
}

type LegacyFooterRow = {
  facbook: string | null;
  instagram: string | null;
  youtube: string | null;
  twitter: string | null;
  linkidn: string | null;
  tumblr: string | null;
  heading1: string | null;
  heading2: string | null;
  address: string | null;
  mobile: string | null;
  email1: string | null;
  email2: string | null;
  copyright: string | null;
};

type LegacyHomeRow = {
  h1: string | null;
  d1: string | null;
  banner1: string | null;
  h2: string | null;
  d2: string | null;
  serviceHeading1: string | null;
  serviceImg1: string | null;
  servicesDesc1: string | null;
  serviceHeading2: string | null;
  serviceImg2: string | null;
  servicesDesc2: string | null;
  serviceHeading3: string | null;
  serviceImg3: string | null;
  servicesDesc3: string | null;
  clientHeading: string | null;
  whyChoose: string | null;
  whyChooseDec: string | null;
  chose1: string | null;
  chose2: string | null;
  chose3: string | null;
  chose4: string | null;
  chose5: string | null;
  chose6: string | null;
  chose7: string | null;
  chose8: string | null;
  chose9: string | null;
  chose10: string | null;
  banner2: string | null;
  ab2Heading: string | null;
  ab2Desc1: string | null;
  ab2Slid1: string | null;
  ab2Slid2: string | null;
  ab2Slid3: string | null;
  phHeading: string | null;
  phDesc: string | null;
  banner3: string | null;
  seoDesc: string | null;
  seoKey: string | null;
  seoTitle: string | null;
};

type LegacySlideRow = {
  id: number;
  imageName: string | null;
};

type LegacyGalleryRow = {
  id: number;
  name: string;
  altImg: string | null;
  status: "active" | "draft";
};

type LegacyTestimonialRow = {
  id: number;
  descText: string | null;
  clientName: string | null;
  image: string | null;
};

function mapFooter(footer: LegacyFooterRow | null): HomepageFooter {
  return {
    social: {
      facebook: fallback(footer?.facbook, "#"),
      instagram: fallback(footer?.instagram, "#"),
      youtube: fallback(footer?.youtube, "#"),
      twitter: fallback(footer?.twitter, "#"),
      linkedin: fallback(footer?.linkidn, "#"),
      tumblr: fallback(footer?.tumblr, "#"),
    },
    heading1: fallback(footer?.heading1, "Contact Details"),
    heading2: text(footer?.heading2),
    address: text(footer?.address),
    mobile: text(footer?.mobile),
    email1: text(footer?.email1),
    email2: text(footer?.email2),
    copyright: fallback(footer?.copyright, "© 2010-2026 Wedding Photo Planet. All Rights Reserved."),
  };
}

function mapHomepageData({
  home,
  heroSlides,
  galleryRows,
  testimonials,
  footer,
}: {
  home: LegacyHomeRow | null;
  heroSlides: LegacySlideRow[];
  galleryRows: LegacyGalleryRow[];
  testimonials: LegacyTestimonialRow[];
  footer: LegacyFooterRow | null;
}): HomepageData {
  const serviceDefinitions = [
    {
      title: text(home?.serviceHeading1),
      descriptionHtml: text(home?.servicesDesc1),
      href: pagePath("wedding"),
      linkTitle: "Read more about wedding photography",
      image: sliderImage(home?.serviceImg1, "Wedding Photography", 400, 300),
    },
    {
      title: text(home?.serviceHeading2),
      descriptionHtml: text(home?.servicesDesc2),
      href: pagePath("pre-wedding"),
      linkTitle: "Read more about pre-wedding photography",
      image: sliderImage(home?.serviceImg2, "Pre Wedding Photography", 400, 300),
    },
    {
      title: text(home?.serviceHeading3),
      descriptionHtml: text(home?.servicesDesc3),
      href: pagePath("cinematography"),
      linkTitle: "Read more about cinematography",
      image: sliderImage(home?.serviceImg3, "Cinematography", 400, 300),
    },
  ];

  return {
    seo: {
      title: fallback(home?.seoTitle, LEGACY_DEFAULT_SEO.title),
      description: fallback(home?.seoDesc, LEGACY_DEFAULT_SEO.description),
      keywords: fallback(home?.seoKey, LEGACY_DEFAULT_SEO.keywords),
      canonicalPath: "/",
      ogImage: LEGACY_DEFAULT_SEO.ogImage,
    },
    heroSlides: heroSlides
      .map((slide, index) =>
        sliderImage(
          slide.imageName,
          `Wedding photography banner slide ${index + 1}`,
          960,
          480,
          index === 0,
        ),
      )
      .filter((image): image is HomepageImage => image !== null),
    intro: {
      heading: text(home?.h1),
      html: text(home?.d1),
    },
    firstBanner: sliderImage(home?.banner1, "Celebrity Photography", 960, 480),
    story: {
      heading: text(home?.h2),
      html: text(home?.d2),
    },
    services: serviceDefinitions,
    galleryImages: galleryRows
      .filter((row) => row.status === "active" || row.status === "draft")
      .map((row) => ({
        id: row.id,
        src: galleryImagePath(row.name),
        href: galleryFullPath(row.name),
        alt: fallback(row.altImg, "Gallery image"),
      }))
      .filter((image) => image.src !== "" && image.href !== ""),
    testimonials: {
      heading: text(home?.clientHeading),
      items: testimonials.map((testimonial) => ({
        id: testimonial.id,
        quote: text(testimonial.descText),
        clientName: text(testimonial.clientName),
        image: sliderImage(
          testimonial.image,
          testimonial.clientName
            ? `Photo of ${testimonial.clientName}, client testimonial`
            : "Client testimonial photo",
          120,
          120,
        ),
      })),
    },
    whyChoose: {
      heading: text(home?.whyChoose),
      html: text(home?.whyChooseDec),
      points: [
        home?.chose1,
        home?.chose2,
        home?.chose3,
        home?.chose4,
        home?.chose5,
        home?.chose6,
        home?.chose7,
        home?.chose8,
        home?.chose9,
      ]
        .map(text)
        .filter(Boolean),
      closingHtml: text(home?.chose10),
    },
    secondBanner: sliderImage(home?.banner2, "Celebrity Photography", 960, 480),
    about: {
      heading: text(home?.ab2Heading),
      html: text(home?.ab2Desc1),
      slides: [
        sliderImage(home?.ab2Slid1, "Wedding Photography", 640, 480),
        sliderImage(home?.ab2Slid2, "Best Wedding Photography", 640, 480),
        sliderImage(home?.ab2Slid3, "Top Candid Photography", 640, 480),
      ].filter((image): image is HomepageImage => image !== null),
    },
    photography: {
      heading: text(home?.phHeading),
      html: text(home?.phDesc),
    },
    thirdBanner: sliderImage(home?.banner3, "Celebrity Photography", 960, 480),
    footer: mapFooter(footer),
  };
}

function imageFromLivePath(src: string, alt: string, width: number, height: number): HomepageImage | null {
  return sliderImage(src.replace(/^uploads\//, ""), alt, width, height);
}

function applyLiveHomepageFallback(data: HomepageData): HomepageData {
  return {
    ...data,
    intro: {
      heading: "About Wedding Photo Planet",
      html:
        'We are the leading <b>best Wedding photographers in Delhi</b> , capturing your special moments in an unique style with artistry and creativity. When you are searching for the go to photographer for your weddings, pre-wedding shoots, ceremonies, or any kind of functions, We are very near you! We are always there near to you in your service, ready to capture your auspicious moments. We are a team of <a href="https://weddingphotoplanet.com/wedding">best Wedding Photographers in Delhi </a> that blends professionalism and a real passion to serve, for all of your events be it grand wedding, private pre-wedding shoot, ceremonies and much more family function. Our Head Office at New Delhi; we serve our clients all over India; as We aim to serve the best Candid wedding photography service everywhere in the country. We have done hundreds of plus memorable Professional photo shoots and countless sweet Pre-wedding shoots in these past years and we also became the best destination pre-wedding photographer. Contact us and let us help you to book and secure the service easily by just calling us from the contact numbers listed on the website; our professionals will guide you with every detail. At Wedding Photo Planet, your imagination and desires are very important to us. We make it sure to give the most Cinematic and Lovely photographs and video which reflect your sweet and precious moments of your life. Your quality photos will help you relive these particular memories in the years to come. You inspire us when you see the smile after receiving the beautiful outcomes from the <a href="https://weddingphotoplanet.com/images">best photography</a> skills of ours; it’s how we fulfil our dreams and that helps us continue to perform in order to improve ourselves. Let us Wedding Photo Planet accompany you by capturing the most cinematic wedding videography and also by capturing those wonderful candid memories. Get In Touch With us!',
    },
    heroSlides: [
      ["17851335382090944879wedding photographer.jpg", 5281, 3183],
      ["1785133550138847930candid photographer.jpg", 5875, 3541],
      ["1785133559249864209best wedding photographers in delhi ncr.jpg", 5918, 3566],
      ["178513359363645439best wedding photographers.jpg", 1631, 983],
      ["1785133608248149687wedding photographers near me.jpg", 5286, 3186],
      ["1785133615529864425photographer for wedding.jpg", 4449, 2681],
      ["17851336201014401362wedding photographers in delhi.jpg", 4134, 2492],
      ["17851336832093288691best wedding photographers in delhi.jpg", 4342, 2617],
    ]
      .map(([image, width, height], index) =>
        imageFromLivePath(
          `uploads/admin_image/slider/${image}`,
          `Wedding photography banner slide ${index + 1}`,
          Number(width),
          Number(height),
        ),
      )
      .filter((image): image is HomepageImage => image !== null)
      .map((image, index) => ({ ...image, priority: index === 0 })),
    story: {
      heading: "Our Vision",
      html:
        'Meet Mr. <a href="https://www.instagram.com/rajatvermaphotography/">Rajat Verma</a> – is the owner, designer and master mind behind the one of best &amp; most professional photography firm named Wedding Photo Planet . With the affection and affection for Photography, he is been awarded as a best wedding photographer in Delhi. Mr. Rajat Verma has the ambition, together with best of <b>candid professional photographers</b> , to make a image of Wedding Photo Planet in such way so that we can propagate professional photography with honesty &amp; quality, &amp; the outcomes of this work will be exceptional. We desire to establish our company’s name grandly into the world of Photography and to expose global professional Photography as like as the event of celebrity weddings or red carpet occasions in any global wedding event.',
    },
    services: data.services.map((service, index) => {
      const liveDescriptions = [
        '<p></p><p><br><b> Wedding Photo Planet:</b>  We are the ideal partner for photographing your special day and we provide the highest quality services. extraordinary.<br><br><b>Best Wedding Videographer in Delhi: </b> We offer amazing photos, videos and complete photo booths for capturing each moment of your happy occasion in the best possible light. <br><br><b>Best Wedding Photography:</b>  Our professional team, consisting of talented and creative individuals will immortalise the happy occasion of your wedding, in a special and stylish manner. The most romantic moments of the happiest occasion in your life are in capable hands.<br><br><b>Candid Wedding Photographer :- </b> From the haldi and mehendi to the pheras and vidaai, we capture every ritual, emotion and candid smile, so you can relive your wedding day exactly the way it felt. <br></p><p></p>',
        '<p></p><p><br><b>Pre Wedding Photographers Delhi:</b>  We offer an exhilarating ride in anticipation of your big day, taking you on a voyage of romance, emotions, and celebrations leading up to your wedding. <br><br><b>Best Pre Wedding Photographer Delhi :- </b>  We infuse life into your love story with mesmerising pre-wedding shoots and take away treasures which are cherished forever. <br><br><b>Pre Wedding Shoot :- </b>  We have been the pre- wedding photographer who makes your dream come to life for couples in and around the city. It’s the celebration of romance in our pre-wedding shoot which would be nothing less than pure bliss. <br><br><b>Destination Shoot :- </b>  Let the destination of your choice be the background for a romantic prelude to your nuptials. We create pre-wedding photos that would enchant you eternally. <br></p><p></p>',
        '<p></p><p><br><b>Best Wedding Cinematographer: </b>Make your love story a compelling story that will be remember by everyone with the help of our expert wedding cinematographers, that capture your wedding in a cinematic way.<br><b><br>Cinematography: </b>Capturing the best moments and scenes of your wedding by adding emotions, it works just like a movie, creating the best story on screen of your big day.<br><b><br>Cinematic Wedding Video Film: </b>Reminisce all the wonderful moments of your wedding by watching our artistic cinematic wedding video films that depict the story of your forever.<br><b><br>Wedding Teasers &amp; Highlights: </b>Short cinematic teasers and highlight films of your big day, beautifully edited with music, ready to share with your family and friends and to relive again and again.<br><b><br>Drone &amp; Pre-Wedding Films: </b>Breathtaking aerial shots of your venue and baraat, along with romantic pre-wedding films shot at the location of your choice, add a grand, big-screen feel to your wedding story.</p><p></p>',
      ];

      return {
        ...service,
        descriptionHtml: liveDescriptions[index] ?? service.descriptionHtml,
      };
    }),
    testimonials: {
      heading: "What Say Our Clients",
      items: [
        ["Surbhi & Sagar", "16478584611317262036Sagar-&-Surbhi.jpg", "We are glad that we chose you guys for our wedding photography. Its one of the best decisions we took. Their dedication and work is mind blowing. We are really impressed by  team’s hardwork! Had an awesome time working with these guys! Keep up the good work."],
        ["Himani & Sunandan", "164785986329377559004.jpg", "I'm so happy that I chose Wedding Photo planet for my wedding.They not only capture moments,but also emotions. They made our wedding look like acinematic movie. They always listen to the special requests and are very cooperative,talented power team."],
        ["Shivali & Gaourav", "16478598934193839183.jpg", "I had the most amazing experience with Wedding Photo Planet and their team. Firstly They make you feel so comfortable in the entire process.They show some of the shots and guide what can be done to make it better. It was worth it to choose them.I would recommend it without any doubt."],
        ["Richa & Amit", "1647860003175168477405.jpg", "I am so glad that we stumbled across them. I can’t say enough about how professional and the quality of work that they provides. I was so pleased with our session and final photographs, that I will continue to use them in the future too. We (Bride & Groom) have booked them for all our functions."],
        ["Jasmeet & Balvinder", "16478601903385311221.jpg", "Had an amazing experience, the team was amazing and they worked according to our needs and requests Thank you for the lovely photos and a delightful experience☺️"],
        ["Anuradha & Kunal", "16487057152137104067review-icon.jpg", "The team is just amazing..we loved the pictures, videos, reels, every content they provided us The team is really humble and give you the best output one can ever have One can trust them blindly :) Thankyou team for making our big day really special..memories for life time"],
        ["Swati & Rajat", "1648706185683726037Review-icon-1.jpg", "A team of photographers with excellent caliber. I had booked them for all our wedding programs (bride’s and groom’s side) including the pre wedding. They have done commendable work in all the functions especially our pre wedding. They’re very professional and don’t nag you for anything except the time they need from the people for photos."],
        ["Anchal & Ankit", "16487067101937201949review-icon-2.jpg", "The team of most amazing and professional photographers who delivere the best of quality. I got my pre-wedding and wedding shot and the team made us feel so comfortable. Thank you for giving us an experience of lifetime."],
        ["Bhavya & Rohit", "16507121471740168639Bhaviya Review on Wedding Photo Planet.jpg", "Wedding photo planet have captured our special moments so beautifully for lifelong.The whole team was so nice and responsive and passionate about their work. Their quality of work is up to the mark and they listen to their customer needs so well.5 stars for the whole team and especially Rajat !!!"],
        ["Aarzoo & Saurabh", "1780997667952365381WhatsApp-Image-2026-06-08-at-5.13.jpg.jpeg", "We choose wedding photo planet for our wedding and pre wedding shoot and it was the best decision we took..the entire team felt like family and had done an amazing job.. Thankyou Rajat and team for the amazing support and work"],
        ["Prabhav & Divya", "17809983921074098275Untitled_design__9_.jpg", "From the initial consultation to the delivery of our final gallery, everything was seamless and professional. The final photos are absolutely stunning. Every emotion, detail, and special moment was documented beautifully. The editing style is timeless and perfectly reflects the atmosphere of our day. We’ve received countless compliments from family and friends who were just as impressed."],
        ["Kavya & Chayan", "1781004734392422319testimonals.jpg", "What amazing team!!! Highly highly recommend. They have the most amazing, most friendly and the most talented team... Over your function they become a part of your family and treat you the same way. They are adept with the best in industry technology and gadgets and are always ready to try anything and everything new!"],
        ["Anshul & Mani", "1781005191943026601Untitled_design__10_.jpg", "I and my fiancé booked the wedding photo planet for all the events of our wedding. Undoubtedly it was the best decision to choose their team. From the time of booking till post wedding editing and delivering of our products it has been hastle free and very convenient. Each member of the team took special care that all our work was upto the mark."],
        ["Nitin & Geetika", "17810057932001696910Untitled_design__12_.jpg", "We stumbled upon wedding photo planet team through a common relative and took a leap of faith for our engagement, which was a hush-hush event. When the final pictures arrived, we and all our friends and relatives were mesmerized!! The beauty with which they captured every moment is commendable!!! Of course we had to work with them again for our wedding. The entire team is so courteous and disciplined."],
        ["Preksha", "17810061571309642778Untitled_design__13_.jpg", "I had the best experience with Wedding Photo Planet's team. They are the best in what they do, the pre-wedding, photos, videos, albums, everything was just PERFECT. Thanks a lot to Rajat, Himanshu and everyone who worked to capture and document all our moments so so so beautifully!"],
      ].map(([clientName, image, quote], index) => ({
        id: index + 1,
        clientName,
        quote,
        image: imageFromLivePath(`uploads/admin_image/slider/${image}`, `Photo of ${clientName}, client testimonial`, 120, 120),
      })),
    },
    whyChoose: {
      ...data.whyChoose,
      heading: "Why choose Wedding photo planet",
      html: "",
    },
    about: {
      ...data.about,
      html:
        "<p><b>Living the Moment to the fullest</b><br>Our friendly and talented photographers notice and highlight those spontaneous, once-in-a-life-time moments that define your celebrations. Our discreet and unobtrusive style ensures that you are at ease with our presence. Our ability to capture authentic, real moments sets candid photography apart and sets us apart from the crowd.<br><b>Unscripted Brilliance</b><br>Candid photography truly reveals the authentic spirit of any occasion. With our focus on real emotions, laughter and happy tears, your special occasions are encapsulated in photographs that reflect the natural spirit of your events.<br><b>Each Frame, a Story Waiting to be Unfolded</b><br>Within every candid photo taken, lies an untold story waiting to be unveiled. It is the little details, the genuine smiles, and the hearty laughter which weave a vivid tapestry of your cherished moments.<br><b>Relive Your Special Moments with Candid Photography</b><br>The purpose of candid photography, is not merely freezing the moments but transforming them into cherished memories that will last a lifetime. Our images allow you to revisit the happy emotions of your days all over again.</p>",
    },
    photography: {
      heading: "About Candid Photography",
      html:
        "Preserving the Essence of Spontaneity and Emotions Candid photography is the art of encapsulating the magic of candid and honest emotions. As the <b>best candid photographer in Delhi</b>, Wedding Photo Planet excel in preserving those unplanned and untouched instants of your wedding, bursting with pure bliss, laughter, and love. We’ve assembled the finest team of Top-Rated Wedding Photographers to make your special moments everlasting, with every click a testament to the joy you shared. Looking for a candid photographer or the perfect wedding videographer near you, we at Wedding Photo Planet are committed to ensuring you a journey as memorable as your special day.",
    },
    footer: {
      ...data.footer,
      address: "Sector 9A, 761P, Sector 9A, Gurgram, Haryana 122001",
    },
  };
}

async function getHomepageDataFromDatabase(): Promise<HomepageData> {
  const [home, heroSlides, galleryRows, testimonials, footer] = await Promise.all([
    mainReadDb.widHome.findFirst({
      orderBy: { id: "asc" },
      select: {
        h1: true,
        d1: true,
        banner1: true,
        h2: true,
        d2: true,
        serviceHeading1: true,
        serviceImg1: true,
        servicesDesc1: true,
        serviceHeading2: true,
        serviceImg2: true,
        servicesDesc2: true,
        serviceHeading3: true,
        serviceImg3: true,
        servicesDesc3: true,
        clientHeading: true,
        whyChoose: true,
        whyChooseDec: true,
        chose1: true,
        chose2: true,
        chose3: true,
        chose4: true,
        chose5: true,
        chose6: true,
        chose7: true,
        chose8: true,
        chose9: true,
        chose10: true,
        banner2: true,
        ab2Heading: true,
        ab2Desc1: true,
        ab2Slid1: true,
        ab2Slid2: true,
        ab2Slid3: true,
        phHeading: true,
        phDesc: true,
        banner3: true,
        seoDesc: true,
        seoKey: true,
        seoTitle: true,
      },
    }),
    mainReadDb.widSlide.findMany({
      where: { parantName: "home" },
      orderBy: { id: "asc" },
      take: 10,
      select: { id: true, imageName: true },
    }),
    mainReadDb.widProductImage.findMany({
      where: { type: "gallery3" },
      orderBy: { id: "asc" },
      select: { id: true, name: true, altImg: true, status: true },
    }),
    mainReadDb.widTestimonial.findMany({
      orderBy: { id: "asc" },
      select: { id: true, descText: true, clientName: true, image: true },
    }),
    mainReadDb.widFooter.findFirst({
      where: { id: 1 },
      select: {
        facbook: true,
        instagram: true,
        youtube: true,
        twitter: true,
        linkidn: true,
        tumblr: true,
        heading1: true,
        heading2: true,
        address: true,
        mobile: true,
        email1: true,
        email2: true,
        copyright: true,
      },
    }),
  ]);

  return applyLiveHomepageFallback(mapHomepageData({ home, heroSlides, galleryRows, testimonials, footer }));
}

function extractInsertRows(sql: string, table: string): string[][] {
  const marker = `INSERT INTO \`${table}\``;
  const rows: string[][] = [];
  let searchStart = 0;

  while (true) {
    const start = sql.indexOf(marker, searchStart);

    if (start === -1) {
      break;
    }

    let end = start;
    let inString = false;
    let escape = false;

    for (; end < sql.length; end += 1) {
      const char = sql[end];

      if (escape) {
        escape = false;
        continue;
      }

      if (char === "\\" && inString) {
        escape = true;
        continue;
      }

      if (char === "'") {
        inString = !inString;
        continue;
      }

      if (!inString && char === ";") {
        break;
      }
    }

    const statement = sql.slice(start, end);
    const values = statement.replace(/^.*?\)\s+VALUES\s*/s, "").trim();
    let row: string[] = [];
    let value = "";
    inString = false;
    escape = false;
    let depth = 0;

    function parsedValue(rawValue: string): string {
      const cleanValue = rawValue.trim();
      return cleanValue === "NULL" ? "" : cleanValue;
    }

    for (const char of values) {
      if (escape) {
        value += char === "n" ? "\n" : char === "r" ? "\r" : char;
        escape = false;
        continue;
      }

      if (char === "\\" && inString) {
        escape = true;
        continue;
      }

      if (char === "'") {
        inString = !inString;
        continue;
      }

      if (!inString && char === "(") {
        depth += 1;
        if (depth === 1) {
          row = [];
          value = "";
          continue;
        }
      }

      if (!inString && char === ")" && depth === 1) {
        row.push(parsedValue(value));
        rows.push(row);
        value = "";
        depth -= 1;
        continue;
      }

      if (!inString && char === "," && depth === 1) {
        row.push(parsedValue(value));
        value = "";
        continue;
      }

      if (depth > 0) {
        value += char;
      }
    }

    searchStart = end + 1;
  }

  return rows;
}

function nullable(value: string | undefined): string | null {
  if (value === undefined || value === "") {
    return null;
  }

  return value;
}

function getHomepageDataFromSqlDump(): HomepageData {
  const dumpPath = path.resolve(process.cwd(), "../storage/database/u827241022_weddingp_web.sql");
  const sql = fs.readFileSync(dumpPath, "utf8");

  const homeRow = extractInsertRows(sql, "wid_home")[0] ?? [];
  const footerRow = extractInsertRows(sql, "wid_footer")[0] ?? [];
  const slideRows = extractInsertRows(sql, "wid_slide");
  const testimonialRows = extractInsertRows(sql, "wid_testimonial");
  const productImageRows = extractInsertRows(sql, "wid_product_image");

  const home: LegacyHomeRow | null = homeRow.length
    ? {
        h1: nullable(homeRow[1]),
        d1: nullable(homeRow[2]),
        banner1: nullable(homeRow[3]),
        h2: nullable(homeRow[4]),
        d2: nullable(homeRow[5]),
        serviceHeading1: nullable(homeRow[6]),
        serviceImg1: nullable(homeRow[7]),
        servicesDesc1: nullable(homeRow[8]),
        serviceHeading2: nullable(homeRow[9]),
        serviceImg2: nullable(homeRow[10]),
        servicesDesc2: nullable(homeRow[11]),
        serviceHeading3: nullable(homeRow[12]),
        serviceImg3: nullable(homeRow[13]),
        servicesDesc3: nullable(homeRow[14]),
        clientHeading: nullable(homeRow[15]),
        whyChoose: nullable(homeRow[25]),
        whyChooseDec: nullable(homeRow[26]),
        chose1: nullable(homeRow[27]),
        chose2: nullable(homeRow[28]),
        chose3: nullable(homeRow[29]),
        chose4: nullable(homeRow[30]),
        chose5: nullable(homeRow[31]),
        chose6: nullable(homeRow[32]),
        chose7: nullable(homeRow[33]),
        chose8: nullable(homeRow[34]),
        chose9: nullable(homeRow[35]),
        chose10: nullable(homeRow[36]),
        banner2: nullable(homeRow[37]),
        ab2Heading: nullable(homeRow[38]),
        ab2Desc1: nullable(homeRow[39]),
        ab2Slid1: nullable(homeRow[44]),
        ab2Slid2: nullable(homeRow[45]),
        ab2Slid3: nullable(homeRow[46]),
        phHeading: nullable(homeRow[47]),
        phDesc: nullable(homeRow[48]),
        banner3: nullable(homeRow[49]),
        seoDesc: nullable(homeRow[50]),
        seoKey: nullable(homeRow[51]),
        seoTitle: nullable(homeRow[52]),
      }
    : null;

  const footer: LegacyFooterRow | null = footerRow.length
    ? {
        facbook: nullable(footerRow[1]),
        instagram: nullable(footerRow[2]),
        twitter: nullable(footerRow[3]),
        linkidn: nullable(footerRow[4]),
        youtube: nullable(footerRow[5]),
        tumblr: nullable(footerRow[6]),
        heading1: nullable(footerRow[7]),
        heading2: nullable(footerRow[8]),
        address: nullable(footerRow[9]),
        mobile: nullable(footerRow[10]),
        email1: nullable(footerRow[11]),
        email2: nullable(footerRow[12]),
        copyright: nullable(footerRow[13]),
      }
    : null;

  return applyLiveHomepageFallback(mapHomepageData({
    home,
    footer,
    heroSlides: slideRows
      .filter((row) => row[2] === "home")
      .slice(0, 10)
      .map((row) => ({ id: Number(row[0]), imageName: nullable(row[3]) })),
    galleryRows: productImageRows
      .filter((row) => row[3] === "gallery3")
      .map((row) => ({
        id: Number(row[0]),
        name: row[2] ?? "",
        altImg: nullable(row[4]),
        status: row[5] === "active" ? "active" : "draft",
      })),
    testimonials: testimonialRows.map((row) => ({
      id: Number(row[0]),
      descText: nullable(row[1]),
      clientName: nullable(row[2]),
      image: nullable(row[3]),
    })),
  }));
}

export async function getHomepageData(): Promise<HomepageData> {
  try {
    return await getHomepageDataFromDatabase();
  } catch {
    return getHomepageDataFromSqlDump();
  }
}

export function getHomepageMetadataFromData(data: HomepageData, siteUrl: string) {
  const canonical = new URL(data.seo.canonicalPath, siteUrl).toString();
  const keywords = data.seo.keywords
    .split(",")
    .map((keyword) => keyword.trim())
    .filter(Boolean);

  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical,
    },
    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      url: canonical,
      images: [data.seo.ogImage],
    },
  };
}
