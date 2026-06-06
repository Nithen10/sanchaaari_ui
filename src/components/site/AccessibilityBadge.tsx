import type { Temple } from "@/data/temples";

export default function AccessibilityBadge({
  access,
}: {
  access: Temple["accessibility"];
}) {
  const items: { icon: string; label: string; ok: boolean }[] = [
    { icon: "🪜", label: `${access.steps} steps`, ok: access.steps <= 12 },
    { icon: "♿", label: access.wheelchair ? "Wheelchair friendly" : "No wheelchair access", ok: access.wheelchair },
    { icon: "🛗", label: access.lift ? "Lift available" : "No lift", ok: access.lift },
    { icon: "👵", label: access.seniorDarshan ? "Senior darshan" : "Standard queue", ok: access.seniorDarshan },
    { icon: "🚻", label: access.restrooms ? "Restrooms on-site" : "No restrooms nearby", ok: access.restrooms },
    { icon: "🚗", label: `Parking ${access.parkingDistanceM}m`, ok: access.parkingDistanceM <= 250 },
  ];
  return (
    <ul className="access-row" aria-label="Accessibility highlights">
      {items.map((it, i) => (
        <li key={i} className={`access-pill ${it.ok ? "ok" : "warn"}`}>
          <span aria-hidden="true" className="access-pill__icon">{it.icon}</span>
          <span>{it.label}</span>
        </li>
      ))}

      <style>{`
        .access-row {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 0.625rem;
        }
        .access-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.875rem;
          border-radius: var(--radius-pill);
          font-size: 0.875rem;
          font-weight: 500;
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
        }
        .access-pill.ok { color: var(--heritage-ink); border-color: rgba(46,204,113,0.35); }
        .access-pill.ok .access-pill__icon { filter: none; }
        .access-pill.warn {
          color: var(--heritage-muted);
          background: rgba(134,109,75,0.10);
          border-color: rgba(134,109,75,0.40);
        }
        .access-pill__icon { font-size: 1rem; line-height: 1; }
      `}</style>
    </ul>
  );
}
