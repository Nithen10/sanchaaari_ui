import Image from "next/image";
import Link from "next/link";
import type { Package } from "@/data/packages";
import { formatDuration } from "@/lib/format";

export default function ItineraryCard({ pkg }: { pkg: Package }) {
  const hero = pkg.heroImages[0] ?? pkg.gallery[0];
  const tags = pkg.themes.slice(0, 2);
  const isTopRated =
    pkg.badges.includes("Most Popular") || pkg.rating >= 4.85;
  const hostType =
    pkg.kind === "group" ? "Samuha · Group" : "Samraksha · Private";
  const duration = formatDuration(pkg.durationNights, pkg.durationDays);

  return (
    <Link
      href={`/tours/${pkg.slug}`}
      className="itin-card"
      aria-label={`${pkg.title} — view itinerary`}
    >
      <div className="itin-card__media">
        {hero && (
          <Image
            src={hero}
            alt=""
            fill
            sizes="(max-width: 480px) 100vw, (max-width: 720px) 50vw, (max-width: 1100px) 33vw, 20vw"
            style={{ objectFit: "cover" }}
          />
        )}
        {tags.length > 0 && (
          <div className="itin-card__tags">
            {tags.map((t) => (
              <span key={t} className="itin-card__tag">
                {t}
              </span>
            ))}
          </div>
        )}
        <span
          className="itin-card__rating"
          aria-label={`Rated ${pkg.rating.toFixed(1)} out of 5`}
        >
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            aria-hidden="true"
            className="itin-card__star"
          >
            <path
              fill="currentColor"
              d="M12 2.5l2.92 6.41 7.08.7-5.34 4.78 1.56 6.91L12 17.77l-6.22 3.53 1.56-6.91L2 10.61l7.08-.7L12 2.5z"
            />
          </svg>
          {pkg.rating.toFixed(1)}
        </span>
      </div>

      <div className="itin-card__body">
        <div className="itin-card__head">
          <h3 className="itin-card__title">{pkg.title}</h3>
          {isTopRated && <span className="itin-card__top">Top rated</span>}
        </div>
        <p className="itin-card__meta">
          <span>{duration}</span>
          <span aria-hidden="true">•</span>
          <span>{hostType}</span>
        </p>
        <p className="itin-card__desc">{pkg.shortDescription}</p>
        <span className="itin-card__cta">
          View itinerary
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            aria-hidden="true"
            className="itin-card__cta-arrow"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14M13 6l6 6-6 6"
            />
          </svg>
        </span>
      </div>

      <style>{`
        .itin-card {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          box-shadow: var(--heritage-shadow);
          transition: transform var(--transition-medium),
            box-shadow var(--transition-medium),
            border-color var(--transition-medium);
          text-decoration: none;
        }
        .is-site .itin-card,
        .is-site .itin-card:hover,
        .is-site .itin-card:visited {
          color: var(--heritage-ink);
        }
        .itin-card:hover {
          transform: translateY(-8px) scale(1.018);
          box-shadow: var(--heritage-shadow-lg);
          border-color: var(--heritage-line-strong);
        }
        .itin-card:focus-visible {
          outline: 2px solid var(--heritage-rust);
          outline-offset: 3px;
        }

        .itin-card__media {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: var(--heritage-cream-2);
        }
        .itin-card__media img {
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .itin-card:hover .itin-card__media img {
          transform: scale(1.08);
        }

        .itin-card__tags {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.3125rem;
          z-index: 2;
          pointer-events: none;
        }
        .itin-card__tag {
          background: rgba(255, 247, 235, 0.85);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          color: var(--heritage-ink);
          padding: 0.25rem 0.5625rem;
          font-family: var(--font-poppins);
          font-size: 0.625rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border-radius: var(--radius-pill);
        }

        .itin-card__rating {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          background: rgba(255, 247, 235, 0.85);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          padding: 0.25rem 0.5625rem;
          border-radius: var(--radius-pill);
          font-family: var(--font-poppins);
          font-weight: 700;
          font-size: 0.75rem;
          color: var(--heritage-ink);
          z-index: 2;
          pointer-events: none;
        }
        .itin-card__star { color: var(--heritage-gold); }

        .itin-card__body {
          display: flex;
          flex-direction: column;
          gap: 0.5625rem;
          padding: 1rem 1.125rem 1.125rem;
          flex: 1;
        }
        .itin-card__head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 0.5rem;
        }
        .itin-card__title {
          font-family: var(--font-fraunces), serif;
          font-size: 1.0625rem;
          font-weight: 600;
          line-height: 1.25;
          color: var(--heritage-ink);
          margin: 0;
        }
        .itin-card__top {
          flex-shrink: 0;
          font-family: var(--font-poppins);
          font-size: 0.625rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--heritage-gold-dk);
          border: 1px solid var(--heritage-gold);
          padding: 0.1875rem 0.5rem;
          border-radius: var(--radius-pill);
          background: transparent;
        }
        .itin-card__meta {
          display: inline-flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.375rem;
          margin: 0;
          font-family: var(--font-poppins);
          font-size: 0.8125rem;
          color: var(--heritage-muted);
        }
        .itin-card__desc {
          margin: 0;
          font-family: var(--font-poppins);
          font-size: 0.875rem;
          color: var(--heritage-sub);
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .is-site .itin-card__cta {
          display: inline-flex;
          align-items: center;
          gap: 0.3125rem;
          margin-top: auto;
          padding-top: 0.375rem;
          font-family: var(--font-poppins);
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--heritage-rust);
          letter-spacing: 0.01em;
        }
        .itin-card__cta-arrow {
          transition: transform var(--transition-fast);
        }
        .itin-card:hover .itin-card__cta-arrow {
          transform: translateX(0.25rem);
        }
      `}</style>
    </Link>
  );
}
