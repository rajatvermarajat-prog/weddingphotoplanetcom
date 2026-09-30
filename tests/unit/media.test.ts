import { describe, expect, it } from "vitest";
import { buildDerivativePath, normalizeLegacyMediaPath, resolveOriginalMedia } from "@/server/services/media";

describe("legacy media resolver", () => {
  it("normalizes admin image aliases without moving originals", () => {
    expect(normalizeLegacyMediaPath("admin_image/wid/example.jpg")).toBe(
      "uploads/admin_image/wid/example.jpg",
    );
  });

  it("normalizes blog legacy asset uploads", () => {
    expect(normalizeLegacyMediaPath("assets/uploads/tinymce/example.webp")).toBe(
      "uploads/blog/tinymce/example.webp",
    );
  });

  it("returns immutable original media references", () => {
    expect(resolveOriginalMedia("/uploads/blog/posts/example.webp")).toMatchObject({
      kind: "original",
      publicPath: "/uploads/blog/posts/example.webp",
      mutable: false,
    });
  });

  it("keeps generated derivatives outside legacy namespaces", () => {
    const derivative = buildDerivativePath({
      originalPath: "/uploads/admin_image/wid/example.jpg",
      sourceHash: "abc123",
      width: 768,
      quality: 80,
      format: "webp",
    });

    expect(derivative.publicPath).toBe("/_generated/media/abc123/768w-80-webp.webp");
    expect(derivative.normalizedPath).toBe("uploads/admin_image/wid/example.jpg");
  });

  it("rejects traversal paths", () => {
    expect(() => normalizeLegacyMediaPath("../secrets.env")).toThrow("may not traverse");
  });

  it("rejects malformed URI input", () => {
    expect(() => normalizeLegacyMediaPath("%E0%A4%A")).toThrow("malformed percent encoding");
  });

  it("rejects encoded traversal", () => {
    expect(() => normalizeLegacyMediaPath("%2e%2e/secrets.env")).toThrow("may not traverse");
  });

  it("rejects encoded backslash traversal", () => {
    expect(() => normalizeLegacyMediaPath("uploads%5c..%5csecrets.env")).toThrow("backslashes");
  });

  it("rejects Windows-style backslashes", () => {
    expect(() => normalizeLegacyMediaPath("uploads\\admin_image\\x.jpg")).toThrow("backslashes");
  });

  it("rejects absolute filesystem paths", () => {
    expect(() => normalizeLegacyMediaPath("/etc/passwd")).toThrow("absolute filesystem path");
  });

  it("rejects null bytes", () => {
    expect(() => normalizeLegacyMediaPath("uploads/blog/example%00.jpg")).toThrow("null bytes");
  });

  it("rejects invalid derivative width", () => {
    expect(() =>
      buildDerivativePath({ originalPath: "/uploads/blog/x.jpg", sourceHash: "abc123", width: 0, quality: 80, format: "webp" }),
    ).toThrow("width");
  });

  it("rejects invalid derivative quality", () => {
    expect(() =>
      buildDerivativePath({ originalPath: "/uploads/blog/x.jpg", sourceHash: "abc123", width: 320, quality: 101, format: "webp" }),
    ).toThrow("quality");
  });

  it("rejects invalid sourceHash", () => {
    expect(() =>
      buildDerivativePath({ originalPath: "/uploads/blog/x.jpg", sourceHash: "../bad", width: 320, quality: 80, format: "webp" }),
    ).toThrow("sourceHash");
  });

  it("rejects invalid derivative format", () => {
    expect(() =>
      buildDerivativePath({
        originalPath: "/uploads/blog/x.jpg",
        sourceHash: "abc123",
        width: 320,
        quality: 80,
        format: "gif" as "webp",
      }),
    ).toThrow("format");
  });
});
