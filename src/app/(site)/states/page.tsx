import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/GSAPReveal";
import BreadcrumbTrail from "@/components/site/BreadcrumbTrail";
import { STATES } from "@/data/states";
import { templesByState } from "@/data/temples";
import { circuitsByState } from "@/data/circuits";
import { packagesByState } from "@/data/packages";

export const metadata: Metadata = {
  title: "Five South Indian States",
  description:
    "Sanchaari covers Tamil Nadu, Kerala, Karnataka, Andhra Pradesh and Telangana. Choose a state to explore its signature temples, circuits and tours.",
};

export default function StatesHubPage() {
  return (
    <>
      <section className="site-section states-hero">
        <div className="site-container">
          <BreadcrumbTrail
            items={[{ label: "Home", href: "/" }, { label: "States" }]}
          />
          <Reveal>
            <span className="eyebrow">Five states, one journey</span>
            <h1>Begin from a state you love.</h1>
            <p className="section-lead">
              We travel deeply within Tamil Nadu, Kerala, Karnataka, Andhra
              Pradesh and Telangana. Choose a state to see its signature
              temples, the circuits we run there, and the tours that cover them.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="site-section" style={{ paddingTop: 0 }}>
        <div className="site-container site-container--wide">
          <div className="states-grid">
            {STATES.map((state, i) => {
              const templeCount = templesByState(state.slug).length;
              const circuitCount = circuitsByState(state.slug).length;
              const pkgCount = packagesByState(state.slug).length;
              return (
                <Reveal key={state.slug} delay={(i % 4) as 0 | 1 | 2 | 3}>
                  <Link href={`/states/${state.slug}`} className="state-card">
                    <div className="state-card__media">
                      <Image
                        src={state.hero}
                        alt=""
                        fill
                        sizes="(max-width: 900px) 100vw, 50vw"
                        style={{ objectFit: "cover" }}
                      />
                      <div className="state-card__shade" aria-hidden="true" />
                    </div>
                    <div className="state-card__body">
                      <h3 className="state-card__name">{state.name}</h3>
                      <p className="state-card__tag">{state.tagline}</p>
                      <ul className="state-card__stats">
                        <li>{templeCount} temples</li>
                        <li>{circuitCount} circuits</li>
                        <li>{pkgCount} tours</li>
                      </ul>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .states-hero h1 { max-width: 22ch; margin-block: 0.5rem 1.25rem; }
        .states-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
          gap: 1.5rem;
        }
        .state-card {
          position: relative;
          display: block;
          color: #fff;
          text-decoration: none;
          border-radius: var(--radius-lg);
          overflow: hidden;
          aspect-ratio: 4 / 5;
          background: var(--heritage-cream-2);
          transition: transform var(--transition-medium), box-shadow var(--transition-medium);
        }
        .state-card:hover {
          color: #fff;
          transform: translateY(-5px);
          box-shadow: var(--heritage-shadow-lg);
        }
        .state-card__media {
          position: absolute;
          inset: 0;
        }
        .state-card__media :global(img) {
          transition: transform 1.2s ease;
        }
        .state-card:hover .state-card__media :global(img) {
          transform: scale(1.06);
        }
        .state-card__shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.75) 100%);
        }
        .state-card__body {
          position: absolute;
          inset: auto 0 0 0;
          padding: 1.75rem;
          z-index: 2;
        }
        .state-card__name {
          font-family: var(--font-fraunces), serif;
          font-size: clamp(1.75rem, 2.6vw, 2.25rem);
          color: #fff;
          font-weight: 600;
          margin-bottom: 0.375rem;
        }
        .state-card__tag {
          font-family: var(--font-fraunces);
          font-style: italic;
          color: var(--heritage-gold);
          font-size: 1rem;
          margin: 0 0 0.75rem;
        }
        .state-card__stats {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1rem;
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 0.875rem;
          color: rgba(255,255,255,0.85);
        }
        .state-card__stats li { padding: 0.25rem 0.625rem; background: rgba(255,255,255,0.15); border-radius: var(--radius-pill); }
      `}</style>
    </>
  );
}
