# Admin CMS Database Mapping

Date: 2026-10-03

Scope: audit and mapping only. No schema changes, migrations, write enablement, uploads, creates, updates, deletes, or data modifications were performed.

## Database Architecture

The application currently uses two separate MySQL databases through two separate Prisma schemas and generated clients. The split is intentional and should be preserved:

- Main website database: public site content, gallery/product images, page records, videos, testimonials, footer/contact content, and legacy admin records.
- Blog database: blog posts, blog users/authors, categories, tags, blog media, comments, and blog settings.

Runtime access is currently read-only:

- `ALLOW_DB_WRITES` is typed as `false` in `src/lib/env/schema.ts`.
- `parseReadOnlyFlag` rejects any value other than missing, empty, or `false`.
- `src/server/db/internal/clients.ts` calls `assertPhase2AReadOnlyWritesDisabled`.
- `src/server/db/read-only-main.ts` and `src/server/db/read-only-blog.ts` expose read-only delegates.
- Raw write-capable SQL is blocked by `src/server/db/read-only.ts`.

## Existing Database Connections

### Main Database Connection

- Connection source: `MAIN_DATABASE_URL`
- Provider: MySQL
- ORM/schema: Prisma schema at `prisma/main/schema.prisma`
- Generated client: `generated/prisma/main`
- Runtime client wrapper: `mainReadDb`
- Database name if safely known: `u827241022_weddingp_web`
  - Source: `.env.example` and existing audit documentation.
  - Production hostname, username, password, and full URL: NOT PROVIDED / NEEDS CONFIGURATION

### Blog Database Connection

- Connection source: `BLOG_DATABASE_URL`
- Provider: MySQL
- ORM/schema: Prisma schema at `prisma/blog/schema.prisma`
- Generated client: `generated/prisma/blog`
- Runtime client wrapper: `blogReadDb`
- Database name if safely known: `wpp_blog_panel`
  - Source: `.env.example` and existing audit documentation.
  - Production hostname, username, password, and full URL: NOT PROVIDED / NEEDS CONFIGURATION

## Main Database

Relevant existing models and tables:

| Prisma model | Table | Purpose |
| --- | --- | --- |
| `WidAdmin` | `wid_admin` | Legacy admin account records. Password hash format still needs verification before reuse. |
| `WidHome` | `wid_home` | Homepage copy, banners, service text/images, why-choose content, SEO fields. |
| `WidHomeGallery` | `wid_home_gallery` | Homepage gallery/navigation-style rows with title, button label, and URL. |
| `WidGallery` | `wid_gallery` | Images/gallery page copy, banners, and SEO fields. |
| `WidWeddingPage` | `wid_wid` | Wedding page copy, banners, SEO fields. |
| `WidPreWeddingPage` | `wid_pre_wid` | Pre-wedding page copy, banners, SEO fields. |
| `WidProduct` | `wid_product` | Existing client/project/album-like content: slug, name, category, hero image, page sections, banners, SEO. |
| `WidProductImage` | `wid_product_image` | Existing image records tied by `pid`, with image name/path, type, alt text, and `active`/`draft` status. |
| `WidProductSlider` | `wid_product_slider` | Slider images tied by `pid`, likely for product/client detail galleries. |
| `WidSlide` | `wid_slide` | Page/home slider images using `parant_id`, `parant_name`, and `image_name`. |
| `WidVideo` | `wid_video` | Cinematography video records: name and URL. |
| `WidVideoDescription` | `wid_video_dec` | Cinematography page copy, banners, SEO fields. |
| `WidContact` | `wid_contact` | Contact page headings, descriptions, banners, images, SEO fields. |
| `WidFooter` | `wid_footer` | Footer social links, address, phones, emails, copyright. |
| `WidTestimonial` | `wid_testimonial` | Testimonials: text, client name, image. |
| `WidCon` | `wid_con` | Generic content rows with title, image, and description; exact CMS role needs verification. |

## Blog Database

Relevant existing models and tables:

| Prisma model | Table | Purpose |
| --- | --- | --- |
| `BlogPost` | `posts` | Blog post title, slug, content, excerpt, status, publish date, featured image, SEO, schema metadata. |
| `BlogCategory` | `categories` | Blog categories with name, slug, optional description. |
| `BlogTag` | `tags` | Blog tags with name and slug. |
| `BlogPostCategory` | `post_categories` | Join table linking posts to categories. |
| `BlogPostTag` | `post_tags` | Join table linking posts to tags. |
| `BlogMedia` | `media` | Blog media metadata: file path, file name, MIME type, uploader, upload time. |
| `BlogUser` | `users` | Blog users/authors/admins with username, email, password, display name, role. |
| `BlogComment` | `comments` | Blog comments and moderation status. |
| `BlogSetting` | `settings` | Blog-level key/value settings. |

