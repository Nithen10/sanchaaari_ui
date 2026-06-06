import Image from "next/image";
import Link from "next/link";
import type { Package } from "@/data/packages";
import { getStateBySlug } from "@/data/states";
import { formatINR, formatDuration } from "@/lib/format";

// Marquee destination (the tour's headline place) per package, so the route reads as a real
// journey "gateway city → destination" instead of "city → its own state". Each value is
// verified to differ from that tour's departure gateway. Unmapped slugs fall back to the
// state name.
const DESTINATION_BY_SLUG: Record<string, string> = {
  "tamil-nadu-temple-trail-7d": "Madurai",
  "kerala-spiritual-retreat-6d": "Thiruvananthapuram",
  "karnataka-coast-shiva-5d": "Murudeshwar",
  "tirupati-srisailam-4d": "Tirupati",
  "telangana-heritage-5d": "Warangal",
  "south-char-dham-12d": "South India",
  "private-meenakshi-rameshwaram-5d": "Madurai",
  "private-kerala-ayurveda-7d": "Kovalam",
  "private-karnataka-coast-7d": "Hampi",
  "private-tirupati-balaji-3d": "Tirupati",
  "private-telangana-3d": "Warangal",
  "south-india-grand-15d": "South India",
  "weekend-bengaluru-mysore-2d": "Mysore",
  "weekend-chennai-mahabalipuram-2d": "Mahabalipuram",
  "family-kerala-7d": "Alleppey",
  "women-only-tamil-nadu-6d": "Madurai",
  "ayurveda-kerala-10d": "Kovalam",
  "hills-munnar-thekkady-5d": "Munnar",
  "hills-coorg-ooty-6d": "Ooty",
  "beaches-gokarna-varkala-5d": "Gokarna",
  "pancha-bhoota-yatra-9d": "Chidambaram",
  "navagraha-yatra-tn-5d": "Kumbakonam",
  "senior-comfort-tirupati-3d": "Tirupati",
  "hampi-badami-heritage-6d": "Hampi",
  "pondicherry-auroville-4d": "Pondicherry",
};

function derive(pkg: Package) {
  const origin = pkg.departureCities[0] ?? "Chennai";
  const stateName =
    pkg.states.length === 1
      ? getStateBySlug(pkg.states[0])?.name ?? "South India"
      : "South India";
  const marquee = DESTINATION_BY_SLUG[pkg.slug];
  // Destination = the tour's marquee city; fall back to the state name. Never equal to origin.
  let destination = marquee ?? stateName;
  if (destination === origin) destination = stateName;
  // Sub-label under the destination: the state (or "South India" for multi-state tours).
  const destinationRegion =
    marquee && marquee !== stateName && pkg.states.length === 1 ? stateName : "South India";
  const bestSeason = getStateBySlug(pkg.states[0])?.bestSeason;
  const duration = formatDuration(pkg.durationNights, pkg.durationDays);
  const fareLabel = pkg.kind === "group" ? "Group Fare" : "Private Fare";
  const price = formatINR(pkg.priceFrom);
  const perNight = formatINR(Math.round(pkg.priceFrom / pkg.durationNights));
  const hero = pkg.heroImages[0] ?? pkg.gallery[0];
  return {
    origin,
    destination,
    destinationRegion,
    bestSeason,
    duration,
    fareLabel,
    price,
    perNight,
    hero,
  };
}

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12h14M13 6l6 6-6 6"
    />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"
    />
  </svg>
);

const TrendIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" className="jcard__btn-ico">
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 17l6-6 4 4 8-8M15 7h6v6"
    />
  </svg>
);

const MapIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14"
    />
  </svg>
);

const FareBadge = ({ label }: { label: string }) => (
  <span className="jcard__fare">
    <span className="jcard__fare-mark" aria-hidden="true">
      %
    </span>
    {label}
    <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 6l6 6-6 6"
      />
    </svg>
  </span>
);

function Route({
  origin,
  destination,
  destinationRegion,
}: {
  origin: string;
  destination: string;
  destinationRegion: string;
}) {
  return (
    <div className="jcard__route">
      <div className="jcard__place jcard__place--from">
        <span className="jcard__city">{origin}</span>
        <span className="jcard__region">Departure</span>
      </div>
      <span className="jcard__arrow" aria-hidden="true">
        <ArrowIcon />
      </span>
      <div className="jcard__place jcard__place--to">
        <span className="jcard__city">{destination}</span>
        <span className="jcard__region">{destinationRegion}</span>
      </div>
    </div>
  );
}

