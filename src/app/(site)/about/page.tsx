import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/GSAPReveal";
import BreadcrumbTrail from "@/components/site/BreadcrumbTrail";
import Testimonials from "@/components/site/Testimonials";
import CountUp from "@/components/site/CountUp";
import { TESTIMONIALS } from "@/data/testimonials";
import { STATES } from "@/data/states";
import { TEMPLES } from "@/data/temples";
import { PACKAGES } from "@/data/packages";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Sanchaari crafts thoughtfully designed temple and heritage journeys across the five South-Indian states, with a special focus on senior travellers and the dedicated companion service.",
};

const PILLARS = [
  {
    title: "Verified companions",
    body:
      "Every travel companion is background-checked, first-aid trained, and matched on language, gender preference and care needs.",
  },
  {
    title: "Door-to-door support",
    body:
      "From the moment we pick you up to the moment we drop you home: pickups, paperwork, luggage, every small thing handled.",
  },
  {
    title: "Heritage-first itineraries",
    body:
      "Crafted around sacred timings, festivals, dress codes and crowds, not airline schedules. Built by people who study these temples.",
  },
  {
    title: "Senior wellness focus",
    body:
      "Walking distances kept short, lifts and wheelchairs arranged in advance, sattvic meals and doctor-on-call across every multi-day tour.",
  },
];

export default function AboutPage() {
  const stats = [
    { target: 5, suffix: "", label: "South-Indian states" },
    { target: TEMPLES.length, suffix: "+", label: "Curated temples" },
    { target: 1200, suffix: "+", label: "Senior travellers served" },
    { target: PACKAGES.length, suffix: "+", label: "Hand-built itineraries" },
  ];

  return (
    <>
      <section className="site-section about-hero">
        <div className="site-container">
          <BreadcrumbTrail items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <Reveal>
            <span className="eyebrow">Who we are</span>
            <h1 className="about-hero__title">
              Journeys for those who travel to feel deeply at home.
            </h1>
            <p className="about-hero__lead">
              Sanchaari is an end-to-end travel and tours company dedicated to
              crafting exceptional journeys across India&rsquo;s most treasured
              heritage destinations. We specialise in thoughtfully designed
              itineraries that guide travellers through South India&rsquo;s
              richest temples, facilitating sacred darshans and immersive
              spiritual experiences at every stop.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="site-section site-section--cream2">
        <div className="site-container">
          <div className="grid-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="about-stat">
                  <span className="about-stat__value">
                    <CountUp target={s.target} suffix={s.suffix} />
                  </span>
                  <span className="about-stat__label">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container about-mission">
          <Reveal>
            <span className="eyebrow">Our promise</span>
            <h2>Why Sanchaari exists</h2>
          </Reveal>
          <Reveal delay={1}>
            <p>
              We organise both individual tours and group tours that
              comprehensively cover the major temples of a state, ensuring no
              sacred site is left unexplored. For our senior travellers we
              offer a personalised companion service: a dedicated travel
              assistant who accompanies them throughout the journey, attending
              to their every need and ensuring a comfortable, worry-free
              experience from start to finish.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p>
              Our mission is to ensure that every guest discovers the vibrant
              cultures, timeless traditions and profound heritage woven into
              the fabric of Bharat. They find inner peace, forge lasting
              memories, and gaining a deeper appreciation for one of the
              world&rsquo;s oldest living civilisations.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="site-section site-section--cream2">
        <div className="site-container">
          <Reveal>
            <span className="eyebrow">Our pillars</span>
            <h2 className="section-title">Four things we refuse to compromise on</h2>
          </Reveal>
          <div className="grid-2 about-pillars">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <article className="about-pillar">
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <Reveal>
            <span className="eyebrow">Where we travel</span>
            <h2 className="section-title">Five South-Indian states. One unhurried journey.</h2>
            <p className="section-lead">
              We focus on Tamil Nadu, Kerala, Karnataka, Andhra Pradesh and
              Telangana, and the cross-state circuits that connect them.
            </p>
          </Reveal>
          <div className="about-states">
            {STATES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <Link href={`/states/${s.slug}`} className="about-state-card card">
                  <div className="card__media">
                    <Image
                      src={s.hero}
                      alt={s.name}
                      fill
                      sizes="(max-width: 540px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="card__body">
                    <h3 className="card__title">{s.name}</h3>
                    <p className="about-state-card__tag">{s.tagline}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section site-section--ink">
        <div className="site-container">
          <Testimonials
            items={TESTIMONIALS.slice(0, 4)}
            heading="Travellers we&rsquo;ve had the privilege to guide"
            intro="A few words from those who travelled with us recently."
          />
        </div>
      </section>

      <section className="site-section about-cta">
        <div className="site-container about-cta__inner">
          <Reveal>
            <h2>Ready to plan a journey?</h2>
            <p>
              Talk to a Sanchaari planner. No obligation, just a calm
              conversation about where you&rsquo;d like to go.
            </p>
            <div className="about-cta__buttons">
              <Link href="/tours" className="btn btn--primary btn--lg">
                Browse tours
              </Link>
              <Link href="/contact" className="btn btn--ghost btn--lg">
                Talk to us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        .about-hero { padding-block: clamp(3rem, 7vw, 5.5rem); }
        .about-hero__title {
          max-width: 32ch;
          margin-block: 0.75rem 1.5rem;
        }
        .about-hero__lead {
          max-width: 56ch;
          font-size: var(--font-size-lg);
          color: var(--heritage-sub);
        }
        .about-stat {
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-radius: var(--radius-lg);
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: flex-start;
          height: 100%;
        }
        .about-stat__value {
          font-family: var(--font-fraunces), serif;
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          color: var(--heritage-rust);
          font-weight: 600;
          line-height: 1;
        }
        .about-stat__label {
          font-family: var(--font-poppins);
          font-size: 0.9375rem;
          color: var(--heritage-sub);
        }
        .about-mission {
          max-width: 56rem;
        }
        .about-mission p { font-size: var(--font-size-lg); margin-bottom: 1.25rem; }
        .about-pillar {
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-left: 4px solid var(--heritage-rust);
          border-radius: var(--radius-lg);
          padding: 1.75rem 1.75rem 2rem;
        }
        .about-pillar h3 {
          font-family: var(--font-fraunces), serif;
          font-size: 1.375rem;
          color: var(--heritage-ink);
          margin-bottom: 0.5rem;
        }
        .about-states {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));
          gap: 1.25rem;
          margin-top: 1.5rem;
        }
        .about-state-card { text-decoration: none; }
        .about-state-card__tag {
          font-family: var(--font-fraunces);
          font-style: italic;
          color: var(--heritage-rust);
          font-size: 0.9375rem;
        }
        .about-cta { background: var(--heritage-cream); }
        .about-cta__inner { text-align: center; max-width: 36rem; margin-inline: auto; }
        .about-cta h2 { margin-bottom: 0.75rem; }
        .about-cta p { font-size: var(--font-size-lg); margin-bottom: 1.5rem; }
        .about-cta__buttons {
          display: inline-flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
