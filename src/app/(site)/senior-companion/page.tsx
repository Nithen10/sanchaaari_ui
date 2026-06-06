import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/GSAPReveal";
import BreadcrumbTrail from "@/components/site/BreadcrumbTrail";
import InquiryForm from "@/components/site/InquiryForm";
import Testimonials from "@/components/site/Testimonials";
import FAQ from "@/components/site/FAQ";
import CompanionMatch from "@/components/site/CompanionMatch";
import { TESTIMONIALS } from "@/data/testimonials";
import { COMPANION_TIERS, COMPANION_FAQS } from "@/data/companions";
import { formatINR } from "@/lib/format";
import { buildWhatsAppUrl } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Senior Companion Service",
  description:
    "A trained, verified travel companion who accompanies your senior loved one through every step of the journey. Standard, Premium and Specialist tiers, matched on language, gender and care needs.",
};

const DAY_ONE = [
  { time: "Morning", title: "Meet at the airport", body: "Your companion is at arrivals with a name placard, helps with luggage, and arranges a calm transfer." },
  { time: "Mid-morning", title: "Briefing over coffee", body: "Medications, dietary needs, dress codes for the temples ahead, and any concerns you want to share." },
  { time: "Afternoon", title: "Rest at the hotel", body: "Companion sets up the room, lays out medications, briefs the housekeeping team, and gives you space to rest." },
  { time: "Early evening", title: "Short orientation walk", body: "A gentle walk around the neighbourhood to set bearings. Companion stays by your side throughout." },
  { time: "Night", title: "On-call until you sleep", body: "Companion remains reachable through the night for water, medication or anything you need." },
];

const COMPARISONS = [
  { task: "Airport arrival", solo: "Arrange your own pickup, find the taxi yourself.", withC: "Companion meets you at arrivals and handles transfer." },
  { task: "Medication", solo: "Remember every dose yourself or set a phone alarm.", withC: "Companion sets out doses daily and reminds at each interval." },
  { task: "Darshan queue", solo: "Stand in the main queue, often more than an hour.", withC: "Pre-booked senior-darshan slot or special-entry queue." },
  { task: "Language", solo: "Hope the priest or driver speaks your language.", withC: "Companion translates in your mother tongue." },
  { task: "Photography", solo: "Ask strangers or struggle with the phone.", withC: "Companion captures every meaningful moment, sends to family daily." },
  { task: "Night emergencies", solo: "Wake up family, call hotel desk, manage alone.", withC: "Companion is on call and reachable within minutes." },
];

