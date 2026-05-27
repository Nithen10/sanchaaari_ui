"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Reveal from "./GSAPReveal";
import CelebrationCard from "./CelebrationCard";
import {
  CELEBRATIONS,
  INTERESTS,
  MONTHS,
  type CelebrationKind,
  type Interest,
  type MonthName,
} from "@/data/celebrations";
import { STATES, type StateSlug } from "@/data/states";

const STRIP_COUNT = 8;

export default function HomeCelebrations() {
  const [kind, setKind] = useState<CelebrationKind>("festival");
  const [month, setMonth] = useState<MonthName | "all">("all");
  const [stateFilter, setStateFilter] = useState<StateSlug | "all">("all");
  const [interest, setInterest] = useState<Interest | "all">("all");

  const filtered = useMemo(() => {
    return CELEBRATIONS.filter((c) => c.kind === kind)
      .filter((c) => month === "all" || c.months.includes(month))
      .filter((c) => stateFilter === "all" || c.states.includes(stateFilter))
      .filter((c) => interest === "all" || c.interests.includes(interest))
      .sort((a, b) => a.startDate.localeCompare(b.startDate))
      .slice(0, STRIP_COUNT);
  }, [kind, month, stateFilter, interest]);

  return (
    <section className="site-section home-celebrations">
      <div className="site-container site-container--wide">
        <Reveal>
          <div className="home-celebrations__head">
            <h2 className="home-celebrations__title">The Festive South</h2>
            <p className="home-celebrations__tagline">
              <span className="home-celebrations__tagline-rule" aria-hidden="true" />
              <span>Sanchaari signature</span>
              <span className="home-celebrations__tagline-rule" aria-hidden="true" />
            </p>
            <p className="section-lead home-celebrations__lead">
              Festivals and important events across Tamil Nadu, Kerala, Karnataka,
              Andhra Pradesh and Telangana for 2026. Filter by month, state, or
              interest — tap a card to read the full story.
            </p>
          </div>
        </Reveal>

        <div className="home-celebrations__controls" role="toolbar" aria-label="Filter celebrations">
          <div className="home-celebrations__tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={kind === "festival"}
              className={kind === "festival" ? "is-active" : ""}
              onClick={() => setKind("festival")}
            >
              Festivals
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={kind === "event"}
              className={kind === "event" ? "is-active" : ""}
              onClick={() => setKind("event")}
            >
              Events
            </button>
          </div>

          <label className="home-celebrations__select">
            <span className="sr-only">By Month</span>
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value as MonthName | "all")}
            >
              <option value="all">By Month</option>
              {MONTHS.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </label>

          <label className="home-celebrations__select">
            <span className="sr-only">By States &amp; UTs</span>
            <select
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value as StateSlug | "all")}
            >
              <option value="all">By States &amp; UTs</option>
              {STATES.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
            </select>
          </label>

          <label className="home-celebrations__select">
            <span className="sr-only">By Interests</span>
            <select
              value={interest}
              onChange={(e) => setInterest(e.target.value as Interest | "all")}
            >
              <option value="all">By Interests</option>
              {INTERESTS.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </label>
        </div>

        {filtered.length === 0 ? (
          <p className="home-celebrations__empty">
            No {kind === "festival" ? "festivals" : "events"} match these
            filters. Try clearing one.
          </p>
        ) : (
          <div className="home-celebrations__grid">
            {filtered.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <CelebrationCard c={c} />
              </Reveal>
            ))}
          </div>
        )}

        <div className="home-celebrations__more">
          <Link href="/celebrations" className="btn btn--primary btn--lg">
            Discover more
          </Link>
        </div>
      </div>

      <style>{`
        .is-site .home-celebrations__head {
          text-align: center;
          margin-bottom: 4rem;
        }
        .is-site .home-celebrations__eyebrow {
          justify-content: center;
          font-style: italic;
          font-family: var(--font-fraunces);
          letter-spacing: 0;
          font-weight: 500;
          text-transform: none;
          font-size: 0.8125rem;
          color: var(--heritage-rust);
        }
        .is-site .home-celebrations__eyebrow::before { display: none; }

        .is-site .home-celebrations__title {
          font-family: var(--font-fraunces), serif;
          font-size: clamp(3.25rem, 7.5vw, 6.5rem);
          font-weight: 700;
          color: var(--heritage-ink);
          letter-spacing: -0.025em;
          line-height: 1;
          margin: 0.5rem 0 0.75rem;
          text-transform: none;
        }
        .is-site .home-celebrations__tagline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.875rem;
          font-family: var(--font-fraunces);
          font-style: italic;
          color: var(--heritage-gold);
          font-size: clamp(1.125rem, 1.5vw, 1.5rem);
          letter-spacing: 0.01em;
          margin: 0;
        }
        .is-site .home-celebrations__tagline-rule {
          display: inline-block;
          width: clamp(2rem, 4vw, 4rem);
          height: 1px;
          background: currentColor;
          opacity: 0.55;
        }
        .is-site .home-celebrations__lead {
          margin-inline: auto;
          max-width: 62rem;
          font-size: clamp(1.0625rem, 1.15vw, 1.1875rem);
          color: var(--heritage-sub);
        }

        .is-site .home-celebrations__controls {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: center;
          justify-content: center;
          margin-bottom: 2.5rem;
        }
        .is-site .home-celebrations__tabs {
          display: inline-flex;
          background: var(--heritage-cream-2);
          border-radius: var(--radius-pill);
          padding: 0.3125rem;
        }
        .is-site .home-celebrations__tabs button {
          border: 0;
          background: transparent;
          padding: 0.5625rem 1.375rem;
          border-radius: var(--radius-pill);
          cursor: pointer;
          font-family: var(--font-poppins);
          font-weight: 600;
          font-size: 0.9375rem;
          color: var(--heritage-sub);
          transition: background var(--transition-fast), color var(--transition-fast);
        }
        .is-site .home-celebrations__tabs button.is-active {
          background: var(--heritage-rust);
          color: var(--heritage-ivory);
        }
        .is-site .home-celebrations__tabs button:hover:not(.is-active) {
          color: var(--heritage-ink);
        }

        .is-site .home-celebrations__select {
          display: inline-flex;
        }
        .is-site .home-celebrations__select select {
          appearance: none;
          -webkit-appearance: none;
          padding: 0.6875rem 2.25rem 0.6875rem 1.125rem;
          border-radius: var(--radius-pill);
          border: 1px solid var(--heritage-line-strong);
          background: var(--heritage-ivory)
            url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path fill='%231f2937' d='M6 8 0 0h12z'/></svg>")
            no-repeat right 0.9rem center;
          background-size: 0.625rem 0.45rem;
          font-family: var(--font-poppins);
          font-weight: 600;
          font-size: 0.9375rem;
          color: var(--heritage-ink);
          cursor: pointer;
          min-height: var(--tap-target);
        }
        .is-site .home-celebrations__select select:focus-visible {
          outline: 2px solid var(--heritage-rust);
          outline-offset: 2px;
        }

        .is-site .home-celebrations__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.125rem;
        }

        .is-site .home-celebrations__grid .celeb-card__media {
          aspect-ratio: 4 / 3;
        }
        .is-site .home-celebrations__grid .celeb-card__body {
          padding: 1rem 1rem 1.125rem;
          min-height: 6.25rem;
          display: flex;
          flex-direction: column;
        }
        .is-site .home-celebrations__grid .celeb-card__body h3 {
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }
        .is-site .home-celebrations__grid .celeb-card__body p {
          font-size: 0.875rem;
          line-height: 1.45;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .is-site .home-celebrations__more {
          margin-top: 2.5rem;
          text-align: center;
        }
        .is-site .home-celebrations__empty {
          padding: 3rem 0;
          color: var(--heritage-muted);
          text-align: center;
          font-size: 1.0625rem;
        }

        @media (max-width: 1100px) {
          .is-site .home-celebrations__grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 760px) {
          .is-site .home-celebrations__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .is-site .home-celebrations__grid {
            grid-template-columns: 1fr;
          }
          .is-site .home-celebrations__title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
