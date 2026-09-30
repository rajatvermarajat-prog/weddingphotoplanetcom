export type ValidationResult<T> =
  | { ok: true; value: T }
  | { ok: false; issues: string[] };

export function nonEmptyString(value: unknown, label: string): ValidationResult<string> {
  if (typeof value !== "string" || value.trim() === "") {
    return { ok: false, issues: [`${label} must be a non-empty string.`] };
  }
  return { ok: true, value };
}
