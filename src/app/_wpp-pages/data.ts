export type ProductCard = { title: string; href: string; image: string; photos: number };

export const navItems = [
  { href: "/", label: "Home", title: "Wedding Photo Planet" },
  { href: "/images", label: "Images", title: "Our Images" },
  { href: "/wedding", label: "wedding", title: "Wedding Photography" },
  { href: "/pre-wedding", label: "pre wedding", title: "Pre Wedding Photography" },
  { href: "/cinematography", label: "cinematography", title: "Our Cinematography" },
  { href: "/blog/", label: "Blog", title: "Our Blog" },
  { href: "/contact", label: "contact us", title: "Contact Wedding Photo Planet" },
] as const;

export const footer = {
  mobile: "+91-9990951995, +91-9990905195",
  email1: "info@weddingphotoplanet.com",
  email2: "weddingphotoplanet@gmail.com",
  address: "Delhi NCR, India",
};

export const heroSlides = {
  images: ["/admin_image/slider/164776131619955931713.jpg", "/admin_image/slider/1784977911940411553wedding photographers in delhi.jpg"],
  wedding: ["/admin_image/slider/17851332771762733934wedding photographers near me (2).jpg", "/admin_image/slider/banner15602352211753867506Best-Wedding-Photographer.jpg"],
  preWedding: ["/admin_image/slider/1257050191753530719Pre Wedding In Rishikesh.jpg", "/admin_image/slider/1648031106538118402Pre Wedding Shoot in Manali.jpg"],
  cinematography: ["/admin_image/slider/7020998341647863960Wedding-highlights.jpg", "/admin_image/slider/4382133831647863447drone-wedding-photography-in-India.jpg"],
  contact: ["/admin_image/slider/banner11263010871754570384Best-wedding-photographer-in-delhi.jpg", "/admin_image/slider/17851336832093288691best wedding photographers in delhi.jpg"],
  blog: ["/uploads/blog/banner/1753445131_Best-Wedding-Photographer-In-Delhi.jpg", "/uploads/blog/banner/1753445040_12-Most-Affordable-Pre-Wedding-Shoot-Locations-in-Delhi-NCR.jpg"],
};

export const galleryOne = [
  { src: "/admin_image/slider/6282115301753530749Wedding.jpg", alt: "Wedding photography" },
  { src: "/admin_image/slider/17851336832093288691best wedding photographers in delhi.jpg", alt: "Best wedding photographers in Delhi" },
  { src: "/admin_image/slider/121010232317535306498Z7A8871 copy.jpg", alt: "Candid wedding photography" },
  { src: "/admin_image/slider/18470797111753530748Wedding photographer.jpg", alt: "Wedding photographer" },
  { src: "/admin_image/slider/11051497611753530747Wedding photo shoot.jpg", alt: "Wedding photo shoot" },
  { src: "/admin_image/slider/1257050191753530719Pre Wedding In Rishikesh.jpg", alt: "Pre Wedding In Rishikesh" },
  { src: "/admin_image/slider/578454921753530720pre Wedding location in goa.jpg", alt: "Pre wedding location in Goa" },
  { src: "/admin_image/slider/1648031106538118402Pre Wedding Shoot in Manali.jpg", alt: "Pre Wedding Shoot in Manali" },
];

export const galleryTwo = galleryOne.slice(4);

export const weddingProducts: ProductCard[] = [
  { title: "Wedding Photography", href: "/details/wedding-photography", image: "/admin_image/slider/6282115301753530749Wedding.jpg", photos: 42 },
  { title: "Candid Wedding Photography", href: "/details/candid-wedding-photography", image: "/admin_image/slider/17851336832093288691best wedding photographers in delhi.jpg", photos: 36 },
  { title: "Bride Photography", href: "/details/bride-photography", image: "/admin_image/slider/19783033751753530692DSC04560 copy.jpg", photos: 28 },
  { title: "Destination Wedding", href: "/details/destination-wedding", image: "/admin_image/slider/6305887431647843767Best-Wedding-Photographer-in-jaipur.jpg", photos: 31 },
];

