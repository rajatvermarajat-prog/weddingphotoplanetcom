import { describe, expect, it } from "vitest";
import { blogReadDb, mainReadDb } from "@/server/db";
import { assertPhase2AReadOnlyWritesDisabled, assertReadOnlySql } from "@/server/db/read-only";

describe("read-only database guard", () => {
  it("allows select queries", () => {
    expect(() => assertReadOnlySql("SELECT * FROM wid_home LIMIT 1")).not.toThrow();
  });

  it("blocks write-like SQL", () => {
    expect(() => assertReadOnlySql("UPDATE wid_home SET h1 = 'x' WHERE id = 1")).toThrow(
      "Blocked write-capable SQL",
    );
  });

  it("blocks enabling Phase 2A writes", () => {
    expect(() => assertPhase2AReadOnlyWritesDisabled(true)).toThrow("Database writes are disabled");
  });

  it("does not expose write methods through the main read-only API", () => {
    expect("findMany" in mainReadDb.widHome).toBe(true);
    expect("create" in mainReadDb.widHome).toBe(false);
    expect("update" in mainReadDb.widHome).toBe(false);
    expect("delete" in mainReadDb.widHome).toBe(false);
    expect("upsert" in mainReadDb.widHome).toBe(false);
  });

  it("does not expose write methods through the blog read-only API", () => {
    expect("findMany" in blogReadDb.blogPost).toBe(true);
    expect("create" in blogReadDb.blogPost).toBe(false);
    expect("update" in blogReadDb.blogPost).toBe(false);
    expect("delete" in blogReadDb.blogPost).toBe(false);
    expect("upsert" in blogReadDb.blogPost).toBe(false);
  });

  it("does not expose raw SQL or transaction methods through read-only APIs", () => {
    expect("$executeRaw" in mainReadDb).toBe(false);
    expect("$queryRaw" in mainReadDb).toBe(false);
    expect("$transaction" in mainReadDb).toBe(false);
    expect("$executeRaw" in blogReadDb).toBe(false);
    expect("$queryRaw" in blogReadDb).toBe(false);
    expect("$transaction" in blogReadDb).toBe(false);
  });

  it("keeps main/blog read-only boundaries separate", () => {
    expect("widHome" in mainReadDb).toBe(true);
    expect("blogPost" in mainReadDb).toBe(false);
    expect("blogPost" in blogReadDb).toBe(true);
    expect("widHome" in blogReadDb).toBe(false);
  });
});
