# Admin CMS Audit

Date: 2026-10-03

## Project Snapshot

- Framework: Next.js `^15.5.4`
- Router: App Router (`src/app`)
- React: `^19.1.1`
- TypeScript: strict mode enabled
- ORM: Prisma `6.12.0`
- Database provider: MySQL
- Database split: two separate Prisma schemas and generated clients
- Public site status: existing public pages are implemented and should remain intact

## Databases

### Main Website Database

- Env: `MAIN_DATABASE_URL`
- Prisma schema: `prisma/main/schema.prisma`
- Generated client: `generated/prisma/main`
- Current app access: read-only wrapper exported as `mainReadDb`
- Useful existing tables/models:
  - `wid_admin`: legacy admin records
  - `wid_home`: homepage content
  - `wid_gallery`: gallery page content
  - `wid_wid`: wedding page content
  - `wid_pre_wid`: pre-wedding page content
  - `wid_product`: client/project/album-like records
  - `wid_product_image`: gallery/product images with `active`/`draft` status
  - `wid_product_slider`: product slider images
  - `wid_slide`: page and homepage slides
  - `wid_video`, `wid_video_dec`: cinematography content
  - `wid_footer`, `wid_contact`, `wid_testimonial`: shared site content

### Blog Database

- Env: `BLOG_DATABASE_URL`
- Prisma schema: `prisma/blog/schema.prisma`
- Generated client: `generated/prisma/blog`
- Current app access: read-only wrapper exported as `blogReadDb`
- Useful existing tables/models:
  - `posts`: blog posts, status, SEO, featured image
  - `categories`, `tags`: taxonomy
  - `post_categories`, `post_tags`: taxonomy links
  - `media`: uploaded blog media
  - `users`: blog authors/admin users
  - `comments`, `settings`: supporting blog data

## Current Public Data Wiring

- Homepage dynamically reads selected main DB content through `src/features/public-pages/home/legacy-homepage-data.ts`.
- Gallery, wedding, pre-wedding, cinematography, contact, blog list, and blog detail pages are primarily wired to static data modules under `src/app/_wpp-pages`.
- The public pages should be moved incrementally to dynamic readers after admin write workflows are introduced and verified.

## Existing Safety Boundary

The current foundation intentionally blocks database writes:

- `ALLOW_DB_WRITES` must be `false`
- `src/lib/env/schema.ts` rejects write-enabled configuration
- `src/server/db/read-only.ts` strips write methods from Prisma delegates
- Existing tests assert that create/update/delete/upsert and raw transactions are unavailable

No destructive migrations or schema resets were run for this audit.

## Admin CMS Direction

Do not create duplicate CMS tables until the production data shape is verified against the existing two databases. The first admin implementation should:

- Reuse existing main DB models for gallery, pages, videos, products/albums, slides, testimonials, footer, and contact content.
- Reuse existing blog DB models for posts, authors, media, categories, and tags.
- Preserve the two-database boundary.
- Keep public pages stable while dynamic readers are introduced page by page.
- Add write access behind explicit environment and permission checks in a later phase.

## Unknowns To Verify Before Enabling Writes

- Exact legacy password hash format in `wid_admin.pass`
- Final file storage target and public URL policy
- Whether `wid_product` represents clients, albums, or both in the production data model
- Media directory ownership and upload limits
- Production admin bootstrap procedure
- Whether blog `users.password` can be reused for admin login or should remain blog-only