export const preWeddingProducts: ProductCard[] = [
  { title: "Pre Wedding In Rishikesh", href: "/details/pre-wedding-in-rishikesh", image: "/admin_image/slider/1257050191753530719Pre Wedding In Rishikesh.jpg", photos: 24 },
  { title: "Pre Wedding Shoot in Manali", href: "/details/pre-wedding-shoot-in-manali", image: "/admin_image/slider/1648031106538118402Pre Wedding Shoot in Manali.jpg", photos: 29 },
  { title: "Pre Wedding In Goa", href: "/details/pre-wedding-location-in-goa", image: "/admin_image/slider/578454921753530720pre Wedding location in goa.jpg", photos: 18 },
  { title: "Pre Wedding Photography in Delhi", href: "/details/pre-wedding-photography-in-delhi", image: "/admin_image/slider/16480310451350109075Pre Wedding Photography in Delhi.jpg", photos: 33 },
];

export const blogPosts = [
  { title: "How to Choose the Best Wedding Photographer in Delhi", slug: "best-wedding-photographer-in-delhi", category: "Wedding Guide", date: "Sep 29, 2026", image: "/uploads/blog/banner/1753445131_Best-Wedding-Photographer-In-Delhi.jpg", excerpt: "A practical checklist for style, budget, portfolio review and delivery timelines before booking your photographer." },
  { title: "12 Affordable Pre-Wedding Shoot Locations in Delhi NCR", slug: "pre-wedding-shoot-locations-delhi-ncr", category: "Pre Wedding", date: "Sep 29, 2026", image: "/uploads/blog/banner/1753445040_12-Most-Affordable-Pre-Wedding-Shoot-Locations-in-Delhi-NCR.jpg", excerpt: "Explore location ideas that photograph beautifully without making planning complicated." },
];

export const pageCopy = {
  images: [
    { heading: "Our Images", body: "Wedding Photo Planet is known for candid wedding photography, pre-wedding shoots and cinematic frames. Browse selected photographs from weddings, portraits and couple shoots." },
    { heading: "Celebrity Photography", body: "We capture real expressions and beautiful details so every photograph feels natural, elegant and memorable." },
    { heading: "Wedding Photo Gallery", body: "Our gallery includes colourful rituals, couple portraits, bridal moments and candid memories from celebrations across Delhi NCR and India." },
  ],
  wedding: [
    { heading: "Best Wedding Photography in India", body: "Wedding Photo Planet brings together candid photography, traditional coverage and creative portraits for your wedding day." },
    { heading: "Candid Photography in Delhi NCR", body: "From bridal entry to pheras and reception celebrations, we document the full story with natural expressions and clean composition." },
    { heading: "Indian Best Wedding Photographers", body: "We create complete wedding albums with carefully edited images, couple portraits, family photographs and ceremony highlights." },
    { heading: "Wedding Photography Ideas", body: "Every couple has a different story. We plan angles, lighting and moments around your venue, rituals and family energy." },
    { heading: "Wedding Photo Planet", body: "Book your wedding photography team early so dates, locations and event plans can be handled smoothly." },
  ],
  preWedding: [
    { heading: "Best Pre Wedding Photography in India", body: "A pre-wedding shoot should feel personal and cinematic. Wedding Photo Planet plans location, mood, poses and frames around your chemistry as a couple." },
    { heading: "Pre Wedding Shoot Locations", body: "We photograph couples in Delhi NCR, Rishikesh, Manali, Goa, Nainital and other beautiful outdoor locations." },
    { heading: "Creative Pre Wedding Photography", body: "Our pre-wedding sessions include candid frames, styled portraits, reels and cinematic moments for invites and memories." },
    { heading: "Best Pre Wedding Photographer", body: "We help with planning, timing and visual direction so the final images look elegant and natural." },
    { heading: "Pre Wedding Photo Planet", body: "Share your preferred city, season and styling ideas and we will suggest the best shoot approach." },
  ],
  cinematography: [
    { heading: "Best Wedding Cinematography in Delhi NCR", body: "Wedding Photo Planet creates cinematic wedding films, teasers, highlights and full event stories with emotional editing and clean visuals." },
    { heading: "Wedding Highlights", body: "Our films preserve voices, movement, vows, rituals and the atmosphere of your wedding day." },
    { heading: "Cinematic Wedding Films", body: "We combine camera movement, music, drone shots and candid storytelling to create films you can relive for years." },
    { heading: "Wedding Film Production", body: "From teaser videos to long-format films, our cinematography team covers every important function." },
  ],
};

export const videos = [
  { title: "Wedding Highlights", id: "e5oHmVOuKYs" },
  { title: "Cinematic Wedding Film", id: "ysz5S6PUM-U" },
  { title: "Pre Wedding Film", id: "ScMzIvxBSi4" },
];
