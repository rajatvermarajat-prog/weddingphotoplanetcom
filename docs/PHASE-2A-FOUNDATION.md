# Phase 2A Foundation

Status: implemented foundation only. Public pages, blog UI, admin UI, CMS workflows, media optimization, authentication UI, and deployment are intentionally not implemented.

## How To Start

From `wedding-photo-planet-next`:

```bash
npm install
npm run prisma:generate
npm run dev
```

Use `.env.example` as the template for local environment values. Do not put real credentials in source control.

## Environment Variables

- `MAIN_DATABASE_URL`: main website database connection for `u827241022_weddingp_web`.
- `BLOG_DATABASE_URL`: blog database connection for `wpp_blog_panel` or the verified production/staging equivalent.
- `ALLOW_DB_WRITES`: must be `false` in Phase 2A.
- `LEGACY_MEDIA_ROOT`: read-only local media root.
- `GENERATED_MEDIA_NAMESPACE`: future generated derivative namespace, currently `/_generated/media`.

## Database Access

- Main DB Prisma schema: `prisma/main/schema.prisma`
- Blog DB Prisma schema: `prisma/blog/schema.prisma`
- Main DB client: `src/server/db/clients.ts`
- Blog DB client: `src/server/db/clients.ts`

The two schemas intentionally generate separate Prisma clients. This avoids merging the main website database and blog database for convenience.

## Read-Only Safety

Phase 2A is read-only infrastructure:

- no Prisma migrations
- no inserts
- no updates
- no deletes
- no schema changes
- no production writes

`src/server/db/read-only.ts` blocks write-enabled configuration and guards raw SQL helper usage against mutating statements. Tests cover the guard.

## URL Resolution

Legacy URL compatibility foundation lives in:

- `src/server/services/legacy-url`

It supports only verified routes from the audit. Unknown or unverified routes are returned as `unknown` or `unresolved` instead of guessed.

## Media Resolution

Legacy media/path compatibility foundation lives in:

- `src/server/services/media`
- `src/features/media/legacy`
- `src/lib/legacy-paths`

The resolver preserves original paths, keeps originals separate from generated derivatives, and does not move, rename, delete, optimize, or deduplicate media.

## Local Media

Phase 2A uses a read-only local copy of verified migration media. The existing media library is not reorganized or copied by this app.

## Non-Coder Map

- App foundation: `wedding-photo-planet-next/src/app`
- Environment config: `wedding-photo-planet-next/src/lib/env`
- Main/blog database access: `wedding-photo-planet-next/src/server/db`
- Legacy URL resolver: `wedding-photo-planet-next/src/server/services/legacy-url`
- Media resolver: `wedding-photo-planet-next/src/server/services/media`
- Shared validation: `wedding-photo-planet-next/src/server/validators`
- Tests: `wedding-photo-planet-next/tests`
