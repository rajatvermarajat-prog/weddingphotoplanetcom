type ReadMethodName =
  | "findUnique"
  | "findUniqueOrThrow"
  | "findFirst"
  | "findFirstOrThrow"
  | "findMany"
  | "count"
  | "aggregate"
  | "groupBy";

export type ReadOnlyDelegate<TDelegate> = Pick<TDelegate, Extract<keyof TDelegate, ReadMethodName>>;

const READ_METHODS = [
  "findUnique",
  "findUniqueOrThrow",
  "findFirst",
  "findFirstOrThrow",
  "findMany",
  "count",
  "aggregate",
  "groupBy",
] as const;

export function createReadOnlyDelegate<TDelegate extends object>(delegate: TDelegate): ReadOnlyDelegate<TDelegate> {
  const readOnlyDelegate: Partial<Record<ReadMethodName, unknown>> = {};

  for (const method of READ_METHODS) {
    const candidate = (delegate as Record<string, unknown>)[method];
    if (typeof candidate === "function") {
      readOnlyDelegate[method] = candidate.bind(delegate);
    }
  }

  return Object.freeze(readOnlyDelegate) as ReadOnlyDelegate<TDelegate>;
}
