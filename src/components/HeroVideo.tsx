"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import Navbar from "./Navbar";

const POSTER = "/images/hero-poster.jpg";

export default function HeroVideo() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const root = rootRef.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-video__eyebrow", { y: -12, opacity: 0, duration: 0.6 }, 0.1)
        .from(
          ".hero-video__rule",
          { scaleX: 0, opacity: 0, duration: 0.7, ease: "power2.out" },
          "<0.05",
        )
        .from(
          ".hero-video__ch",
          {
            yPercent: 120,
            opacity: 0,
            rotateZ: 5,
            duration: 0.8,
            ease: "power4.out",
            stagger: 0.05,
          },
          "-=0.25",
        )
        .from(
          ".hero-video__tagline",
          { y: 24, opacity: 0, duration: 0.8 },
          "-=0.45",
        )
        .from(
          ".hero-video__actions > *",
          { y: 22, opacity: 0, scale: 0.96, duration: 0.6, stagger: 0.12 },
          "-=0.5",
        );
    }, root);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <div className="hero-wrapper hero-video" id="hero-wrapper" ref={rootRef}>
      <div className="hero-video__media" aria-hidden="true">
        {reduced ? (
          <Image
            src={POSTER}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <video
            className="hero-video__el"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={POSTER}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        )}
        <div className="hero-video__shade" />
      </div>

      <Navbar />

      <div className="hero-video__center">
        <span className="hero-video__eyebrow">
          <i className="hero-video__rule" aria-hidden="true" />
          South India Heritage Tours
          <i className="hero-video__rule" aria-hidden="true" />
        </span>
        <h1 className="hero-video__title" aria-label="Sanchaari">
          {"Sanchaari".split("").map((c, i) => (
            <span key={i} className="hero-video__ch" aria-hidden="true">
              {c}
            </span>
          ))}
        </h1>
        <p className="hero-video__tagline">
          Temple trails and heritage journeys across the South,
          <br />
          arranged with care, paced for unhurried hearts.
        </p>
        <div className="hero-video__actions">
          <Link href="/tours" className="hero-video__btn hero-video__btn--solid">
            Explore Tours
          </Link>
          <Link
            href="/tours/custom"
            className="hero-video__btn hero-video__btn--outline"
          >
            Plan My Journey
          </Link>
        </div>
      </div>

      <a className="scroll-hint" href="#home-below" aria-label="See more below">
        <span>Scroll for more</span>
        <svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
          <path d="M12 16l-6-6 1.41-1.41L12 13.17l4.59-4.58L18 10z" />
        </svg>
      </a>

      <style>{`
        .hero-video {
          display: block;
        }
        .hero-video__media {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero-video__el {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .hero-video__shade {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.55) 100%),
            radial-gradient(120% 80% at 50% 45%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.45) 100%);
        }

        .hero-video__center {
          position: absolute;
          inset: 0;
          z-index: 20;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 1.5rem;
          pointer-events: none;
        }
        .hero-video__center > * { pointer-events: auto; }

        .hero-video__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: clamp(0.6rem, 1.2vw, 1rem);
          font-family: var(--font-poppins), sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.34em;
          font-size: clamp(0.7rem, 1vw, 0.85rem);
          font-weight: 600;
          color: #ffffff;
          margin-bottom: clamp(0.9rem, 1.6vw, 1.5rem);
          text-shadow: 0 1px 6px rgba(0,0,0,0.80), 0 2px 16px rgba(0,0,0,0.55);
        }
        .hero-video__rule {
          display: inline-block;
          width: clamp(1.5rem, 4vw, 3.25rem);
          height: 1px;
          transform-origin: center;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.75));
        }
        .hero-video__rule:last-child {
          background: linear-gradient(90deg, rgba(255,255,255,0.75), transparent);
        }
        .hero-video__title {
          font-family: var(--font-fraunces), serif;
          font-weight: 700;
          color: #fff;
          font-size: clamp(3.75rem, 12vw, 9.5rem);
          line-height: 0.95;
          letter-spacing: -0.01em;
          margin: 0;
          filter: drop-shadow(0 0.5rem 2rem rgba(0,0,0,0.5));
        }
        .hero-video__ch {
          display: inline-block;
          color: #fff;
          will-change: transform;
        }
        @supports ((-webkit-background-clip: text) or (background-clip: text)) {
          .hero-video__ch {
            background: linear-gradient(180deg, #ffffff 0%, #ffe9cf 56%, var(--accent-orange) 118%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
          }
        }
        .hero-video__tagline {
          font-family: var(--font-poppins), sans-serif;
          color: rgba(255,255,255,0.92);
          font-size: clamp(1.0625rem, 1.45vw, 1.3125rem);
          line-height: 1.65;
          margin: clamp(1.1rem, 2vw, 1.6rem) 0 0;
          max-width: 44rem;
          text-shadow: 0 0.25rem 1rem rgba(0,0,0,0.5);
        }
        .hero-video__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.875rem;
          justify-content: center;
          margin-top: clamp(1.75rem, 3vw, 2.5rem);
        }
        .hero-video__btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: var(--tap-target);
          padding: 0.85rem 1.75rem;
          border-radius: var(--radius-pill);
          font-family: var(--font-poppins), sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.01em;
          text-decoration: none;
          transition: transform var(--transition-fast), background var(--transition-fast),
            color var(--transition-fast), box-shadow var(--transition-fast);
        }
        .hero-video__btn--solid {
          background: linear-gradient(135deg, #a8895f 0%, var(--accent-orange) 100%);
          color: #ffffff;
          box-shadow: 0 0.6rem 1.6rem rgba(134,109,75,0.5);
        }
        .hero-video__btn--solid:hover {
          transform: translateY(-3px);
          box-shadow: 0 0.95rem 2.3rem rgba(134,109,75,0.7);
        }
        .hero-video__btn--outline {
          background: rgba(255,255,255,0.08);
          color: #fff;
          border: 1.5px solid rgba(255,255,255,0.7);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        .hero-video__btn--outline:hover {
          background: rgba(255,255,255,0.95);
          color: #2d2d2d;
          border-color: #fff;
          transform: translateY(-3px);
        }

        @media (max-width: 640px) {
          .hero-video__tagline br { display: none; }
          .hero-video__actions { width: 100%; max-width: 22rem; }
          .hero-video__btn { flex: 1; }
        }
      `}</style>
    </div>
  );
}
