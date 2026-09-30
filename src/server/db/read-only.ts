const WRITE_OPERATION_PATTERN =
  /\b(insert|update|delete|replace|alter|drop|truncate|create|rename|grant|revoke|merge|call|execute)\b/i;

export function assertReadOnlySql(sql: string): void {
  const normalized = sql.replace(/\/\*[\s\S]*?\*\//g, " ").replace(/--.*$/gm, " ");
  if (WRITE_OPERATION_PATTERN.test(normalized)) {
    throw new Error("Blocked write-capable SQL in Phase 2A read-only database layer.");
  }
}

export function assertPhase2AReadOnlyWritesDisabled(allowDbWrites: boolean): void {
  if (allowDbWrites) {
    throw new Error("Database writes are disabled in Phase 2A.");
  }
}
