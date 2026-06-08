import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/GSAPReveal";
import BreadcrumbTrail from "@/components/site/BreadcrumbTrail";
import Itinerary from "@/components/site/Itinerary";
import InquiryForm from "@/components/site/InquiryForm";
import Testimonials from "@/components/site/Testimonials";
import FAQ from "@/components/site/FAQ";
import BookButton from "@/components/site/BookButton";
import Lightbox from "@/components/site/Lightbox";
import { PACKAGES, getPackageBySlug } from "@/data/packages";
import { TESTIMONIALS } from "@/data/testimonials";
import { FAQS } from "@/data/faqs";
import { STATES } from "@/data/states";
import { TEMPLES } from "@/data/temples";
import { formatINR, formatDuration } from "@/lib/format";
import { buildWhatsAppUrl } from "@/lib/contact";
import { packingListFor, representativeDay } from "@/lib/packingList";
import { tripSchema, ldJsonScript } from "@/lib/schema";

export function generateStaticParams() {
  return PACKAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return { title: "Tour not found" };
  return {
    title: pkg.title,
    description: pkg.shortDescription,
    openGraph: {
      title: pkg.title,
      description: pkg.shortDescription,
      images: pkg.heroImages.length > 0 ? [pkg.heroImages[0]] : undefined,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pkg.title,
      description: pkg.shortDescription,
      images: pkg.heroImages.length > 0 ? [pkg.heroImages[0]] : undefined,
    },
  };
}

