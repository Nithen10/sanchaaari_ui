import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import Testimonials from "./Testimonials";
import HomeCelebrations from "./HomeCelebrations";
import HomeItineraries from "./HomeItineraries";
import HomeAbout from "./HomeAbout";
import HomeFAQ from "./HomeFAQ";
import HomeJourney from "./HomeJourney";
import TornDivider from "./TornDivider";
import Reveal from "./GSAPReveal";
import { STATES } from "@/data/states";
import { TESTIMONIALS } from "@/data/testimonials";

export default function HomeBelow() {
  return (
    <div className="home-below is-site" id="home-below">
      <SiteHeader />

      <HomeAbout />

      <TornDivider seed={2} color="var(--paper-1)" />

      <section className="site-section home-states-section">
        <div className="site-container home-states__wrap">
          <Reveal className="home-states__head">
            <span className="eyebrow">Five South Indian states</span>
            <h2 className="section-title home-states__title">
              Five states.{" "}
              <span className="home-states__title-accent">
                A thousand stories.
              </span>
            </h2>
            <p className="section-lead home-states__lead">
              Each one carved by centuries of devotion, craft, and quiet
              hospitality. Choose where your journey begins, and we&rsquo;ll plan
              the rest.
            </p>
          </Reveal>
          <div className="home-states">
            {STATES.map((state, i) => (
              <Reveal key={state.slug} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <Link
                  href={`/states/${state.slug}`}
                  className="home-state-card"
                  aria-label={`${state.name} — explore`}
                >
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
                    <ul className="home-state-card__list">
                      {state.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                    <div className="home-state-card__foot">
                      <div className="home-state-card__tags">
                        {state.tags.map((t) => (
                          <span key={t} className="home-state-card__tag">
                            {t}
                          </span>
                        ))}
                      </div>
                      <span
                        className="home-state-card__go"
                        aria-hidden="true"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          className="home-state-card__go-arrow"
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
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TornDivider seed={3} color="#2d2d2d" />

      <HomeCelebrations />

      <TornDivider seed={4} color="var(--paper-1)" />

      <HomeItineraries />

      <TornDivider seed={6} color="#2d2d2d" />

      <HomeJourney />

      <TornDivider seed={7} color="var(--paper-1)" />

      <section className="site-section home-tmt">
        <div className="site-container home-tmt__wrap">
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

      <TornDivider seed={8} color="#2d2d2d" />

      <HomeFAQ />

      <SiteFooter />

      <style>{`
        /* Cover the body teal that bleeds through during fast scroll
           transitions on the home page only. */
        .home-below {
          --paper-1: #f4f2ef;
          --paper-2: #ede9e4;
          background: var(--heritage-cream);
          position: relative;
          z-index: 1;
        }
        /* faint paper fiber texture across the parchment home */
        .home-below::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image: radial-gradient(rgba(134, 109, 75, 0.05) 1px, transparent 1px);
          background-size: 24px 24px;
          opacity: 0.5;
        }
        .home-below > * { position: relative; z-index: 1; }
        .home-below > .torn { z-index: 3; }
        .home-featured__more {
          margin-top: 2.25rem;
          text-align: center;
        }
        .home-states-section {
          background: #2d2d2d;
          position: relative;
          overflow: hidden;
        }
        .home-states__wrap { position: relative; z-index: 1; }
        .home-tmt { position: relative; overflow: hidden; background: #2d2d2d; }
        .home-tmt__wrap { position: relative; z-index: 1; }
        /* dark torn-paper treatment for reviews — readable text */
        .is-site .home-tmt .section-title { color: #ffffff; }
        .is-site .home-tmt .section-lead { color: rgba(255, 255, 255, 0.72); }
        .is-site .home-tmt .eyebrow { color: var(--accent-orange); }
        .is-site .home-tmt .btn--ghost { color: #fff; border-color: rgba(255, 255, 255, 0.55); }
        .is-site .home-tmt .btn--ghost:hover { background: #fff; color: #1b1a18; border-color: #fff; }
        .home-states-section > .site-container {
          max-width: 108rem;
          margin-inline: auto;
        }
        @media (min-width: 961px) {
          .home-states-section {
            padding-block-start: clamp(4rem, 9vh, 6rem);
            padding-block-end: clamp(2rem, 5vh, 4rem);
          }
        }
        .home-states__head {
          text-align: center;
          margin-bottom: 4rem;
        }
        .home-states__head .eyebrow {
          justify-content: center;
          color: var(--accent-orange);
        }
        .is-site .home-states__title {
          font-family: var(--font-poppins), sans-serif;
          font-size: clamp(2.25rem, 5vw, 4rem);
          font-weight: 700;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.01em;
          line-height: 1.05;
          margin: 0.5rem 0 0.75rem;
        }
        .home-states__title-accent {
          color: var(--accent-orange);
        }
        .is-site .home-states__lead {
          margin-inline: auto;
          max-width: 44rem;
          font-size: clamp(1.0625rem, 1.15vw, 1.1875rem);
          color: rgba(255, 255, 255, 0.7);
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
          aspect-ratio: 6 / 7;
          background: var(--heritage-cream-2);
          box-shadow: 0 0 2.5rem -0.9375rem rgba(0, 0, 0, 0.35);
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .home-state-card:hover {
          color: #fff;
          box-shadow: 0 0 3.75rem -0.9375rem rgba(0, 0, 0, 0.55);
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
            rgba(0, 0, 0, 0.85) 0%,
            rgba(0, 0, 0, 0.5) 30%,
            transparent 65%
          );
        }
        .home-state-card__body {
          position: absolute;
          inset: auto 0 0 0;
          padding: 1.25rem;
          z-index: 2;
        }
        .home-state-card__body h3 {
          font-family: var(--font-poppins), sans-serif;
          color: #fff;
          font-size: 1.125rem;
          margin: 0;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }
        .home-state-card__list {
          list-style: none;
          padding: 0;
          margin: 0.5rem 0 0;
          display: flex;
          flex-direction: column;
          gap: 0.28rem;
        }
        .home-state-card__list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-poppins);
          font-size: 0.78rem;
          line-height: 1.3;
          color: rgba(255, 255, 255, 0.92);
        }
        .home-state-card__list li::before {
          content: "";
          flex-shrink: 0;
          width: 0.3rem;
          height: 0.3rem;
          border-radius: 50%;
          background: var(--accent-orange);
        }
        .home-state-card__foot {
          margin-top: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
        }
        .home-state-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .home-state-card__tag {
          padding: 0.3rem 0.7rem;
          font-family: var(--font-poppins);
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: #fff;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.28);
          border-radius: var(--radius-pill);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .home-state-card__go {
          flex-shrink: 0;
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #2d2d2d;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .home-state-card:hover .home-state-card__go {
          background: #fff;
          transform: scale(1.06);
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
