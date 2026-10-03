"use client";

import { useState } from "react";

export function PasswordField() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="admin-field">
      <label htmlFor="password">Password</label>
      <div className="admin-password-field">
        <input
          id="password"
          name="password"
          type={visible ? "text" : "password"}
          autoComplete="current-password"
          required
        />
        <button
          className="admin-password-toggle"
          type="button"
          onClick={() => setVisible((current) => !current)}
          aria-controls="password"
          aria-pressed={visible}
        >
          {visible ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}
