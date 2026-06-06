"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./GSAPReveal";
import { CELEBRATIONS, type Celebration } from "@/data/celebrations";

export default function HomeCelebrations() {
  // Home features exactly these two festivals (full list lives on /celebrations).
  const pairs = useMemo(() => {
    const FEATURED = ["krishna-janmashtami-2026", "maha-shivaratri-srisailam-2026"];
    const all = CELEBRATIONS.filter((c) => c.kind === "festival" && c.image);
    const ordered = FEATURED.map((slug) =>
      all.find((c) => c.slug === slug),
    ).filter((c): c is Celebration => Boolean(c));
    const out: Celebration[][] = [];
    for (let i = 0; i < ordered.length; i += 2) out.push(ordered.slice(i, i + 2));
    return out;
  }, []);

  const [pairIndex, setPairIndex] = useState(0);
  const pair = pairs[pairIndex] ?? [];
  const big = pair[0];
  const small = pair[1];

  if (!big) return null;

  const next = () => setPairIndex((p) => (p + 1) % pairs.length);

  return (
    <section className="site-section fest">
      <div className="site-container fest__grid">
        {/* TOP-LEFT — heading */}
        <Reveal className="fest__intro" from="left">
          <span className="fest__eyebrow">Sanchaari signature</span>
          <h2 className="fest__title">The Festive South</h2>
          <p className="fest__lead">
            A few of the season&rsquo;s most vivid celebrations across the South.
            Browse the full calendar — filter by month, state or interest — on the{" "}
            <Link href="/celebrations" className="fest__lead-link">
              festivals page
            </Link>
            .
          </p>
          {pairs.length > 1 && (
            <div className="fest__actions">
              <button type="button" className="btn btn--primary" onClick={next}>
                Discover more
              </button>
            </div>
          )}
        </Reveal>

        {/* TOP-RIGHT — large image (festival A) */}
        <Link
          key={`big-${pairIndex}`}
          href={`/celebrations/${big.slug}`}
          className="fest__big fest__tile"
          aria-label={`${big.name}, ${big.dateLabel}`}
        >
          <Image
            src={big.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 30rem"
            style={{ objectFit: "cover" }}
          />
          <span className="fest__date">{big.dateLabel}</span>
        </Link>

        {/* BOTTOM-LEFT — medium image (festival B) */}
        {small ? (
          <Link
            key={`small-${pairIndex}`}
            href={`/celebrations/${small.slug}`}
            className="fest__small fest__tile"
            aria-label={`${small.name}, ${small.dateLabel}`}
          >
            <Image
              src={small.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 21rem"
              style={{ objectFit: "cover" }}
            />
            <span className="fest__date">{small.dateLabel}</span>
          </Link>
        ) : (
          <div className="fest__small fest__small--empty" aria-hidden="true" />
        )}

        {/* BOTTOM-RIGHT (row 3) — text block (festival B) */}
        {small && (
          <div key={`btext-${pairIndex}`} className="fest__textb">
            <h3 className="fest__name">{small.name}</h3>
            <p className="fest__blurb">{small.shortBlurb}</p>
            <Link href={`/celebrations/${small.slug}`} className="fest__read">
              Read the story
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 6l6 6-6 6"
                />
              </svg>
            </Link>
          </div>
        )}

        {/* BOTTOM-RIGHT — text block (festival A) */}
        <div key={`text-${pairIndex}`} className="fest__text">
          <h3 className="fest__name">{big.name}</h3>
          <p className="fest__blurb">{big.shortBlurb}</p>
          <Link href={`/celebrations/${big.slug}`} className="fest__read">
            Read the story
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </Link>
        </div>
      </div>

      <div className="fest__footer">
        <Link href="/celebrations" className="fest__viewall">
          View all festivals →
        </Link>
      </div>

      <style>{`
        .fest__footer { text-align: center; margin-top: clamp(2.5rem, 5vw, 4.5rem); }
        .fest__grid {
          display: grid;
          max-width: 82rem;
          margin-inline: auto;
          grid-template-columns: 1fr 1fr;
          grid-template-areas:
            "intro big"
            "text  big"
            "small smalltext";
          column-gap: clamp(2rem, 4vw, 4rem);
          row-gap: clamp(1.25rem, 2.5vw, 2rem);
          align-items: start;
        }
        .fest__intro { grid-area: intro; }
        .fest__big { grid-area: big; justify-self: end; align-self: start; width: 100%; max-width: 30rem; }
        .fest__small { grid-area: small; justify-self: start; width: 100%; max-width: 21rem; margin-top: clamp(1.5rem, 1.5vw, 3.5rem); }
        .fest__text { grid-area: text; align-self: center; justify-self: end; max-width: 28rem; margin-right: clamp(-6rem, -4vw, -2.5rem); margin-top: clamp(4rem, 7vw, 9rem); }
        .fest__textb { grid-area: smalltext; align-self: center; justify-self: start; max-width: 28rem; margin-left: clamp(-16rem, -13vw, -9rem); margin-top: clamp(11rem, 17vw, 22rem); }

        .is-site .fest__eyebrow {
          display: inline-block;
          font-family: var(--font-fraunces); font-style: italic; font-weight: 500;
          font-size: clamp(0.9rem, 1.2vw, 1.0625rem);
          color: var(--heritage-gold);
          margin-bottom: 0.5rem;
        }
        .is-site .fest__title {
          font-family: var(--font-fraunces), serif;
          font-size: clamp(2.75rem, 6vw, 5rem);
          font-weight: 700; color: #111111;
          letter-spacing: -0.02em; line-height: 1.02;
          margin: 0 0 1rem; text-align: left;
        }
        .is-site .fest__lead {
          font-size: clamp(1rem, 1.1vw, 1.125rem);
          color: var(--heritage-sub); line-height: 1.65; max-width: 30rem; margin: 0;
        }
        .is-site .fest__lead-link { color: var(--accent-orange); font-weight: 600; }
        .fest__actions { display: flex; align-items: center; gap: 1.25rem; flex-wrap: wrap; margin-top: 1.75rem; }
        .is-site .fest__viewall { font-family: var(--font-poppins); font-weight: 700; font-size: 0.9375rem; color: var(--accent-orange); }

        /* image tiles */
        .fest__tile {
          position: relative; display: block; overflow: hidden;
          border-radius: var(--radius-md);
          box-shadow: var(--heritage-shadow);
          background: var(--heritage-cream-2);
          text-decoration: none;
        }
        .fest__tile img { transition: transform 0.7s cubic-bezier(0.22,1,0.36,1); }
        .fest__tile:hover img { transform: scale(1.05); }
        .fest__big { aspect-ratio: 5 / 6; }
        .fest__small { aspect-ratio: 4 / 5.5; }
        .fest__date {
          position: absolute; top: 0.85rem; left: 0.85rem;
          background: var(--heritage-ink); color: #fff;
          font-family: var(--font-poppins); font-size: 0.75rem; font-weight: 600;
          padding: 0.3rem 0.6rem; border-radius: var(--radius-sm);
        }
        .fest__small-name {
          position: absolute; left: 0.85rem; right: 0.85rem; bottom: 0.85rem;
          color: #fff; font-family: var(--font-fraunces), serif; font-weight: 600;
          font-size: 1.0625rem; text-shadow: 0 0.2rem 0.8rem rgba(0,0,0,0.5);
        }

        /* festival A text block */
        .is-site .fest__name {
          font-family: var(--font-fraunces), serif; font-size: clamp(1.5rem, 2.4vw, 2rem);
          font-weight: 600; color: #111111; margin: 0 0 0.6rem; text-align: left;
        }
        .is-site .fest__blurb { font-size: 1rem; color: var(--heritage-sub); line-height: 1.6; margin: 0 0 1rem; }
        .is-site .fest__read {
          display: inline-flex; align-items: center; gap: 0.45rem;
          font-family: var(--font-poppins); font-weight: 700; font-size: 0.9375rem;
          color: var(--accent-orange);
        }
        .fest__read svg { transition: transform var(--transition-fast); }
        .fest__read:hover svg { transform: translateX(0.25rem); }

        /* pair-change fade (skipped under reduced motion) */
        @media (prefers-reduced-motion: no-preference) {
          .fest__big, .fest__small, .fest__text, .fest__textb { animation: festIn 0.55s ease both; }
          @keyframes festIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        }

        @media (max-width: 768px) {
          .fest__grid {
            grid-template-columns: 1fr;
            grid-template-areas: "intro" "big" "text" "small" "smalltext";
          }
          .fest__textb { margin-left: 0; }
          .fest__small { margin-top: 0; width: 100%; }
          .fest__big { aspect-ratio: 4 / 3; }
          .fest__small { aspect-ratio: 16 / 11; }
        }
      `}</style>
    </section>
  );
}
