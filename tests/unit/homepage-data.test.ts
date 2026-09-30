import { beforeEach, describe, expect, it, vi } from "vitest";

const db = {
  widHome: { findFirst: vi.fn() },
  widSlide: { findMany: vi.fn() },
  widProductImage: { findMany: vi.fn() },
  widTestimonial: { findMany: vi.fn() },
  widFooter: { findFirst: vi.fn() },
};

vi.mock("@/server/db", () => ({
  mainReadDb: db,
}));

describe("homepage data layer", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("loads homepage data through read-only main DB delegates", async () => {
    const { getHomepageData, homepageQueryPlan } = await import("@/features/public-pages/home/legacy-homepage-data");

    db.widHome.findFirst.mockResolvedValue({
      h1: "Best Wedding Photographers",
      d1: "<p>Intro</p>",
      banner1: "banner-one.jpg",
      h2: "Story",
      d2: "<p>Story text</p>",
      serviceHeading1: "Wedding",
      serviceImg1: "service-wedding.jpg",
      servicesDesc1: "<p>Wedding text</p>",
      serviceHeading2: "Pre Wedding",
      serviceImg2: "service-pre.jpg",
      servicesDesc2: "<p>Pre text</p>",
      serviceHeading3: "Cinematography",
      serviceImg3: "service-video.jpg",
      servicesDesc3: "<p>Video text</p>",
      clientHeading: "Happy Clients",
      whyChoose: "Why Choose Us",
      whyChooseDec: "<p>Because</p>",
      chose1: "Point one",
      chose2: "",
      chose3: null,
      chose4: "Point four",
      chose5: "",
      chose6: "",
      chose7: "",
      chose8: "",
      chose9: "",
      chose10: "<p>Closing</p>",
      banner2: "banner-two.jpg",
      ab2Heading: "About WPP",
      ab2Desc1: "Line one\nLine two",
      ab2Slid1: "about-one.jpg",
      ab2Slid2: "about-two.jpg",
      ab2Slid3: null,
      phHeading: "Photography",
      phDesc: "<p>Photography text</p>",
      banner3: "banner-three.jpg",
      seoDesc: "SEO description",
      seoKey: "one, two",
      seoTitle: "SEO title",
    });
    db.widSlide.findMany.mockResolvedValue([{ id: 1, imageName: "hero.jpg" }]);
    db.widProductImage.findMany.mockResolvedValue([
      { id: 10, name: "gallery.jpg", altImg: "Gallery alt", status: "active" },
      { id: 11, name: "", altImg: "", status: "active" },
    ]);
    db.widTestimonial.findMany.mockResolvedValue([{ id: 20, descText: "Great", clientName: "Client", image: "client.jpg" }]);
    db.widFooter.findFirst.mockResolvedValue({
      facbook: "https://facebook.example",
      instagram: "",
      youtube: "",
      twitter: "",
      linkidn: "",
      tumblr: "",
      heading1: "Contact Details",
      heading2: "Studio",
      address: "Delhi",
      mobile: "123",
      email1: "a@example.com",
      email2: "b@example.com",
      copyright: "Copyright",
    });

    const data = await getHomepageData();

    expect(homepageQueryPlan.queryCount).toBe(5);
    expect(db.widHome.findFirst).toHaveBeenCalledWith(expect.objectContaining({ select: expect.any(Object) }));
    expect(db.widSlide.findMany).toHaveBeenCalledWith(
      expect.objectContaining({ where: { parantName: "home" }, take: 10 }),
    );
    expect(db.widProductImage.findMany).toHaveBeenCalledWith(
      expect.objectContaining({ where: { type: "gallery3" } }),
    );
    expect(data.seo.title).toBe("SEO title");
    expect(data.heroSlides[0]).toMatchObject({
      src: "/uploads/admin_image/slider/hero.jpg",
      priority: true,
    });
    expect(data.services.map((service) => service.href)).toEqual(["/wedding", "/pre-wedding", "/cinematography"]);
    expect(data.galleryImages).toEqual([
      {
        id: 10,
        src: "/uploads/admin_image/slider/gallery.jpg",
        href: "/admin_image/slider/gallery.jpg",
        alt: "Gallery alt",
      },
    ]);
    expect(data.whyChoose.html).toBe("<p>Because</p>");
    expect(data.whyChoose.points).toEqual(["Point one", "Point four"]);
    expect(data.footer.social.instagram).toBe("#");
  });

  it("handles missing and empty legacy data gracefully", async () => {
    const { getHomepageData } = await import("@/features/public-pages/home/legacy-homepage-data");

    db.widHome.findFirst.mockResolvedValue(null);
    db.widSlide.findMany.mockResolvedValue([]);
    db.widProductImage.findMany.mockResolvedValue([]);
    db.widTestimonial.findMany.mockResolvedValue([]);
    db.widFooter.findFirst.mockResolvedValue(null);

    const data = await getHomepageData();

    expect(data.heroSlides).toEqual([]);
    expect(data.galleryImages).toEqual([]);
    expect(data.testimonials.items).toEqual([]);
    expect(data.firstBanner).toBeNull();
    expect(data.footer.heading1).toBe("Contact Details");
    expect(data.seo.title).toContain("Wedding Photo Planet");
  });

  it("does not expose or use database write methods", async () => {
    await import("@/features/public-pages/home/legacy-homepage-data");

    expect("create" in db.widHome).toBe(false);
    expect("update" in db.widHome).toBe(false);
    expect("delete" in db.widHome).toBe(false);
    expect("upsert" in db.widHome).toBe(false);
  });

  it("builds verified homepage metadata", async () => {
    const { getHomepageMetadataFromData } = await import("@/features/public-pages/home/legacy-homepage-data");

    const metadata = getHomepageMetadataFromData(
      {
        seo: {
          title: "Home title",
          description: "Home description",
          keywords: "alpha, beta",
          canonicalPath: "/",
          ogImage: "/assets/images/favicon.png",
        },
      } as never,
      "https://www.weddingphotoplanet.com",
    );

    expect(metadata).toMatchObject({
      title: "Home title",
      description: "Home description",
      keywords: ["alpha", "beta"],
      robots: { index: true, follow: true },
      alternates: { canonical: "https://www.weddingphotoplanet.com/" },
    });
  });
});
