"use client";

import { useEffect, useRef } from "react";
import type { ElementType, ReactNode, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GSAPRevealProps {
  as?: ElementType;
  delay?: 0 | 1 | 2 | 3 | 4;
  from?: "bottom" | "left" | "right" | "fade";
  className?: string;
  children: ReactNode;
}

const FROM_VARIANTS = {
  bottom: { y: 48, opacity: 0, duration: 0.85, ease: "power3.out" },
  left: { x: -60, opacity: 0, duration: 0.9, ease: "power3.out" },
  right: { x: 60, opacity: 0, duration: 0.9, ease: "power3.out" },
  fade: { opacity: 0, duration: 1.1, ease: "power2.inOut" },
} as const;

export default function GSAPReveal({
  as,
  delay = 0,
  from = "bottom",
  className,
  children,
}: GSAPRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const variant = FROM_VARIANTS[from];
    const ctx = gsap.context(() => {
      gsap.from(el, {
        ...variant,
        delay: delay * 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    });
    return () => ctx.revert();
  }, [delay, from]);

  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag ref={ref as RefObject<HTMLDivElement>} className={className}>
      {children}
    </Tag>
  );
}
