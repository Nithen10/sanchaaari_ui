"use client";

import { useEffect, useState } from "react";

/**
 * Returns the id of the section closest to the top of the viewport from a
 * list of section ids. Useful for scroll-spy navigation strips.
 */
export function useScrollSpy(ids: string[], offsetPx: number = 120): string | null {
  const [activeId, setActiveId] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    function onScroll() {
      let bestId: string | null = null;
      let bestTop = -Infinity;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        // Looking for the section whose top is closest to (but not past) offsetPx
        if (top - offsetPx <= 0 && top > bestTop) {
          bestTop = top;
          bestId = id;
        }
      }
      setActiveId(bestId ?? ids[0] ?? null);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids, offsetPx]);

  return activeId;
}
