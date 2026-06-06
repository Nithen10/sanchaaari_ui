"use client";

import { useMemo, useState } from "react";
import type { Package, PackageKind, PackageTheme } from "@/data/packages";
import type { StateSlug } from "@/data/states";
import { STATES, getStateBySlug } from "@/data/states";
import { cn } from "@/lib/cn";
import JourneyCard from "./JourneyCard";

const DURATION_BUCKETS = [
  { id: "short", label: "Up to 4 days", min: 0, max: 4 },
  { id: "mid", label: "5–7 days", min: 5, max: 7 },
  { id: "long", label: "8–11 days", min: 8, max: 11 },
  { id: "extended", label: "12 days +", min: 12, max: 999 },
] as const;

const THEMES: PackageTheme[] = [
  "Temples",
  "Pilgrimage",
  "Heritage",
  "Wellness",
  "Senior-Friendly",
];

const DEPARTURES = [
  "Chennai",
  "Bengaluru",
  "Hyderabad",
  "Kochi",
  "Mangaluru",
  "Madurai",
];

type SortKey = "featured" | "price-asc" | "price-desc" | "duration-asc" | "rating-desc";

const SORT_LABELS: Record<SortKey, string> = {
  featured: "Featured",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
  "duration-asc": "Duration: Short to Long",
  "rating-desc": "Rating",
};

function categoryFor(pkg: Package) {
  return pkg.states.length === 1
    ? getStateBySlug(pkg.states[0])?.name ?? "South India"
    : "South India";
}

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 9l6 6 6-6"
    />
  </svg>
);

const SlidersIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h8M16 18h4M14 4v4M6 10v4M12 16v4"
    />
  </svg>
);

