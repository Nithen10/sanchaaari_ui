import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Reveal from "@/components/site/GSAPReveal";
import BreadcrumbTrail from "@/components/site/BreadcrumbTrail";
import TempleCard from "@/components/site/TempleCard";
import PackageCard from "@/components/site/PackageCard";
import { CIRCUITS, getCircuitBySlug } from "@/data/circuits";
import { TEMPLES } from "@/data/temples";
import { PACKAGES } from "@/data/packages";
import { STATES } from "@/data/states";

export function generateStaticParams() {
  return CIRCUITS.map((c) => ({ circuit: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ circuit: string }>;
}): Promise<Metadata> {
  const { circuit } = await params;
  const c = getCircuitBySlug(circuit);
  if (!c) return { title: "Circuit not found" };
  return { title: c.name, description: c.intro };
}

export default async function CircuitPage({
  params,
}: {
  params: Promise<{ circuit: string }>;
}) {
  const { circuit } = await params;
  const c = getCircuitBySlug(circuit);
  if (!c) return notFound();

  const temples = c.templeSlugs
    .map((slug) => TEMPLES.find((t) => t.slug === slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));
  const relatedTours = PACKAGES.filter((p) =>
    p.templeSlugs.some((s) => c.templeSlugs.includes(s))
  );

  return (
    <>
      <section className="circuit-hero">
        <div className="circuit-hero__media">
          <Image src={c.heroImage} alt="" fill sizes="100vw" className="kenburns" style={{ objectFit: "cover" }} priority />
          <div className="circuit-hero__shade" aria-hidden="true" />
        </div>
        <div className="site-container circuit-hero__inner">
          <BreadcrumbTrail
            items={[
              { label: "Home", href: "/" },
              { label: "Circuits", href: "/circuits" },
              { label: c.name },
            ]}
          />
          <span className="eyebrow circuit-hero__eyebrow">{c.theme}</span>
          <h1 className="circuit-hero__title">{c.name}</h1>
          <p className="circuit-hero__lead">{c.intro}</p>
          <div className="circuit-hero__meta">
            <div>
              <span>Temples on this circuit</span>
              <strong>{c.templeSlugs.length}</strong>
            </div>
            <div>
              <span>Suggested duration</span>
              <strong>{c.suggestedDays} days</strong>
            </div>
            <div>
              <span>States covered</span>
              <strong>
                {c.states.map((s) => STATES.find((x) => x.slug === s)?.name).join(" · ")}
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container circuit-story">
          <Reveal>
            <span className="eyebrow">The story</span>
            <h2 className="section-title">Why this circuit matters</h2>
            <p className="circuit-story__body">{c.story}</p>
          </Reveal>
        </div>
      </section>

      <section className="site-section site-section--cream2">
        <div className="site-container">
          <Reveal>
            <span className="eyebrow">Stops on this circuit</span>
            <h2 className="section-title">Temples in order</h2>
          </Reveal>
          <ol className="circuit-stops">
            {temples.map((t, i) => (
              <li key={t.slug} className="circuit-stop">
                <span className="circuit-stop__index">{String(i + 1).padStart(2, "0")}</span>
                <TempleCard temple={t} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container circuit-traditions">
          <Reveal>
            <span className="eyebrow">Customs</span>
            <h2 className="section-title">What pilgrims traditionally do</h2>
            <p className="section-lead">A few customs travellers ask us about. We will brief you on the relevant ones the evening before each temple.</p>
          </Reveal>
          <ul className="circuit-traditions__list">
            {c.traditions.map((t, i) => (
              <li key={i}><span aria-hidden="true">·</span>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="site-section site-section--cream2">
        <div className="site-container">
          <Reveal>
            <span className="eyebrow">Practical pacing</span>
            <h2 className="section-title">How many days do you need?</h2>
            <p className="section-lead">The same circuit can be done at three different paces. The comfortable pace is our most-booked.</p>
          </Reveal>
          <div className="circuit-pacing">
            <article className="pacing-card">
              <span className="pacing-card__label">Comfortable</span>
              <span className="pacing-card__days">{c.pacing.comfortable}</span>
              <span className="pacing-card__unit">days</span>
              <p>Generous rest days between long drives. Best for travellers in their 60s and 70s.</p>
            </article>
            <article className="pacing-card pacing-card--featured">
              <span className="pacing-card__label">Steady</span>
              <span className="pacing-card__days">{c.pacing.steady}</span>
              <span className="pacing-card__unit">days</span>
              <p>Our most-booked pace. Full coverage with sensible breathing space.</p>
            </article>
            <article className="pacing-card">
              <span className="pacing-card__label">Express</span>
              <span className="pacing-card__days">{c.pacing.express}</span>
              <span className="pacing-card__unit">days</span>
              <p>For travellers tight on time. Long days, early starts. Not recommended for elders.</p>
            </article>
          </div>
        </div>
      </section>

      {relatedTours.length > 0 && (
        <section className="site-section site-section--cream2">
          <div className="site-container">
            <Reveal>
              <span className="eyebrow">Ready-to-book journeys</span>
              <h2 className="section-title">Tours that cover this circuit</h2>
            </Reveal>
            <div className="grid-cards">
              {relatedTours.map((p) => (
                <PackageCard key={p.slug} pkg={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="site-section circuit-tips">
        <div className="site-container">
          <Reveal>
            <span className="eyebrow">Before you go</span>
            <h2 className="section-title">A few practical notes</h2>
          </Reveal>
          <div className="grid-2">
            <Reveal>
              <article className="circuit-tip">
                <h3>Order of darshan</h3>
                <p>
                  Where tradition prescribes a sequence (Pancha Bhoota, South
                  Char Dham), we follow it. Our planners will brief you on the
                  preferred order during your call.
                </p>
              </article>
            </Reveal>
            <Reveal delay={1}>
              <article className="circuit-tip">
                <h3>Dress code</h3>
                <p>
                  Each temple has its own protocol. We&rsquo;ll remind you the
                  evening before, and our companions carry a stock of traditional
                  attire for emergencies.
                </p>
              </article>
            </Reveal>
            <Reveal delay={2}>
              <article className="circuit-tip">
                <h3>Best months</h3>
                <p>
                  Most South-India circuits travel best between October and
                  March. Some festivals draw enormous crowds, and we&rsquo;ll
                  flag those during planning.
                </p>
              </article>
            </Reveal>
            <Reveal delay={3}>
              <article className="circuit-tip">
                <h3>Parihara and pooja</h3>
                <p>
                  Special poojas, abhishekam slots and homam arrangements can be
                  added on request. Mention them when you enquire and we&rsquo;ll
                  build them into the day.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <style>{`
        .circuit-hero {
          position: relative;
          color: #fff;
          min-height: clamp(20rem, 55vh, 30rem);
          display: flex;
          align-items: flex-end;
          padding-block: clamp(3rem, 7vw, 5rem);
        }
        .circuit-hero__media { position: absolute; inset: 0; }
        .circuit-hero__shade {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.72) 100%);
        }
        .circuit-hero__inner { position: relative; z-index: 2; }
        .circuit-hero__inner :global(.breadcrumbs),
        .circuit-hero__inner :global(.breadcrumbs a) { color: rgba(255,255,255,0.78); }
        .circuit-hero__inner :global(.breadcrumbs span[aria-current="page"]) { color: #fff; }
        .circuit-hero__eyebrow { color: var(--heritage-gold); }
        .circuit-hero__eyebrow::before { background: var(--heritage-gold); }
        .circuit-hero__title { font-family: var(--font-fraunces); color: #fff; font-size: clamp(2.25rem, 5vw, 4rem); margin-block: 0.5rem 1rem; }
        .circuit-hero__lead { color: rgba(255,255,255,0.9); font-size: var(--font-size-lg); max-width: 56ch; }
        .circuit-hero__meta {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(14rem, 100%), 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.18);
        }
        .circuit-hero__meta span { display: block; font-size: 0.75rem; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.65); margin-bottom: 0.25rem; }
        .circuit-hero__meta strong { font-family: var(--font-fraunces); font-size: 1.0625rem; }

        .circuit-stops {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
          gap: 1.75rem;
        }
        .circuit-stop {
          position: relative;
        }
        .circuit-stop__index {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          z-index: 3;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background: var(--heritage-rust);
          color: #fff;
          font-family: var(--font-fraunces), serif;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,0.2);
        }
        .circuit-tip {
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
        }
        .circuit-tip h3 { margin-bottom: 0.5rem; }

        .circuit-story { max-width: 56rem; }
        .circuit-story__body { font-size: var(--font-size-lg); line-height: 1.7; }

        .circuit-traditions { max-width: 56rem; }
        .circuit-traditions__list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 0.75rem;
        }
        .circuit-traditions__list li {
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-radius: var(--radius-md);
          padding: 1rem 1.25rem 1rem 2.75rem;
          position: relative;
          color: var(--heritage-sub);
          line-height: 1.55;
        }
        .circuit-traditions__list li > span {
          position: absolute;
          left: 1.125rem;
          top: 1rem;
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background: var(--heritage-rust);
          color: #fff;
          font-size: 0.6875rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .circuit-pacing {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        @media (max-width: 720px) { .circuit-pacing { grid-template-columns: 1fr; } }
        .pacing-card {
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }
        .pacing-card--featured {
          border-color: var(--heritage-rust);
          box-shadow: var(--heritage-shadow);
        }
        .pacing-card__label {
          font-family: var(--font-poppins);
          font-size: 0.75rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--heritage-rust);
          font-weight: 700;
        }
        .pacing-card__days {
          font-family: var(--font-fraunces), serif;
          font-size: 3.25rem;
          font-weight: 600;
          color: var(--heritage-ink);
          line-height: 1;
        }
        .pacing-card__unit {
          font-family: var(--font-poppins);
          font-size: 0.8125rem;
          color: var(--heritage-muted);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .pacing-card p { color: var(--heritage-sub); font-size: 0.9375rem; line-height: 1.5; margin: 0.625rem 0 0; }
      `}</style>
    </>
  );
}
