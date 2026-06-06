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
  const routeRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: routeRef.current,
            start: "top 70%",
            end: "bottom 70%",
            scrub: true,
          },
        },
      );
    }, routeRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="site-section home-journey">
      <div className="sec-map" aria-hidden="true" style={{ opacity: 0.5 }} />
      <div className="site-container home-journey__inner">
        <Reveal className="home-journey__head" from="bottom">
          <span className="home-journey__eyebrow">Across every mile</span>
          <h2 className="home-journey__title">How we support every journey</h2>
          <p className="home-journey__lead">
            One team, tracing your route from the first call to the last darshan — so the
            path is always looked after.
          </p>
        </Reveal>

        <div className="home-journey__route" ref={routeRef}>
          <span className="home-journey__line" ref={lineRef} aria-hidden="true" />
          {STOPS.map((s, i) => (
            <Reveal
              key={s.title}
              className={`hj-stop ${i % 2 ? "is-right" : "is-left"}`}
              from={i % 2 ? "right" : "left"}
            >
              <span className="hj-stop__num" aria-hidden="true">
                {i + 1}
              </span>
              <div className="hj-stop__card">
                <Image src={s.img} alt="" fill sizes="(max-width: 768px) 90vw, 26rem" style={{ objectFit: "cover" }} />
              </div>
              <div className="hj-stop__body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
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
          max-width: 60rem;
          margin: clamp(2.5rem, 5vw, 4rem) auto 0;
          display: flex;
          flex-direction: column;
          gap: clamp(2.5rem, 5vw, 4.5rem);
        }
        .home-journey__line {
          position: absolute; top: 0; bottom: 0; left: 50%; width: 0;
          border-left: 2px dashed var(--heritage-gold);
          transform: translateX(-50%) scaleY(1); opacity: 0.7;
        }
        .hj-stop {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(1.5rem, 3vw, 3rem);
          align-items: center;
        }
        .hj-stop.is-right { direction: rtl; }
        .hj-stop.is-right > * { direction: ltr; }
        .hj-stop__num {
          position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
          z-index: 3; width: 2.6rem; height: 2.6rem; border-radius: 50%;
          display: grid; place-items: center;
          background: var(--heritage-ink); color: #fff;
          font-family: var(--font-fraunces), serif; font-size: 1.1rem; font-weight: 600;
          box-shadow: 0 0.4rem 1.2rem rgba(0,0,0,0.25), 0 0 0 6px var(--heritage-cream);
        }
        .hj-stop__card {
          position: relative; aspect-ratio: 4 / 3; border-radius: var(--radius-md, 0.75rem);
          overflow: hidden; box-shadow: var(--heritage-shadow);
          background: var(--heritage-cream-2);
        }
        .hj-stop__card img { transition: transform 0.7s cubic-bezier(0.22,1,0.36,1); }
        .hj-stop:hover .hj-stop__card img { transform: scale(1.05); }
        .is-site .hj-stop__body h3 {
          font-family: var(--font-fraunces), serif; font-size: clamp(1.25rem, 2vw, 1.6rem);
          color: #111111; margin: 0 0 0.6rem;
        }
        .is-site .hj-stop__body p { color: var(--heritage-sub); line-height: 1.7; margin: 0; }

        @media (max-width: 760px) {
          .home-journey__line { left: 1.3rem; }
          .hj-stop { grid-template-columns: 1fr; gap: 1rem; padding-left: 3.25rem; }
          .hj-stop.is-right { direction: ltr; }
          .hj-stop__num { left: 1.3rem; top: 1.3rem; transform: translate(-50%, 0); width: 2.2rem; height: 2.2rem; font-size: 1rem; }
        }
      `}</style>
    </section>
  );
}
