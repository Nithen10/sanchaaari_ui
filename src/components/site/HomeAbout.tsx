"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "./GSAPReveal";

export default function HomeAbout() {
  return (
    <section className="site-section home-about">
      <div className="site-container home-about__grid">
        <Reveal from="left" className="home-about__media">
          <Link
            href="/about"
            className="home-about__frame"
            aria-label="About Sanchaari"
          >
            <Image
              src="/images/kerala.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 32vw"
              style={{ objectFit: "cover" }}
            />
          </Link>
        </Reveal>

        <Reveal from="right" className="home-about__text">
          <span className="eyebrow home-about__eyebrow">The Sanchaari way</span>
          <h2 className="home-about__title">
            More than a tour.{" "}
            <span className="home-about__title-accent">
              Journeys made for unhurried hearts.
            </span>
          </h2>
          <p className="home-about__lead">
            We plan South India&rsquo;s temple trails the slow way, with darshan slots
            arranged ahead, comfortable stays, gentle days, and a companion
            whenever you&rsquo;d like one. You travel; we hold every detail.
          </p>
          <ul className="home-about__points">
            <li>Senior-paced days</li>
            <li>Darshan pre-arranged</li>
            <li>Companion on call</li>
          </ul>
          <Link href="/about" className="home-about__cta">
            Read our story
            <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
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
        </Reveal>
      </div>

      <style>{`
        .home-about {
          background: var(--heritage-cream);
        }
        .home-about__grid {
          display: grid;
          grid-template-columns: minmax(16rem, 0.85fr) 1.15fr;
          gap: clamp(2rem, 5vw, 5rem);
          align-items: center;
        }
        .home-about__media {
          position: relative;
        }
        .home-about__frame {
          position: relative;
          display: block;
          width: 100%;
          aspect-ratio: 4 / 5;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--heritage-shadow-lg);
          background: var(--heritage-cream-2);
        }
        .home-about__frame img {
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .home-about__frame:hover img {
          transform: scale(1.06);
        }
        .is-site .home-about__eyebrow {
          color: var(--accent-orange);
        }
        .is-site .home-about__title {
          font-family: var(--font-fraunces), serif;
          font-size: clamp(2rem, 3.4vw, 3.25rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #111111;
          margin: 0.5rem 0 1rem;
        }
        .home-about__title-accent {
          color: var(--accent-orange);
        }
        .is-site .home-about__lead {
          max-width: 40rem;
          font-size: clamp(1.0625rem, 1.15vw, 1.1875rem);
          color: var(--heritage-sub);
          margin: 0;
        }
        .home-about__points {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0 0;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem 1.5rem;
        }
        .home-about__points li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-poppins);
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--heritage-ink);
        }
        .home-about__points li::before {
          content: "";
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 50%;
          background: var(--accent-orange);
          flex-shrink: 0;
        }
        .is-site .home-about__cta {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 1.75rem;
          font-family: var(--font-poppins);
          font-weight: 700;
          font-size: 0.9375rem;
          color: var(--accent-orange);
        }
        .home-about__cta svg {
          transition: transform var(--transition-fast);
        }
        .home-about__cta:hover svg {
          transform: translateX(0.25rem);
        }

        @media (max-width: 768px) {
          .home-about__grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .home-about__frame {
            aspect-ratio: 16 / 11;
          }
        }
      `}</style>
    </section>
  );
}
