import { loadRuntimeEnv } from "./schema";

export const env = loadRuntimeEnv();

export type { RuntimeEnv } from "./schema";
export { loadRuntimeEnv };
