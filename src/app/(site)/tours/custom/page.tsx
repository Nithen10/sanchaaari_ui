"use client";

import { useState } from "react";
import Link from "next/link";
import BreadcrumbTrail from "@/components/site/BreadcrumbTrail";
import {
  buildWhatsAppUrl,
  buildMailtoUrl,
  formatInquiryMessage,
  BUSINESS,
} from "@/lib/contact";
import { STATES, type StateSlug } from "@/data/states";
import { TEMPLES } from "@/data/temples";
import { cn } from "@/lib/cn";

const TRANSPORT_OPTIONS = ["Train", "Private Vehicle", "Flight + ground"] as const;
const HOTEL_OPTIONS = ["3-Star", "4-Star", "5-Star", "Heritage"] as const;

const TODAY = new Date().toISOString().slice(0, 10);

export default function CustomTripPage() {
  const [states, setStates] = useState<StateSlug[]>([]);
  const [places, setPlaces] = useState("");
  const [adults, setAdults] = useState(2);
  const [seniors, setSeniors] = useState(0);
  const [children, setChildren] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [transport, setTransport] = useState<string | null>(null);
  const [hotel, setHotel] = useState<string | null>(null);
  const [companion, setCompanion] = useState(false);
  const [companionCount, setCompanionCount] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState<{ waUrl: string; mailUrl: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  function toggleState(s: StateSlug) {
    setStates((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    if (!name || !phone) {
      setError("Please tell us your name and phone number.");
      return;
    }
    if (states.length === 0) {
      setError("Please pick at least one state to visit.");
      return;
    }
    const extras: string[] = [];
    if (places.trim()) extras.push(`Places / temples of interest: ${places.trim()}`);
    if (transport) extras.push(`Preferred transport: ${transport}`);
    if (hotel) extras.push(`Hotel preference: ${hotel}`);
    if (companion) extras.push(`Companion service: yes (${companionCount} person${companionCount > 1 ? "s" : ""})`);
    if (message.trim()) extras.push(`Notes: ${message.trim()}`);

    const stateNames = states.map((s) => STATES.find((x) => x.slug === s)?.name).filter(Boolean).join(", ");
    const composed = formatInquiryMessage({
      name,
      phone,
      email: email || undefined,
      travellers: { adults, seniors, children },
      dates: { start: startDate, end: endDate },
      package: `Custom trip: ${stateNames}`,
      message: extras.join("\n"),
      source: "Customize Your Trip form",
    });
    const waUrl = buildWhatsAppUrl(composed);
    const mailUrl = buildMailtoUrl(`Custom trip enquiry from ${name}`, composed);
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted({ waUrl, mailUrl });
  }

  if (submitted) {
    return (
      <section className="site-section">
        <div className="site-container">
          <BreadcrumbTrail
            items={[
              { label: "Home", href: "/" },
              { label: "Tours", href: "/tours" },
              { label: "Customize" },
            ]}
          />
          <div className="custom-success">
            <h1>Your custom-trip request is on its way.</h1>
            <p>
              WhatsApp should have opened in a new tab with your details. A
              Sanchaari planner will reply, usually within a few hours.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a className="btn btn--whatsapp btn--lg" href={submitted.waUrl} target="_blank" rel="noreferrer noopener">
                Open WhatsApp again
              </a>
              <a className="btn btn--ghost" href={submitted.mailUrl}>Send by email instead</a>
              <Link className="btn btn--ghost" href="/tours">
                Browse our ready-made tours
              </Link>
            </div>
            <p style={{ marginTop: "1.5rem" }}>
              Prefer a phone call? <a href={`tel:${BUSINESS.phoneHref}`}>{BUSINESS.phone}</a> · {BUSINESS.hours}
            </p>
          </div>
          <style>{`
            .custom-success {
              background: var(--heritage-ivory);
              border: 1px solid var(--heritage-line);
              border-radius: var(--radius-lg);
              padding: 2.5rem;
              max-width: 50rem;
            }
            .custom-success h1 { font-size: clamp(1.75rem, 3vw, 2.5rem); margin-block: 0.5rem 1rem; }
            .custom-success p { font-size: var(--font-size-lg); margin-bottom: 1rem; }
          `}</style>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="site-section custom-hero">
        <div className="site-container">
          <BreadcrumbTrail
            items={[
              { label: "Home", href: "/" },
              { label: "Tours", href: "/tours" },
              { label: "Customize" },
            ]}
          />
          <span className="eyebrow">Customize your trip</span>
          <h1>Tell us how you&rsquo;d like to travel.</h1>
          <p className="section-lead">
            A short form: eight fields, four minutes. We&rsquo;ll build an
            itinerary around it and come back to you on WhatsApp with options,
            dates and a transparent quote.
          </p>
        </div>
      </section>

      <section className="site-section" style={{ paddingTop: 0 }}>
        <div className="site-container custom-form-wrap">
          <form className="custom-form" onSubmit={onSubmit} noValidate>
            {/* Step 1: States */}
            <section className="custom-step">
              <header><span>Step 1</span><h2>Pick the states you&rsquo;d like to cover</h2></header>
              <div className="chips">
                {STATES.map((s) => (
                  <button
                    key={s.slug}
                    type="button"
                    className={cn("chip", states.includes(s.slug) && "is-active")}
                    aria-pressed={states.includes(s.slug)}
                    onClick={() => toggleState(s.slug)}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </section>

            {/* Step 2: Temples / places */}
            <section className="custom-step">
              <header><span>Step 2</span><h2>Any temples or places we must include?</h2></header>
              <div className="form-row">
                <label htmlFor="custom-places">List temples, towns or experiences (optional)</label>
                <p className="help">
                  Common picks: {TEMPLES.slice(0, 6).map((t) => t.name).join(", ")}…
                </p>
                <textarea
                  id="custom-places"
                  className="textarea"
                  value={places}
                  onChange={(e) => setPlaces(e.target.value)}
                  placeholder="e.g. Tirupati, Madurai Meenakshi, Alleppey backwaters, Mysore Palace"
                />
              </div>
            </section>

            {/* Step 3: Travellers */}
            <section className="custom-step">
              <header><span>Step 3</span><h2>Who&rsquo;s travelling?</h2></header>
              <div className="travellers-grid">
                <label>
                  <span>Adults (18+)</span>
                  <input type="number" min={0} className="input" value={adults} onChange={(e) => setAdults(Number(e.target.value || 0))} />
                </label>
                <label>
                  <span>Seniors (60+)</span>
                  <input type="number" min={0} className="input" value={seniors} onChange={(e) => setSeniors(Number(e.target.value || 0))} />
                </label>
                <label>
                  <span>Children</span>
                  <input type="number" min={0} className="input" value={children} onChange={(e) => setChildren(Number(e.target.value || 0))} />
                </label>
              </div>
            </section>

            {/* Step 4: Dates */}
            <section className="custom-step">
              <header><span>Step 4</span><h2>Approximate dates</h2></header>
              <div className="field-grid-2">
                <div className="form-row">
                  <label htmlFor="custom-start">Start date</label>
                  <input id="custom-start" type="date" min={TODAY} className="input" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                </div>
                <div className="form-row">
                  <label htmlFor="custom-end">End date</label>
                  <input id="custom-end" type="date" min={TODAY} className="input" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </div>
              </div>
            </section>

            {/* Step 5: Transport */}
            <section className="custom-step">
              <header><span>Step 5</span><h2>How would you prefer to travel?</h2></header>
              <div className="chips">
                {TRANSPORT_OPTIONS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={cn("chip", transport === t && "is-active")}
                    aria-pressed={transport === t}
                    onClick={() => setTransport(transport === t ? null : t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </section>

            {/* Step 6: Hotel */}
            <section className="custom-step">
              <header><span>Step 6</span><h2>Hotel preference</h2></header>
              <div className="chips">
                {HOTEL_OPTIONS.map((h) => (
                  <button
                    key={h}
                    type="button"
                    className={cn("chip", hotel === h && "is-active")}
                    aria-pressed={hotel === h}
                    onClick={() => setHotel(hotel === h ? null : h)}
                  >
                    {h}
                  </button>
                ))}
              </div>
            </section>

            {/* Step 7: Companion */}
            <section className="custom-step">
              <header><span>Step 7</span><h2>Would you like a senior travel companion?</h2></header>
              <label className="custom-toggle">
                <input type="checkbox" checked={companion} onChange={(e) => setCompanion(e.target.checked)} />
                <span>Yes, please assign a trained companion</span>
              </label>
              {companion && (
                <div className="form-row" style={{ maxWidth: "12rem" }}>
                  <label htmlFor="comp-count">How many companions?</label>
                  <input
                    id="comp-count"
                    type="number"
                    min={1}
                    className="input"
                    value={companionCount}
                    onChange={(e) => setCompanionCount(Number(e.target.value || 1))}
                  />
                </div>
              )}
              <p className="help">Companions support mobility, language, queue navigation and small comforts. <Link href="/senior-companion">Learn more</Link>.</p>
            </section>

            {/* Step 8: Contact */}
            <section className="custom-step">
              <header><span>Step 8</span><h2>Your contact details</h2></header>
              <div className="field-grid-2">
                <div className="form-row">
                  <label htmlFor="custom-name">Your name</label>
                  <input id="custom-name" type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />
                </div>
                <div className="form-row">
                  <label htmlFor="custom-phone">Phone</label>
                  <input id="custom-phone" type="tel" className="input" value={phone} onChange={(e) => setPhone(e.target.value)} required autoComplete="tel" />
                </div>
              </div>
              <div className="form-row">
                <label htmlFor="custom-email">Email (optional)</label>
                <input id="custom-email" type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
              </div>
              <div className="form-row">
                <label htmlFor="custom-msg">Anything else we should know?</label>
                <textarea id="custom-msg" className="textarea" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Mobility needs, dietary preferences, anniversaries…" />
              </div>
            </section>

            {error && (
              <p role="alert" className="inquiry-form__error" style={{ background: "var(--heritage-rust-tint)", padding: "0.75rem 1rem", borderRadius: "var(--radius-md)", color: "var(--heritage-rust-dk)", fontWeight: 600 }}>
                {error}
              </p>
            )}

            <div className="custom-submit">
              <button type="submit" className="btn btn--primary btn--lg">
                Send custom trip request
              </button>
              <p className="help">Opens WhatsApp with your details pre-filled. We reply within a few hours.</p>
            </div>
          </form>
        </div>
      </section>

      <style>{`
        .custom-hero h1 { max-width: 22ch; margin-block: 0.5rem 1rem; }
        .custom-form-wrap { max-width: 56rem; }
        .custom-form { display: flex; flex-direction: column; gap: 2.25rem; }
        .custom-step {
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-radius: var(--radius-lg);
          padding: 1.75rem 1.75rem 2rem;
        }
        .custom-step header { margin-bottom: 1.25rem; }
        .custom-step header span {
          font-family: var(--font-poppins);
          font-size: 0.75rem;
          letter-spacing: 0.16em;
          color: var(--heritage-rust);
          text-transform: uppercase;
          font-weight: 700;
        }
        .custom-step header h2 { margin: 0.25rem 0 0; font-size: clamp(1.25rem, 1.8vw, 1.5rem); }
        .chips { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .travellers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.875rem;
        }
        .travellers-grid label {
          display: flex; flex-direction: column; gap: 0.375rem;
          font-size: 0.875rem; color: var(--heritage-sub);
        }
        @media (max-width: 540px) {
          .travellers-grid { grid-template-columns: 1fr; }
        }
        .custom-toggle {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.875rem 1rem;
          background: var(--heritage-cream-2);
          border-radius: var(--radius-md);
          cursor: pointer;
          font-size: 1rem;
          margin-bottom: 0.875rem;
        }
        .custom-toggle input { width: 1.125rem; height: 1.125rem; accent-color: var(--heritage-rust); }
        .custom-submit {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-start;
        }
      `}</style>
    </>
  );
}
