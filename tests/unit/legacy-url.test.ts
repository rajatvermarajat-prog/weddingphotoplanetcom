import { describe, expect, it } from "vitest";
import { resolveLegacyUrl } from "@/server/services/legacy-url";

describe("legacy URL resolver", () => {
  it("passes verified public routes through", () => {
    expect(resolveLegacyUrl("/wedding")).toMatchObject({
      status: "pass-through",
      targetPath: "/wedding",
    });
  });

  it("redirects verified legacy php pages", () => {
    expect(resolveLegacyUrl("/wedding.php")).toMatchObject({
      status: "redirect",
      targetPath: "/wedding",
      preserveQuery: true,
    });
  });

  it("preserves query parameters for php redirects unless verified otherwise", () => {
    expect(resolveLegacyUrl("/wedding.php?utm_source=test")).toMatchObject({
      status: "redirect",
      targetPath: "/wedding",
      preserveQuery: true,
    });
  });

  it("preserves blog pagination query strings", () => {
    expect(resolveLegacyUrl("/blog?page=2")).toMatchObject({
      status: "pass-through",
      targetPath: "/blog",
      preserveQuery: true,
    });
  });

  it("maps direct blog detail compatibility", () => {
    expect(resolveLegacyUrl("/blog-detail.php?post=sample-post")).toMatchObject({
      status: "redirect",
      targetPath: "/blog/sample-post",
    });
  });

  it("keeps unverified taxonomy archives unresolved", () => {
    expect(resolveLegacyUrl("/blog/category/weddings")).toMatchObject({
      status: "unresolved",
    });
  });

  it("keeps blog banner files as media aliases, not blog detail routes", () => {
    expect(resolveLegacyUrl("/blog/banner/example.jpg")).toMatchObject({
      status: "preserve-first",
      targetPath: "/blog/banner/example.jpg",
    });
  });

  it("keeps images static aliases distinct from the images page", () => {
    expect(resolveLegacyUrl("/images/logo.png")).toMatchObject({
      status: "preserve-first",
      targetPath: "/images/logo.png",
    });
  });

  it("preserves robots.txt legacy behavior", () => {
    expect(resolveLegacyUrl("/robots.txt")).toMatchObject({
      status: "preserve-first",
      targetPath: "/robots.txt",
    });
  });

  it("does not silently normalize trailing slashes", () => {
    expect(resolveLegacyUrl("/wedding/")).toMatchObject({
      status: "unresolved",
      sourcePath: "/wedding/",
    });
  });

  it("marks wedding-photographer as preserve-first", () => {
    expect(resolveLegacyUrl("/wedding-photographer/send_email.php")).toMatchObject({
      status: "preserve-first",
    });
  });

  it("keeps unknown routes unknown", () => {
    expect(resolveLegacyUrl("/made-up-route")).toMatchObject({
      status: "unknown",
    });
  });
});
