import type { LegacyUrlResolution } from "./types";

const CLEAN_PUBLIC_PATHS = new Set([
  "/",
  "/images",
  "/wedding",
  "/pre-wedding",
  "/cinematography",
  "/contact",
  "/privacy-policy",
  "/terms-conditions",
  "/sitemap",
  "/blog",
]);

const PHP_REDIRECTS = new Map<string, string>([
  ["/index.php", "/"],
  ["/images.php", "/images"],
  ["/wedding.php", "/wedding"],
  ["/pre-wedding.php", "/pre-wedding"],
  ["/cinematography.php", "/cinematography"],
  ["/contact.php", "/contact"],
  ["/privacy-policy.php", "/privacy-policy"],
  ["/terms-conditions.php", "/terms-conditions"],
  ["/sitemap.php", "/sitemap"],
  ["/sitemap.html", "/sitemap"],
]);

const MEDIA_PREFIXES = [
  "/uploads/",
  "/admin_image/",
  "/assets/",
  "/css/",
  "/js/",
  "/fonts/",
  "/cache/",
  "/images/",
  "/blog/banner/",
];

function normalizePathname(input: string): { pathname: string; searchParams: URLSearchParams } {
  const url = input.startsWith("http://") || input.startsWith("https://")
    ? new URL(input)
    : new URL(input, "https://www.weddingphotoplanet.com");

  return { pathname: url.pathname, searchParams: url.searchParams };
}

export function resolveLegacyUrl(input: string): LegacyUrlResolution {
  const { pathname, searchParams } = normalizePathname(input);

  if (MEDIA_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
    return {
      status: "preserve-first",
      sourcePath: pathname,
      targetPath: pathname,
      preserveQuery: true,
      reason: "Verified legacy media/static alias.",
    };
  }

  if (CLEAN_PUBLIC_PATHS.has(pathname)) {
    return {
      status: "pass-through",
      sourcePath: pathname,
      targetPath: pathname,
      preserveQuery: pathname === "/blog",
      reason: "Verified clean public route.",
    };
  }

  const phpRedirect = PHP_REDIRECTS.get(pathname);
  if (phpRedirect) {
    return {
      status: "redirect",
      sourcePath: pathname,
      targetPath: phpRedirect,
      preserveQuery: true,
      reason: "Verified legacy PHP redirect. Query parameters are preserved unless source verification proves Apache discards them.",
    };
  }

  if (pathname === "/blog-detail.php" && searchParams.has("post")) {
    return {
      status: "redirect",
      sourcePath: pathname,
      targetPath: `/blog/${searchParams.get("post") ?? ""}`,
      preserveQuery: false,
      reason: "Verified direct blog-detail.php?post={slug} compatibility.",
    };
  }

  if (pathname === "/details.php") {
    return {
      status: "unresolved",
      sourcePath: pathname,
      preserveQuery: true,
      reason: "Legacy details.php query behavior requires implementation-time verification before redirecting.",
    };
  }

  if (pathname === "/detail.php") {
    return {
      status: "unresolved",
      sourcePath: pathname,
      preserveQuery: true,
      reason: "Legacy detail.php query patterns are not fully verified.",
    };
  }

  if (pathname.startsWith("/details/")) {
    if (pathname.endsWith("/")) {
      return {
        status: "unresolved",
        sourcePath: pathname,
        preserveQuery: true,
        reason: "Trailing-slash detail route behavior is not verified; preserve the input until implementation-time verification.",
      };
    }

    return {
      status: "pass-through",
      sourcePath: pathname,
      targetPath: pathname,
      preserveQuery: true,
      reason: "Verified product/detail clean route.",
    };
  }

  if (pathname.startsWith("/blog/")) {
    if (pathname.endsWith("/")) {
      return {
        status: "unresolved",
        sourcePath: pathname,
        preserveQuery: true,
        reason: "Trailing-slash blog route behavior is not verified; preserve the input until implementation-time verification.",
      };
    }

    const unsupportedArchive =
      pathname.startsWith("/blog/category/") ||
      pathname.startsWith("/blog/tag/") ||
      pathname.startsWith("/blog/author/");

    if (unsupportedArchive) {
      return {
        status: "unresolved",
        sourcePath: pathname,
        preserveQuery: true,
        reason: "Public category/tag/author archive URLs are not verified legacy routes.",
      };
    }

    return {
      status: "pass-through",
      sourcePath: pathname,
      targetPath: pathname,
      preserveQuery: false,
      reason: "Verified blog detail route shape.",
    };
  }

  if (pathname === "/sitemap.xml") {
    return {
      status: "unresolved",
      sourcePath: pathname,
      targetPath: "/sitemap-index.xml",
      preserveQuery: false,
      reason: "Audit indicates sitemap.xml maps or redirects to sitemap-index.xml; exact server behavior remains launch-gate verification.",
    };
  }

  if (pathname === "/sitemap-index.xml" || pathname === "/post-sitemap.xml" || pathname === "/page-sitemap.xml") {
    return {
      status: "preserve-first",
      sourcePath: pathname,
      targetPath: pathname,
      preserveQuery: false,
      reason: "Verified existing sitemap endpoint, not replaced in Phase 2A.",
    };
  }

  if (pathname === "/image.php") {
    return {
      status: "preserve-first",
      sourcePath: pathname,
      preserveQuery: true,
      reason: "Legacy image resizing endpoint may be embedded in content and is not replaced in Phase 2A.",
    };
  }

  if (pathname === "/robots.txt") {
    return {
      status: "preserve-first",
      sourcePath: pathname,
      targetPath: pathname,
      preserveQuery: false,
      reason: "Existing robots.txt routes to legacy robots.php and is not replaced in Phase 2A.",
    };
  }

  if (pathname === "/wedding-photographer" || pathname.startsWith("/wedding-photographer/")) {
    return {
      status: "preserve-first",
      sourcePath: pathname,
      targetPath: pathname,
      preserveQuery: true,
      reason: "Standalone legacy micro-site must remain untouched until its dedicated audit is complete.",
    };
  }

  if (pathname.length > 1 && pathname.endsWith("/")) {
    return {
      status: "unresolved",
      sourcePath: pathname,
      preserveQuery: true,
      reason: "Trailing-slash behavior is not verified for this route; preserve the input.",
    };
  }

  return {
    status: "unknown",
    sourcePath: pathname,
    preserveQuery: true,
    reason: "Route is not verified in Phase 1 audit documents.",
  };
}
