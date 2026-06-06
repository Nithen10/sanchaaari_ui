"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "./GSAPReveal";

gsap.registerPlugin(ScrollTrigger);

const STOPS = [
  {
    title: "End-to-end journey planning",
    text: "Hotels, transfers, darshan slots and permits — arranged end to end so all you do is travel.",
    img: "https://images.unsplash.com/photo-1589707787376-98f208f4b307?w=1100&q=80&auto=format&fit=crop",
  },
  {
    title: "Senior Companion support",
    text: "A verified, first-aid-trained companion manages luggage, medicines, queues and comfort throughout.",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1100&q=80&auto=format&fit=crop",
  },
  {
    title: "24/7 assistance",
    text: "Real people on call around the clock — before, during and after your journey.",
    img: "https://images.unsplash.com/photo-1693205118032-9382f7267f55?w=1100&q=80&auto=format&fit=crop",
  },
  {
    title: "Darshan & temple arrangements",
    text: "Senior-darshan slots, dress-code guidance and special-entry queues, all handled for you.",
    img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1100&q=80&auto=format&fit=crop",
  },
];

export default function HomeJourney() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".hj-stop");
      cards.forEach((card) => {
        const photo = card.querySelector(".hj-stop__card");
        const num = card.querySelector(".hj-stop__num");
        const heading = card.querySelector(".hj-stop__body h3");
        const para = card.querySelector(".hj-stop__body p");

        if (reduced) {
          gsap.set([card, photo, num, heading, para], { clearProps: "all" });
          return;
        }

        const tl = gsap.timeline({
          scrollTrigger: { trigger: card, start: "top 82%", once: true },
        });

        tl.from(card, { autoAlpha: 0, y: 80, scale: 0.94, duration: 0.9, ease: "power3.out" })
          .from(
            photo,
            { clipPath: "inset(0 0 100% 0)", duration: 1.1, ease: "power3.out" },
            0,
          )
          .from(
            num,
            { autoAlpha: 0, scale: 0, duration: 0.6, ease: "back.out(1.7)" },
            "-=0.6",
          )
          .from(
            heading,
            { autoAlpha: 0, y: 28, duration: 0.7, ease: "power3.out" },
            "-=0.65",
          )
          .from(
            para,
            { autoAlpha: 0, y: 22, duration: 0.7, ease: "power3.out" },
            "-=0.5",
          );
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="site-section home-journey" ref={rootRef}>
      <div className="site-container home-journey__inner">
        <Reveal className="home-journey__head" from="bottom">
          <span className="home-journey__eyebrow">Across every mile</span>
          <h2 className="home-journey__title">How we support every journey</h2>
          <p className="home-journey__lead">
            One team, tracing your route from the first call to the last darshan — so the
            path is always looked after.
          </p>
        </Reveal>

        <div className="home-journey__route">
          <div className="home-journey__stops">
            {STOPS.map((s, i) => {
              const [firstWord, ...rest] = s.title.split(" ");
              return (
                <div key={s.title} className="hj-stop">
                  <div className="hj-stop__card">
                    <Image
                      src={s.img}
                      alt=""
                      fill
                      sizes="(max-width: 760px) 90vw, 24rem"
                      style={{ objectFit: "cover" }}
                    />
                    <span className="hj-stop__num" aria-hidden="true">
                      {i + 1}
                    </span>
                  </div>
                  <div className="hj-stop__body">
                    <h3>
                      <span className="hj-stop__mark">{firstWord}</span>
                      {rest.length ? ` ${rest.join(" ")}` : ""}
                    </h3>
                    <p>{s.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .home-journey { position: relative; overflow: hidden; }
        .home-journey__inner { position: relative; z-index: 1; }
        .home-journey__head { max-width: 44rem; margin-inline: auto; text-align: center; }
        .is-site .home-journey__eyebrow {
          display: inline-block; font-family: var(--font-fraunces); font-style: italic;
          color: var(--heritage-gold); font-size: 1.0625rem; margin-bottom: 0.5rem;
        }
        .is-site .home-journey__title {
          font-family: var(--font-fraunces), serif; font-weight: 700; color: #111111;
          font-size: clamp(2rem, 4vw, 3rem); letter-spacing: -0.02em; margin: 0 0 0.85rem;
        }
        .is-site .home-journey__lead { color: var(--heritage-sub); font-size: 1.0625rem; line-height: 1.7; margin: 0; }

        .home-journey__route {
          position: relative;
          max-width: 75rem;
          margin: clamp(2.5rem, 5vw, 4rem) auto 0;
        }
        /* the hand-drawn wavy connector, stretched over the whole stops box */
        .home-journey__route-line {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
          overflow: visible;
        }

        .home-journey__stops {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: clamp(2rem, 5vw, 5rem);
        }
        /* staggered cascade: right → left → right → left, each lower than the last */
        /* width:100% gives every card a definite width (column width, capped at
           max-width) so the right-column cards' "margin-inline-start: auto" can't
           shrink them to their text content — keeps all four cards the same size. */
        .hj-stop { position: relative; width: 100%; max-width: 35rem; }
        .hj-stop:nth-child(1) { grid-column: 2; grid-row: 1; margin-inline-start: auto; margin-inline-end: -12.5rem; }
        .hj-stop:nth-child(2) { grid-column: 1; grid-row: 2; margin-inline-start: -12.5rem; }
        .hj-stop:nth-child(3) { grid-column: 2; grid-row: 3; margin-inline-start: auto; margin-inline-end: -12.5rem; }
        .hj-stop:nth-child(4) { grid-column: 1; grid-row: 4; margin-inline-start: -12.5rem; }
        .hj-stop:nth-child(n + 2) { margin-top: clamp(-9rem, -10vw, -5rem); }

        .hj-stop__card {
          position: relative;
          aspect-ratio: 6 / 7;
          border-radius: 2px;
          overflow: hidden;
          box-shadow: var(--heritage-shadow);
          background: var(--heritage-cream-2);
        }
        .hj-stop__card img { transition: transform 0.7s cubic-bezier(0.22,1,0.36,1); }
        .hj-stop:hover .hj-stop__card img { transform: scale(1.05); }

        .hj-stop__num {
          position: absolute;
          top: -1.1rem;
          right: -1rem;
          z-index: 3;
          width: 2.7rem;
          height: 2.7rem;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: var(--heritage-ink);
          color: #fff;
          font-family: var(--font-fraunces), serif;
          font-size: 1.1rem;
          font-weight: 600;
          box-shadow: 0 0.4rem 1.2rem rgba(0,0,0,0.25), 0 0 0 5px var(--heritage-cream);
        }

        .is-site .hj-stop__body h3 {
          font-family: var(--font-fraunces), serif;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.045em;
          line-height: 1.16;
          font-size: clamp(1.4rem, 2.4vw, 1.9rem);
          color: var(--heritage-ink);
          margin: 1.5rem 0 0.7rem;
        }
        /* first word styled like the rest of the title (no highlight box) */
        .hj-stop__mark {
          background: none;
          color: inherit;
          padding: 0;
        }
        .is-site .hj-stop__body p {
          color: #4a4540;
          font-size: 1.0625rem;
          line-height: 1.75;
          letter-spacing: 0.005em;
          margin: 0;
          max-width: 24rem;
        }

        @media (max-width: 760px) {
          .home-journey__route-line { display: none; }
          .home-journey__stops { grid-template-columns: 1fr; }
          .hj-stop,
          .hj-stop:nth-child(1),
          .hj-stop:nth-child(2),
          .hj-stop:nth-child(3),
          .hj-stop:nth-child(4) {
            grid-column: 1;
            grid-row: auto;
            margin-top: 0;
            margin-inline-start: 0;
            margin-inline-end: 0;
            max-width: 28rem;
          }
          .home-journey__stops { gap: 2.75rem; justify-items: center; }
        }
      `}</style>
    </section>
  );
}
