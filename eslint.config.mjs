import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import tseslint from "typescript-eslint";

const appRoot = dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({
  baseDirectory: appRoot,
});

const restrictedDbClientSources = new Set([
  "@/server/db/internal/clients",
  "@/server/db/internal/clients.ts",
]);

const dbBoundaryPlugin = {
  rules: {
    "no-internal-prisma-client-import": {
      meta: {
        type: "problem",
        docs: {
          description:
            "Prevents normal application code from importing unrestricted Prisma clients.",
        },
        messages: {
          restricted:
            "Import mainReadDb or blogReadDb from '@/server/db' instead of unrestricted internal Prisma clients.",
        },
        schema: [],
      },
      create(context) {
        const filename = context.filename.replaceAll("\\", "/");
        const isDbInfrastructure = filename.includes("/src/server/db/");

        if (isDbInfrastructure) {
          return {};
        }

        return {
          ImportDeclaration(node) {
            const source = node.source.value;

            if (typeof source !== "string") {
              return;
            }

            if (
              restrictedDbClientSources.has(source) ||
              source.endsWith("/server/db/internal/clients") ||
              source.endsWith("/server/db/internal/clients.ts") ||
              source.includes("/db/internal/clients")
            ) {
              context.report({ node, messageId: "restricted" });
              return;
            }

            if (
              source === "@/server/db" &&
              node.specifiers.some(
                (specifier) =>
                  specifier.type === "ImportSpecifier" &&
                  (specifier.imported.name === "internalMainDb" ||
                    specifier.imported.name === "internalBlogDb"),
              )
            ) {
              context.report({ node, messageId: "restricted" });
            }
          },
        };
      },
    },
  },
};

export default tseslint.config(
  {
    ignores: [".next/**", "node_modules/**", "generated/**", "next-env.d.ts"],
  },
  {
    plugins: {
      "db-boundary": dbBoundaryPlugin,
    },
    rules: {
      "db-boundary/no-internal-prisma-client-import": "error",
    },
  },
  js.configs.recommended,
  ...compat.extends("next/core-web-vitals"),
  ...tseslint.configs.recommended,
);