export default function JourneyCard({
  pkg,
  variant = "grid",
  category,
  showMapButton = false,
  mapHref,
}: {
  pkg: Package;
  variant?: "grid" | "list";
  /** Optional category band shown above the photo (tours page). */
  category?: string;
  /** Optional "Map" pill on the photo, linking to mapHref (tours page). */
  showMapButton?: boolean;
  mapHref?: string;
}) {
  const d = derive(pkg);
  const href = `/tours/${pkg.slug}`;
  const mapPill =
    showMapButton && mapHref ? (
      <Link href={mapHref} className="jcard__map" aria-label="View on map">
        <MapIcon /> Map
      </Link>
    ) : null;
  const seasonLine = d.bestSeason
    ? `Departs year-round · Best: ${d.bestSeason}`
    : "Departs year-round";

  if (variant === "list") {
    return (
      <article className="jcard jcard--list">
        <div className="jcard__media">
          {d.hero && (
            <Image
              src={d.hero}
              alt={pkg.title}
              fill
              sizes="(max-width: 860px) 100vw, 40vw"
              style={{ objectFit: "cover" }}
            />
          )}
          {mapPill}
        </div>
        <div className="jcard__body">
          <h3 className="jcard__title">{pkg.title}</h3>
          <hr className="jcard__divider" />
          <Route
            origin={d.origin}
            destination={d.destination}
            destinationRegion={d.destinationRegion}
          />
          <p className="jcard__season">{seasonLine}</p>
          <hr className="jcard__divider" />
          <div className="jcard__listfoot">
            <FareBadge label={d.fareLabel} />
            <div className="jcard__listprice">
              <span>
                From <strong>{d.price}</strong> per guest
              </span>
              <span className="jcard__nights">
                <MoonIcon /> {pkg.durationNights} Nights
              </span>
            </div>
          </div>
          <hr className="jcard__divider" />
          <Link href={href} className="jcard__btn jcard__btn--wide">
            Details
            <TrendIcon />
          </Link>
        </div>
        <style>{CARD_CSS}</style>
      </article>
    );
  }

  return (
    <article className="jcard jcard--grid">
      {category && <div className="jcard__cat">{category}</div>}
      <div className="jcard__media">
        {d.hero && (
          <Image
            src={d.hero}
            alt={pkg.title}
            fill
            sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        )}
        {mapPill}
      </div>
      <div className="jcard__body">
        <Route
          origin={d.origin}
          destination={d.destination}
          destinationRegion={d.destinationRegion}
        />
        <p className="jcard__season">{seasonLine}</p>
        <hr className="jcard__divider" />
        <div className="jcard__meta">
          <MoonIcon />
          <span>{d.duration}</span>
        </div>
        <hr className="jcard__divider" />
        <FareBadge label={d.fareLabel} />
        <div className="jcard__pricerow">
          <div className="jcard__price">
            <span className="jcard__price-label">Per guest, from:</span>
            <span className="jcard__price-amount">{d.price}</span>
            <span className="jcard__price-sub">{d.perNight} per night</span>
          </div>
          <Link href={href} className="jcard__btn">
            Details
            <TrendIcon />
          </Link>
        </div>
      </div>
      <style>{CARD_CSS}</style>
    </article>
  );
}

