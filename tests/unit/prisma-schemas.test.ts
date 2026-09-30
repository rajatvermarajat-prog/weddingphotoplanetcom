import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const root = process.cwd();
const legacyRoot = join(root, "..");

function parseSqlColumns(sql: string): Map<string, string[]> {
  const tables = new Map<string, string[]>();
  const tableRegex = /CREATE TABLE `([^`]+)` \(([\s\S]*?)\) ENGINE=/g;
  let tableMatch: RegExpExecArray | null;

  while ((tableMatch = tableRegex.exec(sql)) !== null) {
    const [, tableName, body] = tableMatch;
    const columns = [...body.matchAll(/^\s+`([^`]+)`\s+/gm)].map((match) => match[1]);
    tables.set(tableName, columns);
  }

  return tables;
}

function parsePrismaModelColumns(schema: string): Map<string, string[]> {
  const tables = new Map<string, string[]>();
  const modelRegex = /model\s+\w+\s+\{([\s\S]*?)\n\}/g;
  let modelMatch: RegExpExecArray | null;

  while ((modelMatch = modelRegex.exec(schema)) !== null) {
    const body = modelMatch[1];
    const tableMatch = body.match(/@@map\("([^"]+)"\)/);
    if (!tableMatch) {
      continue;
    }

    const columns = body
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("@") && !line.startsWith("//"))
      .filter((line) => !line.startsWith("@@") && !line.includes("@relation("))
      .filter((line) => !line.split(/\s+/)[1]?.includes("[]"))
      .map((line) => {
        const fieldName = line.split(/\s+/)[0];
        const mapMatch = line.match(/@map\("([^"]+)"\)/);
        return mapMatch?.[1] ?? fieldName;
      });

    tables.set(tableMatch[1], columns);
  }

  return tables;
}

function expectSqlColumnsCovered(sqlPath: string, schemaPath: string): void {
  const sqlTables = parseSqlColumns(readFileSync(sqlPath, "utf8"));
  const prismaTables = parsePrismaModelColumns(readFileSync(schemaPath, "utf8"));

  expect([...prismaTables.keys()].sort()).toEqual([...sqlTables.keys()].sort());

  for (const [table, sqlColumns] of sqlTables.entries()) {
    expect(prismaTables.get(table)?.sort(), `Prisma columns for ${table}`).toEqual(sqlColumns.sort());
  }
}

describe("Prisma legacy mapping foundation", () => {
  it("keeps main and blog schemas separate", () => {
    expect(existsSync(join(root, "prisma/main/schema.prisma"))).toBe(true);
    expect(existsSync(join(root, "prisma/blog/schema.prisma"))).toBe(true);
  });

  it("maps the main database datasource separately", () => {
    const schema = readFileSync(join(root, "prisma/main/schema.prisma"), "utf8");
    expect(schema).toContain('url      = env("MAIN_DATABASE_URL")');
    expect(schema).toContain('@@map("wid_home")');
  });

  it("maps the blog database datasource separately", () => {
    const schema = readFileSync(join(root, "prisma/blog/schema.prisma"), "utf8");
    expect(schema).toContain('url      = env("BLOG_DATABASE_URL")');
    expect(schema).toContain('@@map("posts")');
  });

  it("does not create migrations in Phase 2A", () => {
    expect(existsSync(join(root, "prisma/migrations"))).toBe(false);
  });

  it("covers every main SQL table and column in Prisma", () => {
    expectSqlColumnsCovered(
      join(legacyRoot, "storage/database/u827241022_weddingp_web.sql"),
      join(root, "prisma/main/schema.prisma"),
    );
  });

  it("covers every blog SQL table and column in Prisma", () => {
    expectSqlColumnsCovered(
      join(legacyRoot, "storage/database/wpp_blog_panel.sql"),
      join(root, "prisma/blog/schema.prisma"),
    );
  });
});
