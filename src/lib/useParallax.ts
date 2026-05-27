"use client";

import { useEffect, type RefObject } from "react";

/**
 * Applies a slow translateY to the element as the user scrolls past it.
 * Speed=0.4 means the element moves at 40% of scroll speed (so background
 * appears to lag behind foreground content). Disabled under reduced motion.
 */
export function useParallax(
  ref: RefObject<HTMLElement | null>,
  speed: number = 0.4
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      if (rect.bottom > 0 && rect.top < viewportH) {
        const offset = (rect.top - viewportH / 2) * -speed;
        el.style.setProperty("--parallax-y", `${offset}px`);
      }
      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, speed]);
}
