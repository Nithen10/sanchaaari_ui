import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import Testimonials from "./Testimonials";
import HomeCelebrations from "./HomeCelebrations";
import HomeItineraries from "./HomeItineraries";
import Reveal from "./GSAPReveal";
import { STATES } from "@/data/states";
import { TESTIMONIALS } from "@/data/testimonials";

export default function HomeBelow() {
  return (
    <div className="home-below is-site" id="home-below">
      <SiteHeader />

      <HomeItineraries />

      <section className="site-section site-section--cream2 home-states-section">
        <div className="site-container">
          <Reveal className="home-states__head">
            <span className="eyebrow">Five South Indian states</span>
            <h2 className="section-title home-states__title">
              Five states. A thousand stories.
            </h2>
            <p className="section-lead home-states__lead">
              Each one carved by centuries of devotion, craft, and quiet
              hospitality. Choose where your journey begins — we&rsquo;ll plan
              the rest.
            </p>
          </Reveal>
          <div className="home-states">
            {STATES.map((state, i) => (
              <Reveal key={state.slug} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <Link href={`/states/${state.slug}`} className="home-state-card">
                  <div className="home-state-card__media">
                    <Image
                      src={state.hero}
                      alt=""
                      fill
                      sizes="(max-width: 720px) 50vw, 20vw"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="home-state-card__shade" aria-hidden="true" />
                  </div>
                  <div className="home-state-card__body">
                    <h3>{state.name}</h3>
                    <p>{state.tagline}</p>
                    <span className="home-state-card__cta">
                      <span>Explore Now</span>
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        aria-hidden="true"
                        className="home-state-card__cta-arrow"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14M13 6l6 6-6 6"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HomeCelebrations />

      <section className="site-section">
        <div className="site-container">
          <Testimonials
            items={TESTIMONIALS.slice(0, 3)}
            heading="What travellers tell us"
            intro="A few words from those who travelled with us recently."
          />
          <div className="home-featured__more">
            <Link href="/about" className="btn btn--ghost">
              Read more about Sanchaari
            </Link>
          </div>
        </div>
      </section>

      <section className="site-section site-section--ink home-final-cta">
        <div className="site-container home-final-cta__inner">
          <Reveal>
            <span className="eyebrow">Ready when you are</span>
            <h2>Plan a journey at your own pace.</h2>
            <p>
              Tell us where you&rsquo;d like to go and we&rsquo;ll build the
              itinerary around it, including darshan arrangements, a senior
              companion if you&rsquo;d like one, and everything between
              pick-up and drop-off.
            </p>
            <div className="home-final-cta__buttons">
              <Link href="/tours/custom" className="btn btn--primary btn--lg">
                Customize a trip
              </Link>
              <Link href="/contact" className="btn btn--ghost btn--lg">
                Talk to a planner
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />

      <style>{`
        /* Cover the body teal that bleeds through during fast scroll
           transitions on the home page only. */
        .home-below {
          background: var(--heritage-cream);
          position: relative;
          z-index: 1;
        }
        .home-featured__more {
          margin-top: 2.25rem;
          text-align: center;
        }
        .home-states-section > .site-container {
          max-width: none;
          padding-inline: clamp(1rem, 3vw, 3rem);
        }
        @media (min-width: 961px) {
          .home-states-section {
            min-height: 100svh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-block: clamp(2rem, 5vh, 4rem);
          }
        }
        .home-states__head {
          text-align: center;
          margin-bottom: 5rem;
        }
        .home-states__head .eyebrow {
          justify-content: center;
        }
        .is-site .home-states__title {
          font-family: var(--font-fraunces), serif;
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 700;
          color: var(--heritage-ink);
          letter-spacing: -0.025em;
          line-height: 1;
          margin: 0.5rem 0 0.75rem;
        }
        .is-site .home-states__lead {
          margin-inline: auto;
          max-width: 44rem;
          font-size: clamp(1.0625rem, 1.15vw, 1.1875rem);
          color: var(--heritage-sub);
        }
        .home-states {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0.75rem;
        }
        .home-state-card {
          position: relative;
          display: block;
          color: #fff;
          text-decoration: none;
          border-radius: var(--radius-lg);
          overflow: hidden;
          aspect-ratio: 3 / 4;
          background: var(--heritage-cream-2);
          box-shadow: 0 0 2.5rem -0.9375rem rgba(0, 95, 115, 0.45);
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .home-state-card:hover {
          color: #fff;
          box-shadow: 0 0 3.75rem -0.9375rem rgba(0, 95, 115, 0.7);
        }
        .home-state-card__media { position: absolute; inset: 0; }
        .home-state-card__media img {
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .home-state-card:hover .home-state-card__media img {
          transform: scale(1.10);
        }
        .home-state-card__shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.25) 30%,
            transparent 55%
          );
        }
        .home-state-card__body {
          position: absolute;
          inset: auto 0 0 0;
          padding: 1.5rem;
          z-index: 2;
        }
        .home-state-card__body h3 {
          font-family: var(--font-fraunces), serif;
          color: #fff;
          font-size: 1.5rem;
          margin-bottom: 0.125rem;
          font-weight: 700;
          letter-spacing: -0.01em;
        }
        .home-state-card__body p {
          font-family: var(--font-fraunces);
          font-style: italic;
          color: var(--heritage-gold);
          font-size: 0.8125rem;
          margin: 0;
        }
        .home-state-card__cta {
          margin-top: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          font-family: var(--font-poppins);
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: #ffffff;
        }
        .home-state-card__cta-arrow {
          transition: transform 0.3s ease;
        }
        .home-state-card:hover .home-state-card__cta-arrow {
          transform: translateX(0.25rem);
        }
        .home-final-cta__inner {
          max-width: 42rem;
          margin: 0 auto;
          text-align: center;
        }
        .home-final-cta h2 { margin-bottom: 0.75rem; }
        .home-final-cta p { font-size: var(--font-size-lg); margin-bottom: 1.75rem; }
        .home-final-cta__buttons {
          display: inline-flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        @media (max-width: 960px) {
          .home-states { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .home-states { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </div>
  );
}
