"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PACKAGES, type Package } from "@/data/packages";
import JourneyCard from "./JourneyCard";

const score = (p: Package) =>
  p.badges.includes("Most Popular")
    ? 0
    : p.badges.includes("Best for Seniors")
      ? 1
      : p.badges.includes("Premium")
        ? 2
        : 3;

type SortKey = "featured" | "price-asc" | "price-desc" | "duration-asc" | "rating-desc";

const SORT_LABELS: Record<SortKey, string> = {
  featured: "Featured",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
  "duration-asc": "Duration: Short to Long",
  "rating-desc": "Rating",
};

export default function HomeItineraries() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sort, setSort] = useState<SortKey>("featured");

  const featured = useMemo(
    () => [...PACKAGES].sort((a, b) => score(a) - score(b)).slice(0, 6),
    [],
  );

  const items = useMemo(() => {
    const list = [...featured];
    switch (sort) {
      case "price-asc":
        return list.sort((a, b) => a.priceFrom - b.priceFrom);
      case "price-desc":
        return list.sort((a, b) => b.priceFrom - a.priceFrom);
      case "duration-asc":
        return list.sort((a, b) => a.durationNights - b.durationNights);
      case "rating-desc":
        return list.sort((a, b) => b.rating - a.rating);
      default:
        return list; // featured (badge order)
    }
  }, [featured, sort]);

  return (
    <section className="site-section home-itin">
      <div className="site-container site-container--wide">
        <div className="home-itin__head">
          <span className="eyebrow home-itin__eyebrow">Most popular journeys</span>
          <h2 className="home-itin__title">Itineraries</h2>
          <p className="home-itin__tagline">
            <span className="home-itin__tagline-rule" aria-hidden="true" />
            <span>Sanchaari signature</span>
            <span className="home-itin__tagline-rule" aria-hidden="true" />
          </p>
          <p className="section-lead home-itin__lead">
            A handful of journeys we run again and again, chosen for their pace,
            their darshan arrangements, and how well they suit senior travellers.
          </p>
        </div>

        <div className="home-itin__bar">
          <div className="home-itin__view" role="group" aria-label="View">
            <button
              type="button"
              className={view === "grid" ? "is-active" : ""}
              aria-pressed={view === "grid"}
              aria-label="Grid view"
              onClick={() => setView("grid")}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"
                />
              </svg>
            </button>
            <button
              type="button"
              className={view === "list" ? "is-active" : ""}
              aria-pressed={view === "list"}
              aria-label="List view"
              onClick={() => setView("list")}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M4 5h16v3H4zM4 10.5h16v3H4zM4 16h16v3H4z"
                />
              </svg>
            </button>
          </div>

          <div className="home-itin__tabs" role="tablist" aria-label="Display mode">
            <button type="button" role="tab" aria-selected="true" className="is-active">
              Photo View
            </button>
            <button
              type="button"
              role="tab"
              aria-selected="false"
              aria-disabled="true"
              disabled
              title="Coming soon"
            >
              Map View
            </button>
          </div>

          <label className="home-itin__sort">
            <span>Sort by:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              aria-label="Sort journeys"
            >
              {(Object.keys(SORT_LABELS) as SortKey[]).map((k) => (
                <option key={k} value={k}>
                  {SORT_LABELS[k]}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className={view === "grid" ? "home-itin__grid" : "home-itin__list"}>
          {items.map((p) => (
            <JourneyCard key={p.slug} pkg={p} variant={view} />
          ))}
        </div>

        <div className="home-itin__more">
          <Link href="/tours" className="btn btn--primary btn--lg">
            View all tours →
          </Link>
        </div>
      </div>

      <style>{`
        .is-site .home-itin > .site-container {
          max-width: 80rem;
          margin-inline: auto;
          padding-inline: clamp(1rem, 3vw, 2rem);
        }
        .is-site .home-itin__head {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .is-site .home-itin__eyebrow { justify-content: center; font-size: 0.8125rem; }
        .is-site .home-itin__title {
          font-family: var(--font-fraunces), serif;
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 700;
          color: #111111;
          letter-spacing: -0.025em;
          line-height: 1;
          margin: 0.5rem 0 0.75rem;
        }
        .is-site .home-itin__tagline {
          display: inline-flex; align-items: center; justify-content: center;
          gap: 0.875rem;
          font-family: var(--font-fraunces); font-style: italic;
          color: var(--heritage-gold);
          font-size: clamp(1.125rem, 1.5vw, 1.5rem); margin: 0;
        }
        .is-site .home-itin__tagline-rule {
          display: inline-block; width: clamp(2rem, 4vw, 4rem); height: 1px;
          background: currentColor; opacity: 0.55;
        }
        .is-site .home-itin__lead {
          margin-inline: auto; max-width: 44rem;
          font-size: clamp(1.0625rem, 1.15vw, 1.1875rem); color: var(--heritage-sub);
        }

        /* Control bar */
        .home-itin__bar {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 1rem;
          padding-bottom: 1.25rem;
          margin-bottom: 1.75rem;
          border-bottom: 1px solid var(--heritage-line);
        }
        .home-itin__view { display: inline-flex; gap: 0.25rem; justify-self: start; }
        .home-itin__view button {
          display: inline-flex; align-items: center; justify-content: center;
          width: 2.25rem; height: 2.25rem; border-radius: var(--radius-sm);
          border: 1px solid transparent; background: transparent;
          color: var(--heritage-muted); cursor: pointer;
          transition: background var(--transition-fast), color var(--transition-fast);
        }
        .home-itin__view button:hover { color: var(--heritage-ink); }
        .home-itin__view button.is-active {
          color: var(--heritage-ink); background: var(--heritage-cream-2);
        }

        .home-itin__tabs { display: inline-flex; gap: 1.5rem; justify-self: center; }
        .home-itin__tabs button {
          background: none; border: 0; cursor: pointer;
          font-family: var(--font-poppins); font-size: 0.9375rem; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--heritage-muted); padding: 0.25rem 0;
        }
        .home-itin__tabs button.is-active {
          color: var(--heritage-ink);
          border-bottom: 2px solid var(--heritage-ink);
        }
        .home-itin__tabs button[disabled] { cursor: not-allowed; opacity: 0.5; }

        .home-itin__sort {
          justify-self: end;
          display: inline-flex; align-items: center; gap: 0.4rem;
          font-family: var(--font-poppins); font-size: 0.875rem; color: var(--heritage-muted);
        }
        .home-itin__sort select {
          appearance: none; -webkit-appearance: none;
          border: 0; background: transparent;
          font-family: var(--font-poppins); font-size: 0.875rem; font-weight: 600;
          color: var(--heritage-ink); cursor: pointer;
          padding: 0.35rem 1.4rem 0.35rem 0.25rem;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 0.2rem center;
        }

        /* Layouts */
        .home-itin__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .home-itin__list {
          display: flex; flex-direction: column; gap: 1.5rem;
          max-width: 78rem; margin-inline: auto;
        }
        .home-itin__more { margin-top: 2.75rem; text-align: center; }

        @media (max-width: 1100px) {
          .home-itin__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 720px) {
          .home-itin__grid { grid-template-columns: 1fr; }
          .home-itin__bar { grid-template-columns: auto 1fr; row-gap: 0.75rem; }
          .home-itin__tabs { justify-self: end; }
          .home-itin__sort { grid-column: 1 / -1; justify-self: start; }
        }
      `}</style>
    </section>
  );
}