## Existing Table Mapping

### Gallery -> Existing Tables

- Primary image records: `wid_product_image`
- Page-level gallery copy/SEO: `wid_gallery`
- Slider/page banner images: `wid_slide`
- Homepage gallery source currently used by live reader: `wid_product_image` filtered by `type = "gallery3"`

Immediate reuse:

- Listing, filtering, searching, status display, alt text display, and public gallery readers can reuse `wid_product_image`.
- Gallery page headings/SEO can reuse `wid_gallery`.

Potential gaps:

- There is no explicit normalized category table.
- Category appears to be inferred from `type`, `pid`, or related `wid_product.category`.
- There is no verified sort/order column on `wid_product_image`.
- Delete/replace/upload require storage integration.

### Clients -> Existing Tables

- Client/project/client-page records: `wid_product`
- Client hero image: `wid_product.hero_img`
- Client images: `wid_product_image.pid`
- Client sliders: `wid_product_slider.pid`

Immediate reuse:

- Client listing and detail viewing can reuse `wid_product`.
- Published detail pages can be driven by `wid_product.page_slug`.

Potential gaps:

- No dedicated client table separate from product/album content.
- No archive field on `wid_product`.
- Need to verify whether each `wid_product` row represents a client, an album, a project, or a mixed legacy concept.

### Albums / Projects -> Existing Tables

- Album/project records: `wid_product`
- Album/project photos: `wid_product_image`
- Album/project slider photos: `wid_product_slider`

Immediate reuse:

- Existing album/project-like records can reuse `wid_product`.
- Existing image associations can reuse `pid` fields in `wid_product_image` and `wid_product_slider`.

Potential gaps:

- `pid` is a string rather than an explicit Prisma relation to `wid_product.id`.
- No normalized album/client relationship is declared.
- No verified per-photo ordering field on `wid_product_image`.
- No explicit publish/unpublish field on `wid_product`; images have `active`/`draft`.

### Blog -> Existing Tables

- Posts: `posts`
- Categories: `categories`
- Tags: `tags`
- Post/category links: `post_categories`
- Post/tag links: `post_tags`
- Featured image path: `posts.featured_image`
- Blog media metadata: `media`
- Authors/admins: `users`

Immediate reuse:

- Blog create/edit/draft/publish/archive/trash can reuse `posts.status`.
- SEO fields are already present on `posts`.
- Categories and tags can reuse existing taxonomy tables.

Potential gaps:

- File upload destination for `featured_image` and `media.file_path` is not configured.
- Admin auth reuse of `users.password` requires hash-format verification.

### Pages / Content -> Existing Tables

- Home: `wid_home`
- Images/gallery page: `wid_gallery`
- Wedding: `wid_wid`
- Pre-wedding: `wid_pre_wid`
- Cinematography: `wid_video_dec`, plus `wid_video`
- Contact: `wid_contact`
- Footer/settings-like public content: `wid_footer`
- Testimonials: `wid_testimonial`
- Sliders: `wid_slide`
- Generic content: `wid_con`

Immediate reuse:

- Page content editing can reuse the existing one-row or page-specific tables.
- Cinematography videos can reuse `wid_video`.
- Footer and contact settings can reuse `wid_footer` and `wid_contact`.

Potential gaps:

- The public pages are not all currently reading these tables. Homepage reads selected DB records; gallery, wedding, pre-wedding, cinematography, contact, and blog pages still primarily use static modules under `src/app/_wpp-pages`.
- Before writes are enabled, dynamic readers should be introduced page by page with fallback behavior.

## Feature Reuse / Change Assessment

