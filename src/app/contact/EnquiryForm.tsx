"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";

const EVENT_TYPES = ["Wedding", "Pre-Wedding", "Cinematography", "Engagement", "Other"] as const;
const MESSAGE_MAX = 600;

type Values = { name: string; phone: string; email: string; eventType: string; date: string; location: string; message: string };
type Errors = Partial<Record<"name" | "phone" | "email", string>>;
type Channel = "whatsapp" | "email";

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

// There is no enquiry backend: the form hands the filled-in enquiry to WhatsApp or the visitor's mail app.
export default function EnquiryForm({ whatsappNumber, email }: { whatsappNumber: string; email: string }) {
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<Channel | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

  const send = (channel: Channel) => {
    const found = validate(values);
    setErrors(found);
    const firstInvalid = (["name", "phone", "email"] as const).find((key) => found[key]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLInputElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    if (channel === "whatsapp") window.open(linkFor(channel), "_blank", "noopener,noreferrer");
    else window.location.href = linkFor(channel);
    setSent(channel);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    send("whatsapp");
  };

  if (sent) {
    const app = sent === "whatsapp" ? "WhatsApp" : "Your mail app";
    return (
      <div className="ct-done" role="status">
        <svg className="ct-done__tick" width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
          <circle cx="36" cy="36" r="33" stroke="currentColor" strokeWidth="3" />
          <path d="M22 37l10 10 19-21" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3 className="ct-done__title">One last step, {values.name.trim().split(/\s+/)[0]}</h3>
        <p className="ct-done__text">{app} has opened with your enquiry filled in. Press send there and it reaches us.</p>
        <div className="ct-done__actions">
          <a className="ct-btn ct-btn--gold" href={linkFor(sent)} target={sent === "whatsapp" ? "_blank" : undefined} rel="noopener noreferrer">
            Open {sent === "whatsapp" ? "WhatsApp" : "mail app"} again
          </a>
          <button type="button" className="ct-btn ct-btn--line" onClick={() => setSent(null)}>
            Edit enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} className="ct-form" onSubmit={onSubmit} noValidate>
      <div className="ct-form__row">
        <Field id="ct-name" label="Your name" error={errors.name}>
          <input
            id="ct-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Full name"
            value={values.name}
            onChange={(event) => set("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "ct-name-error" : undefined}
          />
        </Field>
        <Field id="ct-phone" label="Phone" error={errors.phone}>
          <input
            id="ct-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+91 98765 43210"
            value={values.phone}
            onChange={(event) => set("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "ct-phone-error" : undefined}
          />
        </Field>
      </div>

      <Field id="ct-email" label="Email" optional error={errors.email}>
        <input
          id="ct-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={values.email}
          onChange={(event) => set("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "ct-email-error" : undefined}
        />
      </Field>

      <div className="ct-field">
        <span className="ct-field__label" id="ct-event-label">
          What are you planning?
        </span>
        <div className="ct-chips" role="group" aria-labelledby="ct-event-label">
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
        <Field id="ct-date" label="Event date" optional>
          <input id="ct-date" name="date" type="date" value={values.date} onChange={(event) => set("date", event.target.value)} />
        </Field>
        <Field id="ct-location" label="City or venue" optional>
          <input
            id="ct-location"
            name="location"
            type="text"
            placeholder="e.g. Delhi NCR"
            value={values.location}
            onChange={(event) => set("location", event.target.value)}
          />
        </Field>
      </div>

      <Field id="ct-message" label="Message" optional>
        <textarea
          id="ct-message"
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
        <button type="submit" className="ct-btn ct-btn--gold ct-btn--wide">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          Send on WhatsApp
        </button>
        <button type="button" className="ct-btn ct-btn--line" onClick={() => send("email")}>
          Send by Email
        </button>
      </div>
      <p className="ct-form__note">Your enquiry opens in WhatsApp or your mail app, ready to send. Nothing is stored on this site.</p>
    </form>
  );
}
