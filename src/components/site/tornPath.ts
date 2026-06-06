// Deterministic torn-edge path generator (server + client identical output).
export const SVG_W = 1440;

function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Computes the hand-torn contour once and returns both:
 *  - `fill`: a filled shape (solid from the top down to the torn edge)
 *  - `edge`: a polyline tracing just the torn edge (for the paper-thickness highlight)
 * Layers a slow undulation + finer jitter + occasional deeper "nicks"; the feTurbulence
 * filter in TornDivider frays it further into fibres.
 */
export function buildTorn(H: number, seed: number): { fill: string; edge: string } {
  const rng = mulberry32(seed * 2654435761);
  const baseY = H * 0.5;
  const amp = H * 0.2;
  const n = 120;
  const step = SVG_W / n;
  const ys: number[] = [];
  for (let i = 0; i <= n; i++) {
    const x = i * step;
    const wave =
      Math.sin((x / SVG_W) * Math.PI * 2.3 + seed) * amp * 0.55 +
      Math.sin((x / SVG_W) * Math.PI * 5.7 + seed * 1.7) * amp * 0.28 +
      Math.sin((x / SVG_W) * Math.PI * 13.3 + seed * 0.6) * amp * 0.14;
    const jitter = (rng() - 0.5) * amp * 0.7;
    const nick = rng() > 0.9 ? (rng() - 0.5) * amp * 1.6 : 0;
    ys.push(baseY + wave + jitter + nick);
  }
  const xs = (i: number) => (i * step).toFixed(1);

  let fill = `M0 0 L${SVG_W} 0 L${SVG_W} ${ys[n].toFixed(1)}`;
  for (let i = n - 1; i >= 0; i--) fill += ` L${xs(i)} ${ys[i].toFixed(1)}`;
  fill += " Z";

  let edge = `M0 ${ys[0].toFixed(1)}`;
  for (let i = 1; i <= n; i++) edge += ` L${xs(i)} ${ys[i].toFixed(1)}`;

  return { fill, edge };
}
