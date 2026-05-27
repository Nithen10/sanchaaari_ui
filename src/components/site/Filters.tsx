"use client";

import { useMemo, useState } from "react";
import type { Package, PackageKind, PackageTheme } from "@/data/packages";
import type { StateSlug } from "@/data/states";
import { STATES } from "@/data/states";
import { formatINR } from "@/lib/format";
import { cn } from "@/lib/cn";
import PackageCard from "./PackageCard";

interface Props {
  packages: Package[];
  /** When set, hide the kind chip group and lock the filter. */
  lockedKind?: PackageKind;
}

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

export default function Filters({ packages, lockedKind }: Props) {
  const [search, setSearch] = useState("");
  const [kind, setKind] = useState<PackageKind | "all">(lockedKind ?? "all");
  const [statesSel, setStatesSel] = useState<StateSlug[]>([]);
  const [duration, setDuration] = useState<string | null>(null);
  const [themes, setThemes] = useState<PackageTheme[]>([]);
  const [departure, setDeparture] = useState<string | null>(null);

  function toggleState(s: StateSlug) {
    setStatesSel((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }
  function toggleTheme(t: PackageTheme) {
    setThemes((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  }

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return packages.filter((p) => {
      if (kind !== "all" && p.kind !== kind) return false;
      if (statesSel.length && !statesSel.some((s) => p.states.includes(s)))
        return false;
      if (duration) {
        const bucket = DURATION_BUCKETS.find((b) => b.id === duration);
        if (bucket && (p.durationDays < bucket.min || p.durationDays > bucket.max))
          return false;
      }
      if (themes.length && !themes.some((t) => p.themes.includes(t)))
        return false;
      if (departure && !p.departureCities.includes(departure)) return false;
      if (q) {
        const haystack =
          `${p.title} ${p.shortDescription} ${p.longDescription} ${p.states.join(" ")}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [packages, kind, statesSel, duration, themes, departure, search]);

  const cheapest = useMemo(
    () => Math.min(...packages.map((p) => p.priceFrom)),
    [packages]
  );

  function clearAll() {
    setSearch("");
    if (!lockedKind) setKind("all");
    setStatesSel([]);
    setDuration(null);
    setThemes([]);
    setDeparture(null);
  }

  const activeCount =
    (search ? 1 : 0) +
    statesSel.length +
    (duration ? 1 : 0) +
    themes.length +
    (departure ? 1 : 0);

  return (
    <div className="filters-wrap">
      <aside className="filters" aria-label="Filter tours">
        <div className="filters__row">
          <label className="form-label" htmlFor="filter-search">
            Search
          </label>
          <input
            id="filter-search"
            type="search"
            className="input"
            placeholder="e.g. Tirupati, 7 days, Hyderabad departure"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {!lockedKind && (
          <div className="filters__row">
            <span className="form-label">Tour kind</span>
            <div className="chips">
              {(["all", "group", "private"] as const).map((k) => (
                <button
                  type="button"
                  key={k}
                  className={cn("chip", kind === k && "is-active")}
                  aria-pressed={kind === k}
                  onClick={() => setKind(k)}
                >
                  {k === "all" ? "All" : k === "group" ? "Samuha · Group" : "Samraksha · Private"}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="filters__row">
          <span className="form-label">States</span>
          <div className="chips">
            {STATES.map((s) => (
              <button
                key={s.slug}
                type="button"
                className={cn("chip", statesSel.includes(s.slug) && "is-active")}
                aria-pressed={statesSel.includes(s.slug)}
                onClick={() => toggleState(s.slug)}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>

        <div className="filters__row">
          <span className="form-label">Duration</span>
          <div className="chips">
            {DURATION_BUCKETS.map((b) => (
              <button
                key={b.id}
                type="button"
                className={cn("chip", duration === b.id && "is-active")}
                aria-pressed={duration === b.id}
                onClick={() => setDuration(duration === b.id ? null : b.id)}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>

        <div className="filters__row">
          <span className="form-label">Themes</span>
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

        <div className="filters__row">
          <span className="form-label">Departure city</span>
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

        <div className="filters__footer">
          <span className="filters__from">
            All tours starting from <strong>{formatINR(cheapest)}</strong>
          </span>
          {activeCount > 0 && (
            <button type="button" className="btn btn--ghost filters__clear" onClick={clearAll}>
              Clear all ({activeCount})
            </button>
          )}
        </div>
      </aside>

      <div className="filters-results">
        <div className="filters-results__head">
          <p>
            <strong>{filtered.length}</strong>{" "}
            {filtered.length === 1 ? "tour" : "tours"}
            {activeCount > 0 ? " matching your filters" : " available"}
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="filters-empty">
            <h3>No tours match these filters.</h3>
            <p>Try widening the search, or talk to us. We customise everything.</p>
            <button className="btn btn--primary" type="button" onClick={clearAll}>
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid-cards">
            {filtered.map((p) => (
              <PackageCard key={p.slug} pkg={p} />
            ))}
          </div>
        )}
      </div>

      <style>{`
        .filters-wrap {
          display: grid;
          grid-template-columns: 16rem minmax(0, 1fr);
          gap: clamp(1.5rem, 2vw, 2rem);
          align-items: start;
        }
        .filters {
          position: sticky;
          top: calc(var(--nav-height) + 1.25rem);
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .filters__row { display: flex; flex-direction: column; gap: 0.625rem; }
        .chips { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .filters__footer {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-top: 1rem;
          border-top: 1px solid var(--heritage-line);
        }
        .filters__from { font-size: 0.875rem; color: var(--heritage-sub); }
        .filters__from strong { color: var(--heritage-rust); }
        .filters__clear { align-self: flex-start; padding: 0.5rem 1rem; font-size: 0.875rem; min-height: auto; }
        .filters-results__head { margin-bottom: 1.5rem; color: var(--heritage-sub); }
        .filters-results__head strong { color: var(--heritage-ink); }
        .filters-empty {
          padding: 3rem 1.5rem;
          text-align: center;
          background: var(--heritage-ivory);
          border: 1px dashed var(--heritage-line-strong);
          border-radius: var(--radius-lg);
        }
        .filters-empty h3 { margin-bottom: 0.5rem; }
        @media (max-width: 960px) {
          .filters-wrap { grid-template-columns: 1fr; gap: 1.5rem; }
          .filters { position: static; }
        }
      `}</style>
    </div>
  );
}
