"use client";

import { useState } from "react";
import Link from "next/link";
import BreadcrumbTrail from "@/components/site/BreadcrumbTrail";
import {
  buildWhatsAppUrl,
  buildMailtoUrl,
  BUSINESS,
} from "@/lib/contact";

const BENEFITS = [
  { title: "Purposeful work", body: "Help senior travellers reach the places they&rsquo;ve waited a lifetime to visit." },
  { title: "Travel India", body: "Discover South India&rsquo;s temples, coasts, and heritage cities on assignment." },
  { title: "Flexible schedule", body: "Choose which weeks of the month you&rsquo;re available; we plan around it." },
  { title: "Steady earnings", body: "Predictable per-tour earnings, on-time payments, and an annual loyalty bonus." },
  { title: "Training provided", body: "First-aid, senior-care basics, communication, conflict handling. All paid training." },
];

const STEPS = [
  { n: 1, title: "Apply", body: "Fill the application below. Takes about four minutes." },
  { n: 2, title: "Interview", body: "A 30-minute video call with our companion lead." },
  { n: 3, title: "Background check", body: "Police verification and references." },
  { n: 4, title: "Training", body: "Two days of paid training and a shadowed first tour." },
  { n: 5, title: "Onboard", body: "Your first solo assignment and welcome kit." },
];

