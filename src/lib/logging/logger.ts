export type LogContext = Record<string, string | number | boolean | null | undefined>;

export function logInfo(message: string, context: LogContext = {}): void {
  console.info(JSON.stringify({ level: "info", message, ...context }));
}

export function logWarn(message: string, context: LogContext = {}): void {
  console.warn(JSON.stringify({ level: "warn", message, ...context }));
}
