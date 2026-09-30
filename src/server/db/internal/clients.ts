import { PrismaClient as BlogPrismaClient } from "../../../../generated/prisma/blog";
import { PrismaClient as MainPrismaClient } from "../../../../generated/prisma/main";
import { env } from "@/lib/env";
import { assertPhase2AReadOnlyWritesDisabled } from "../read-only";

declare global {
  var internalMainPrisma: MainPrismaClient | undefined;
  var internalBlogPrisma: BlogPrismaClient | undefined;
}

assertPhase2AReadOnlyWritesDisabled(env.allowDbWrites);

export const internalMainDb =
  globalThis.internalMainPrisma ??
  new MainPrismaClient({
    datasources: {
      db: {
        url: env.mainDatabaseUrl,
      },
    },
  });

export const internalBlogDb =
  globalThis.internalBlogPrisma ??
  new BlogPrismaClient({
    datasources: {
      db: {
        url: env.blogDatabaseUrl,
      },
    },
  });

if (env.nodeEnv !== "production") {
  globalThis.internalMainPrisma = internalMainDb;
  globalThis.internalBlogPrisma = internalBlogDb;
}
