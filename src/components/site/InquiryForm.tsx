"use client";

import { useState } from "react";
import {
  BUSINESS,
  buildMailtoUrl,
  buildWhatsAppUrl,
  formatInquiryMessage,
  type InquiryPayload,
} from "@/lib/contact";

interface Props {
  /** Pre-fill the package field (e.g. on a package detail page). */
  defaultPackage?: string;
  /** Tag the inquiry with the page it came from. */
  source?: string;
  /** Override the submit-button label. */
  submitLabel?: string;
  /** Hide the dates row (e.g. when used as a recruitment form). */
  showDates?: boolean;
  /** Hide the travellers row (e.g. when used as a contact form). */
  showTravellers?: boolean;
}

const TODAY = new Date().toISOString().slice(0, 10);

export default function InquiryForm({
  defaultPackage,
  source = "Sanchaari website",
  submitLabel = "Send enquiry on WhatsApp",
  showDates = true,
  showTravellers = true,
}: Props) {
  const [submitted, setSubmitted] = useState<{
    waUrl: string;
    mailUrl: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const pkg = String(data.get("package") || "").trim();

    if (!name || !phone) {
      setError("Please share your name and phone number so we can call you back.");
      return;
    }

    const payload: InquiryPayload = {
      name,
      phone,
      email: email || undefined,
      message: message || undefined,
      package: pkg || defaultPackage || undefined,
      source,
    };

    if (showTravellers) {
      payload.travellers = {
        adults: Number(data.get("adults") || 0),
        seniors: Number(data.get("seniors") || 0),
        children: Number(data.get("children") || 0),
      };
    }
    if (showDates) {
      payload.dates = {
        start: String(data.get("startDate") || ""),
        end: String(data.get("endDate") || ""),
      };
    }

    const message_ = formatInquiryMessage(payload);
    const waUrl = buildWhatsAppUrl(message_);
    const mailUrl = buildMailtoUrl(
      `Enquiry from ${name} for ${payload.package ?? "a South India tour"}`,
      message_
    );

    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted({ waUrl, mailUrl });
    form.reset();
  }

  if (submitted) {
    return (
      <div className="inquiry-success" role="status" aria-live="polite">
        <h3>Thank you. Your enquiry is on its way.</h3>
        <p>
          WhatsApp should have opened in a new tab with your details pre-filled.
          If it didn&apos;t, you can resend below or write to us directly.
        </p>
        <div className="inquiry-success__actions">
          <a
            className="btn btn--whatsapp"
            href={submitted.waUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            Open WhatsApp again
          </a>
          <a className="btn btn--ghost" href={submitted.mailUrl}>
            Send by email instead
          </a>
        </div>
        <p className="inquiry-success__note">
          Prefer to talk? Call us at{" "}
          <a href={`tel:${BUSINESS.phoneHref}`}>{BUSINESS.phone}</a> · {BUSINESS.hours}
        </p>

        <style>{`
          .inquiry-success {
            background: var(--heritage-ivory);
            border: 1px solid var(--heritage-line);
            padding: 2rem;
            border-radius: var(--radius-lg);
          }
          .inquiry-success h3 { color: var(--heritage-ink); margin-bottom: 0.5rem; }
          .inquiry-success p { color: var(--heritage-sub); }
          .inquiry-success__actions { display: flex; gap: 0.75rem; flex-wrap: wrap; margin: 1.25rem 0; }
          .inquiry-success__note { font-size: 0.9375rem; }
        `}</style>
      </div>
    );
  }

  return (
    <form className="inquiry-form" onSubmit={onSubmit} noValidate>
      <div className="field-grid-2">
        <div className="form-row">
          <label htmlFor="inq-name">Your name</label>
          <input
            id="inq-name"
            name="name"
            type="text"
            className="input"
            autoComplete="name"
            required
            placeholder="e.g. Ramesh Murthy"
          />
        </div>
        <div className="form-row">
          <label htmlFor="inq-phone">Phone</label>
          <input
            id="inq-phone"
            name="phone"
            type="tel"
            className="input"
            autoComplete="tel"
            required
            placeholder="+91 9XXXXXXXXX"
          />
        </div>
      </div>

      <div className="form-row">
        <label htmlFor="inq-email">Email (optional)</label>
        <input
          id="inq-email"
          name="email"
          type="email"
          className="input"
          autoComplete="email"
          placeholder="you@example.com"
        />
      </div>

      {defaultPackage ? (
        <input type="hidden" name="package" value={defaultPackage} />
      ) : (
        <div className="form-row">
          <label htmlFor="inq-package">Tour or destination of interest (optional)</label>
          <input
            id="inq-package"
            name="package"
            type="text"
            className="input"
            placeholder="e.g. Tirupati & Srisailam, Kerala backwaters"
          />
        </div>
      )}

      {showTravellers && (
        <div className="form-row">
          <label>Travellers</label>
          <div className="travellers-grid">
            <label htmlFor="inq-adults" className="travellers-grid__cell">
              <span>Adults</span>
              <input id="inq-adults" name="adults" type="number" min={0} defaultValue={2} className="input" />
            </label>
            <label htmlFor="inq-seniors" className="travellers-grid__cell">
              <span>Seniors (60+)</span>
              <input id="inq-seniors" name="seniors" type="number" min={0} defaultValue={0} className="input" />
            </label>
            <label htmlFor="inq-children" className="travellers-grid__cell">
              <span>Children</span>
              <input id="inq-children" name="children" type="number" min={0} defaultValue={0} className="input" />
            </label>
          </div>
        </div>
      )}

      {showDates && (
        <div className="field-grid-2">
          <div className="form-row">
            <label htmlFor="inq-start">Travel start (approx.)</label>
            <input
              id="inq-start"
              name="startDate"
              type="date"
              min={TODAY}
              className="input"
            />
          </div>
          <div className="form-row">
            <label htmlFor="inq-end">Travel end (approx.)</label>
            <input
              id="inq-end"
              name="endDate"
              type="date"
              min={TODAY}
              className="input"
            />
          </div>
        </div>
      )}

      <div className="form-row">
        <label htmlFor="inq-message">Anything we should know?</label>
        <textarea
          id="inq-message"
          name="message"
          className="textarea"
          placeholder="Mobility needs, dietary preferences, special seva requests, anniversaries…"
        />
      </div>

      {error && (
        <p role="alert" className="inquiry-form__error">
          {error}
        </p>
      )}

      <div className="inquiry-form__actions">
        <button type="submit" className="btn btn--primary btn--lg">
          {submitLabel}
        </button>
        <p className="inquiry-form__legal">
          We&apos;ll only use your details to reply to this enquiry, never for
          marketing without permission.
        </p>
      </div>

      <style>{`
        .inquiry-form { display: flex; flex-direction: column; gap: 1.25rem; }
        .inquiry-form__error {
          color: var(--heritage-rust-dk);
          font-weight: 600;
          background: var(--heritage-rust-tint);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
        }
        .inquiry-form__actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem;
          padding-top: 0.5rem;
        }
        .inquiry-form__legal {
          font-size: 0.8125rem;
          color: var(--heritage-muted);
          max-width: 22rem;
          margin: 0;
        }
        .travellers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }
        .travellers-grid__cell {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
          font-size: 0.875rem;
          color: var(--heritage-muted);
        }
        @media (max-width: 540px) {
          .travellers-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </form>
  );
}
