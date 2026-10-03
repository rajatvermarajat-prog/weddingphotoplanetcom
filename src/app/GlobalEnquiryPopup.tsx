"use client";

import { useEffect, useRef, useState } from "react";
import EnquiryForm from "@/app/contact/EnquiryForm";
import { footer } from "@/app/_wpp-pages/data";

const FIRST_PROMPT_MS = 7000;
const LONG_STAY_PROMPT_MS = 60000;

const phones = footer.mobile.split(",").map((phone) => phone.trim());
const emails = [footer.email1, footer.email2].filter(Boolean);
const whatsappPhone = phones[1] ?? phones[0] ?? "";
const whatsappNumber = whatsappPhone.replace(/\D/g, "");

export function GlobalEnquiryPopup() {
  const [open, setOpen] = useState(false);
  const shown = useRef({ first: false, longStay: false });

  useEffect(() => {
    const show = (kind: keyof typeof shown.current) => {
      if (shown.current[kind]) return;
      shown.current[kind] = true;
      setOpen(true);
    };

    const firstTimer = window.setTimeout(() => show("first"), FIRST_PROMPT_MS);
    const longStayTimer = window.setTimeout(() => show("longStay"), LONG_STAY_PROMPT_MS);
    return () => {
      window.clearTimeout(firstTimer);
      window.clearTimeout(longStayTimer);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  if (!open || !whatsappNumber || !emails[0]) {
    return null;
  }

  return (
    <div className="wpp-enquiry-pop" role="dialog" aria-modal="true" aria-labelledby="wpp-enquiry-pop-title">
      <button type="button" className="wpp-enquiry-pop__backdrop" aria-label="Close enquiry form" onClick={() => setOpen(false)} />
      <div className="wpp-enquiry-pop__panel">
        <button type="button" className="wpp-enquiry-pop__close" aria-label="Close enquiry form" onClick={() => setOpen(false)}>
          <i className="fa fa-times" aria-hidden="true" />
        </button>
        <div className="wpp-enquiry-pop__head">
          <p className="wpp-enquiry-pop__eyebrow">Quick Enquiry</p>
          <h2 id="wpp-enquiry-pop-title">Tell us about your wedding date</h2>
          <p>Share a few details and we will respond on WhatsApp or email.</p>
        </div>
        <EnquiryForm whatsappNumber={whatsappNumber} email={emails[0]} idPrefix="wpp-pop" />
      </div>
    </div>
  );
}
