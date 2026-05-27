"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import {
  COMPANION_LANGUAGES,
  COMPANION_GENDERS,
  COMPANION_SPECIALISATIONS,
  type CompanionLanguage,
  type CompanionGender,
  type CompanionSpecialisation,
} from "@/data/companions";
import { buildWhatsAppUrl } from "@/lib/contact";

export default function CompanionMatch() {
  const [languages, setLanguages] = useState<CompanionLanguage[]>([]);
  const [gender, setGender] = useState<CompanionGender>("No preference");
  const [specs, setSpecs] = useState<CompanionSpecialisation[]>([]);
  const [confirmed, setConfirmed] = useState(false);

  function toggleLang(l: CompanionLanguage) {
    setLanguages((p) => (p.includes(l) ? p.filter((x) => x !== l) : [...p, l]));
  }
  function toggleSpec(s: CompanionSpecialisation) {
    setSpecs((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));
  }

  function check() {
    setConfirmed(true);
  }

  function reset() {
    setLanguages([]);
    setGender("No preference");
    setSpecs([]);
    setConfirmed(false);
  }

  const summary = (() => {
    const parts: string[] = [];
    if (languages.length) parts.push(`Languages: ${languages.join(", ")}`);
    if (gender !== "No preference") parts.push(`Gender: ${gender}`);
    if (specs.length) parts.push(`Specialisations: ${specs.join(", ")}`);
    return parts.join(" | ") || "any companion";
  })();

  const waUrl = buildWhatsAppUrl(
    `Hello Sanchaari, I'd like to request a companion match.\n\n${summary}\n\nPlease share availability and quotes.`
  );

  return (
    <div className="cm">
      <div className="cm__row">
        <span className="cm__label">Languages your companion should speak</span>
        <div className="chips">
          {COMPANION_LANGUAGES.map((l) => (
            <button
              key={l}
              type="button"
              className={cn("chip", languages.includes(l) && "is-active")}
              aria-pressed={languages.includes(l)}
              onClick={() => toggleLang(l)}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <div className="cm__row">
        <span className="cm__label">Gender preference</span>
        <div className="chips">
          {COMPANION_GENDERS.map((g) => (
            <button
              key={g}
              type="button"
              className={cn("chip", gender === g && "is-active")}
              aria-pressed={gender === g}
              onClick={() => setGender(g)}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <div className="cm__row">
        <span className="cm__label">Specialisations (optional)</span>
        <div className="chips">
          {COMPANION_SPECIALISATIONS.map((s) => (
            <button
              key={s}
              type="button"
              className={cn("chip", specs.includes(s) && "is-active")}
              aria-pressed={specs.includes(s)}
              onClick={() => toggleSpec(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {confirmed ? (
        <div className="cm__result" role="status" aria-live="polite">
          <span className="cm__result-tag">Match available</span>
          <p>
            Yes, we have companions matching <strong>{summary}</strong>. The next step is a short call where we share two or three profiles for you to choose from.
          </p>
          <div className="cm__actions">
            <a href={waUrl} target="_blank" rel="noreferrer noopener" className="btn btn--whatsapp">
              Request this companion
            </a>
            <button type="button" className="btn btn--ghost" onClick={reset}>
              Try a different match
            </button>
          </div>
        </div>
      ) : (
        <div className="cm__actions">
          <button type="button" className="btn btn--primary" onClick={check}>
            Check availability
          </button>
        </div>
      )}

      <style>{`
        .cm {
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .cm__row { display: flex; flex-direction: column; gap: 0.625rem; }
        .cm__label {
          font-family: var(--font-poppins);
          font-size: 0.8125rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--heritage-muted);
          font-weight: 700;
        }
        .cm__result {
          background: var(--heritage-cream);
          border: 1px solid var(--heritage-rust);
          padding: 1.25rem;
          border-radius: var(--radius-md);
        }
        .cm__result-tag {
          display: inline-block;
          padding: 0.25rem 0.625rem;
          background: var(--heritage-rust);
          color: #fff;
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 700;
          border-radius: var(--radius-pill);
          margin-bottom: 0.625rem;
        }
        .cm__result p { color: var(--heritage-ink); margin: 0 0 1rem; line-height: 1.55; }
        .cm__actions { display: flex; gap: 0.5rem; flex-wrap: wrap; }
      `}</style>
    </div>
  );
}
