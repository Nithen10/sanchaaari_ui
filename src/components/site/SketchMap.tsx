"use client";

import { useEffect, useId, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SKETCH_VIEWBOX, SKETCH_LAYERS } from "@/data/southIndiaSketch";

gsap.registerPlugin(ScrollTrigger);

type Tone = "sepia" | "light";

const TONES: Record<Tone, { grat: string; dist: string; coast: string; river: string }> = {
  sepia: {
    grat: "rgba(134,109,75,0.10)",
    dist: "rgba(134,109,75,0.34)",
    coast: "rgba(124,100,67,0.55)",
    river: "rgba(134,109,75,0.30)",
  },
  light: {
    grat: "rgba(240,214,160,0.12)",
    dist: "rgba(240,214,160,0.30)",
    coast: "rgba(240,214,160,0.55)",
    river: "rgba(240,214,160,0.28)",
  },
};

export default function SketchMap({
  tone = "sepia",
  className,
  parallax = true,
}: {
  tone?: Tone;
  className?: string;
  parallax?: boolean;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const drawRef = useRef<SVGGElement>(null);
  const rawId = useId().replace(/[:]/g, "");
  const fId = `sk-rough-${rawId}`;
  const c = TONES[tone];

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      // draw-on-scroll for coast + rivers (the "hand-drawn" feel)
      const draws = drawRef.current
        ? Array.from(drawRef.current.querySelectorAll<SVGPathElement>("path"))
        : [];
      draws.forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: reduced ? 0 : len });
        if (reduced) return;
        gsap.to(p, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 90%",
            end: "center center",
            scrub: true,
          },
        });
      });
      // subtle parallax drift
      if (parallax && !reduced && svgRef.current) {
        gsap.fromTo(
          svgRef.current,
          { yPercent: -4 },
          {
            yPercent: 6,
            ease: "none",
            scrollTrigger: { trigger: rootRef.current, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      }
    }, rootRef);
    return () => ctx.revert();
  }, [parallax]);

  return (
    <div ref={rootRef} className={`sketch-map${className ? ` ${className}` : ""}`} aria-hidden="true">
      <svg
        ref={svgRef}
        className="sketch-map__svg"
        viewBox={SKETCH_VIEWBOX}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id={fId} x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" seed="7" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="2.2" />
          </filter>
        </defs>

        <g filter={`url(#${fId})`} fill="none" vectorEffect="non-scaling-stroke">
          <g stroke={c.grat} strokeWidth="0.5">
            {SKETCH_LAYERS.graticule.map((d, i) => (
              <path key={`g${i}`} d={d} />
            ))}
          </g>
          <g stroke={c.dist} strokeWidth="0.6">
            {SKETCH_LAYERS.districts.map((d, i) => (
              <path key={`d${i}`} d={d} />
            ))}
          </g>
          <g ref={drawRef}>
            <g stroke={c.coast} strokeWidth="1" strokeLinejoin="round" strokeLinecap="round">
              {SKETCH_LAYERS.coast.map((d, i) => (
                <path key={`c${i}`} d={d} />
              ))}
            </g>
            <g stroke={c.river} strokeWidth="0.7" strokeLinecap="round">
              {SKETCH_LAYERS.rivers.map((d, i) => (
                <path key={`r${i}`} d={d} />
              ))}
            </g>
          </g>
        </g>
      </svg>

      <style>{`
        .sketch-map { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 0; }
        .sketch-map__svg { width: 100%; height: 100%; display: block; }
      `}</style>
    </div>
  );
}
