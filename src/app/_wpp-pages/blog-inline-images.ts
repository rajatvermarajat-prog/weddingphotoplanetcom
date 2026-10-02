// Photos shown inside a blog article, keyed by the post's slug.
//
// To add a photo to a post:
//   1. Put the image file under /public (for example /public/uploads/blog/posts/).
//   2. Add an entry below under the post's slug.
//
// Place each photo with ONE of:
//   afterHeading: 3     -> right under the 3rd heading of the article (the same numbers as "In This Article")
//   afterParagraph: 2   -> after the 2nd paragraph (for posts that have no headings)
//
// `caption` is optional and is shown centred under the photo.
export type BlogInlineImage = {
  src: string;
  alt: string;
  caption?: string;
  afterHeading?: number;
  afterParagraph?: number;
};

const JAIPUR_POST = "best-pre-wedding-shot-location-in-jaipur-make-your-moments-majestic-with-wedding-photo-planet";

export const blogInlineImages: Record<string, BlogInlineImage[]> = {
  [JAIPUR_POST]: [
    {
      src: "/admin_image/slider/1648031057755227849Pre Wedding Photo Shoot in Jaipur.jpg",
      alt: "Pre-wedding photo shoot at Jal Mahal, Jaipur",
      caption: "Pre-wedding shoot at Jal Mahal",
      afterHeading: 3,
    },
    {
      src: "/uploads/blog/posts/1779536230_Pre-wedding-shoot-At-Albert-Museum-scaled-1-1024x683.webp",
      alt: "Pre-wedding shoot at Albert Hall Museum, Jaipur",
      caption: "Pre-wedding shoot at Albert Hall Museum",
      afterHeading: 8,
    },
  ],
};

// Location details shown under a heading (below its photo, if it has one), keyed by the post's slug.
//   afterHeading: which heading the location belongs to
//   mapQuery:     what to search for on Google Maps (the place name and city)
//   permission:   optional line such as "Free" or "Paid, permit needed". Left out when not set.
export type BlogLocationInfo = {
  afterHeading: number;
  mapQuery: string;
  permission?: string;
};

export const blogLocationInfo: Record<string, BlogLocationInfo[]> = {
  [JAIPUR_POST]: [
    { afterHeading: 1, mapQuery: "Amber Fort, Jaipur" },
    { afterHeading: 2, mapQuery: "Nahargarh Fort, Jaipur" },
    { afterHeading: 3, mapQuery: "Jal Mahal, Jaipur" },
    { afterHeading: 4, mapQuery: "Panna Meena Ka Kund, Jaipur" },
    { afterHeading: 5, mapQuery: "City Palace, Jaipur" },
    { afterHeading: 6, mapQuery: "Hawa Mahal, Jaipur" },
    { afterHeading: 7, mapQuery: "Gatore Ki Chhatriyan, Jaipur" },
    { afterHeading: 8, mapQuery: "Albert Hall Museum, Jaipur" },
    { afterHeading: 9, mapQuery: "Samode Palace, Samode, Rajasthan" },
    { afterHeading: 10, mapQuery: "Jaigarh Fort, Jaipur" },
    { afterHeading: 11, mapQuery: "Galta Ji Temple, Jaipur" },
    { afterHeading: 12, mapQuery: "Toran Dwar, Jaipur" },
  ],
};
