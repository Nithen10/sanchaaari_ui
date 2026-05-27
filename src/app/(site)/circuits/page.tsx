import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/GSAPReveal";
import BreadcrumbTrail from "@/components/site/BreadcrumbTrail";
import { CIRCUITS } from "@/data/circuits";
import { STATES } from "@/data/states";

export const metadata: Metadata = {
  title: "Temple Circuits",
  description:
    "Curated South Indian temple circuits: Pancha Bhoota Sthalams, South Char Dham, Jyotirlinga, Great Living Cholas, Konkan Shiva coast, and more.",
};

export default function CircuitsHubPage() {
  return (
    <>
      <section className="site-section circuits-hero">
        <div className="site-container">
          <BreadcrumbTrail
            items={[{ label: "Home", href: "/" }, { label: "Circuits" }]}
          />
          <Reveal>
            <span className="eyebrow">Themed temple journeys</span>
            <h1>Circuits that have shaped pilgrimage for centuries.</h1>
            <p className="section-lead">
              Some journeys are not destinations but sequences. The Pancha
              Bhoota Sthalams, South Char Dham, Jyotirlinga trail. These are
              the great threaded pilgrimages of South India. Pick one to see
              the temples, suggested duration, and tours that already cover it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Primer: what is a circuit? */}
      <section className="site-section site-section--cream2 circuits-primer">
        <div className="site-container">
          <Reveal>
            <span className="eyebrow">A quick primer</span>
            <h2 className="section-title">What is a temple circuit?</h2>
            <p className="section-lead">
              If you are new to South-Indian pilgrimage, these three points will
              help you read the rest of this page.
            </p>
          </Reveal>
          <div className="circuits-primer__grid">
            <Reveal delay={1}>
              <article className="primer-card">
                <span className="primer-card__num">01</span>
                <h3>A traditional sequence</h3>
                <p>
                  Pilgrims have visited certain temples together, in a specific
                  order, for centuries. Each circuit follows a theological
                  logic: five elements, nine planets, four cardinal poles, or
                  the twelve self-manifested Shiva shrines.
                </p>
              </article>
            </Reveal>
            <Reveal delay={2}>
              <article className="primer-card">
                <span className="primer-card__num">02</span>
                <h3>Why the order matters</h3>
                <p>
                  The traditional sequence is not random. The Pancha Bhoota
                  Sthalams trace the five elements through the Tamil land. The
                  South Char Dham frames the southern subcontinent in four
                  directions. Following the order is itself part of the
                  practice and is said to deepen the experience.
                </p>
              </article>
            </Reveal>
            <Reveal delay={3}>
              <article className="primer-card">
                <span className="primer-card__num">03</span>
                <h3>How a Sanchaari circuit works</h3>
                <p>
                  We pre-book the senior-darshan slots, arrange transport
                  between stops, and brief you the evening before each temple
                  on its dress code, rituals and significance. You stay rested
                  and present. We handle the logistics.
                </p>
              </article>
            </Reveal>
          </div>
          <Reveal delay={4}>
            <div className="circuits-primer__anatomy">
              <p className="primer-anatomy__label">Anatomy of a circuit page</p>
              <ol className="primer-anatomy__steps">
                <li><strong>The story.</strong> Cultural background and why this circuit exists.</li>
                <li><strong>Stops in order.</strong> Each temple along the route with brief notes.</li>
                <li><strong>Practical pacing.</strong> How many days you need for a comfortable, steady or express journey.</li>
                <li><strong>Tours that cover it.</strong> Ready-to-book Sanchaari packages running this circuit.</li>
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-section" style={{ paddingTop: 0 }}>
        <div className="site-container site-container--wide">
          <Reveal>
            <span className="eyebrow">All circuits</span>
            <h2 className="section-title">Pick a circuit to explore</h2>
          </Reveal>
          <div className="grid-cards">
            {CIRCUITS.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <Link href={`/circuits/${c.slug}`} className="circuit-card card">
                  <div className="card__media">
                    <Image
                      src={c.heroImage}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 90vw, 22rem"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="card__body">
                    <h3 className="card__title">{c.name}</h3>
                    <p className="circuit-card__theme">{c.theme}</p>
                    <p className="circuit-card__intro">{c.intro}</p>
                    <ul className="circuit-card__meta">
                      <li>{c.templeSlugs.length} temples</li>
                      <li>{c.suggestedDays} days</li>
                      <li>
                        {c.states
                          .map((s) => STATES.find((x) => x.slug === s)?.name)
                          .join(" · ")}
                      </li>
                    </ul>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .circuits-hero h1 { max-width: 28ch; margin-block: 0.5rem 1.25rem; }
        .circuits-primer { padding-block: clamp(3rem, 6vw, 5rem); }
        .circuits-primer__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(18rem, 100%), 1fr));
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        .primer-card {
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          position: relative;
          height: 100%;
        }
        .primer-card__num {
          font-family: var(--font-fraunces), serif;
          font-size: 2rem;
          font-weight: 600;
          color: var(--heritage-gold);
          display: block;
          margin-bottom: 0.75rem;
        }
        .primer-card h3 { font-family: var(--font-fraunces), serif; font-size: 1.25rem; margin-bottom: 0.5rem; }
        .circuits-primer__anatomy {
          background: var(--heritage-ivory);
          border-left: 4px solid var(--heritage-rust);
          padding: 1.5rem 1.75rem;
          border-radius: var(--radius-md);
        }
        .primer-anatomy__label {
          font-family: var(--font-poppins);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--heritage-rust);
          margin: 0 0 0.75rem;
        }
        .primer-anatomy__steps {
          margin: 0;
          padding-left: 1.25rem;
          display: grid;
          gap: 0.5rem;
          font-size: 0.9375rem;
        }
        .primer-anatomy__steps li::marker { color: var(--heritage-gold); }
        .circuit-card { text-decoration: none; }
        .circuit-card__theme {
          font-family: var(--font-fraunces);
          font-style: italic;
          color: var(--heritage-rust);
          font-size: 0.9375rem;
          margin: 0;
        }
        .circuit-card__intro {
          color: var(--heritage-sub);
          font-size: 0.9375rem;
          line-height: 1.55;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .circuit-card__meta {
          list-style: none;
          padding: 0;
          margin: 0.5rem 0 0;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1rem;
          font-size: 0.8125rem;
          color: var(--heritage-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
      `}</style>
    </>
  );
}
