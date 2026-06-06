"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Package } from "@/data/packages";
import { formatINR, formatDuration } from "@/lib/format";

function dedupe(arr: string[]) {
  return Array.from(new Set(arr));
}

export default function PackageCard({ pkg }: { pkg: Package }) {
  const images = dedupe([...pkg.heroImages, ...pkg.gallery]);
  const hasCarousel = images.length > 1;
  const [index, setIndex] = useState(0);

  const safeIndex = index % Math.max(images.length, 1);
  const tags = pkg.themes.slice(0, 2);
  const isTopRated =
    pkg.badges.includes("Most Popular") || pkg.rating >= 4.85;
  const hostType =
    pkg.kind === "group" ? "Samuha · Group" : "Samraksha · Private";
  const duration = formatDuration(pkg.durationNights, pkg.durationDays);

  const prev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () =>
    setIndex((i) => (i + 1) % images.length);

  return (
    <article className="pkg-card">
      <div className="pkg-card__media">
        <Link
          href={`/tours/${pkg.slug}`}
          className="pkg-card__media-link"
          aria-label={pkg.title}
        >
          <div
            className="pkg-card__strip"
            style={{
              gridTemplateColumns: `repeat(${images.length}, 100%)`,
              transform: `translateX(-${safeIndex * 100}%)`,
            }}
          >
            {images.map((src, i) => (
              <div key={`${src}-${i}`} className="pkg-card__slide">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22rem"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </Link>

        {tags.length > 0 && (
          <div className="pkg-card__tags">
            {tags.map((t) => (
              <span key={t} className="pkg-card__tag">
                {t}
              </span>
            ))}
          </div>
        )}

        <span className="pkg-card__rating" aria-label={`Rated ${pkg.rating.toFixed(1)} out of 5`}>
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            aria-hidden="true"
            className="pkg-card__star"
          >
            <path
              fill="currentColor"
              d="M12 2.5l2.92 6.41 7.08.7-5.34 4.78 1.56 6.91L12 17.77l-6.22 3.53 1.56-6.91L2 10.61l7.08-.7L12 2.5z"
            />
          </svg>
          {pkg.rating.toFixed(1)}
        </span>

        {hasCarousel && (
          <>
            <button
              type="button"
              className="pkg-card__nav pkg-card__nav--prev"
              onClick={prev}
              aria-label="Previous image"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 6 9 12l6 6"
                />
              </svg>
            </button>
            <button
              type="button"
              className="pkg-card__nav pkg-card__nav--next"
              onClick={next}
              aria-label="Next image"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 6 6 6-6 6"
                />
              </svg>
            </button>
            <div className="pkg-card__dots" role="tablist" aria-label="Image">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`pkg-card__dot${i === safeIndex ? " is-active" : ""}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to image ${i + 1}`}
                  aria-selected={i === safeIndex}
                  role="tab"
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="pkg-card__body">
        <div className="pkg-card__head">
          <h3 className="pkg-card__title">
            <Link href={`/tours/${pkg.slug}`}>{pkg.title}</Link>
          </h3>
          {isTopRated && <span className="pkg-card__top">Top rated</span>}
        </div>

        <div className="pkg-card__meta">
          <span>{duration}</span>
          <span aria-hidden="true">•</span>
          <span>{hostType}</span>
        </div>

        <p className="pkg-card__desc">{pkg.shortDescription}</p>

        <div className="pkg-card__footer">
          <div className="pkg-card__price">
            <span className="pkg-card__price-label">Starting from</span>
            <span className="pkg-card__price-amount">
              {formatINR(pkg.priceFrom)}
            </span>
            <span className="pkg-card__price-sub">/ person</span>
          </div>
          <Link
            href={`/tours/${pkg.slug}?book=1`}
            prefetch
            className="pkg-card__cta"
          >
            Book Now
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              aria-hidden="true"
              className="pkg-card__cta-arrow"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </Link>
        </div>
      </div>

      <style>{`
        .pkg-card {
          position: relative;
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform var(--transition-medium),
            box-shadow var(--transition-medium),
            border-color var(--transition-medium);
        }
        .pkg-card:hover {
          transform: translateY(-4px) scale(1.015);
          box-shadow: var(--heritage-shadow-lg);
          border-color: var(--heritage-line-strong);
        }

        .pkg-card__media {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: var(--heritage-cream-2);
        }
        .pkg-card__media-link {
          position: absolute;
          inset: 0;
          display: block;
          color: inherit;
          z-index: 0;
        }
        .pkg-card__strip {
          position: absolute;
          inset: 0;
          display: grid;
          transition: transform 350ms cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
        .pkg-card__slide {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .pkg-card__tags {
          position: absolute;
          top: 0.875rem;
          left: 0.875rem;
          display: flex;
          gap: 0.375rem;
          flex-wrap: wrap;
          z-index: 2;
          pointer-events: none;
        }
        .pkg-card__tag {
          background: rgba(255, 247, 235, 0.82);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          color: var(--heritage-ink);
          padding: 0.3125rem 0.6875rem;
          font-family: var(--font-poppins);
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: var(--radius-pill);
        }

        .pkg-card__rating {
          position: absolute;
          top: 0.875rem;
          right: 0.875rem;
          display: inline-flex;
          align-items: center;
          gap: 0.3125rem;
          background: rgba(255, 247, 235, 0.82);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          padding: 0.3125rem 0.625rem;
          border-radius: var(--radius-pill);
          font-family: var(--font-poppins);
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--heritage-ink);
          z-index: 2;
          pointer-events: none;
        }
        .pkg-card__star {
          color: var(--heritage-gold);
        }

        .pkg-card__nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 2rem;
          height: 2rem;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.45);
          color: #fff;
          border: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transition: opacity var(--transition-fast),
            background var(--transition-fast),
            transform var(--transition-fast);
          z-index: 3;
        }
        .pkg-card__media:hover .pkg-card__nav,
        .pkg-card__nav:focus-visible {
          opacity: 1;
        }
        .pkg-card__nav:hover {
          background: rgba(15, 23, 42, 0.7);
        }
        .pkg-card__nav--prev { left: 0.625rem; }
        .pkg-card__nav--next { right: 0.625rem; }

        .pkg-card__dots {
          position: absolute;
          bottom: 0.875rem;
          left: 50%;
          transform: translateX(-50%);
          display: inline-flex;
          gap: 0.375rem;
          z-index: 2;
        }
        .pkg-card__dot {
          width: 0.4375rem;
          height: 0.4375rem;
          padding: 0;
          border: 0;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.55);
          cursor: pointer;
          transition: width var(--transition-fast),
            background var(--transition-fast);
        }
        .pkg-card__dot:hover { background: rgba(255, 255, 255, 0.8); }
        .pkg-card__dot.is-active {
          width: 1.125rem;
          background: #fff;
        }

        .pkg-card__body {
          padding: 1.25rem 1.375rem 1.375rem;
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
          flex: 1;
        }
        .pkg-card__head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.75rem;
        }
        .pkg-card__title {
          font-family: var(--font-fraunces), serif;
          font-size: 1.25rem;
          line-height: 1.25;
          margin: 0;
          color: var(--heritage-ink);
          font-weight: 600;
        }
        .pkg-card__title a {
          color: inherit;
          text-decoration: none;
        }
        .pkg-card__title a:hover { color: var(--accent-orange); }
        .pkg-card__top {
          flex-shrink: 0;
          font-family: var(--font-poppins);
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--heritage-gold-dk);
          border: 1px solid var(--heritage-gold);
          padding: 0.25rem 0.625rem;
          border-radius: var(--radius-pill);
          background: transparent;
        }

        .pkg-card__meta {
          display: inline-flex;
          flex-wrap: wrap;
          gap: 0.4375rem;
          align-items: center;
          font-family: var(--font-poppins);
          font-size: 0.875rem;
          color: var(--heritage-muted);
        }

        .pkg-card__desc {
          font-family: var(--font-poppins);
          color: var(--heritage-sub);
          font-size: 0.9375rem;
          line-height: 1.55;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .pkg-card__footer {
          margin-top: auto;
          padding-top: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .pkg-card__price {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }
        .pkg-card__price-label {
          font-family: var(--font-poppins);
          font-size: 0.6875rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--heritage-muted);
          margin-bottom: 0.1875rem;
        }
        .pkg-card__price-amount {
          font-family: var(--font-fraunces), serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--heritage-ink);
        }
        .pkg-card__price-sub {
          font-family: var(--font-poppins);
          font-size: 0.75rem;
          color: var(--heritage-muted);
          margin-top: 0.125rem;
        }

        .is-site .pkg-card__cta {
          display: inline-flex;
          align-items: center;
          gap: 0.4375rem;
          background: var(--heritage-rust);
          color: var(--heritage-ivory);
          border-radius: var(--radius-pill);
          padding: 0.625rem 1.125rem;
          font-family: var(--font-poppins);
          font-weight: 600;
          font-size: 0.9375rem;
          text-decoration: none;
          white-space: nowrap;
          transition: background var(--transition-fast),
            transform var(--transition-fast),
            box-shadow var(--transition-fast),
            color var(--transition-fast);
        }
        .is-site .pkg-card__cta:hover {
          background: var(--heritage-rust-dk);
          color: var(--heritage-ivory);
          transform: translateY(-1px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.22);
        }
        .pkg-card__cta-arrow {
          transition: transform var(--transition-fast);
        }
        .is-site .pkg-card__cta:hover .pkg-card__cta-arrow {
          transform: translateX(0.25rem);
        }
      `}</style>
    </article>
  );
}
