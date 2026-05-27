import type { ItineraryDay } from "@/data/packages";

export default function Itinerary({ days }: { days: ItineraryDay[] }) {
  return (
    <ol className="itinerary">
      {days.map((d) => (
        <li className="itinerary__day" key={d.day}>
          <details open={d.day === 1}>
            <summary>
              <span className="itinerary__num">Day {String(d.day).padStart(2, "0")}</span>
              <span className="itinerary__title">{d.title}</span>
            </summary>
            <div className="itinerary__body">
              <p>{d.summary}</p>
              {d.activities.length > 0 && (
                <ul className="itinerary__activities">
                  {d.activities.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              )}
              {d.meals.length > 0 && (
                <p className="itinerary__meals">
                  <strong>Meals included:</strong> {d.meals.join(", ")}
                </p>
              )}
            </div>
          </details>
        </li>
      ))}

      <style>{`
        .itinerary { list-style: none; padding: 0; margin: 0; counter-reset: day; }
        .itinerary__day { border-bottom: 1px solid var(--heritage-line); }
        .itinerary__day:last-child { border-bottom: none; }
        .itinerary__day details summary {
          list-style: none;
          cursor: pointer;
          padding: 1.25rem 0;
          display: grid;
          grid-template-columns: 6rem 1fr auto;
          gap: 1.25rem;
          align-items: center;
          font-family: var(--font-fraunces), serif;
        }
        .itinerary__day details summary::-webkit-details-marker { display: none; }
        .itinerary__day details summary::after {
          content: "+";
          color: var(--heritage-rust);
          font-size: 1.5rem;
          font-family: var(--font-poppins);
        }
        .itinerary__day details[open] summary::after { content: "−"; }
        .itinerary__num {
          font-family: var(--font-poppins);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--heritage-rust);
        }
        .itinerary__title {
          font-size: 1.0625rem;
          color: var(--heritage-ink);
          font-weight: 500;
        }
        .itinerary__body {
          padding: 0 0 1.5rem 7.25rem;
          color: var(--heritage-sub);
        }
        .itinerary__activities {
          margin: 1rem 0;
          padding-left: 1.25rem;
        }
        .itinerary__activities li {
          margin-bottom: 0.375rem;
          color: var(--heritage-sub);
        }
        .itinerary__activities li::marker { color: var(--heritage-gold); }
        .itinerary__meals {
          font-size: 0.875rem;
          color: var(--heritage-muted);
          margin-top: 0.5rem;
        }
        .itinerary__meals strong { color: var(--heritage-ink); }
        @media (max-width: 640px) {
          .itinerary__day details summary {
            grid-template-columns: 1fr auto;
            gap: 0.5rem 1rem;
          }
          .itinerary__num { grid-column: 1 / -1; }
          .itinerary__body { padding-left: 0; }
        }
      `}</style>
    </ol>
  );
}
