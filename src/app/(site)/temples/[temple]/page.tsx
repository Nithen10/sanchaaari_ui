import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/GSAPReveal";
import BreadcrumbTrail from "@/components/site/BreadcrumbTrail";
import AccessibilityBadge from "@/components/site/AccessibilityBadge";
import TempleCard from "@/components/site/TempleCard";
import PackageCard from "@/components/site/PackageCard";
import Lightbox from "@/components/site/Lightbox";
import { templeSchema, ldJsonScript } from "@/lib/schema";
import { TEMPLES, getTempleBySlug } from "@/data/temples";
import { STATES } from "@/data/states";
import { packagesForTemple } from "@/data/packages";

export function generateStaticParams() {
  return TEMPLES.map((t) => ({ temple: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ temple: string }>;
}): Promise<Metadata> {
  const { temple } = await params;
  const t = getTempleBySlug(temple);
  if (!t) return { title: "Temple not found" };
  return {
    title: t.name,
    description: t.significance,
    openGraph: {
      title: t.name,
      description: t.significance,
      images: t.images.length > 0 ? [t.images[0]] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: t.name,
      description: t.significance,
      images: t.images.length > 0 ? [t.images[0]] : undefined,
    },
  };
}

export default async function TempleDetailPage({
  params,
}: {
  params: Promise<{ temple: string }>;
}) {
  const { temple } = await params;
  const t = getTempleBySlug(temple);
  if (!t) return notFound();

  const stateInfo = STATES.find((s) => s.slug === t.state);
  const nearby = t.nearbyTempleSlugs
    .map((s) => TEMPLES.find((x) => x.slug === s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
  const tours = packagesForTemple(t.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ldJsonScript(templeSchema(t, stateInfo?.name)) }}
      />
      <section className="temple-hero">
        <div className="temple-hero__media">
          {t.images[0] && (
            <Image src={t.images[0]} alt="" fill sizes="100vw" className="kenburns" style={{ objectFit: "cover" }} priority />
          )}
          <div className="temple-hero__shade" aria-hidden="true" />
        </div>
        <div className="site-container temple-hero__inner">
          <BreadcrumbTrail
            items={[
              { label: "Home", href: "/" },
              { label: stateInfo?.name ?? "States", href: stateInfo ? `/states/${stateInfo.slug}` : "/states" },
              { label: t.name },
            ]}
          />
          <span className="eyebrow temple-hero__eyebrow">{stateInfo?.name} · {t.city}</span>
          <h1 className="temple-hero__title">{t.name}</h1>
          <p className="temple-hero__deity">{t.deity}</p>
          <div className="temple-hero__badges">
            {t.badges.map((b) => (
              <span key={b} className="badge badge--gold">{b}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container temple-grid">
          <article className="temple-main">
            <Reveal>
              <h2>Significance</h2>
              <p>{t.significance}</p>
            </Reveal>
            <Reveal delay={1}>
              <h2>History</h2>
              <p>{t.history}</p>
            </Reveal>
            <Reveal delay={2}>
              <h2>Architecture</h2>
              <p>{t.architecture}</p>
            </Reveal>
          </article>
          <aside className="temple-side">
            <div className="temple-card-side">
              <h3>Darshan information</h3>
              <dl>
                <div>
                  <dt>Darshan timings</dt>
                  <dd>{t.timings.darshan}</dd>
                </div>
                {t.timings.abhishekam && (
                  <div>
                    <dt>Abhishekam</dt>
                    <dd>{t.timings.abhishekam}</dd>
                  </div>
                )}
                <div>
                  <dt>Dress code</dt>
                  <dd>{t.dressCode}</dd>
                </div>
                <div>
                  <dt>Photography</dt>
                  <dd>{t.photographyPolicy}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {(t.culturalNotes || t.whatToExpect) && (
        <section className="site-section temple-context">
          <div className="site-container">
            <div className="grid-2">
              {t.culturalNotes && (
                <Reveal>
                  <article className="temple-context__card">
                    <span className="eyebrow">Cultural notes</span>
                    <h3>What makes {t.name} distinctive</h3>
                    <p>{t.culturalNotes}</p>
                  </article>
                </Reveal>
              )}
              {t.whatToExpect && (
                <Reveal delay={1}>
                  <article className="temple-context__card">
                    <span className="eyebrow">What to expect</span>
                    <h3>On a typical day at the temple</h3>
                    <p>{t.whatToExpect}</p>
                  </article>
                </Reveal>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="site-section site-section--cream2">
        <div className="site-container">
          <Reveal>
            <span className="eyebrow">For senior travellers</span>
            <h2 className="section-title">Accessibility at {t.name}</h2>
            <p className="section-lead">
              Honest, on-the-ground information about steps, wheelchair access,
              senior-darshan queues and restrooms, all checked by our planners.
            </p>
          </Reveal>
          <AccessibilityBadge access={t.accessibility} />
        </div>
      </section>

      {t.festivals.length > 0 && (
        <section className="site-section">
          <div className="site-container">
            <Reveal>
              <span className="eyebrow">Best time to visit</span>
              <h2 className="section-title">Festivals at {t.name}</h2>
            </Reveal>
            <ul className="temple-festivals">
              {t.festivals.map((f) => (
                <li key={f.name}>
                  <strong>{f.name}</strong>
                  <span>{f.months}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {tours.length > 0 && (
        <section className="site-section site-section--cream2">
          <div className="site-container">
            <Reveal>
              <span className="eyebrow">Tours visiting {t.name}</span>
              <h2 className="section-title">Ready-to-book journeys</h2>
            </Reveal>
            <div className="grid-cards">
              {tours.map((p) => (
                <PackageCard key={p.slug} pkg={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {t.images.length > 1 && (
        <section className="site-section">
          <div className="site-container">
            <Reveal>
              <span className="eyebrow">Photo gallery</span>
              <h2 className="section-title">A glimpse of {t.name}</h2>
              <p className="section-lead">Click any photo to open a larger view. Use the arrow keys to navigate.</p>
            </Reveal>
            <Lightbox images={t.images} alts={t.images.map((_, i) => `${t.name} photo ${i + 1}`)} columns={3} />
          </div>
        </section>
      )}

      {nearby.length > 0 && (
        <section className="site-section site-section--cream2">
          <div className="site-container">
            <Reveal>
              <span className="eyebrow">Nearby</span>
              <h2 className="section-title">Other temples close by</h2>
            </Reveal>
            <div className="grid-cards">
              {nearby.map((n) => (
                <TempleCard key={n.slug} temple={n} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="site-section temple-cta">
        <div className="site-container temple-cta__inner">
          <Reveal>
            <h2>Plan a journey that includes {t.name}</h2>
            <p>Tell us your dates and travellers, and we&rsquo;ll come back with options.</p>
            <div className="temple-cta__buttons">
              <Link href="/tours/custom" className="btn btn--primary btn--lg">
                Customize a trip
              </Link>
              <Link href="/contact" className="btn btn--ghost btn--lg">
                Talk to us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        .temple-hero {
          position: relative;
          color: #fff;
          min-height: clamp(20rem, 55vh, 28rem);
          display: flex;
          align-items: flex-end;
          padding-block: clamp(3rem, 7vw, 5rem);
        }
        .temple-hero__media { position: absolute; inset: 0; }
        .temple-hero__shade {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.72) 100%);
        }
        .temple-hero__inner { position: relative; z-index: 2; }
        .temple-hero__inner :global(.breadcrumbs),
        .temple-hero__inner :global(.breadcrumbs a) { color: rgba(255,255,255,0.78); }
        .temple-hero__inner :global(.breadcrumbs span[aria-current="page"]) { color: #fff; }
        .temple-hero__eyebrow { color: var(--heritage-gold); }
        .temple-hero__eyebrow::before { background: var(--heritage-gold); }
        .temple-hero__title {
          font-family: var(--font-fraunces);
          color: #fff;
          font-size: clamp(2.25rem, 5vw, 4rem);
          margin-block: 0.5rem 0.25rem;
        }
        .temple-hero__deity {
          font-family: var(--font-fraunces);
          font-style: italic;
          color: var(--heritage-gold);
          font-size: 1.25rem;
          margin: 0 0 1.5rem;
        }
        .temple-hero__badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .temple-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 22rem;
          gap: 3rem;
          align-items: start;
        }
        .temple-main h2 {
          margin-block: 0 0.5rem;
          font-size: clamp(1.5rem, 2.4vw, 2rem);
        }
        .temple-main h2 + p { margin-bottom: 2rem; }
        .temple-card-side {
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          position: sticky;
          top: calc(var(--nav-height) + 5rem);
        }
        .temple-card-side h3 {
          font-family: var(--font-fraunces), serif;
          font-size: 1.25rem;
          margin-bottom: 1rem;
          padding-bottom: 0.625rem;
          border-bottom: 2px solid var(--heritage-rust);
        }
        .temple-card-side dl { display: flex; flex-direction: column; gap: 1rem; }
        .temple-card-side dt {
          font-family: var(--font-poppins);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--heritage-muted);
          margin-bottom: 0.25rem;
        }
        .temple-card-side dd {
          margin: 0;
          color: var(--heritage-ink);
          font-size: 0.9375rem;
          line-height: 1.55;
        }

        .temple-festivals {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));
          gap: 1rem;
        }
        .temple-festivals li {
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          padding: 1.25rem;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .temple-festivals strong { font-family: var(--font-fraunces); font-size: 1.125rem; }
        .temple-festivals span { color: var(--heritage-muted); font-size: 0.875rem; }

        .temple-cta__inner { max-width: 38rem; margin: 0 auto; text-align: center; }
        .temple-cta h2 { margin-bottom: 0.75rem; }
        .temple-cta p { font-size: var(--font-size-lg); margin-bottom: 1.5rem; }
        .temple-cta__buttons {
          display: inline-flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        @media (max-width: 900px) {
          .temple-grid { grid-template-columns: 1fr; }
          .temple-card-side { position: static; }
        }

        .temple-context__card {
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          height: 100%;
        }
        .temple-context__card h3 { margin-block: 0.5rem 0.75rem; }
        .temple-context__card p { line-height: 1.7; }
      `}</style>
    </>
  );
}
