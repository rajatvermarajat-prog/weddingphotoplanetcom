"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";

const EVENT_TYPES = ["Wedding", "Pre-Wedding", "Cinematography", "Engagement", "Other"] as const;
const MESSAGE_MAX = 600;

type Values = { name: string; phone: string; email: string; eventType: string; date: string; location: string; message: string };
type Errors = Partial<Record<"name" | "phone" | "email", string>>;
type Channel = "site" | "whatsapp" | "email";

const emptyValues: Values = { name: "", phone: "", email: "", eventType: "", date: "", location: "", message: "" };

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name";
  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) errors.phone = "Enter a valid phone number";
  if (values.email.trim() && !/^\S+@\S+\.\S+$/.test(values.email.trim())) errors.email = "Enter a valid email address";
  return errors;
}

function buildMessage(values: Values): string {
  const lines: [string, string][] = [
    ["Name", values.name],
    ["Phone", values.phone],
    ["Email", values.email],
    ["Event", values.eventType],
    ["Date", values.date],
    ["Location", values.location],
    ["Message", values.message],
  ];
  const details = lines.filter(([, value]) => value.trim()).map(([label, value]) => `${label}: ${value.trim()}`);
  return ["Hi Wedding Photo Planet, I would like to enquire about a shoot.", "", ...details].join("\n");
}

function Field({ id, label, optional = false, error, children }: { id: string; label: string; optional?: boolean; error?: string; children: ReactNode }) {
  return (
    <div className={`ct-field${error ? " has-error" : ""}`}>
      <label htmlFor={id}>
        {label}
        {optional ? <i>Optional</i> : null}
      </label>
      {children}
      {error ? (
        <p className="ct-field__error" id={`${id}-error`} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function EnquiryForm({ whatsappNumber, email, idPrefix = "ct" }: { whatsappNumber: string; email: string; idPrefix?: string }) {
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<Channel | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const id = (name: string) => `${idPrefix}-${name}`;

  const set = (key: keyof Values, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (key in errors) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const linkFor = (channel: Channel) => {
    const message = buildMessage(values);
    return channel === "whatsapp"
      ? `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`
      : `mailto:${email}?subject=${encodeURIComponent(`Enquiry from ${values.name.trim()}`)}&body=${encodeURIComponent(message)}`;
  };

  const send = (channel: Exclude<Channel, "site">) => {
    const found = validate(values);
    setErrors(found);
    setSubmitError("");
    const firstInvalid = (["name", "phone", "email"] as const).find((key) => found[key]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLInputElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    if (channel === "whatsapp") window.open(linkFor(channel), "_blank", "noopener,noreferrer");
    else window.location.href = linkFor(channel);
    setSent(channel);
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    setSubmitError("");
    const firstInvalid = (["name", "phone", "email"] as const).find((key) => found[key]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLInputElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json().catch(() => null)) as { message?: string } | null;
      if (!response.ok) {
        throw new Error(result?.message || "Could not submit your enquiry");
      }
      setSent("site");
      setValues(emptyValues);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Could not submit your enquiry");
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    const app = sent === "whatsapp" ? "WhatsApp" : sent === "email" ? "Your mail app" : "Wedding Photo Planet";
    return (
      <div className="ct-done" role="status">
        <svg className="ct-done__tick" width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
          <circle cx="36" cy="36" r="33" stroke="currentColor" strokeWidth="3" />
          <path d="M22 37l10 10 19-21" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3 className="ct-done__title">{sent === "site" ? "Enquiry sent" : `One last step, ${values.name.trim().split(/\s+/)[0]}`}</h3>
        <p className="ct-done__text">
          {sent === "site" ? "Thank you for contacting us. We will get back to you soon." : `${app} has opened with your enquiry filled in. Press send there and it reaches us.`}
        </p>
        <div className="ct-done__actions">
          {sent === "site" ? null : (
            <a className="ct-btn ct-btn--gold" href={linkFor(sent)} target={sent === "whatsapp" ? "_blank" : undefined} rel="noopener noreferrer">
              Open {sent === "whatsapp" ? "WhatsApp" : "mail app"} again
            </a>
          )}
          <button type="button" className="ct-btn ct-btn--line" onClick={() => setSent(null)}>
            {sent === "site" ? "Send another enquiry" : "Edit enquiry"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} className="ct-form" onSubmit={onSubmit} noValidate>
      <div className="ct-form__row">
        <Field id={id("name")} label="Your name" error={errors.name}>
          <input
            id={id("name")}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Full name"
            value={values.name}
            onChange={(event) => set("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${id("name")}-error` : undefined}
          />
        </Field>
        <Field id={id("phone")} label="Phone" error={errors.phone}>
          <input
            id={id("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+91 98765 43210"
            value={values.phone}
            onChange={(event) => set("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${id("phone")}-error` : undefined}
          />
        </Field>
      </div>

      <Field id={id("email")} label="Email" optional error={errors.email}>
        <input
          id={id("email")}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={values.email}
          onChange={(event) => set("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${id("email")}-error` : undefined}
        />
      </Field>

      <div className="ct-field">
        <span className="ct-field__label" id={id("event-label")}>
          What are you planning?
        </span>
        <div className="ct-chips" role="group" aria-labelledby={id("event-label")}>
          {EVENT_TYPES.map((type) => (
            <button
              type="button"
              key={type}
              className={`ct-chip${values.eventType === type ? " is-on" : ""}`}
              aria-pressed={values.eventType === type}
              onClick={() => set("eventType", values.eventType === type ? "" : type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="ct-form__row">
        <Field id={id("date")} label="Event date" optional>
          <input id={id("date")} name="date" type="date" value={values.date} onChange={(event) => set("date", event.target.value)} />
        </Field>
        <Field id={id("location")} label="City or venue" optional>
          <input
            id={id("location")}
            name="location"
            type="text"
            placeholder="e.g. Delhi NCR"
            value={values.location}
            onChange={(event) => set("location", event.target.value)}
          />
        </Field>
      </div>

      <Field id={id("message")} label="Message" optional>
        <textarea
          id={id("message")}
          name="message"
          rows={4}
          maxLength={MESSAGE_MAX}
          placeholder="Tell us about your day and what you are looking for"
          value={values.message}
          onChange={(event) => set("message", event.target.value)}
        />
        <span className="ct-field__count" aria-hidden="true">
          {values.message.length} / {MESSAGE_MAX}
        </span>
      </Field>

      <div className="ct-form__actions">
        <button type="submit" className="ct-btn ct-btn--gold ct-btn--wide" disabled={submitting}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 2 11 13" />
            <path d="m22 2-7 20-4-9-9-4 20-7z" />
          </svg>
          {submitting ? "Sending..." : "Submit enquiry"}
        </button>
        <button type="button" className="ct-btn ct-btn--line" onClick={() => send("whatsapp")} disabled={submitting}>
          WhatsApp
        </button>
        <button type="button" className="ct-btn ct-btn--line" onClick={() => send("email")}>
          Email
        </button>
      </div>
      {submitError ? (
        <p className="ct-field__error" role="alert">
          {submitError}
        </p>
      ) : null}
      <p className="ct-form__note">Your enquiry is sent to Wedding Photo Planet. WhatsApp and email are available as backup options.</p>
    </form>
  );
}
