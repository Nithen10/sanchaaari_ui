"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/site/GSAPReveal";
import BreadcrumbTrail from "@/components/site/BreadcrumbTrail";
import CelebrationCard from "@/components/site/CelebrationCard";
import {
  CELEBRATIONS,
  INTERESTS,
  MONTHS,
  type CelebrationKind,
  type Interest,
  type MonthName,
} from "@/data/celebrations";
import { STATES, type StateSlug } from "@/data/states";

type KindFilter = CelebrationKind | "all";
type DropdownKey = "kind" | "interests" | "regions" | "months" | null;

const KIND_OPTIONS: { value: KindFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "festival", label: "Festivals" },
  { value: "event", label: "Events" },
];

export default function CelebrationsHubPage() {
  const [kind, setKind] = useState<KindFilter>("all");
  const [interests, setInterests] = useState<Interest[]>([]);
  const [regions, setRegions] = useState<StateSlug[]>([]);
  const [months, setMonths] = useState<MonthName[]>([]);
  const [search, setSearch] = useState("");
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const filterBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!filterBarRef.current) return;
      if (!filterBarRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const toggle = <T,>(arr: T[], value: T, setter: (next: T[]) => void) => {
    setter(arr.includes(value) ? arr.filter((x) => x !== value) : [...arr, value]);
  };

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return CELEBRATIONS.filter((c) => kind === "all" || c.kind === kind)
      .filter((c) => interests.length === 0 || c.interests.some((i) => interests.includes(i)))
      .filter((c) => regions.length === 0 || c.states.some((s) => regions.includes(s)))
      .filter((c) => months.length === 0 || c.months.some((m) => months.includes(m)))
      .filter(
        (c) =>
          q.length === 0 ||
          c.name.toLowerCase().includes(q) ||
          c.shortBlurb.toLowerCase().includes(q),
      )
      .sort((a, b) => a.startDate.localeCompare(b.startDate));
  }, [kind, interests, regions, months, search]);

  const activeCount =
    (kind !== "all" ? 1 : 0) + interests.length + regions.length + months.length;

  const clearAll = () => {
    setKind("all");
    setInterests([]);
    setRegions([]);
    setMonths([]);
    setSearch("");
    setOpenDropdown(null);
  };

  const heroImage = CELEBRATIONS.find((c) => c.slug === "onam-2026")?.image ?? CELEBRATIONS[0].image;
  const kindLabel = KIND_OPTIONS.find((o) => o.value === kind)?.label ?? "All";

  return (
    <div className="celeb-hub">
      <section className="celeb-hub__hero">
        <div className="celeb-hub__hero-media">
          <Image src={heroImage} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} priority />
          <div className="celeb-hub__hero-shade" aria-hidden="true" />
        </div>
        <div className="site-container celeb-hub__hero-inner">
          <BreadcrumbTrail
            items={[
              { label: "Home", href: "/" },
              { label: "Celebrations" },
            ]}
          />
          <Reveal>
            <span className="eyebrow celeb-hub__hero-eyebrow">Sanchaari calendar</span>
            <h1 className="celeb-hub__hero-title">Festivals &amp; Events</h1>
            <p className="celeb-hub__hero-lead">
              Every notable celebration of 2026 across Tamil Nadu, Kerala, Karnataka,
              Andhra Pradesh and Telangana — filter to find what falls on your dates.
            </p>
          </Reveal>
          <label className="celeb-hub__search">
            <span className="sr-only">Search all festivals &amp; events</span>
            <input
              type="search"
              placeholder="Search all festivals & events"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="celeb-hub__search-icon" aria-hidden="true">⌕</span>
          </label>
        </div>
      </section>

      <section className="site-section celeb-hub__filters-section">
        <div className="site-container">
          <div className="celeb-hub__filter-bar" ref={filterBarRef}>
            {/* Kind dropdown (single-select) */}
            <div className="celeb-hub__dd">
              <button
                type="button"
                className="celeb-hub__dd-btn"
                aria-expanded={openDropdown === "kind"}
                onClick={() => setOpenDropdown(openDropdown === "kind" ? null : "kind")}
              >
                Festivals and Events
                <span className="celeb-hub__dd-caret" aria-hidden="true">▾</span>
              </button>
              {openDropdown === "kind" && (
                <div className="celeb-hub__dd-panel" role="menu">
                  {KIND_OPTIONS.map((o) => (
                    <label key={o.value} className="celeb-hub__dd-option">
                      <input
                        type="radio"
                        name="kind"
                        checked={kind === o.value}
                        onChange={() => setKind(o.value)}
                      />
                      <span>{o.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Interests multi-select */}
            <div className="celeb-hub__dd">
              <button
                type="button"
                className="celeb-hub__dd-btn"
                aria-expanded={openDropdown === "interests"}
                onClick={() =>
                  setOpenDropdown(openDropdown === "interests" ? null : "interests")
                }
              >
                Interests {interests.length > 0 && <span>({interests.length})</span>}
                <span className="celeb-hub__dd-caret" aria-hidden="true">▾</span>
              </button>
              {openDropdown === "interests" && (
                <div className="celeb-hub__dd-panel" role="menu">
                  {INTERESTS.map((i) => (
                    <label key={i} className="celeb-hub__dd-option">
                      <input
                        type="checkbox"
                        checked={interests.includes(i)}
                        onChange={() => toggle(interests, i, setInterests)}
                      />
                      <span>{i}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Regions multi-select */}
            <div className="celeb-hub__dd">
              <button
                type="button"
                className="celeb-hub__dd-btn"
                aria-expanded={openDropdown === "regions"}
                onClick={() =>
                  setOpenDropdown(openDropdown === "regions" ? null : "regions")
                }
              >
                Regions {regions.length > 0 && <span>({regions.length})</span>}
                <span className="celeb-hub__dd-caret" aria-hidden="true">▾</span>
              </button>
              {openDropdown === "regions" && (
                <div className="celeb-hub__dd-panel" role="menu">
                  {STATES.map((s) => (
                    <label key={s.slug} className="celeb-hub__dd-option">
                      <input
                        type="checkbox"
                        checked={regions.includes(s.slug)}
                        onChange={() => toggle(regions, s.slug, setRegions)}
                      />
                      <span>{s.name}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Months multi-select */}
            <div className="celeb-hub__dd">
              <button
                type="button"
                className="celeb-hub__dd-btn"
                aria-expanded={openDropdown === "months"}
                onClick={() =>
                  setOpenDropdown(openDropdown === "months" ? null : "months")
                }
              >
                Months {months.length > 0 && <span>({months.length})</span>}
                <span className="celeb-hub__dd-caret" aria-hidden="true">▾</span>
              </button>
              {openDropdown === "months" && (
                <div className="celeb-hub__dd-panel celeb-hub__dd-panel--wide" role="menu">
                  {MONTHS.map((m) => (
                    <label key={m} className="celeb-hub__dd-option">
                      <input
                        type="checkbox"
                        checked={months.includes(m)}
                        onChange={() => toggle(months, m, setMonths)}
                      />
                      <span>{m}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          {activeCount > 0 && (
            <div className="celeb-hub__chips">
              <div className="celeb-hub__chips-list">
                {kind !== "all" && (
                  <button
                    type="button"
                    className="celeb-hub__chip"
                    onClick={() => setKind("all")}
                  >
                    {kindLabel}
                    <span className="celeb-hub__chip-x" aria-hidden="true">×</span>
                    <span className="sr-only">Remove</span>
                  </button>
                )}
                {regions.map((r) => {
                  const name = STATES.find((s) => s.slug === r)?.name ?? r;
                  return (
                    <button
                      key={r}
                      type="button"
                      className="celeb-hub__chip"
                      onClick={() => toggle(regions, r, setRegions)}
                    >
                      {name}
                      <span className="celeb-hub__chip-x" aria-hidden="true">×</span>
                      <span className="sr-only">Remove</span>
                    </button>
                  );
                })}
                {months.map((m) => (
                  <button
                    key={m}
                    type="button"
                    className="celeb-hub__chip"
                    onClick={() => toggle(months, m, setMonths)}
                  >
                    {m}
                    <span className="celeb-hub__chip-x" aria-hidden="true">×</span>
                    <span className="sr-only">Remove</span>
                  </button>
                ))}
                {interests.map((i) => (
                  <button
                    key={i}
                    type="button"
                    className="celeb-hub__chip"
                    onClick={() => toggle(interests, i, setInterests)}
                  >
                    {i}
                    <span className="celeb-hub__chip-x" aria-hidden="true">×</span>
                    <span className="sr-only">Remove</span>
                  </button>
                ))}
              </div>
              <button type="button" className="celeb-hub__clear" onClick={clearAll}>
                <span aria-hidden="true">×</span> Clear All
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="site-section celeb-hub__results-section">
        <div className="site-container">
          <div className="celeb-hub__results-head">
            <span className="eyebrow celeb-hub__results-eyebrow">festivals &amp; events</span>
            <h2 className="celeb-hub__results-title">FESTIVALS AND EVENTS</h2>
            <p className="celeb-hub__results-count">
              {filtered.length} {filtered.length === 1 ? "celebration" : "celebrations"} matching
            </p>
          </div>

          {filtered.length === 0 ? (
            <p className="celeb-hub__empty">
              Nothing matches these filters. Try clearing one above.
            </p>
          ) : (
            <div className="celeb-hub__grid">
              {filtered.map((c, i) => (
                <Reveal key={c.slug} delay={(i % 4) as 0 | 1 | 2 | 3}>
                  <CelebrationCard c={c} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        .celeb-hub__hero {
          position: relative;
          color: #fff;
          min-height: clamp(18rem, 45vh, 26rem);
          display: flex;
          align-items: center;
          padding-block: clamp(2.5rem, 6vw, 4.5rem);
          text-align: center;
        }
        .celeb-hub__hero-media { position: absolute; inset: 0; }
        .celeb-hub__hero-shade {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.7) 100%);
        }
        .celeb-hub__hero-inner {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .celeb-hub__hero-inner :global(.breadcrumbs),
        .celeb-hub__hero-inner :global(.breadcrumbs a) {
          color: rgba(255,255,255,0.85);
          justify-content: center;
        }
        .celeb-hub__hero-inner :global(.breadcrumbs span[aria-current="page"]) { color: #fff; }
        .celeb-hub__hero-eyebrow { color: var(--heritage-gold); }
        .celeb-hub__hero-eyebrow::before { background: var(--heritage-gold); }
        .celeb-hub__hero-title {
          font-family: var(--font-poppins);
          color: #fff;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 800;
          letter-spacing: -0.01em;
          margin: 0.25rem 0 0.75rem;
          line-height: 1.05;
        }
        .celeb-hub__hero-lead {
          color: rgba(255,255,255,0.9);
          font-size: 1.0625rem;
          max-width: 42rem;
          margin: 0 auto 1.75rem;
          line-height: 1.6;
        }
        .celeb-hub__search {
          position: relative;
          width: 100%;
          max-width: 32rem;
          margin: 0 auto;
        }
        .celeb-hub__search input {
          width: 100%;
          padding: 0.875rem 1.25rem 0.875rem 3rem;
          border: 0;
          border-radius: var(--radius-pill);
          font-family: var(--font-poppins);
          font-size: 0.9375rem;
          background: rgba(255,255,255,0.95);
          color: var(--heritage-ink);
          box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.2);
        }
        .celeb-hub__search input::placeholder {
          color: var(--heritage-muted);
          font-style: italic;
        }
        .celeb-hub__search input:focus-visible {
          outline: 2px solid var(--heritage-rust);
          outline-offset: 2px;
        }
        .celeb-hub__search-icon {
          position: absolute;
          left: 1.125rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--heritage-rust);
          font-size: 1.5rem;
          line-height: 1;
          pointer-events: none;
        }

        .celeb-hub__filters-section { padding-block: 2rem; }
        .celeb-hub__filter-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        .celeb-hub__dd {
          position: relative;
        }
        .celeb-hub__dd-btn {
          width: 100%;
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line-strong);
          border-radius: var(--radius-md, 0.625rem);
          padding: 0.875rem 1.125rem;
          font-family: var(--font-poppins);
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--heritage-ink);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          min-height: var(--tap-target);
        }
        .celeb-hub__dd-btn:hover { border-color: var(--heritage-rust); }
        .celeb-hub__dd-btn[aria-expanded="true"] {
          border-color: var(--heritage-rust);
          box-shadow: 0 0 0 3px rgba(0, 95, 115, 0.12);
        }
        .celeb-hub__dd-caret { font-size: 0.75rem; color: var(--heritage-muted); }
        .celeb-hub__dd-panel {
          position: absolute;
          top: calc(100% + 0.5rem);
          left: 0;
          right: 0;
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line-strong);
          border-radius: var(--radius-md, 0.625rem);
          padding: 0.625rem;
          z-index: 10;
          box-shadow: var(--heritage-shadow-lg);
          max-height: 18rem;
          overflow-y: auto;
        }
        .celeb-hub__dd-panel--wide {
          column-count: 2;
          column-gap: 0.5rem;
        }
        .celeb-hub__dd-option {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          padding: 0.5rem 0.625rem;
          font-family: var(--font-poppins);
          font-size: 0.875rem;
          color: var(--heritage-ink);
          border-radius: var(--radius-sm);
          cursor: pointer;
          break-inside: avoid;
        }
        .celeb-hub__dd-option:hover { background: var(--heritage-cream-2); }
        .celeb-hub__dd-option input { accent-color: var(--heritage-rust); }

        .celeb-hub__chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1rem;
          align-items: center;
          justify-content: space-between;
          margin-top: 1.5rem;
        }
        .celeb-hub__chips-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          flex: 1;
        }
        .celeb-hub__chip {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line-strong);
          border-radius: var(--radius-sm);
          padding: 0.4375rem 0.75rem;
          font-family: var(--font-poppins);
          font-size: 0.8125rem;
          color: var(--heritage-ink);
          cursor: pointer;
          font-weight: 500;
        }
        .celeb-hub__chip:hover {
          border-color: var(--heritage-rust);
          color: var(--heritage-rust);
        }
        .celeb-hub__chip-x {
          color: var(--heritage-rust);
          font-size: 1rem;
          line-height: 1;
        }
        .celeb-hub__clear {
          background: transparent;
          border: 0;
          color: var(--heritage-rust);
          font-family: var(--font-poppins);
          font-size: 0.875rem;
          font-weight: 700;
          cursor: pointer;
          padding: 0.4375rem 0;
          white-space: nowrap;
        }
        .celeb-hub__clear:hover { text-decoration: underline; }

        .celeb-hub__results-section { padding-top: 1.5rem; }
        .celeb-hub__results-head {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .celeb-hub__results-eyebrow {
          color: var(--heritage-rust);
          justify-content: center;
        }
        .celeb-hub__results-title {
          font-family: var(--font-poppins);
          font-size: clamp(2.25rem, 6vw, 5rem);
          font-weight: 800;
          letter-spacing: -0.01em;
          color: rgba(31, 41, 55, 0.16);
          margin: 0.5rem 0 0.5rem;
          line-height: 1;
          text-transform: uppercase;
        }
        .celeb-hub__results-count {
          font-family: var(--font-poppins);
          font-size: 0.9375rem;
          color: var(--heritage-muted);
          margin: 0;
        }

        .celeb-hub__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .celeb-hub__empty {
          text-align: center;
          padding: 3rem 0;
          color: var(--heritage-muted);
          font-size: 1.0625rem;
        }

        @media (max-width: 960px) {
          .celeb-hub__filter-bar { grid-template-columns: repeat(2, 1fr); }
          .celeb-hub__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .celeb-hub__filter-bar { grid-template-columns: 1fr; }
          .celeb-hub__grid { grid-template-columns: 1fr; }
          .celeb-hub__dd-panel--wide { column-count: 1; }
        }
      `}</style>
    </div>
  );
}
