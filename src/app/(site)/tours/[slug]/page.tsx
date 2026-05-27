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
            <div className="pkg-ie__col">
              <h3 className="pkg-ie__title pkg-ie__title--in">Included</h3>
              <ul>
                {pkg.inclusions.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>
            <div className="pkg-ie__col">
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
        .pkg-hero {
          position: relative;
          color: #fff;
          min-height: clamp(22rem, 60vh, 32rem);
          display: flex;
          align-items: flex-end;
          padding-block: clamp(4rem, 8vw, 6rem);
        }
        .pkg-hero__media {
          position: absolute; inset: 0; z-index: 0; overflow: hidden;
        }
        .pkg-hero__shade {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.7) 100%);
        }
        .pkg-hero__inner {
          position: relative;
          z-index: 2;
        }
        .pkg-hero__inner :global(.breadcrumbs),
        .pkg-hero__inner :global(.breadcrumbs a),
        .pkg-hero__inner :global(.breadcrumbs span) {
          color: rgba(255,255,255,0.78);
        }
        .pkg-hero__inner :global(.breadcrumbs span[aria-current="page"]) {
          color: #fff;
        }
        .pkg-hero__eyebrow { color: var(--heritage-gold); }
        .pkg-hero__eyebrow::before { background: var(--heritage-gold); }
        .pkg-hero__title {
          color: #fff;
          font-family: var(--font-fraunces), serif;
          font-size: clamp(2.25rem, 4.6vw, 4rem);
          margin-block: 0.5rem 1rem;
          max-width: 24ch;
        }
        .pkg-hero__lead {
          color: rgba(255,255,255,0.88);
          max-width: 48ch;
          font-size: var(--font-size-lg);
        }
        .pkg-hero__stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(11rem, 100%), 1fr));
          gap: 1.5rem;
          margin-top: 2.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.18);
        }
        .pkg-hero__stats > div { display: flex; flex-direction: column; gap: 0.25rem; }
        .pkg-hero__stats span {
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
        }
        .pkg-hero__stats strong {
          font-family: var(--font-fraunces), serif;
          font-size: 1.0625rem;
          color: #fff;
        }

        .pkg-subnav {
          position: sticky;
          top: var(--nav-height);
          background: var(--heritage-cream);
          border-bottom: 1px solid var(--heritage-line);
          z-index: 50;
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
        }
        .pkg-subnav a:hover { color: var(--heritage-rust); }

        .pkg-layout {
          display: grid;
          grid-template-columns: 1fr 22rem;
          gap: 3rem;
        }
        .pkg-tags {
          display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1.5rem;
        }
        .pkg-side { position: sticky; top: calc(var(--nav-height) + 5rem); align-self: start; }
        .pkg-quote-card {
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          box-shadow: var(--heritage-shadow);
        }
        .pkg-quote-card__price-label { font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--heritage-muted); }
        .pkg-quote-card__price {
          font-family: var(--font-fraunces), serif;
          font-size: 2.25rem;
          color: var(--heritage-rust);
          font-weight: 600;
          margin-top: 0.25rem;
        }
        .pkg-quote-card__price-sub { display: block; color: var(--heritage-muted); font-size: 0.875rem; margin-bottom: 1.25rem; }
        .pkg-quote-card__actions { display: flex; flex-direction: column; gap: 0.625rem; }
        .pkg-quote-card__list {
          list-style: none;
          padding: 0;
          margin: 1.25rem 0 0;
          border-top: 1px solid var(--heritage-line);
          padding-top: 1.25rem;
        }
        .pkg-quote-card__list li {
          padding-left: 1.25rem;
          position: relative;
          font-size: 0.875rem;
          color: var(--heritage-sub);
          margin-bottom: 0.5rem;
        }
        .pkg-quote-card__list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--heritage-rust);
          font-weight: 700;
        }

        .pkg-temples {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(16rem, 100%), 1fr));
          gap: 1.5rem;
        }
        .pkg-temple { text-decoration: none; }
        .pkg-temple__deity {
          font-family: var(--font-fraunces);
          font-style: italic;
          color: var(--heritage-rust);
          font-size: 0.9375rem;
        }
        .pkg-temple__city { font-size: 0.8125rem; color: var(--heritage-muted); text-transform: uppercase; letter-spacing: 0.12em; }

        .pkg-ie {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .pkg-ie__col {
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-radius: var(--radius-lg);
          padding: 1.75rem 2rem;
        }
        .pkg-ie__title {
          font-family: var(--font-fraunces), serif;
          font-size: 1.25rem;
          margin-bottom: 1rem;
          padding-bottom: 0.625rem;
        }
        .pkg-ie__title--in { border-bottom: 2px solid var(--heritage-rust); color: var(--heritage-rust); }
        .pkg-ie__title--out { border-bottom: 2px solid var(--heritage-muted); color: var(--heritage-muted); }
        .pkg-ie__col ul { list-style: none; padding: 0; margin: 0; }
        .pkg-ie__col li {
          padding: 0.5rem 0 0.5rem 1.5rem;
          position: relative;
          color: var(--heritage-sub);
          border-bottom: 1px solid var(--heritage-line);
          line-height: 1.55;
        }
        .pkg-ie__col li:last-child { border-bottom: none; }
        .pkg-ie__title--in + ul li::before {
          content: "✓"; position: absolute; left: 0; color: var(--heritage-rust); font-weight: 700;
        }
        .pkg-ie__title--out + ul li::before {
          content: "×"; position: absolute; left: 0; color: var(--heritage-muted); font-weight: 700; font-size: 1.125rem; line-height: 1.2;
        }
        @media (max-width: 720px) {
          .pkg-ie { grid-template-columns: 1fr; }
        }

        .pkg-senior { max-width: 56rem; }
        .pkg-senior__list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.875rem; }
        .pkg-senior__list li {
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-left: 4px solid var(--heritage-gold);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-md);
          color: var(--heritage-sub);
        }
        .pkg-senior__list strong { color: var(--heritage-ink); }

        .pkg-enquire { max-width: 50rem; }

        .pkg-stickybar {
          position: sticky;
          bottom: 0;
          z-index: 70;
          background: rgba(31,41,55,0.97);
          color: #fff;
          padding: 0.875rem 0;
          border-top: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
        }
        .pkg-stickybar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .pkg-stickybar__price span { font-size: 0.75rem; color: rgba(255,255,255,0.65); letter-spacing: 0.12em; text-transform: uppercase; display: block; }
        .pkg-stickybar__price strong { font-family: var(--font-fraunces), serif; font-size: 1.5rem; color: var(--heritage-gold); }
        .pkg-stickybar__price small { color: rgba(255,255,255,0.7); font-size: 0.8125rem; }
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
