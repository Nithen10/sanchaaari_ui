"use client";

import { useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PACKAGES, type Package } from "@/data/packages";
import ItineraryCard from "./ItineraryCard";

gsap.registerPlugin(ScrollTrigger);

const score = (p: Package) =>
  p.badges.includes("Most Popular")
    ? 0
    : p.badges.includes("Best for Seniors")
      ? 1
      : p.badges.includes("Premium")
        ? 2
        : 3;

export default function HomeItineraries() {
  const gridRef = useRef<HTMLDivElement>(null);

  const featured = useMemo(
    () => [...PACKAGES].sort((a, b) => score(a) - score(b)).slice(0, 5),
    [],
  );

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const grid = gridRef.current;
    if (!grid) return;
    const ctx = gsap.context(() => {
      gsap.from(grid.children, {
        y: 60,
        opacity: 0,
        scale: 0.96,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: grid,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, grid);
    return () => ctx.revert();
  }, []);

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

        <div ref={gridRef} className="home-itin__grid">
          {featured.map((p) => (
            <ItineraryCard key={p.slug} pkg={p} />
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
          max-width: none;
          padding-inline: clamp(1rem, 3vw, 3rem);
        }
        .is-site .home-itin__head {
          text-align: center;
          margin-bottom: 4rem;
        }
        .is-site .home-itin__eyebrow {
          justify-content: center;
          font-size: 0.8125rem;
        }
        .is-site .home-itin__title {
          font-family: var(--font-fraunces), serif;
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 700;
          color: var(--heritage-ink);
          letter-spacing: -0.025em;
          line-height: 1;
          margin: 0.5rem 0 0.75rem;
        }
        .is-site .home-itin__tagline {
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
        .is-site .home-itin__tagline-rule {
          display: inline-block;
          width: clamp(2rem, 4vw, 4rem);
          height: 1px;
          background: currentColor;
          opacity: 0.55;
        }
        .is-site .home-itin__lead {
          margin-inline: auto;
          max-width: 44rem;
          font-size: clamp(1.0625rem, 1.15vw, 1.1875rem);
          color: var(--heritage-sub);
        }
        .is-site .home-itin__grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0.625rem;
        }
        .is-site .home-itin__more {
          margin-top: 2.75rem;
          text-align: center;
        }
        @media (max-width: 1100px) {
          .is-site .home-itin__grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 720px) {
          .is-site .home-itin__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .is-site .home-itin__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
