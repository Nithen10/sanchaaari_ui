/**
 * A realistic torn-paper edge. A colour-filled div is masked by a real torn-paper
 * texture (public/images/torn-edge.png — alpha: solid top, natural torn bottom) so the
 * sheet takes a genuine torn contour. It OVERLAPS the section below (negative margin) so
 * the torn bottom reveals the next section, blending the two like real paper. `flip` puts
 * the tear on top; `seed` mirrors alternate dividers so they don't look identical.
 *
 * Texture: "Designed by kjpargeter / Freepik" (credited in the footer).
 */
export default function TornDivider({
  color = "var(--paper-1, #f4f2ef)",
  height = 70,
  seed = 1,
  flip = false,
}: {
  color?: string;
  height?: number;
  seed?: number;
  flip?: boolean;
}) {
  const mirror = seed % 2 === 0;
  const transform = `${flip ? "scaleY(-1)" : ""} ${mirror ? "scaleX(-1)" : ""}`.trim();
  const url = "url(/images/torn-edge.png)";

  return (
    <div
      className="torn"
      style={{
        height: `clamp(2.25rem, 4.5vw, ${height}px)`,
        marginBottom: `calc(-1 * clamp(2.25rem, 4.5vw, ${height}px))`,
        background: color,
        WebkitMaskImage: url,
        maskImage: url,
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        transform: transform || undefined,
      }}
      aria-hidden="true"
    >
      <style>{`
        .torn {
          position: relative;
          z-index: 3;
          width: 100%;
          line-height: 0;
          pointer-events: none;
          filter: drop-shadow(0 5px 4px rgba(0, 0, 0, 0.14));
        }
      `}</style>
    </div>
  );
}
