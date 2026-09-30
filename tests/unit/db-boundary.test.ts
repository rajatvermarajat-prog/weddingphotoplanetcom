import { ESLint } from "eslint";
import { describe, expect, it } from "vitest";

const eslint = new ESLint();

describe("database import boundary", () => {
  it("rejects application-level imports of unrestricted Prisma clients", async () => {
    const [result] = await eslint.lintText(
      "import { internalMainDb } from '@/server/db/internal/clients';\nvoid internalMainDb;\n",
      { filePath: "src/server/services/example/unsafe-db-import.ts" },
    );

    expect(result.messages).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          ruleId: "db-boundary/no-internal-prisma-client-import",
          severity: 2,
        }),
      ]),
    );
  });

  it("allows DB infrastructure to import unrestricted Prisma clients", async () => {
    const [result] = await eslint.lintText(
      "import { internalMainDb } from './internal/clients';\nvoid internalMainDb;\n",
      { filePath: "src/server/db/read-only-main.ts" },
    );

    expect(result.messages).toEqual([]);
  });
});