export default function ToursExplorer({ packages }: { packages: Package[] }) {
  const [where, setWhere] = useState<StateSlug | "">("");
  const [when, setWhen] = useState<string>("");
  const [themes, setThemes] = useState<PackageTheme[]>([]);
  const [kind, setKind] = useState<PackageKind | "all">("all");
  const [departure, setDeparture] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [sort, setSort] = useState<SortKey>("featured");
  const [view, setView] = useState<"grid" | "list">("grid");

  function toggleTheme(t: PackageTheme) {
    setThemes((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));
  }

  const results = useMemo(() => {
    const q = search.trim().toLowerCase();
    const filtered = packages.filter((p) => {
      if (where && !p.states.includes(where)) return false;
      if (when) {
        const bucket = DURATION_BUCKETS.find((b) => b.id === when);
        if (bucket && (p.durationDays < bucket.min || p.durationDays > bucket.max))
          return false;
      }
      if (themes.length && !themes.some((t) => p.themes.includes(t))) return false;
      if (kind !== "all" && p.kind !== kind) return false;
      if (departure && !p.departureCities.includes(departure)) return false;
      if (q) {
        const haystack =
          `${p.title} ${p.shortDescription} ${p.longDescription} ${p.states.join(" ")}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });

    const sorted = [...filtered];
    switch (sort) {
      case "price-asc":
        sorted.sort((a, b) => a.priceFrom - b.priceFrom);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.priceFrom - a.priceFrom);
        break;
      case "duration-asc":
        sorted.sort((a, b) => a.durationNights - b.durationNights);
        break;
      case "rating-desc":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break; // featured = source order
    }
    return sorted;
  }, [packages, where, when, themes, kind, departure, search, sort]);

  const activeCount =
    (where ? 1 : 0) +
    (when ? 1 : 0) +
    themes.length +
    (kind !== "all" ? 1 : 0) +
    (departure ? 1 : 0) +
    (search ? 1 : 0);

  function resetFilters() {
    setWhere("");
    setWhen("");
    setThemes([]);
    setKind("all");
    setDeparture(null);
    setSearch("");
  }

  return (
    <div className="tours-x">
      <h1 className="tours-x__title">Find your journey</h1>

      {/* ---- Filter bar ---- */}
      <div className="tours-x__bar">
        <label className="tours-x__field">
          <span className="tours-x__field-label">Where to?</span>
          <span className="tours-x__select">
            <select value={where} onChange={(e) => setWhere(e.target.value as StateSlug | "")}>
              <option value="">All destinations</option>
              {STATES.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
            </select>
            <ChevronIcon />
          </span>
        </label>

        <label className="tours-x__field">
          <span className="tours-x__field-label">When?</span>
          <span className="tours-x__select">
            <select value={when} onChange={(e) => setWhen(e.target.value)}>
              <option value="">Any length</option>
              {DURATION_BUCKETS.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.label}
                </option>
              ))}
            </select>
            <ChevronIcon />
          </span>
        </label>

        <button
          type="button"
          className={cn("tours-x__advbtn", advancedOpen && "is-open")}
          aria-expanded={advancedOpen}
          onClick={() => setAdvancedOpen((o) => !o)}
        >
          <SlidersIcon />
          Advanced
        </button>
      </div>

      {advancedOpen && (
        <div className="tours-x__adv">
          <div className="tours-x__adv-row">
            <span className="tours-x__adv-label">Search</span>
            <input
              type="search"
              className="input tours-x__search"
              placeholder="e.g. Tirupati, Ayurveda, 7 days"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="tours-x__adv-row">
            <span className="tours-x__adv-label">Theme</span>
            <div className="chips">
              {THEMES.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={cn("chip", themes.includes(t) && "is-active")}
                  aria-pressed={themes.includes(t)}
                  onClick={() => toggleTheme(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="tours-x__adv-row">
            <span className="tours-x__adv-label">Tour kind</span>
            <div className="chips">
              {(["all", "group", "private"] as const).map((k) => (
                <button
                  key={k}
                  type="button"
                  className={cn("chip", kind === k && "is-active")}
                  aria-pressed={kind === k}
                  onClick={() => setKind(k)}
                >
                  {k === "all" ? "All" : k === "group" ? "Group" : "Private"}
                </button>
              ))}
            </div>
          </div>
          <div className="tours-x__adv-row">
            <span className="tours-x__adv-label">Departure city</span>
            <div className="chips">
              {DEPARTURES.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={cn("chip", departure === c && "is-active")}
                  aria-pressed={departure === c}
                  onClick={() => setDeparture(departure === c ? null : c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="tours-x__barfoot">
        <span className="tours-x__count">{results.length} journeys available</span>
        {activeCount > 0 && (
          <button type="button" className="tours-x__reset" onClick={resetFilters}>
            Reset filters
          </button>
        )}
      </div>

      {/* ---- Controls row ---- */}
      <div className="tours-x__controls">
        <div className="tours-x__view" role="group" aria-label="View">
          <button
            type="button"
            className={view === "grid" ? "is-active" : ""}
            aria-pressed={view === "grid"}
            aria-label="Grid view"
            onClick={() => setView("grid")}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path fill="currentColor" d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
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
              <path fill="currentColor" d="M4 5h16v3H4zM4 10.5h16v3H4zM4 16h16v3H4z" />
            </svg>
          </button>
        </div>

        <div className="tours-x__tabs" role="tablist" aria-label="Display mode">
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

        <label className="tours-x__sort">
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

      {/* ---- Results ---- */}
      {results.length === 0 ? (
        <div className="tours-x__empty">
          <h3>No journeys match these filters.</h3>
          <p>Try widening your search, or talk to us — we customise everything.</p>
          <button className="btn btn--primary" type="button" onClick={resetFilters}>
            Reset filters
          </button>
        </div>
      ) : (
        <div className={view === "grid" ? "tours-x__grid" : "tours-x__list"}>
          {results.map((p) => (
            <JourneyCard
              key={p.slug}
              pkg={p}
              variant={view}
              category={categoryFor(p)}
              showMapButton
              mapHref={`/states/${p.states[0]}`}
            />
          ))}
        </div>
      )}

      <style>{`
        .tours-x__title {
          text-align: center;
          font-family: var(--font-fraunces), serif;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-size: clamp(1.75rem, 3.4vw, 2.75rem);
          color: var(--heritage-ink);
          margin: 0 0 2.5rem;
        }

        /* ---- Filter bar ---- */
        .tours-x__bar {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-end;
          gap: clamp(1.5rem, 4vw, 3.5rem);
        }
        .tours-x__field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          flex: 1 1 18rem;
          min-width: 14rem;
          border-bottom: 1px solid var(--heritage-line-strong);
          padding-bottom: 0.6rem;
        }
        .tours-x__field-label {
          font-family: var(--font-poppins);
          font-size: 1.0625rem;
          color: var(--heritage-ink);
        }
        .tours-x__select { position: relative; display: flex; align-items: center; }
        .tours-x__select select {
          appearance: none;
          -webkit-appearance: none;
          width: 100%;
          border: 0;
          background: transparent;
          font-family: var(--font-poppins);
          font-size: 1.0625rem;
          color: var(--heritage-muted);
          cursor: pointer;
          padding: 0 1.5rem 0 0;
        }
        .tours-x__select svg {
          position: absolute;
          right: 0;
          pointer-events: none;
          color: var(--heritage-muted);
        }
        .tours-x__advbtn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: 0;
          cursor: pointer;
          padding: 0.6rem 0;
          font-family: var(--font-poppins);
          font-size: 1.0625rem;
          color: var(--heritage-ink);
        }
        .tours-x__advbtn:hover,
        .tours-x__advbtn.is-open { color: var(--heritage-gold-dk); }

        .tours-x__adv {
          margin-top: 1.5rem;
          padding: 1.25rem 1.5rem;
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .tours-x__adv-row { display: flex; flex-direction: column; gap: 0.5rem; }
        .tours-x__adv-label {
          font-family: var(--font-poppins);
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--heritage-muted);
        }
        .tours-x__search { max-width: 28rem; }
        .chips { display: flex; flex-wrap: wrap; gap: 0.5rem; }

        .tours-x__barfoot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-top: 0.9rem;
        }
        .tours-x__count {
          font-family: var(--font-poppins);
          font-size: 0.9375rem;
          color: var(--heritage-muted);
        }
        .tours-x__reset {
          background: none;
          border: 0;
          cursor: pointer;
          font-family: var(--font-poppins);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--heritage-gold-dk);
          text-decoration: underline;
          text-underline-offset: 0.25rem;
        }

        /* ---- Controls row ---- */
        .tours-x__controls {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 1rem;
          margin: 2.25rem 0 1.75rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--heritage-line);
        }
        .tours-x__view { display: inline-flex; gap: 0.25rem; justify-self: start; }
        .tours-x__view button {
          display: inline-flex; align-items: center; justify-content: center;
          width: 2.25rem; height: 2.25rem; border-radius: var(--radius-sm);
          border: 1px solid transparent; background: transparent;
          color: var(--heritage-muted); cursor: pointer;
          transition: background var(--transition-fast), color var(--transition-fast);
        }
        .tours-x__view button:hover { color: var(--heritage-ink); }
        .tours-x__view button.is-active { color: var(--heritage-ink); background: var(--heritage-cream-2); }

        .tours-x__tabs { display: inline-flex; gap: 1.5rem; justify-self: center; }
        .tours-x__tabs button {
          background: none; border: 0; cursor: pointer;
          font-family: var(--font-poppins); font-size: 1.0625rem; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--heritage-muted); padding: 0.25rem 0;
        }
        .tours-x__tabs button.is-active { color: var(--heritage-ink); border-bottom: 2px solid var(--heritage-ink); }
        .tours-x__tabs button[disabled] { cursor: not-allowed; opacity: 0.5; }

        .tours-x__sort {
          justify-self: end;
          display: inline-flex; align-items: center; gap: 0.4rem;
          font-family: var(--font-poppins); font-size: 0.9375rem; color: var(--heritage-muted);
        }
        .tours-x__sort select {
          appearance: none; -webkit-appearance: none;
          border: 0; background: transparent;
          font-family: var(--font-poppins); font-size: 0.9375rem; font-weight: 600;
          color: var(--heritage-ink); cursor: pointer;
          padding: 0.35rem 1.4rem 0.35rem 0.25rem;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236d6d6d' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 0.2rem center;
        }

        /* ---- Results ---- */
        .tours-x__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(22rem, 100%), 1fr));
          gap: 1.5rem;
        }
        .tours-x__list {
          display: flex; flex-direction: column; gap: 1.5rem;
          max-width: 78rem; margin-inline: auto;
        }
        .tours-x__empty {
          padding: 3rem 1.5rem; text-align: center;
          background: var(--heritage-ivory);
          border: 1px dashed var(--heritage-line-strong);
          border-radius: var(--radius-lg);
        }
        .tours-x__empty h3 { margin-bottom: 0.5rem; }

        @media (max-width: 760px) {
          .tours-x__controls { grid-template-columns: 1fr; justify-items: center; gap: 0.85rem; }
          .tours-x__view, .tours-x__sort { justify-self: center; }
        }
      `}</style>
    </div>
  );
}
