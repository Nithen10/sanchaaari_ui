"use client";

import { useEffect, useRef } from "react";
import type { ElementType, ReactNode } from "react";

interface RevealProps {
  as?: ElementType;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
  children: ReactNode;
}

/**
 * Scroll-reveal wrapper. Adds `data-reveal` to the rendered element and
 * toggles `is-revealed` once the element enters the viewport. CSS handles
 * the actual fade-up. Honours prefers-reduced-motion automatically via CSS.
 */
export default function Reveal({
  as,
  delay = 0,
  className,
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-revealed");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = (as ?? "div") as ElementType;
  const dataDelay = delay ? { "data-reveal-delay": String(delay) } : {};
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      data-reveal=""
      className={className}
      {...dataDelay}
    >
      {children}
    </Tag>
  );
}
