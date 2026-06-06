import Link from "next/link";
import Reveal from "./GSAPReveal";
import { FAQS } from "@/data/faqs";

// Curated "how it works" questions for the home page (full list lives on /contact).
const HOME_FAQS = [
  FAQS[0].items[0], // How do I book a tour?
  FAQS[1].items[0], // What is the payment schedule?
  FAQS[1].items[2], // What does the price include?
  FAQS[2].items[0], // What size are your groups?
  FAQS[3].items[0], // I travel slowly because of my knees…
  FAQS[4].items[0], // What is the Senior Companion Service?
  FAQS[5].items[0], // What is your cancellation policy?
];

export default function HomeFAQ() {
  return (
    <section className="site-section home-faq">
      <div className="site-container home-faq__inner">
        <Reveal from="bottom">
          <h2 className="home-faq__title">Frequently Asked Questions</h2>
          <div className="home-faq__rule" aria-hidden="true" />
        </Reveal>

        <Reveal from="bottom" delay={1}>
          <div className="home-faq__list">
            {HOME_FAQS.map((item) => (
              <details className="home-faq__item" name="home-faq" key={item.q}>
                <summary className="home-faq__q">
                  <span>{item.q}</span>
                  <span className="home-faq__icon" aria-hidden="true" />
                </summary>
                <div className="home-faq__a">{item.a}</div>
              </details>
            ))}
          </div>

          <div className="home-faq__more">
            <Link href="/contact" className="home-faq__viewall">
              View all FAQs
            </Link>
          </div>
        </Reveal>
      </div>

      <style>{`
        .home-faq { position: relative; overflow: hidden; }
        .home-faq__inner { position: relative; z-index: 1; max-width: 64rem; }
        .is-site .home-faq__title {
          font-family: var(--font-fraunces), serif;
          font-size: clamp(1.875rem, 3.5vw, 2.75rem);
          font-weight: 600;
          color: #111111;
          letter-spacing: -0.01em;
          margin: 0;
          text-align: left;
        }
        .home-faq__rule {
          height: 1px;
          background: var(--heritage-gold);
          margin-top: 1rem;
        }

        .home-faq__list { margin-top: 0.5rem; }
        .home-faq__item { border-bottom: 1px solid var(--heritage-line); }

        .home-faq__q {
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 1.4rem 0;
          cursor: pointer;
          font-family: var(--font-fraunces), serif;
          font-size: clamp(1.0625rem, 1.6vw, 1.3125rem);
          color: var(--heritage-ink);
          transition: color 0.25s ease;
        }
        .home-faq__q::-webkit-details-marker { display: none; }
        .home-faq__q::marker { content: ""; }
        .home-faq__item:hover .home-faq__q { color: var(--heritage-gold); }

        /* + / – icon built from two bars */
        .home-faq__icon {
          position: relative;
          flex: 0 0 auto;
          width: 1.125rem;
          height: 1.125rem;
        }
        .home-faq__icon::before,
        .home-faq__icon::after {
          content: "";
          position: absolute;
          background: var(--heritage-ink);
          transition: opacity 0.25s ease, transform 0.25s ease, background 0.25s ease;
        }
        .home-faq__icon::before {
          top: 50%;
          left: 0;
          right: 0;
          height: 1.5px;
          transform: translateY(-50%);
        }
        .home-faq__icon::after {
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1.5px;
          transform: translateX(-50%);
        }
        .home-faq__item[open] .home-faq__icon::after { opacity: 0; }
        .home-faq__item:hover .home-faq__icon::before,
        .home-faq__item:hover .home-faq__icon::after { background: var(--heritage-gold); }

        .is-site .home-faq__a {
          color: var(--heritage-sub);
          font-size: 1rem;
          line-height: 1.75;
          max-width: 60ch;
          margin: 0;
          padding: 0 0 1.5rem;
        }

        .home-faq__more {
          margin-top: 2.5rem;
          text-align: center;
        }
        .is-site .home-faq__viewall {
          font-family: var(--font-poppins), sans-serif;
          font-size: 0.95rem;
          color: var(--heritage-ink);
          text-decoration: underline;
          text-underline-offset: 0.35rem;
          transition: color 0.25s ease;
        }
        .is-site .home-faq__viewall:hover { color: var(--heritage-gold); }

        @media (prefers-reduced-motion: no-preference) {
          .home-faq__a { animation: faqFade 0.35s ease both; }
          @keyframes faqFade { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }
        }
      `}</style>
    </section>
  );
}