| CMS feature | Can reuse existing tables immediately | Requires new tables | Requires schema changes | Requires storage integration |
| --- | --- | --- | --- | --- |
| Gallery listing/read-only management | Yes: `wid_product_image`, `wid_gallery`, `wid_slide` | No | No | No for read-only; yes for upload/replace |
| Gallery upload/replace/delete | Partially: metadata can map to `wid_product_image` | Not necessarily | Possibly, if sort/order/category cannot be represented safely | Yes |
| Gallery category filtering | Partially: `type`, `pid`, `wid_product.category` | Not immediately | Possibly, if strict normalized categories are required | No |
| Clients listing/detail | Yes: `wid_product` | No | No for existing legacy model | No |
| Client archive | Partially | Not necessarily | Likely, because `wid_product` has no archive/status field | No |
| Albums/projects | Yes: `wid_product`, `wid_product_image`, `wid_product_slider` | No until legacy semantics are verified | Possibly, if normalized client/album separation is required | Yes for album cover/photo upload |
| Photo reorder | Partially | Not necessarily | Likely, because `wid_product_image` has no explicit order column | No |
| Blog posts | Yes: `posts` | No | No for normal post workflow | Yes for featured images/media |
| Blog categories/tags | Yes: `categories`, `tags`, join tables | No | No | No |
| Website page content | Yes: page-specific `wid_*` tables | No | No for existing fields | Yes for changing banners/images |
| Admin authentication | Partially: `wid_admin` or `users` may be reusable | Not immediately | No until hash format is verified | No |

## Missing Information

- Production `MAIN_DATABASE_URL`: NOT PROVIDED / NEEDS CONFIGURATION
- Production `BLOG_DATABASE_URL`: NOT PROVIDED / NEEDS CONFIGURATION
- Production database hostname(s): NOT PROVIDED / NEEDS CONFIGURATION
- Production database username(s): NOT PROVIDED / NEEDS CONFIGURATION
- Production database password(s): NOT PROVIDED / NEEDS CONFIGURATION
- Whether writes should target production, staging, or a writable replica: NOT PROVIDED / NEEDS CONFIGURATION
- Final upload/storage provider: NOT PROVIDED / NEEDS CONFIGURATION
- Public media URL base/CDN policy: NOT PROVIDED / NEEDS CONFIGURATION
- Legacy admin password hash format in `wid_admin.pass`: NEEDS VERIFICATION
- Blog user password hash format in `users.password`: NEEDS VERIFICATION
- Exact semantics of `wid_product`: NEEDS VERIFICATION
- Exact semantics of `wid_product_image.type`: NEEDS VERIFICATION
- Whether `pid` values always match `wid_product.id`: NEEDS VERIFICATION
- Whether public pages should switch to DB-first or hybrid static-fallback readers per page: NEEDS PRODUCT DECISION

## Proposed Minimal Schema Changes

No schema change should be made yet.

If legacy semantics prove insufficient after verification, the minimal future changes would likely be:

1. Add a non-destructive status/archive field for `wid_product`, only if client/project archive cannot be represented by existing data.
2. Add a non-destructive sort/order field for album/gallery photo ordering, only if no legacy ordering convention exists.
3. Add a non-destructive storage metadata table only if the existing `wid_product_image`, `wid_product_slider`, and blog `media` tables cannot safely track uploaded files.
4. Add normalized client/album tables only if `wid_product` cannot reliably represent both concepts.

These are proposals only. Do not implement until write access, backups, migration policy, and production data semantics are confirmed.

## Proposed Storage Architecture

Uploads should not write directly to an unknown folder or guessed remote service.

Recommended future storage architecture:

1. Configure an explicit storage provider through environment variables.
2. Store original uploaded files under a stable namespace such as:
   - `gallery/{category}/{yyyy}/{mm}/{uuid}-{safe-filename}`
   - `clients/{client-or-product-id}/{album-id-or-section}/{uuid}-{safe-filename}`
   - `blog/{yyyy}/{mm}/{uuid}-{safe-filename}`
3. Store only public path/URL metadata in the existing database tables:
   - Gallery/client images: `wid_product_image.name`, `wid_product_image.alt_img`, `wid_product_image.type`, `wid_product_image.status`
   - Product hero/sections: `wid_product.hero_img`, `banner1`, `banner2`
   - Sliders: `wid_product_slider.image_name`, `wid_slide.image_name`
   - Blog media: `media.file_path`, `media.file_name`, `media.mime_type`
   - Blog featured image: `posts.featured_image`, `posts.featured_image_alt`
4. Generate derivatives separately from originals and preserve existing legacy media paths.
5. Enforce upload limits, MIME allowlist, image validation, and filename normalization before enabling uploads.

## Exact Next Implementation Step

Keep `ALLOW_DB_WRITES=false`.

Next, implement DB-first read adapters for one low-risk public surface, preferably the blog list/detail or gallery listing, while preserving static fallback behavior. This validates the mapping from existing tables to public UI without creating or modifying any records. After that read path is verified, define the explicit write-enablement plan and storage configuration before any create/update/delete/upload work begins.
