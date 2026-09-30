import { describe, expect, it } from "vitest";
import { loadRuntimeEnv } from "@/lib/env/schema";

const validEnv = {
  NODE_ENV: "test",
  NEXT_PUBLIC_SITE_URL: "http://localhost:3000",
  MAIN_DATABASE_URL: "mysql://readonly:password@localhost:3306/u827241022_weddingp_web",
  BLOG_DATABASE_URL: "mysql://readonly:password@localhost:3306/wpp_blog_panel",
  ALLOW_DB_WRITES: "false",
  LEGACY_MEDIA_ROOT: "../",
  GENERATED_MEDIA_NAMESPACE: "/_generated/media",
};

describe("environment validation", () => {
  it("loads separate main and blog database URLs", () => {
    const env = loadRuntimeEnv(validEnv);

    expect(env.mainDatabaseUrl).toContain("u827241022_weddingp_web");
    expect(env.blogDatabaseUrl).toContain("wpp_blog_panel");
    expect(env.allowDbWrites).toBe(false);
  });

  it("rejects write-enabled configuration", () => {
    expect(() => loadRuntimeEnv({ ...validEnv, ALLOW_DB_WRITES: "true" })).toThrow(
      "ALLOW_DB_WRITES must be false",
    );
  });

  it("requires all database URLs", () => {
    expect(() => loadRuntimeEnv({ ...validEnv, BLOG_DATABASE_URL: undefined })).toThrow(
      "Missing required environment variable: BLOG_DATABASE_URL",
    );
  });
});
