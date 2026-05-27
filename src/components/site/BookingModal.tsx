"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { createPortal } from "react-dom";
import type { Package } from "@/data/packages";
import { formatINR, formatDuration } from "@/lib/format";
import { buildWhatsAppUrl, buildMailtoUrl, BUSINESS } from "@/lib/contact";
import { generateBookingRef } from "@/lib/bookingRef";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { cn } from "@/lib/cn";

type Step = 1 | 2 | 3 | 4;

interface BookingModalProps {
  pkg: Package;
  open: boolean;
  onClose: () => void;
}

function nextSaturdays(count = 10, fromMonths = 1): string[] {
  const out: string[] = [];
  const today = new Date();
  const start = new Date(today);
  start.setDate(start.getDate() + 14);
  for (let i = 0; out.length < count && i < count * 30; i += 1) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    if (d.getDay() === 6) {
      out.push(d.toISOString().slice(0, 10));
    }
  }
  return out;
}

function formatLongDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BookingModal({ pkg, open, onClose }: BookingModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  useFocusTrap(dialogRef, open);

  const [step, setStep] = useState<Step>(1);
  const [date, setDate] = useState<string>("");
  const [customDate, setCustomDate] = useState<string>("");
  const [adults, setAdults] = useState(2);
  const [seniors, setSeniors] = useState(0);
  const [children, setChildren] = useState(0);
  const [companion, setCompanion] = useState(false);
  const [companionCount, setCompanionCount] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [requests, setRequests] = useState("");
  const [ref] = useState<string>(() => generateBookingRef());
  const [errors, setErrors] = useState<Record<string, string>>({});

  const saturdays = useMemo(() => nextSaturdays(10), []);
  const isPrivate = pkg.kind === "private";

  // Track mount so we only portal on the client (avoids SSR / hydration issues).
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  const totalTravellers = adults + seniors + children;
  const baseTotal = pkg.priceFrom * totalTravellers;

  function validateStep(s: Step): boolean {
    const next: Record<string, string> = {};
    if (s === 1) {
      if (!date && !customDate) {
        next.date = "Please pick a departure date.";
      }
    }
    if (s === 2) {
      if (totalTravellers === 0) next.travellers = "Please add at least one traveller.";
      if (companion && companionCount < 1) next.companion = "Companion count must be at least 1.";
    }
    if (s === 3) {
      if (!name.trim()) next.name = "Please share your name.";
      if (!phone.trim()) next.phone = "Please share your phone number.";
      else if (phone.replace(/\D/g, "").length < 10) next.phone = "Phone should be at least 10 digits.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function goNext() {
    if (validateStep(step)) setStep((step + 1) as Step);
  }
  function goBack() {
    setStep(Math.max(1, step - 1) as Step);
  }

  function chosenDate(): string {
    return customDate || date;
  }

  function buildMessage(): string {
    const lines: string[] = [];
    lines.push(`Hello Sanchaari, I'd like to book a tour.`);
    lines.push("");
    lines.push(`Booking reference: ${ref}`);
    lines.push(`Tour: ${pkg.title}`);
    lines.push(`Duration: ${formatDuration(pkg.durationNights, pkg.durationDays)}`);
    lines.push(`Departure date: ${formatLongDate(chosenDate())}`);
    lines.push("");
    lines.push(
      `Travellers: ${adults} adult(s), ${seniors} senior(s), ${children} child(ren)`
    );
    if (companion) {
      lines.push(`Companion add-on: yes (${companionCount} person${companionCount > 1 ? "s" : ""})`);
    }
    lines.push("");
    lines.push(`Name: ${name}`);
    lines.push(`Phone: ${phone}`);
    if (email) lines.push(`Email: ${email}`);
    if (requests.trim()) {
      lines.push("");
      lines.push(`Special requests: ${requests.trim()}`);
    }
    lines.push("");
    lines.push(`Estimated total (before add-ons): ${formatINR(baseTotal)}`);
    lines.push(``);
    lines.push(`Please confirm availability and the final quote.`);
    return lines.join("\n");
  }

  function submit() {
    if (!validateStep(3)) {
      setStep(3);
      return;
    }
    const message = buildMessage();
    const waUrl = buildWhatsAppUrl(message);
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setStep(4);
  }

  const mailUrl = buildMailtoUrl(`Booking ${ref} for ${pkg.title}`, buildMessage());

  return createPortal(
    <div
      className="bm-overlay"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="bm-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="bm-title"
      >
        <header className="bm-head">
          <div>
            <p className="bm-eyebrow">Booking · {pkg.kind === "group" ? "Samuha" : "Samraksha"}</p>
            <h2 id="bm-title" className="bm-title">{pkg.title}</h2>
          </div>
          <button
            type="button"
            className="bm-close"
            aria-label="Close booking"
            onClick={onClose}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </header>

        <div className="bm-progress" aria-hidden="true">
          {[1, 2, 3, 4].map((s) => (
            <span
              key={s}
              className={cn("bm-progress__seg", step >= s && "is-done")}
            />
          ))}
        </div>
        <p className="bm-step-label">
          Step {step} of 4 ·{" "}
          {step === 1 ? "Choose date" : step === 2 ? "Who is travelling" : step === 3 ? "Your contact" : "Review and confirm"}
        </p>

        <div className="bm-body">
          {step === 1 && (
            <section>
              {isPrivate ? (
                <div className="form-row">
                  <label htmlFor="bm-private-date">Preferred start date</label>
                  <p className="help">Private tours can begin on any date. Pick one you have in mind.</p>
                  <input
                    id="bm-private-date"
                    type="date"
                    className="input"
                    min={new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10)}
                    value={customDate}
                    onChange={(e) => setCustomDate(e.target.value)}
                  />
                </div>
              ) : (
                <>
                  <p className="bm-help">Choose from our next confirmed group departures. Each runs every other Saturday.</p>
                  <div className="bm-dates">
                    {saturdays.map((iso) => (
                      <button
                        key={iso}
                        type="button"
                        className={cn("bm-date", date === iso && "is-selected")}
                        onClick={() => setDate(iso)}
                        aria-pressed={date === iso}
                      >
                        <span className="bm-date__day">{new Date(iso + "T00:00:00").toLocaleDateString("en-IN", { weekday: "short" })}</span>
                        <span className="bm-date__num">{new Date(iso + "T00:00:00").getDate()}</span>
                        <span className="bm-date__mon">{new Date(iso + "T00:00:00").toLocaleDateString("en-IN", { month: "short" })}</span>
                      </button>
                    ))}
                  </div>
                  <details className="bm-other-date">
                    <summary>None of these work? Suggest your own date</summary>
                    <div className="form-row" style={{ marginTop: "0.75rem" }}>
                      <input
                        type="date"
                        className="input"
                        min={new Date(Date.now() + 14 * 86400000).toISOString().slice(0, 10)}
                        value={customDate}
                        onChange={(e) => setCustomDate(e.target.value)}
                      />
                      <p className="help">We&apos;ll check if we can arrange a private departure on this date.</p>
                    </div>
                  </details>
                </>
              )}
              {errors.date && <p className="bm-error">{errors.date}</p>}
            </section>
          )}

          {step === 2 && (
            <section>
              <div className="bm-count-grid">
                <CountStepper label="Adults (18 – 59)" value={adults} onChange={setAdults} min={0} />
                <CountStepper label="Seniors (60+)" value={seniors} onChange={setSeniors} min={0} />
                <CountStepper label="Children" value={children} onChange={setChildren} min={0} />
              </div>

              <label className="bm-toggle">
                <input
                  type="checkbox"
                  checked={companion}
                  onChange={(e) => setCompanion(e.target.checked)}
                />
                <span>
                  <strong>Add a senior companion</strong>
                  <em>A trained travel assistant who accompanies senior travellers throughout the journey.</em>
                </span>
              </label>
              {companion && (
                <div className="form-row bm-companion-count">
                  <label htmlFor="bm-comp-count">Number of companions</label>
                  <CountStepper
                    label=""
                    value={companionCount}
                    onChange={setCompanionCount}
                    min={1}
                  />
                </div>
              )}
              {errors.travellers && <p className="bm-error">{errors.travellers}</p>}
            </section>
          )}

          {step === 3 && (
            <section>
              <div className="field-grid-2">
                <div className="form-row">
                  <label htmlFor="bm-name">Your name</label>
                  <input
                    id="bm-name"
                    type="text"
                    className={cn("input", errors.name && "is-invalid")}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                  />
                  {errors.name && <p className="bm-error">{errors.name}</p>}
                </div>
                <div className="form-row">
                  <label htmlFor="bm-phone">Phone</label>
                  <input
                    id="bm-phone"
                    type="tel"
                    className={cn("input", errors.phone && "is-invalid")}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                    placeholder="+91 9XXXXXXXXX"
                  />
                  {errors.phone && <p className="bm-error">{errors.phone}</p>}
                </div>
              </div>
              <div className="form-row">
                <label htmlFor="bm-email">Email (optional)</label>
                <input
                  id="bm-email"
                  type="email"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
              <div className="form-row">
                <label htmlFor="bm-requests">Anything we should plan around?</label>
                <textarea
                  id="bm-requests"
                  className="textarea"
                  value={requests}
                  onChange={(e) => setRequests(e.target.value)}
                  placeholder="Dietary needs, mobility help, dress code questions, anniversaries to mark."
                />
              </div>
            </section>
          )}

          {step === 4 && (
            <section className="bm-review">
              <p className="bm-review__ref">Booking reference <strong>{ref}</strong></p>
              <p className="bm-review__intro">Your booking request is on its way to our team on WhatsApp. We&apos;ll confirm availability and the final quote within a few hours.</p>
              <dl className="bm-summary">
                <div><dt>Tour</dt><dd>{pkg.title}</dd></div>
                <div><dt>Date</dt><dd>{formatLongDate(chosenDate())}</dd></div>
                <div><dt>Travellers</dt><dd>{adults} adult(s), {seniors} senior(s), {children} child(ren)</dd></div>
                {companion && <div><dt>Companion</dt><dd>{companionCount} person(s)</dd></div>}
                <div><dt>Estimated</dt><dd>{formatINR(baseTotal)}</dd></div>
              </dl>
              <div className="bm-review__actions">
                <a className="btn btn--whatsapp" href={buildWhatsAppUrl(buildMessage())} target="_blank" rel="noreferrer noopener">
                  Open WhatsApp again
                </a>
                <a className="btn btn--ghost" href={mailUrl}>
                  Send by email instead
                </a>
                <button type="button" className="btn btn--ghost" onClick={onClose}>
                  Close
                </button>
              </div>
              <p className="bm-review__note">
                Prefer a call? <a href={`tel:${BUSINESS.phoneHref}`}>{BUSINESS.phone}</a> · {BUSINESS.hours}
              </p>
            </section>
          )}
        </div>

        {step < 4 && (
          <footer className="bm-foot">
            {step > 1 ? (
              <button type="button" className="btn btn--ghost" onClick={goBack}>
                Back
              </button>
            ) : (
              <span />
            )}
            {step < 3 ? (
              <button type="button" className="btn btn--primary" onClick={goNext}>
                Continue
              </button>
            ) : (
              <button type="button" className="btn btn--primary" onClick={submit}>
                Confirm and send on WhatsApp
              </button>
            )}
          </footer>
        )}
      </div>
    </div>,
    document.body
  );
}

interface CountStepperProps {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
}

function CountStepper({ label, value, onChange, min = 0 }: CountStepperProps) {
  return (
    <label className="bm-count">
      {label && <span>{label}</span>}
      <span className="bm-count__row">
        <button
          type="button"
          aria-label={`Decrease ${label || "count"}`}
          onClick={() => onChange(Math.max(min, value - 1))}
        >
          −
        </button>
        <input
          type="number"
          min={min}
          value={value}
          onChange={(e) => onChange(Math.max(min, Number(e.target.value || 0)))}
        />
        <button
          type="button"
          aria-label={`Increase ${label || "count"}`}
          onClick={() => onChange(value + 1)}
        >
          +
        </button>
      </span>
    </label>
  );
}
