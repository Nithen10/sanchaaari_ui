"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { useFocusTrap } from "@/lib/useFocusTrap";

interface LightboxProps {
  images: string[];
  alts?: string[];
  /** Grid columns. Default 3. */
  columns?: 2 | 3 | 4;
  /** Aspect ratio for thumbnails. Default "4 / 3". */
  aspect?: string;
}

/**
 * Renders a thumbnail grid; clicking a thumbnail opens a full-viewport
 * lightbox with arrow-key navigation, focus trap, and ESC-to-close.
 */
export default function Lightbox({
  images,
  alts = [],
  columns = 3,
  aspect = "4 / 3",
}: LightboxProps) {
  const [active, setActive] = useState<number | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  useFocusTrap(overlayRef, active !== null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(() => {
    setActive((a) => (a === null ? null : (a + 1) % images.length));
  }, [images.length]);
  const prev = useCallback(() => {
    setActive((a) => (a === null ? null : (a - 1 + images.length) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [active, close, next, prev]);

  return (
    <>
      <div className="lb-grid" style={{ ["--lb-cols" as string]: String(columns), ["--lb-aspect" as string]: aspect }}>
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            className="lb-thumb"
            onClick={() => setActive(i)}
            aria-label={`Open photo ${i + 1} of ${images.length}`}
          >
            <Image
              src={src}
              alt={alts[i] ?? ""}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          ref={overlayRef}
          className="lb-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <button type="button" className="lb-close" aria-label="Close" onClick={close}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
          {images.length > 1 && (
            <>
              <button type="button" className="lb-nav lb-nav--prev" aria-label="Previous photo" onClick={prev}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
              <button type="button" className="lb-nav lb-nav--next" aria-label="Next photo" onClick={next}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </button>
            </>
          )}
          <div className="lb-overlay__image">
            <Image
              key={active}
              src={images[active]}
              alt={alts[active] ?? ""}
              fill
              sizes="90vw"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      )}

      <style>{`
        .lb-grid {
          display: grid;
          grid-template-columns: repeat(var(--lb-cols), 1fr);
          gap: 0.75rem;
        }
        @media (max-width: 720px) {
          .lb-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .lb-thumb {
          position: relative;
          width: 100%;
          aspect-ratio: var(--lb-aspect);
          border-radius: var(--radius-md);
          overflow: hidden;
          border: none;
          padding: 0;
          background: var(--heritage-cream-2);
          cursor: zoom-in;
          transition: transform var(--transition-fast), box-shadow var(--transition-fast);
        }
        .lb-thumb:hover {
          transform: translateY(-2px);
          box-shadow: var(--heritage-shadow);
        }
        .lb-thumb img {
          transition: transform 0.8s ease;
        }
        .lb-thumb:hover img {
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
}
