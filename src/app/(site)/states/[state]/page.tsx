import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/GSAPReveal";
import BreadcrumbTrail from "@/components/site/BreadcrumbTrail";
import TempleCard from "@/components/site/TempleCard";
import PackageCard from "@/components/site/PackageCard";
import { STATES, getStateBySlug } from "@/data/states";
import { templesByState } from "@/data/temples";
import { circuitsByState } from "@/data/circuits";
import { packagesByState } from "@/data/packages";
import { buildWhatsAppUrl } from "@/lib/contact";

export function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const s = getStateBySlug(state);
  if (!s) return { title: "State not found" };
  return {
    title: `${s.name} Temple & Heritage Tours`,
    description: s.intro,
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const s = getStateBySlug(state);
  if (!s) return notFound();
  const temples = templesByState(s.slug);
  const circuits = circuitsByState(s.slug);
  const tours = packagesByState(s.slug);

  return (
    <>
      <section className="state-hero">
        <div className="state-hero__media">
          <Image src={s.hero} alt="" fill sizes="100vw" className="kenburns" style={{ objectFit: "cover" }} priority />
          <div className="state-hero__shade" aria-hidden="true" />
        </div>
        <div className="site-container state-hero__inner">
          <BreadcrumbTrail
            items={[
              { label: "Home", href: "/" },
              { label: "States", href: "/states" },
              { label: s.name },
            ]}
          />
          <span className="eyebrow state-hero__eyebrow">{s.tagline}</span>
          <h1 className="state-hero__title">{s.name}</h1>
          <p className="state-hero__lead">{s.intro}</p>
          <div className="state-hero__meta">
            <div>
              <span>Best season</span>
              <strong>{s.bestSeason}</strong>
            </div>
            <div>
              <span>Major festivals</span>
              <strong>{s.majorFestivals.map((f) => f.name).join(" · ")}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <Reveal>
            <span className="eyebrow">Headline temples</span>
            <h2 className="section-title">Where to begin in {s.name}</h2>
            <p className="section-lead">
              The signature temples we plan {s.name} journeys around. Each
              entry has darshan timings, dress code, accessibility notes and
              senior-darshan details.
            </p>
          </Reveal>
          <div className="grid-cards">
            {temples.map((t) => (
              <TempleCard key={t.slug} temple={t} />
            ))}
          </div>
        </div>
      </section>

      {circuits.length > 0 && (
        <section className="site-section site-section--cream2">
          <div className="site-container">
            <Reveal>
              <span className="eyebrow">Circuits in {s.name}</span>
              <h2 className="section-title">Themed temple journeys</h2>
            </Reveal>
            <div className="grid-cards">
              {circuits.map((c) => (
                <Link href={`/circuits/${c.slug}`} key={c.slug} className="circuit-mini card">
                  <div className="card__media">
                    <Image src={c.heroImage} alt="" fill sizes="(max-width: 640px) 90vw, 22rem" style={{ objectFit: "cover" }} />
                  </div>
                  <div className="card__body">
                    <h3 className="card__title">{c.name}</h3>
                    <p className="circuit-mini__theme">{c.theme}</p>
                    <p className="circuit-mini__meta">{c.suggestedDays} days suggested</p>
                  </div>
                </Link>
              ))}
            </div>
            <style>{`
              .circuit-mini { text-decoration: none; }
              .circuit-mini__theme { font-family: var(--font-fraunces); font-style: italic; color: var(--heritage-rust); font-size: 0.9375rem; margin: 0; }
              .circuit-mini__meta { font-size: 0.8125rem; color: var(--heritage-muted); text-transform: uppercase; letter-spacing: 0.12em; margin: 0; }
            `}</style>
          </div>
        </section>
      )}

      {tours.length > 0 && (
        <section className="site-section">
          <div className="site-container">
            <Reveal>
              <span className="eyebrow">Tours covering {s.name}</span>
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

      <section className="site-section state-practical">
        <div className="site-container">
          <div className="grid-2">
            <Reveal>
              <article className="state-practical__card">
                <span className="eyebrow">Best months to visit</span>
                <h3>When {s.name} is at its best</h3>
                <p>{s.bestMonthsNarrative}</p>
              </article>
            </Reveal>
            <Reveal delay={1}>
              <article className="state-practical__card">
                <span className="eyebrow">Getting around</span>
                <h3>How travel works inside {s.name}</h3>
                <p>{s.gettingAround}</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="site-section site-section--ink state-festivals">
        <div className="site-container">
          <Reveal>
            <span className="eyebrow">Time it right</span>
            <h2 className="section-title">{s.name} festival calendar</h2>
          </Reveal>
          <ul className="state-festivals__list">
            {s.majorFestivals.map((f) => (
              <li key={f.name}>
                <strong>{f.name}</strong>
                <span>{f.months}</span>
              </li>
            ))}
          </ul>
          <style>{`
            .state-festivals__list {
              list-style: none;
              padding: 0;
              margin: 0;
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));
              gap: 1.25rem;
            }
            .state-festivals__list li {
              background: rgba(255,255,255,0.06);
              padding: 1.5rem;
              border-radius: var(--radius-lg);
              border: 1px solid rgba(255,255,255,0.1);
              display: flex;
              flex-direction: column;
              gap: 0.25rem;
            }
            .state-festivals__list strong { font-family: var(--font-fraunces); font-size: 1.125rem; color: var(--heritage-gold); }
            .state-festivals__list span { font-size: 0.875rem; color: rgba(255,255,255,0.75); }
          `}</style>
        </div>
      </section>

      <section className="site-section state-cta">
        <div className="site-container state-cta__inner">
          <Reveal>
            <h2>Plan your {s.name} journey</h2>
            <p>Talk to a Sanchaari planner. We&rsquo;ll suggest the right pace and the right temples for your group.</p>
            <div className="state-cta__buttons">
              <a
                href={buildWhatsAppUrl(`Hello Sanchaari, I'd like to plan a journey through ${s.name}.`)}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn--whatsapp btn--lg"
              >
                Plan on WhatsApp
              </a>
              <Link href="/tours/custom" className="btn btn--primary btn--lg">
                Customize a trip
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        .state-hero {
          position: relative;
          color: #fff;
          min-height: clamp(20rem, 55vh, 30rem);
          display: flex;
          align-items: flex-end;
          padding-block: clamp(3rem, 7vw, 5rem);
        }
        .state-hero__media { position: absolute; inset: 0; }
        .state-hero__shade {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.72) 100%);
        }
        .state-hero__inner { position: relative; z-index: 2; }
        .state-hero__inner :global(.breadcrumbs) { color: rgba(255,255,255,0.78); }
        .state-hero__inner :global(.breadcrumbs a) { color: rgba(255,255,255,0.78); }
        .state-hero__inner :global(.breadcrumbs span[aria-current="page"]) { color: #fff; }
        .state-hero__eyebrow { color: var(--heritage-gold); }
        .state-hero__eyebrow::before { background: var(--heritage-gold); }
        .state-hero__title { font-family: var(--font-fraunces); font-size: clamp(2.5rem, 6vw, 5rem); color: #fff; margin-block: 0.5rem 1rem; }
        .state-hero__lead { color: rgba(255,255,255,0.9); max-width: 56ch; font-size: var(--font-size-lg); }
        .state-hero__meta {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.18);
        }
        .state-hero__meta span {
          font-size: 0.75rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          display: block;
          margin-bottom: 0.25rem;
        }
        .state-hero__meta strong { font-family: var(--font-fraunces); font-size: 1.0625rem; }

        .state-practical__card {
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          height: 100%;
        }
        .state-practical__card h3 { font-family: var(--font-fraunces); font-size: 1.25rem; margin-block: 0.5rem 0.75rem; }
        .state-practical__card p { line-height: 1.7; color: var(--heritage-sub); }
        .state-cta__inner { max-width: 36rem; margin: 0 auto; text-align: center; }
        .state-cta h2 { margin-bottom: 0.75rem; }
        .state-cta p { font-size: var(--font-size-lg); margin-bottom: 1.5rem; }
        .state-cta__buttons {
          display: inline-flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
