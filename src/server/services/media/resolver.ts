import path from "node:path";
import type { DerivativeRequest, MediaReference } from "./types";

const LEGACY_ALIAS_PREFIXES = new Map<string, string>([
  ["uploads/admin_image/", "admin_image/"],
  ["admin_image/", "admin_image/"],
  ["../admin_image/", "admin_image/"],
  ["assets/uploads/", "uploads/blog/"],
]);

const WEB_ABSOLUTE_PREFIXES = [
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

function stripLeadingSlash(value: string): string {
  return value.replace(/^\/+/, "");
}

function decodePath(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    throw new Error("Legacy media path contains malformed percent encoding.");
  }
}

function preventTraversal(value: string): string {
  if (value.includes("\0")) {
    throw new Error("Legacy media path may not contain null bytes.");
  }

  if (value.includes("\\")) {
    throw new Error("Legacy media path may not contain backslashes.");
  }

  if (/^[A-Za-z]:\//.test(value)) {
    throw new Error("Legacy media path may not be an absolute filesystem path.");
  }

  if (value.startsWith("/") && !WEB_ABSOLUTE_PREFIXES.some((prefix) => value.startsWith(prefix))) {
    throw new Error("Legacy media path may not be an absolute filesystem path.");
  }

  const normalized = path.posix.normalize(stripLeadingSlash(value));
  if (normalized.startsWith("../") || normalized === ".." || normalized.includes("/../")) {
    throw new Error("Legacy media path may not traverse outside the media root.");
  }

  return normalized;
}

export function normalizeLegacyMediaPath(inputPath: string): string {
  const withoutQuery = inputPath.split("?")[0] ?? inputPath;
  const decoded = decodePath(withoutQuery.trim());

  for (const [legacyPrefix, normalizedPrefix] of LEGACY_ALIAS_PREFIXES) {
    if (decoded.startsWith(legacyPrefix)) {
      return preventTraversal(`${normalizedPrefix}${decoded.slice(legacyPrefix.length)}`);
    }
  }

  const safePath = preventTraversal(decoded);

  return safePath;
}

export function resolveOriginalMedia(inputPath: string): MediaReference {
  const normalizedPath = normalizeLegacyMediaPath(inputPath);
  return {
    kind: "original",
    inputPath,
    normalizedPath,
    publicPath: `/${normalizedPath}`,
    storageKey: normalizedPath,
    mutable: false,
  };
}

function assertDerivativeRequest(request: DerivativeRequest): void {
  if (!/^[a-f0-9]{6,128}$/i.test(request.sourceHash)) {
    throw new Error("Derivative sourceHash must be a hexadecimal hash-like value.");
  }

  if (!Number.isInteger(request.width) || request.width < 1 || request.width > 4096) {
    throw new Error("Derivative width must be an integer between 1 and 4096.");
  }

  if (!Number.isInteger(request.quality) || request.quality < 1 || request.quality > 100) {
    throw new Error("Derivative quality must be an integer between 1 and 100.");
  }

  if (!["avif", "webp", "jpg", "png"].includes(request.format)) {
    throw new Error("Derivative format is not allowed.");
  }
}

function assertDerivativeNamespace(namespace: string): string {
  if (!namespace.startsWith("/_generated/media")) {
    throw new Error("Derivative namespace must stay under /_generated/media.");
  }

  if (namespace.includes("\0") || namespace.includes("\\") || namespace.includes("..")) {
    throw new Error("Derivative namespace is unsafe.");
  }

  return namespace.replace(/\/+$/, "");
}

export function buildDerivativePath(request: DerivativeRequest, namespace = "/_generated/media"): MediaReference {
  assertDerivativeRequest(request);
  const normalizedOriginal = normalizeLegacyMediaPath(request.originalPath);
  const safeNamespace = assertDerivativeNamespace(namespace);
  const extension = request.format === "jpg" ? "jpg" : request.format;
  const generatedPath = `${safeNamespace}/${request.sourceHash}/${request.width}w-${request.quality}-${request.format}.${extension}`;

  return {
    kind: "generated-derivative",
    inputPath: request.originalPath,
    normalizedPath: normalizedOriginal,
    publicPath: generatedPath,
    storageKey: stripLeadingSlash(generatedPath),
    mutable: false,
  };
}