const CARD_CSS = `
  .jcard {
    background: var(--heritage-ivory);
    border: 1px solid var(--heritage-line);
    border-radius: var(--radius-md);
    overflow: hidden;
    box-shadow: var(--heritage-shadow);
    transition: box-shadow var(--transition-medium), transform var(--transition-medium);
  }
  .jcard:hover { box-shadow: var(--heritage-shadow-lg); transform: translateY(-3px); }

  /* optional category band above the photo (tours page) */
  .jcard__cat {
    font-family: var(--font-poppins);
    font-size: 0.6875rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--heritage-muted);
    text-align: center;
    padding: 0.6rem 1rem;
    background: var(--heritage-cream-2);
    border-bottom: 1px solid var(--heritage-line);
  }
  /* optional "Map" pill on the photo (tours page) */
  .jcard__map {
    position: absolute;
    right: 0.75rem;
    bottom: 0.75rem;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.38rem 0.7rem;
    border-radius: var(--radius-sm);
    background: rgba(255, 255, 255, 0.94);
    color: var(--heritage-ink);
    font-family: var(--font-poppins);
    font-size: 0.75rem;
    font-weight: 600;
    text-decoration: none;
    box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.15);
    transition: background var(--transition-fast), transform var(--transition-fast);
  }
  .jcard__map:hover { background: #fff; transform: translateY(-1px); }
  .is-site .jcard__map,
  .is-site .jcard__map:visited { color: var(--heritage-ink); }

  .jcard__media { position: relative; background: var(--heritage-cream-2); }
  .jcard__media img { transition: transform 0.7s cubic-bezier(0.22,1,0.36,1); }
  .jcard:hover .jcard__media img { transform: scale(1.05); }
  .jcard__body { display: flex; flex-direction: column; }

  .jcard__route { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 0.5rem; }
  .jcard__place { display: flex; flex-direction: column; line-height: 1.2; }
  .jcard__place--to { text-align: right; }
  .jcard__city { font-family: var(--font-poppins); font-weight: 700; font-size: 1rem; color: var(--heritage-ink); }
  .jcard__region { font-family: var(--font-poppins); font-size: 0.8125rem; color: var(--heritage-muted); }
  .jcard__arrow { color: var(--heritage-muted); display: inline-flex; }

  .jcard__season { margin: 0.625rem 0 0; font-family: var(--font-poppins); font-size: 0.8125rem; color: var(--heritage-muted); }
  .jcard__divider { border: 0; border-top: 1px solid var(--heritage-line); margin: 0.875rem 0; }
  .jcard__meta { display: inline-flex; align-items: center; gap: 0.4rem; font-family: var(--font-poppins); font-size: 0.875rem; color: var(--heritage-sub); }
  .jcard__meta svg { color: var(--heritage-muted); }

  .jcard__fare {
    align-self: flex-start;
    display: inline-flex; align-items: center; gap: 0.4rem;
    margin-top: 0.875rem;
    padding: 0.3rem 0.7rem 0.3rem 0.35rem;
    border-radius: var(--radius-pill);
    background: rgba(134,109,75,0.14);
    color: var(--heritage-gold-dk);
    font-family: var(--font-poppins); font-size: 0.6875rem; font-weight: 700;
    letter-spacing: 0.08em; text-transform: uppercase;
  }
  .jcard__fare-mark {
    display: inline-flex; align-items: center; justify-content: center;
    width: 1.1rem; height: 1.1rem; border-radius: 50%;
    background: var(--heritage-gold); color: #fff; font-size: 0.625rem;
  }

  .jcard__pricerow { display: flex; align-items: flex-end; justify-content: space-between; gap: 0.75rem; margin-top: 0.875rem; }
  .jcard__price { display: flex; flex-direction: column; }
  .jcard__price-label { font-family: var(--font-poppins); font-size: 0.75rem; font-weight: 600; color: var(--heritage-sub); }
  .jcard__price-amount { font-family: var(--font-poppins); font-weight: 800; font-size: 1.5rem; color: #111111; line-height: 1.1; }
  .jcard__price-sub { font-family: var(--font-poppins); font-size: 0.75rem; color: var(--heritage-muted); }

  .jcard__btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 0.45rem;
    min-height: var(--tap-target);
    padding: 0.7rem 1.4rem;
    border-radius: var(--radius-pill);
    background: transparent;
    border: 1px solid var(--heritage-line-strong);
    color: var(--heritage-ink);
    font-family: var(--font-poppins); font-weight: 700; font-size: 0.875rem;
    text-decoration: none; white-space: nowrap;
    transition: background var(--transition-fast), border-color var(--transition-fast), transform var(--transition-fast);
  }
  .jcard__btn:hover {
    background: rgba(134, 109, 75, 0.10);
    border-color: var(--heritage-gold);
    transform: translateY(-1px);
  }
  .jcard__btn-ico { color: var(--heritage-gold-dk); flex: 0 0 auto; }
  .is-site .jcard__btn,
  .is-site .jcard__btn:hover,
  .is-site .jcard__btn:visited { color: var(--heritage-ink); }

  /* ---- GRID variant ---- */
  .jcard--grid .jcard__media { aspect-ratio: 3 / 2; }
  .jcard--grid .jcard__body { padding: 1rem 1.125rem 1.125rem; }
  .jcard--grid .jcard__season { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

  /* ---- LIST variant ---- */
  .jcard--list { display: grid; grid-template-columns: minmax(16rem, 40%) 1fr; }
  .jcard--list .jcard__media { aspect-ratio: auto; min-height: 100%; }
  .jcard--list .jcard__body { padding: 2.25rem 1.75rem; gap: 0; position: relative; }
  .jcard--list .jcard__title { font-family: var(--font-fraunces), serif; font-weight: 600; font-size: clamp(1.25rem, 2vw, 1.6rem); color: var(--heritage-ink); margin: 0; }
  .jcard--list .jcard__season { margin-top: 0.4rem; }
  .jcard__listfoot { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
  .jcard__listprice { font-family: var(--font-poppins); font-size: 0.9375rem; color: var(--heritage-sub); display: flex; align-items: center; gap: 1.25rem; }
  .jcard__listprice strong { color: #111111; font-weight: 800; font-size: 1.0625rem; }
  .jcard__nights { display: inline-flex; align-items: center; gap: 0.35rem; color: var(--heritage-muted); }
  .jcard__nights svg { color: var(--heritage-muted); }
  .jcard__btn--wide { align-self: flex-end; margin-top: 1.25rem; padding-inline: 2.25rem; }

  @media (max-width: 860px) {
    .jcard--list { grid-template-columns: 1fr; }
    .jcard--list .jcard__media { aspect-ratio: 16 / 10; }
    .jcard__btn--wide { align-self: stretch; }
  }
`;