export default function BecomeACompanionPage() {
  const [submitted, setSubmitted] = useState<{ waUrl: string; mailUrl: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const f = e.currentTarget;
    const data = new FormData(f);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    if (!name || !phone) {
      setError("Please share your name and phone number.");
      return;
    }
    const lines = [
      "Hello Sanchaari, I'd like to apply to be a travel companion.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${data.get("email") || "(not provided)"}`,
      `City: ${data.get("city") || "(not provided)"}`,
      `Languages: ${data.get("languages") || "(not provided)"}`,
      `Experience level: ${data.get("experience") || "(not provided)"}`,
      `States willing to travel: ${data.get("statesWilling") || "(not provided)"}`,
      `Senior-care background: ${data.get("seniorCare") || "(not provided)"}`,
      "",
      `Why I want to join:`,
      String(data.get("why") || "(not provided)"),
    ];
    const text = lines.join("\n");
    const waUrl = buildWhatsAppUrl(text);
    const mailUrl = buildMailtoUrl(`Companion application from ${name}`, text);
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted({ waUrl, mailUrl });
    f.reset();
  }

  return (
    <>
      <section className="site-section bc-hero">
        <div className="site-container">
          <BreadcrumbTrail
            items={[{ label: "Home", href: "/" }, { label: "Become a companion" }]}
          />
          <span className="eyebrow">Careers · Companion</span>
          <h1>Travel with purpose. Earn with respect.</h1>
          <p className="section-lead">
            Sanchaari is hiring travel companions who can accompany senior
            travellers on heritage journeys across South India. If you&rsquo;re
            patient, multilingual and love travelling, we&rsquo;d like to talk.
          </p>
        </div>
      </section>

      <section className="site-section" style={{ paddingTop: 0 }}>
        <div className="site-container bc-layout">
          <aside className="bc-benefits">
            <h2>Why this role</h2>
            <ul>
              {BENEFITS.map((b) => (
                <li key={b.title}>
                  <h3>{b.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: b.body }} />
                </li>
              ))}
            </ul>
          </aside>

          <div className="bc-form-wrap">
            {submitted ? (
              <div className="bc-success">
                <h2>Application received.</h2>
                <p>
                  WhatsApp opened with your details. Our companion lead will
                  reach out within two working days. If you&rsquo;d prefer to
                  send by email instead:
                </p>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  <a className="btn btn--whatsapp" href={submitted.waUrl} target="_blank" rel="noreferrer noopener">
                    Open WhatsApp again
                  </a>
                  <a className="btn btn--ghost" href={submitted.mailUrl}>
                    Send by email instead
                  </a>
                  <Link href="/" className="btn btn--ghost">Back to home</Link>
                </div>
                <p style={{ marginTop: "1rem", fontSize: "0.9375rem" }}>
                  Questions? Call <a href={`tel:${BUSINESS.phoneHref}`}>{BUSINESS.phone}</a>.
                </p>
              </div>
            ) : (
              <form className="bc-form" onSubmit={onSubmit} noValidate>
                <h2>Apply now</h2>
                <div className="field-grid-2">
                  <div className="form-row">
                    <label htmlFor="bc-name">Full name</label>
                    <input id="bc-name" name="name" type="text" className="input" required autoComplete="name" />
                  </div>
                  <div className="form-row">
                    <label htmlFor="bc-phone">Phone</label>
                    <input id="bc-phone" name="phone" type="tel" className="input" required autoComplete="tel" />
                  </div>
                </div>
                <div className="field-grid-2">
                  <div className="form-row">
                    <label htmlFor="bc-email">Email</label>
                    <input id="bc-email" name="email" type="email" className="input" autoComplete="email" />
                  </div>
                  <div className="form-row">
                    <label htmlFor="bc-city">City</label>
                    <input id="bc-city" name="city" type="text" className="input" autoComplete="address-level2" />
                  </div>
                </div>
                <div className="form-row">
                  <label htmlFor="bc-lang">Languages spoken</label>
                  <input id="bc-lang" name="languages" type="text" className="input" placeholder="e.g. English, Tamil, Hindi" />
                </div>
                <div className="field-grid-2">
                  <div className="form-row">
                    <label htmlFor="bc-exp">Experience level</label>
                    <select id="bc-exp" name="experience" className="select" defaultValue="">
                      <option value="" disabled>Select…</option>
                      <option>Beginner</option>
                      <option>Some travel-industry experience</option>
                      <option>Experienced</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <label htmlFor="bc-states">States willing to travel</label>
                    <input id="bc-states" name="statesWilling" type="text" className="input" placeholder="e.g. TN, KL, KA" />
                  </div>
                </div>
                <div className="form-row">
                  <label htmlFor="bc-care">Senior-care background (optional)</label>
                  <input id="bc-care" name="seniorCare" type="text" className="input" placeholder="Nursing, eldercare, hospitality, etc." />
                </div>
                <div className="form-row">
                  <label htmlFor="bc-why">Why do you want to become a companion?</label>
                  <textarea id="bc-why" name="why" className="textarea" rows={5} />
                </div>

                {error && (
                  <p role="alert" className="bc-error">{error}</p>
                )}

                <button type="submit" className="btn btn--primary btn--lg">Submit application</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="site-section site-section--cream2">
        <div className="site-container">
          <h2 className="section-title">What happens next</h2>
          <ol className="bc-steps">
            {STEPS.map((s) => (
              <li key={s.n}>
                <span className="bc-step-num">{String(s.n).padStart(2, "0")}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <style>{`
        .bc-hero h1 { max-width: 24ch; margin-block: 0.5rem 1rem; }
        .bc-layout {
          display: grid;
          grid-template-columns: 18rem minmax(0, 1fr);
          gap: 2.5rem;
          align-items: start;
        }
        .bc-benefits {
          background: var(--heritage-cream-2);
          padding: 2rem;
          border-radius: var(--radius-lg);
        }
        .bc-benefits h2 { font-size: 1.25rem; margin-bottom: 1rem; }
        .bc-benefits ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1.25rem; }
        .bc-benefits h3 { font-family: var(--font-fraunces); font-size: 1.0625rem; margin-bottom: 0.25rem; color: var(--heritage-ink); }
        .bc-benefits p { color: var(--heritage-sub); font-size: 0.9375rem; line-height: 1.55; margin: 0; }
        .bc-form-wrap, .bc-success {
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-radius: var(--radius-lg);
          padding: 2rem;
        }
        .bc-form { display: flex; flex-direction: column; gap: 1.25rem; }
        .bc-form h2, .bc-success h2 { margin-bottom: 0.5rem; }
        .bc-error {
          background: rgba(0,95,115,0.08);
          color: var(--heritage-rust-dk);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-weight: 600;
        }
        .bc-success p { color: var(--heritage-sub); margin-bottom: 1rem; }
        .bc-steps {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));
          gap: 1.25rem;
        }
        .bc-steps li {
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .bc-step-num {
          font-family: var(--font-fraunces);
          font-size: 1.75rem;
          color: var(--heritage-rust);
          font-weight: 600;
        }
        .bc-steps h3 { font-family: var(--font-fraunces); font-size: 1.125rem; margin-bottom: 0.25rem; }
        .bc-steps p { color: var(--heritage-sub); font-size: 0.9375rem; margin: 0; }
        @media (max-width: 900px) {
          .bc-layout { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