export default async function PackageDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ book?: string }>;
}) {
  const { slug } = await params;
  const { book } = await searchParams;
  const autoOpenBooking = book === "1";
  const pkg = getPackageBySlug(slug);
  if (!pkg) return notFound();

  const stateNames = pkg.states
    .map((s) => STATES.find((x) => x.slug === s)?.name)
    .filter(Boolean)
    .join(" · ");
  const reviewsForPackage = TESTIMONIALS.filter(
    (t) => t.packageSlug === pkg.slug
  );
  const reviews =
    reviewsForPackage.length > 0
      ? reviewsForPackage
      : TESTIMONIALS.slice(0, 3);
  const packageTemples = pkg.templeSlugs
    .map((s) => TEMPLES.find((t) => t.slug === s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));
  const quoteMessage = `Hello Sanchaari, please share a quote and availability for "${pkg.title}" (starting ${formatINR(
    pkg.priceFrom
  )}).`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ldJsonScript(tripSchema(pkg)) }}
      />
      <section className="pkg-hero">
        <div className="pkg-hero__media">
          {pkg.heroImages[0] && (
            <Image
              src={pkg.heroImages[0]}
              alt=""
              fill
              sizes="100vw"
              className="kenburns"
              style={{ objectFit: "cover" }}
              priority
            />
          )}
          <div className="pkg-hero__shade" aria-hidden="true" />
        </div>
        <div className="site-container pkg-hero__inner">
          <BreadcrumbTrail
            items={[
              { label: "Home", href: "/" },
              { label: "Tours", href: "/tours" },
              {
                label: pkg.kind === "group" ? "Group" : "Private",
                href: pkg.kind === "group" ? "/tours/group" : "/tours/private",
              },
              { label: pkg.title },
            ]}
          />
          <span className="eyebrow pkg-hero__eyebrow">
            {pkg.kind === "group" ? "Samuha · Group tour" : "Samraksha · Private tour"}
          </span>
          <h1 className="pkg-hero__title">{pkg.title}</h1>
          <p className="pkg-hero__lead">{pkg.shortDescription}</p>
          <div className="pkg-hero__stats">
            <div>
              <span>Duration</span>
              <strong>{formatDuration(pkg.durationNights, pkg.durationDays)}</strong>
            </div>
            <div>
              <span>States</span>
              <strong>{stateNames}</strong>
            </div>
            <div>
              <span>Hotel category</span>
              <strong>
                {typeof pkg.hotelTier === "number" ? `${pkg.hotelTier}-Star` : pkg.hotelTier}
              </strong>
            </div>
            <div>
              <span>Rating</span>
              <strong>★ {pkg.rating.toFixed(1)} ({pkg.reviewCount})</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-nav (anchor links) */}
      <nav className="pkg-subnav" aria-label="Sections">
        <div className="site-container">
          <ul>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#itinerary">Day-by-day plan</a></li>
            <li><a href="#temples">Temples covered</a></li>
            <li><a href="#inclusions">Inclusions</a></li>
            <li><a href="#typical-day">A typical day</a></li>
            <li><a href="#senior">For seniors</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#faqs">FAQs</a></li>
          </ul>
        </div>
      </nav>

      <section id="overview" className="site-section pkg-section">
        <div className="site-container pkg-layout">
          <div className="pkg-main">
            <Reveal>
              <h2>Overview</h2>
              <p>{pkg.longDescription}</p>
              <div className="pkg-tags">
                {pkg.themes.map((t) => (
                  <span key={t} className="badge">{t}</span>
                ))}
                {pkg.transport.map((t) => (
                  <span key={t} className="badge badge--ink">{t}</span>
                ))}
                {pkg.groupSize && (
                  <span className="badge badge--ink">
                    Group size {pkg.groupSize.min}–{pkg.groupSize.max}
                  </span>
                )}
              </div>
            </Reveal>
          </div>
          <aside className="pkg-side">
            <Reveal>
              <div className="pkg-quote-card">
                <div className="pkg-quote-card__trust">✦ Best rate guaranteed</div>
                <div className="pkg-quote-card__price-label">Starting from</div>
                <div className="pkg-quote-card__price">{formatINR(pkg.priceFrom)}</div>
                <div className="pkg-quote-card__price-sub">per person · twin sharing</div>
                <div className="pkg-quote-card__actions">
                  <BookButton pkg={pkg} size="lg" label="Book Now" defaultOpen={autoOpenBooking} />
                  <a
                    href={buildWhatsAppUrl(quoteMessage)}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn--whatsapp"
                  >
                    Quick quote on WhatsApp
                  </a>
                  <Link href="#enquire" className="btn btn--ghost">
                    Ask a question
                  </Link>
                </div>
                <ul className="pkg-quote-card__list">
                  <li>Departures from {pkg.departureCities.join(", ")}</li>
                  {pkg.senior.companionAvailable && <li>Personal companion option</li>}
                  {pkg.senior.sattvicMeals && <li>Sattvic meals available</li>}
                  {pkg.senior.doctorOnCall && <li>Doctor-on-call throughout</li>}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section id="itinerary" className="site-section site-section--cream2 pkg-section">
        <div className="site-container">
          <Reveal>
            <span className="eyebrow">Day-by-day plan</span>
            <h2 className="section-title">The journey, unfolded</h2>
          </Reveal>
          <Itinerary days={pkg.itinerary} />
        </div>
      </section>

      <section id="temples" className="site-section pkg-section">
        <div className="site-container">
          <Reveal>
            <span className="eyebrow">Temples on this tour</span>
            <h2 className="section-title">Where you&rsquo;ll have darshan</h2>
          </Reveal>
          <div className="pkg-temples">
            {packageTemples.map((t) => (
              <Link href={`/temples/${t.slug}`} key={t.slug} className="pkg-temple card">
                <div className="card__media">
                  {t.images[0] && (
                    <Image
                      src={t.images[0]}
                      alt={t.name}
                      fill
                      sizes="(max-width: 640px) 90vw, 22rem"
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
                <div className="card__body">
                  <h3 className="card__title">{t.name}</h3>
                  <p className="pkg-temple__deity">{t.deity}</p>
                  <p className="pkg-temple__city">{t.city}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="inclusions" className="site-section site-section--cream2 pkg-section">
        <div className="site-container">
          <Reveal>
            <span className="eyebrow">What&rsquo;s included</span>
            <h2 className="section-title">Inclusions &amp; exclusions</h2>
          </Reveal>
          <div className="pkg-ie">
            <div className="pkg-ie__col pkg-ie__col--in">
              <h3 className="pkg-ie__title pkg-ie__title--in">Included</h3>
              <ul>
                {pkg.inclusions.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>
            <div className="pkg-ie__col pkg-ie__col--out">
              <h3 className="pkg-ie__title pkg-ie__title--out">Not included</h3>
              <ul>
                {pkg.exclusions.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="typical-day" className="site-section pkg-section">
        <div className="site-container">
          <div className="grid-2 pkg-context">
            <Reveal>
              <article className="pkg-context__card">
                <span className="eyebrow">A typical day looks like</span>
                <h3>Day {representativeDay(pkg).day}: {representativeDay(pkg).title}</h3>
                <p>{representativeDay(pkg).summary}</p>
                {representativeDay(pkg).activities.length > 0 && (
                  <ul className="pkg-context__sublist">
                    {representativeDay(pkg).activities.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                )}
                <p className="pkg-context__sub">A representative middle day. Earlier and later days follow a similar rhythm.</p>
              </article>
            </Reveal>
            <Reveal delay={1}>
              <article className="pkg-context__card">
                <span className="eyebrow">What to pack</span>
                <h3>A short list to keep you comfortable</h3>
                <ul className="pkg-context__sublist pkg-context__pack">
                  {packingListFor(pkg).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="senior" className="site-section pkg-section">
        <div className="site-container pkg-senior">
          <Reveal>
            <span className="eyebrow">Senior travellers</span>
            <h2 className="section-title">What we do differently for travellers over 60</h2>
          </Reveal>
          <ul className="pkg-senior__list">
            <li>
              <strong>Walking distances kept short.</strong> Vehicles drop and
              pick from as close to the entrance as the temple permits.
            </li>
            <li>
              <strong>Senior-darshan slots pre-booked</strong> wherever the
              temple administration allows it (Tirumala, Madurai, Rameshwaram).
            </li>
            {pkg.senior.wheelchairFriendly && (
              <li><strong>Wheelchair-friendly routing</strong> at all key sites.</li>
            )}
            {pkg.senior.sattvicMeals && (
              <li><strong>Sattvic, diabetic-friendly and Jain meals</strong> available on request.</li>
            )}
            {pkg.senior.doctorOnCall && (
              <li><strong>Doctor-on-call</strong> at every hotel; 24×7 medical line.</li>
            )}
            {pkg.senior.companionAvailable && (
              <li>
                <strong>Personal companion add-on.</strong> A dedicated trained
                travel assistant to accompany a senior throughout the trip.{" "}
                <Link href="/senior-companion">Read more →</Link>
              </li>
            )}
          </ul>
        </div>
      </section>

      {pkg.gallery.length > 0 && (
        <section id="gallery" className="site-section pkg-section">
          <div className="site-container">
            <Reveal>
              <span className="eyebrow">Photo gallery</span>
              <h2 className="section-title">Scenes from this journey</h2>
            </Reveal>
            <Lightbox images={[...pkg.heroImages, ...pkg.gallery].slice(0, 9)} alts={[]} columns={3} />
          </div>
        </section>
      )}

      <section id="reviews" className="site-section site-section--cream2 pkg-section">
        <div className="site-container">
          <Testimonials items={reviews} heading="Travellers on this journey" />
        </div>
      </section>

      <section id="enquire" className="site-section pkg-section">
        <div className="site-container pkg-enquire">
          <Reveal>
            <span className="eyebrow">Enquire about this tour</span>
            <h2 className="section-title">Hold a seat or ask a question</h2>
            <p className="section-lead">
              Submit this short form to receive a personal quote, departure
              dates and a callback within hours.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <InquiryForm
              defaultPackage={pkg.title}
              source={`Package: ${pkg.title}`}
            />
          </Reveal>
        </div>
      </section>

      <section id="faqs" className="site-section site-section--cream2 pkg-section">
        <div className="site-container">
          <Reveal>
            <span className="eyebrow">Frequently asked</span>
            <h2 className="section-title">Things travellers usually ask</h2>
          </Reveal>
          <FAQ
            groups={[
              FAQS.find((g) => g.category === "Booking") ?? FAQS[0],
              FAQS.find((g) => g.category === "On Tour") ?? FAQS[0],
              FAQS.find((g) => g.category === "Senior Care") ?? FAQS[0],
              FAQS.find((g) => g.category === "Refunds") ?? FAQS[0],
            ]}
          />
        </div>
      </section>

      {/* Sticky booking bar */}
      <div className="pkg-stickybar" role="region" aria-label="Booking">
        <div className="site-container pkg-stickybar__inner">
          <div className="pkg-stickybar__price">
            <span>Starting from</span>
            <strong>{formatINR(pkg.priceFrom)}</strong>
            <small> / person</small>
          </div>
          <div className="pkg-stickybar__actions">
            <BookButton pkg={pkg} label="Book Now" />
            <a
              href={buildWhatsAppUrl(quoteMessage)}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn--whatsapp"
            >
              WhatsApp
            </a>
            <a href="#enquire" className="btn btn--ghost pkg-stickybar__hide-sm">
              Ask
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .pkg-section { scroll-margin-top: 6rem; }

        /* ── Hero ── */
        .pkg-hero {
          position: relative;
          color: #fff;
          min-height: clamp(32rem, 82vh, 52rem);
          display: flex;
          align-items: flex-end;
          padding-block: clamp(5rem, 9vw, 7rem);
        }
        .pkg-hero__media {
          position: absolute; inset: 0; z-index: 0; overflow: hidden;
        }
        .pkg-hero__shade {
          position: absolute; inset: 0;
          background: linear-gradient(160deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.48) 50%, rgba(0,0,0,0.88) 100%);
        }
        .pkg-hero__inner {
          position: relative;
          z-index: 2;
        }
        .pkg-hero__inner :global(.breadcrumbs),
        .pkg-hero__inner :global(.breadcrumbs a),
        .pkg-hero__inner :global(.breadcrumbs span) {
          color: rgba(255,255,255,0.70);
        }
        .pkg-hero__inner :global(.breadcrumbs span[aria-current="page"]) {
          color: #fff;
        }
        .pkg-hero__eyebrow { color: #c9a96e; letter-spacing: 0.3em; }
        .pkg-hero__eyebrow::before { background: #c9a96e; }
        .pkg-hero__title {
          color: #fff;
          font-family: var(--font-fraunces), serif;
          font-size: clamp(2.75rem, 5.5vw, 5rem);
          margin-block: 0.75rem 1.25rem;
          max-width: 20ch;
          line-height: 1.08;
          text-shadow: 0 2px 32px rgba(0,0,0,0.5);
        }
        .pkg-hero__lead {
          color: rgba(255,255,255,0.88);
          max-width: 48ch;
          font-size: var(--font-size-lg);
          text-shadow: 0 1px 8px rgba(0,0,0,0.4);
        }
        .pkg-hero__stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(10rem, 100%), 1fr));
          gap: 1rem;
          margin-top: 2.75rem;
          padding-top: 1.75rem;
          border-top: 1px solid rgba(201,169,110,0.45);
        }
        .pkg-hero__stats > div {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
          background: rgba(255,255,255,0.10);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 0.875rem;
          padding: 1rem 1.25rem;
        }
        .pkg-hero__stats span {
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
        }
        .pkg-hero__stats strong {
          font-family: var(--font-fraunces), serif;
          font-size: 1.125rem;
          color: #fff;
        }

        /* ── Sub-nav ── */
        .pkg-subnav {
          position: sticky;
          top: var(--nav-height);
          background: var(--heritage-cream);
          border-bottom: 1px solid var(--heritage-line);
          z-index: 50;
          overflow: hidden;
        }
        .pkg-subnav ul {
          display: flex;
          gap: 0.5rem 1.5rem;
          flex-wrap: wrap;
          list-style: none;
          padding: 0.875rem 0;
          margin: 0;
        }
        .pkg-subnav a {
          font-family: var(--font-poppins);
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--heritage-sub);
          text-decoration: none;
          padding: 0.5rem 0;
          border-bottom: 2px solid transparent;
          transition: color 0.2s, border-color 0.2s;
        }
        .pkg-subnav a:hover { color: #c9a96e; }
        .pkg-subnav a.is-active { color: #c9a96e; border-bottom-color: #c9a96e; }

        .pkg-layout {
          display: grid;
          grid-template-columns: 1fr 22rem;
          gap: 3rem;
        }
        .pkg-tags {
          display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1.5rem;
        }
        .pkg-side { position: sticky; top: calc(var(--nav-height) + 5rem); align-self: start; }
        /* ── Price card ── */
        .pkg-quote-card {
          background: linear-gradient(#fff, #fff) padding-box,
            linear-gradient(145deg, #c9a96e 0%, rgba(201,169,110,0.25) 50%, #c9a96e 100%) border-box;
          border: 2px solid transparent;
          border-radius: var(--radius-lg);
          padding: 1.875rem;
          box-shadow: 0 12px 40px rgba(134,109,75,0.14), 0 2px 8px rgba(0,0,0,0.06);
        }
        .pkg-quote-card__trust {
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }
        .pkg-quote-card__price-label { font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--heritage-muted); }
        .pkg-quote-card__price {
          font-family: var(--font-fraunces), serif;
          font-size: 2.5rem;
          color: #c9a96e;
          font-weight: 600;
          margin-top: 0.25rem;
          line-height: 1;
        }
        .pkg-quote-card__price-sub { display: block; color: var(--heritage-muted); font-size: 0.875rem; margin-bottom: 1.375rem; margin-top: 0.25rem; }
        .pkg-quote-card__actions { display: flex; flex-direction: column; gap: 0.625rem; }
        .pkg-quote-card__list {
          list-style: none;
          padding: 0;
          margin: 1.25rem 0 0;
          border-top: 1px solid var(--heritage-line);
          padding-top: 1.25rem;
        }
        .pkg-quote-card__list li {
          padding: 0.375rem 0.5rem 0.375rem 1.5rem;
          position: relative;
          font-size: 0.875rem;
          color: var(--heritage-sub);
          margin-bottom: 0.25rem;
          border-radius: 0.375rem;
          transition: background 0.2s;
        }
        .pkg-quote-card__list li:hover { background: rgba(201,169,110,0.07); }
        .pkg-quote-card__list li::before {
          content: "✓";
          position: absolute;
          left: 0.375rem;
          color: #c9a96e;
          font-weight: 700;
        }

        /* ── Temple cards ── */
        .pkg-temples {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(17rem, 100%), 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .pkg-temple { text-decoration: none; overflow: hidden; }
        .pkg-temple .card__media { position: relative; }
        .pkg-temple .card__media::after {
          content: "View temple →";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 60%);
          display: flex;
          align-items: flex-end;
          padding: 1rem 1.25rem;
          color: #fff;
          font-family: var(--font-poppins);
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .pkg-temple:hover .card__media::after { opacity: 1; }
        .pkg-temple__deity {
          font-family: var(--font-fraunces);
          font-style: italic;
          color: #c9a96e;
          font-size: 0.9375rem;
        }
        .pkg-temple__city { font-size: 0.8125rem; color: var(--heritage-muted); text-transform: uppercase; letter-spacing: 0.12em; }

        /* ── Inclusions ── */
        .pkg-ie {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .pkg-ie__col {
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-radius: var(--radius-lg);
          padding: 1.875rem 2rem;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        }
        .pkg-ie__col--in  { border-top: 3px solid #5c8a5c; }
        .pkg-ie__col--out { border-top: 3px solid #9e6060; }
        .pkg-ie__title {
          font-family: var(--font-fraunces), serif;
          font-size: 1.25rem;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--heritage-line);
        }
        .pkg-ie__title--in { color: #3d6b3d; }
        .pkg-ie__title--out { color: #7a4040; }
        .pkg-ie__col ul { list-style: none; padding: 0; margin: 0; }
        .pkg-ie__col li {
          padding: 0.5rem 0.5rem 0.5rem 1.75rem;
          position: relative;
          color: var(--heritage-sub);
          border-bottom: 1px solid var(--heritage-line);
          line-height: 1.55;
          border-radius: 0.375rem;
          transition: background 0.2s;
        }
        .pkg-ie__col li:last-child { border-bottom: none; }
        .pkg-ie__col--in li:hover  { background: rgba(92,138,92,0.06); }
        .pkg-ie__col--out li:hover { background: rgba(158,96,96,0.06); }
        .pkg-ie__col--in li::before {
          content: "✓"; position: absolute; left: 0.375rem; color: #5c8a5c; font-weight: 700;
        }
        .pkg-ie__col--out li::before {
          content: "×"; position: absolute; left: 0.375rem; color: #9e6060; font-weight: 700; font-size: 1.125rem; line-height: 1.2;
        }
        @media (max-width: 720px) {
          .pkg-ie { grid-template-columns: 1fr; }
        }

        /* ── Senior section ── */
        .pkg-senior { max-width: 56rem; }
        .pkg-senior__list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem; }
        .pkg-senior__list li {
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-left: 4px solid #c9a96e;
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-md);
          color: var(--heritage-sub);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .pkg-senior__list li:hover {
          transform: translateX(5px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        .pkg-senior__list strong { color: var(--heritage-ink); }

        .pkg-enquire { max-width: 50rem; }

        .pkg-stickybar {
          position: sticky;
          bottom: 0;
          z-index: 70;
          background: rgba(245,240,232,0.97);
          color: var(--heritage-ink);
          padding: 0.875rem 0;
          border-top: 1px solid rgba(201,169,110,0.50);
          backdrop-filter: blur(8px);
          box-shadow: 0 -4px 16px rgba(0,0,0,0.08);
        }
        .pkg-stickybar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .pkg-stickybar__price span { font-size: 0.75rem; color: var(--heritage-muted); letter-spacing: 0.12em; text-transform: uppercase; display: block; }
        .pkg-stickybar__price strong { font-family: var(--font-fraunces), serif; font-size: 1.5rem; color: var(--heritage-gold); }
        .pkg-stickybar__price small { color: var(--heritage-sub); font-size: 0.8125rem; }
        .pkg-context__card {
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          height: 100%;
        }
        .pkg-context__card h3 { font-family: var(--font-fraunces); font-size: 1.25rem; margin-block: 0.5rem 0.75rem; }
        .pkg-context__card p { color: var(--heritage-sub); line-height: 1.6; }
        .pkg-context__sublist {
          list-style: none;
          padding: 0;
          margin: 0.875rem 0 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .pkg-context__sublist li {
          padding-left: 1.25rem;
          position: relative;
          color: var(--heritage-sub);
          line-height: 1.5;
          font-size: 0.9375rem;
        }
        .pkg-context__sublist li::before {
          content: "·";
          position: absolute;
          left: 0;
          color: var(--heritage-rust);
          font-weight: 700;
          font-size: 1.25rem;
          line-height: 1;
        }
        .pkg-context__pack li::before {
          content: "✓";
          font-size: 0.875rem;
        }
        .pkg-context__sub {
          margin-top: 0.875rem;
          font-size: 0.8125rem;
          color: var(--heritage-muted);
        }
        .pkg-stickybar__actions { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .pkg-stickybar__actions .btn { padding: 0.625rem 1.25rem; font-size: 0.9375rem; min-height: 2.5rem; }
        @media (max-width: 540px) { .pkg-stickybar__hide-sm { display: none; } }

        @media (max-width: 900px) {
          .pkg-layout { grid-template-columns: 1fr; }
          .pkg-side { position: static; }
        }
      `}</style>
    </>
  );
}
