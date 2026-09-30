export type LegacyUrlStatus = "pass-through" | "redirect" | "rewrite" | "preserve-first" | "unresolved" | "unknown";

export type LegacyUrlResolution = {
  status: LegacyUrlStatus;
  sourcePath: string;
  targetPath?: string;
  preserveQuery: boolean;
  reason: string;
};
