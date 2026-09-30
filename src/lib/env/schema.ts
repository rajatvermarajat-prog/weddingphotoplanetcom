export type RuntimeEnv = {
  nodeEnv: "development" | "test" | "production";
  siteUrl: string;
  mainDatabaseUrl: string;
  blogDatabaseUrl: string;
  allowDbWrites: false;
  legacyMediaRoot: string;
  generatedMediaNamespace: string;
};

type EnvSource = Record<string, string | undefined>;

function required(source: EnvSource, key: string): string {
  const value = source[key];
  if (!value || value.trim() === "") {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

function parseNodeEnv(value: string | undefined): RuntimeEnv["nodeEnv"] {
  if (value === "production" || value === "test" || value === "development") {
    return value;
  }
  return "development";
}

function parseReadOnlyFlag(value: string | undefined): false {
  if (value === undefined || value === "" || value === "false") {
    return false;
  }
  throw new Error("ALLOW_DB_WRITES must be false for Phase 2A.");
}

function assertUrl(value: string, key: string): string {
  try {
    new URL(value);
    return value;
  } catch {
    throw new Error(`${key} must be a valid URL.`);
  }
}

export function loadRuntimeEnv(source: EnvSource = process.env): RuntimeEnv {
  return {
    nodeEnv: parseNodeEnv(source.NODE_ENV),
    siteUrl: assertUrl(required(source, "NEXT_PUBLIC_SITE_URL"), "NEXT_PUBLIC_SITE_URL"),
    mainDatabaseUrl: required(source, "MAIN_DATABASE_URL"),
    blogDatabaseUrl: required(source, "BLOG_DATABASE_URL"),
    allowDbWrites: parseReadOnlyFlag(source.ALLOW_DB_WRITES),
    legacyMediaRoot: required(source, "LEGACY_MEDIA_ROOT"),
    generatedMediaNamespace: required(source, "GENERATED_MEDIA_NAMESPACE"),
  };
}
