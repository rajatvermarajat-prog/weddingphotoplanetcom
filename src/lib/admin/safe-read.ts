import "server-only";

import { createElement } from "react";

export type AdminReadState = {
  databaseAvailable: boolean;
  message?: string;
};

const adminReadTimeoutMs = 900;
const adminRetryAfterMs = 60_000;

let databaseUnavailableUntil = 0;
let lastUnavailableMessage = "Database is unavailable.";

function timeout<T>(): Promise<T> {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error(`Database connection timed out after ${adminReadTimeoutMs}ms.`)), adminReadTimeoutMs);
  });
}

export async function safeAdminRead<T>(read: () => Promise<T>, fallback: T): Promise<{ data: T; state: AdminReadState }> {
  if (Date.now() < databaseUnavailableUntil) {
    return {
      data: fallback,
      state: {
        databaseAvailable: false,
        message: lastUnavailableMessage,
      },
    };
  }

  try {
    return { data: await Promise.race([read(), timeout<T>()]), state: { databaseAvailable: true } };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Database is unavailable.";
    databaseUnavailableUntil = Date.now() + adminRetryAfterMs;
    lastUnavailableMessage = message;

    return {
      data: fallback,
      state: {
        databaseAvailable: false,
        message,
      },
    };
  }
}

export function AdminDatabaseNotice({ state }: { state: AdminReadState }) {
  if (state.databaseAvailable) return null;

  return createElement(
    "section",
    { className: "admin-section admin-warning", "aria-live": "polite" },
    createElement("h2", null, "Database Connection Unavailable"),
    createElement(
      "p",
      null,
      "The admin panel is still protected, but it cannot reach the configured MySQL server right now. To keep navigation fast, database reads are paused briefly after a failed connection attempt.",
    ),
    state.message ? createElement("p", { className: "admin-muted" }, state.message) : null,
  );
}