export default function SeniorCompanionPage() {
  const seniorReviews = TESTIMONIALS.filter((t) => t.forSenior);

  return (
    <>
      <section className="sc-hero">
        <div className="sc-hero__media">
          <Image
            src="https://images.unsplash.com/photo-1567010807122-b0db7dd45a4f?w=2400&q=85&auto=format&fit=crop"
            alt=""
            fill
            sizes="100vw"
            className="kenburns"
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="sc-hero__shade" aria-hidden="true" />
        </div>
        <div className="site-container sc-hero__inner">
          <BreadcrumbTrail
            items={[{ label: "Home", href: "/" }, { label: "Companion service" }]}
          />
          <span className="eyebrow sc-hero__eyebrow">Senior companion service</span>
          <h1 className="sc-hero__title">A trained companion. From your door, to darshan, and back.</h1>
          <p className="sc-hero__lead">
            For senior travellers, a personal travel assistant accompanies the
            entire journey. They handle the small things so the family can be
            present for the big ones. Pick a tier, choose a language and gender
            match, and we will introduce two or three companions for you to
            choose from before the trip begins.
          </p>
        </div>
      </section>

      {/* Three tiers */}
      <section className="site-section sc-tiers">
        <div className="site-container">
          <Reveal>
            <span className="eyebrow">Pick a tier</span>
            <h2 className="section-title">Three levels of companion support</h2>
            <p className="section-lead">
              Different travellers need different levels of care. Pick the tier
              that matches your situation. You can change the tier later if
              your needs change.
            </p>
          </Reveal>
          <div className="sc-tier-grid">
            {COMPANION_TIERS.map((tier, i) => (
              <Reveal key={tier.id} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <article className={`sc-tier-card sc-tier-card--${tier.id}`}>
                  <header>
                    <span className="sc-tier-card__name">{tier.name}</span>
                    {tier.id === "premium" && <span className="badge badge--gold">Most chosen</span>}
                  </header>
                  <p className="sc-tier-card__best">{tier.bestFor}</p>
                  <div className="sc-tier-card__price">
                    <span className="sc-tier-card__price-label">Adds to base tour</span>
                    <strong>{formatINR(tier.dailyRate)}<small> / day</small></strong>
                  </div>
                  <ul className="sc-tier-card__includes">
                    {tier.includes.map((inc, j) => (
                      <li key={j}>{inc}</li>
                    ))}
                  </ul>
                  {tier.not.length > 0 && (
                    <ul className="sc-tier-card__excludes">
                      {tier.not.map((n, j) => (
                        <li key={j}>{n}</li>
                      ))}
                    </ul>
                  )}
                  <a
                    href={buildWhatsAppUrl(`Hello Sanchaari, I'd like the ${tier.name} companion tier (${formatINR(tier.dailyRate)} per day). Please share next steps.`)}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn--primary"
                  >
                    Choose {tier.name}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Match panel */}
      <section className="site-section site-section--cream2">
        <div className="site-container sc-match">
          <Reveal>
            <span className="eyebrow">Find your match</span>
            <h2 className="section-title">Match by language, gender and care needs</h2>
            <p className="section-lead">
              Pick what matters to your traveller. We will check availability
              and come back within hours with two or three companion profiles
              for you to choose from.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <CompanionMatch />
          </Reveal>
        </div>
      </section>

      {/* Day-1 timeline */}
      <section className="site-section">
        <div className="site-container">
          <Reveal>
            <span className="eyebrow">What day one looks like</span>
            <h2 className="section-title">From the airport to bedtime, one calm day</h2>
            <p className="section-lead">
              Here is how the first day of your tour unfolds when a Sanchaari
              companion is travelling alongside.
            </p>
          </Reveal>
          <ol className="sc-day1">
            {DAY_ONE.map((step, i) => (
              <Reveal key={i} delay={(i % 4) as 0 | 1 | 2 | 3} as="li">
                <span className="sc-day1__time">{step.time}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Comparison */}
      <section className="site-section site-section--cream2">
        <div className="site-container">
          <Reveal>
            <span className="eyebrow">What changes</span>
            <h2 className="section-title">Travelling without a companion vs. with one</h2>
          </Reveal>
          <div className="sc-compare">
            <div className="sc-compare__row sc-compare__row--head">
              <div className="sc-compare__col sc-compare__col--task">Task</div>
              <div className="sc-compare__col sc-compare__col--solo">You handle alone</div>
              <div className="sc-compare__col sc-compare__col--with">With a Sanchaari companion</div>
            </div>
            {COMPARISONS.map((row, i) => (
              <Reveal
                key={i}
                as="div"
                className="sc-compare__row"
                delay={(i % 4) as 0 | 1 | 2 | 3}
              >
                <span className="sc-compare__col sc-compare__col--task">{row.task}</span>
                <span className="sc-compare__col sc-compare__col--solo">{row.solo}</span>
                <span className="sc-compare__col sc-compare__col--with">{row.withC}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="site-section">
        <div className="site-container">
          <Testimonials
            items={seniorReviews}
            heading="Senior travellers and their families"
            intro="A few words from those who have travelled with our companions."
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="site-section site-section--cream2">
        <div className="site-container sc-faq">
          <Reveal>
            <span className="eyebrow">Frequently asked</span>
            <h2 className="section-title">Common questions about companions</h2>
          </Reveal>
          <FAQ groups={[{ category: "Companions", items: COMPANION_FAQS }]} flatten />
        </div>
      </section>

      {/* Enquire */}
      <section className="site-section">
        <div className="site-container sc-enquire">
          <Reveal>
            <span className="eyebrow">Request a companion</span>
            <h2 className="section-title">Tell us a little about your traveller</h2>
            <p className="section-lead">
              We will suggest a companion match, usually within the day. No
              commitment until you are happy with the assignment.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <InquiryForm
              defaultPackage="Senior companion service"
              source="Senior Companion request"
              submitLabel="Request a companion on WhatsApp"
            />
          </Reveal>
          <p className="sc-enquire__see-tours">
            Already have a tour in mind?{" "}
            <Link href="/tours">Browse tours</Link> and add a companion at the
            booking step.
          </p>
        </div>
      </section>

      <style>{`
        .sc-hero {
          position: relative;
          color: #fff;
          min-height: clamp(22rem, 60vh, 30rem);
          display: flex;
          align-items: flex-end;
          padding-block: clamp(3rem, 7vw, 5rem);
        }
        .sc-hero__media { position: absolute; inset: 0; }
        .sc-hero__shade { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.78) 100%); }
        .sc-hero__inner { position: relative; z-index: 2; }
        .sc-hero__inner :global(.breadcrumbs),
        .sc-hero__inner :global(.breadcrumbs a) { color: rgba(255,255,255,0.78); }
        .sc-hero__inner :global(.breadcrumbs span[aria-current="page"]) { color: #fff; }
        .sc-hero__eyebrow { color: var(--heritage-gold); }
        .sc-hero__eyebrow::before { background: var(--heritage-gold); }
        .sc-hero__title { font-family: var(--font-fraunces); color: #fff; font-size: clamp(2.25rem, 4.6vw, 4rem); margin-block: 0.5rem 1rem; max-width: 24ch; }
        .sc-hero__lead { color: rgba(255,255,255,0.92); max-width: 56ch; font-size: var(--font-size-lg); }

        .sc-tier-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 900px) { .sc-tier-grid { grid-template-columns: 1fr; } }
        .sc-tier-card {
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-radius: var(--radius-lg);
          padding: 1.75rem 1.75rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
          height: 100%;
        }
        .sc-tier-card--premium {
          border-color: var(--heritage-rust);
          box-shadow: var(--heritage-shadow);
        }
        .sc-tier-card header { display: flex; justify-content: space-between; align-items: center; }
        .sc-tier-card__name { font-family: var(--font-fraunces), serif; font-size: 1.5rem; font-weight: 600; color: var(--heritage-ink); }
        .sc-tier-card__best { color: var(--heritage-sub); font-size: 0.9375rem; line-height: 1.5; margin: 0; }
        .sc-tier-card__price {
          border-top: 1px solid var(--heritage-line);
          border-bottom: 1px solid var(--heritage-line);
          padding: 0.875rem 0;
        }
        .sc-tier-card__price-label {
          font-family: var(--font-poppins);
          font-size: 0.6875rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--heritage-muted);
          display: block;
        }
        .sc-tier-card__price strong {
          font-family: var(--font-fraunces), serif;
          font-size: 1.875rem;
          font-weight: 600;
          color: var(--heritage-rust);
        }
        .sc-tier-card__price strong small { font-size: 0.875rem; color: var(--heritage-muted); font-weight: 500; }
        .sc-tier-card__includes,
        .sc-tier-card__excludes {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--heritage-sub);
        }
        .sc-tier-card__includes li {
          padding-left: 1.25rem;
          position: relative;
        }
        .sc-tier-card__includes li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--heritage-rust);
          font-weight: 700;
        }
        .sc-tier-card__excludes { margin-top: 0.25rem; }
        .sc-tier-card__excludes li {
          padding-left: 1.25rem;
          position: relative;
          color: var(--heritage-muted);
        }
        .sc-tier-card__excludes li::before { content: "−"; position: absolute; left: 0; }
        .sc-tier-card .btn { margin-top: auto; }

        .sc-match { max-width: 50rem; }

        .sc-day1 {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 1rem;
          counter-reset: day1;
        }
        .sc-day1 > li {
          display: grid;
          grid-template-columns: 8rem 1fr;
          gap: 1.5rem;
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-left: 4px solid var(--heritage-gold);
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-md);
        }
        .sc-day1__time {
          font-family: var(--font-poppins);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--heritage-rust);
          align-self: start;
        }
        .sc-day1 h3 { font-family: var(--font-fraunces), serif; font-size: 1.125rem; margin-bottom: 0.25rem; }
        .sc-day1 p { color: var(--heritage-sub); font-size: 0.9375rem; line-height: 1.55; margin: 0; }
        @media (max-width: 640px) {
          .sc-day1 > li { grid-template-columns: 1fr; gap: 0.375rem; }
        }

        .sc-compare {
          border: 1px solid var(--heritage-line);
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--heritage-ivory);
        }
        .sc-compare__row {
          display: grid;
          grid-template-columns: 1.1fr 1.4fr 1.5fr;
          border-bottom: 1px solid var(--heritage-line);
        }
        .sc-compare__row:last-child { border-bottom: none; }
        .sc-compare__col {
          padding: 1rem 1.25rem;
          font-size: 0.9375rem;
          line-height: 1.55;
          display: flex;
          align-items: center;
        }
        .sc-compare__col--task {
          color: var(--heritage-ink);
          font-weight: 600;
          background: var(--heritage-cream);
        }
        .sc-compare__col--solo { color: var(--heritage-muted); }
        .sc-compare__col--with {
          color: var(--heritage-ink);
          background: var(--heritage-rust-tint);
        }
        .sc-compare__row--head .sc-compare__col {
          background: var(--heritage-ink);
          color: var(--heritage-cream);
          font-family: var(--font-poppins);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 0.875rem 1.25rem;
        }
        .sc-compare__row--head .sc-compare__col--with {
          background: var(--heritage-rust);
        }
        @media (max-width: 720px) {
          .sc-compare__row {
            grid-template-columns: 1fr;
            padding: 0.5rem 0;
          }
          .sc-compare__row--head { display: none; }
          .sc-compare__col--task {
            background: var(--heritage-cream);
            padding-bottom: 0.5rem;
          }
          .sc-compare__col--solo::before {
            content: "Solo: ";
            font-weight: 700;
            color: var(--heritage-rust);
            margin-right: 0.375rem;
          }
          .sc-compare__col--with::before {
            content: "With companion: ";
            font-weight: 700;
            color: var(--heritage-rust);
            margin-right: 0.375rem;
          }
        }

        .sc-faq { max-width: 52rem; }
        .sc-enquire { max-width: 50rem; }
        .sc-enquire__see-tours { color: var(--heritage-muted); font-size: 0.9375rem; margin-top: 1.25rem; }
      `}</style>
    </>
  );
}
