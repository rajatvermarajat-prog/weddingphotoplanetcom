export type MediaKind = "original" | "generated-derivative";

export type MediaReference = {
  kind: MediaKind;
  inputPath: string;
  normalizedPath: string;
  publicPath: string;
  storageKey: string;
  mutable: false;
};

export type DerivativeRequest = {
  originalPath: string;
  sourceHash: string;
  width: number;
  quality: number;
  format: "avif" | "webp" | "jpg" | "png";
};
