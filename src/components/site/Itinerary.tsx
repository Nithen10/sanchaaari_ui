"use client";

import { useState } from "react";
import type { ItineraryDay } from "@/data/packages";

export default function Itinerary({ days }: { days: ItineraryDay[] }) {
  const [open, setOpen] = useState<number>(days[0]?.day ?? 1);

  return (
    <div className="itin-tl">
      {days.map((d) => {
        const isOpen = open === d.day;
        return (
          <div className={`tl-item${isOpen ? " tl-item--open" : ""}`} key={d.day}>
            <div className="tl-node">
              <span className="tl-node__num">{String(d.day).padStart(2, "0")}</span>
            </div>
            <div className="tl-content">
              <button
                className="tl-header"
                onClick={() => setOpen(isOpen ? -1 : d.day)}
                aria-expanded={isOpen}
              >
                <span className="tl-day-label">Day {String(d.day).padStart(2, "0")}</span>
                <span className="tl-title">{d.title}</span>
                <span className="tl-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
              <div className="tl-body" style={{ maxHeight: isOpen ? "2000px" : "0" }}>
                <div className="tl-body__inner">
                  <p className="tl-summary">{d.summary}</p>
                  {d.activities.length > 0 && (
                    <ul className="tl-activities">
                      {d.activities.map((a, i) => (
                        <li key={i} style={{ animationDelay: `${i * 60}ms` }}>{a}</li>
                      ))}
                    </ul>
                  )}
                  {d.meals.length > 0 && (
                    <p className="tl-meals">
                      <strong>Meals included:</strong> {d.meals.join(", ")}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <style>{`
        .itin-tl {
          display: flex;
          flex-direction: column;
          position: relative;
          padding-left: 0;
          margin-top: 2rem;
        }
        .itin-tl::before {
          content: "";
          position: absolute;
          left: 0.9375rem;
          top: 1.5rem;
          bottom: 1.5rem;
          width: 2px;
          background: linear-gradient(180deg, #c9a96e 0%, rgba(134,109,75,0.12) 100%);
          border-radius: 1px;
        }

        .tl-item {
          display: block;
          width: 100%;
          position: relative;
          padding-left: 3.75rem;
          padding-bottom: 0.25rem;
        }
        .tl-item:last-child { padding-bottom: 0; }

        .tl-node {
          position: absolute;
          left: 0;
          top: 1.125rem;
          width: 1.875rem;
          height: 1.875rem;
          border-radius: 50%;
          border: 2px solid #c9a96e;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
          z-index: 1;
        }
        .tl-node__num {
          font-family: var(--font-poppins), sans-serif;
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #c9a96e;
          transition: color 0.3s ease;
        }

        .tl-item--open .tl-node {
          background: #c9a96e;
          box-shadow: 0 0 0 6px rgba(201,169,110,0.15);
          transform: scale(1.1);
        }
        .tl-item--open .tl-node__num { color: #fff; }

        .tl-content {
          border-bottom: 1px solid var(--heritage-line);
          padding-bottom: 0.25rem;
        }
        .tl-item:last-child .tl-content { border-bottom: none; }

        .tl-header {
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          padding: 1.125rem 0;
          display: grid;
          grid-template-columns: 5rem 1fr auto;
          gap: 1rem;
          align-items: center;
          text-align: left;
          transition: background 0.2s;
          border-radius: 0.5rem;
        }
        .tl-header:hover { background: rgba(201,169,110,0.04); }

        .tl-day-label {
          font-family: var(--font-poppins), sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c9a96e;
        }
        .tl-title {
          font-family: var(--font-fraunces), serif;
          font-size: 1.0625rem;
          font-weight: 500;
          color: var(--heritage-ink);
          transition: color 0.25s;
        }
        .tl-item--open .tl-title { color: #a07840; }

        .tl-toggle {
          font-family: var(--font-poppins);
          font-size: 1.375rem;
          color: #c9a96e;
          line-height: 1;
          width: 1.75rem;
          text-align: center;
          transition: transform 0.3s ease;
        }
        .tl-item--open .tl-toggle { transform: rotate(0deg); }

        .tl-body {
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .tl-body__inner {
          padding: 0 0 1.75rem 0;
        }

        .tl-summary {
          color: var(--heritage-sub);
          line-height: 1.7;
          max-width: 64ch;
        }

        .tl-activities {
          list-style: none;
          padding: 0;
          margin: 1rem 0 0;
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }
        .tl-item--open .tl-activities li {
          opacity: 0;
          animation: tlFadeIn 0.4s ease forwards;
        }
        @keyframes tlFadeIn {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .tl-activities li {
          padding-left: 1.375rem;
          position: relative;
          color: var(--heritage-sub);
          font-size: 0.9375rem;
          line-height: 1.55;
        }
        .tl-activities li::before {
          content: "◆";
          position: absolute;
          left: 0;
          color: #c9a96e;
          font-size: 0.45rem;
          top: 0.45rem;
        }

        .tl-meals {
          font-size: 0.875rem;
          color: var(--heritage-muted);
          margin-top: 1rem;
          padding: 0.625rem 0.875rem;
          background: rgba(201,169,110,0.07);
          border-radius: 0.5rem;
          border-left: 3px solid #c9a96e;
          display: inline-block;
        }
        .tl-meals strong { color: var(--heritage-ink); }

        @media (max-width: 640px) {
          .itin-tl::before { left: 0.6875rem; }
          .tl-item { padding-left: 2.75rem; }
          .tl-node { width: 1.375rem; height: 1.375rem; top: 1rem; }
          .tl-node__num { font-size: 0.5rem; }
          .tl-header { grid-template-columns: 1fr auto; padding: 0.875rem 0; }
          .tl-day-label { display: none; }
        }
      `}</style>
    </div>
  );
}
