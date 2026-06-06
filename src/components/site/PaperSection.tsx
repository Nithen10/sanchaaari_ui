import Image from "next/image";
import Reveal from "./GSAPReveal";

/**
 * A dark, full-bleed photo band (revealed through torn edges) with a large
 * ghost-outline heading — used as a rhythm break between parchment sheets.
 */
export default function PaperSection({
  image,
  eyebrow,
  ghost,
  title,
  lead,
}: {
  image: string;
  eyebrow?: string;
  ghost: string;
  title?: string;
  lead?: string;
}) {
  return (
    <section className="paper-photo">
      <Image
        className="paper-photo__img"
        src={image}
        alt=""
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="paper-photo__shade" aria-hidden="true" />
      <span className="paper-photo__ghost" aria-hidden="true">
        {ghost}
      </span>
      <div className="site-container paper-photo__inner">
        <Reveal from="bottom">
          {eyebrow ? <span className="paper-photo__eyebrow">{eyebrow}</span> : null}
          {title ? <h2 className="paper-photo__title">{title}</h2> : null}
          {lead ? <p className="paper-photo__lead">{lead}</p> : null}
        </Reveal>
      </div>

      <style>{`
        .paper-photo {
          position: relative;
          min-height: clamp(26rem, 60vh, 40rem);
          display: grid;
          align-items: center;
          overflow: hidden;
          isolation: isolate;
        }
        .paper-photo__img { z-index: 0; }
        .paper-photo__shade {
          position: absolute; inset: 0; z-index: 1;
          background:
            linear-gradient(180deg, rgba(12,20,30,0.55), rgba(12,16,24,0.45) 40%, rgba(12,16,24,0.7)),
            radial-gradient(120% 80% at 50% 40%, transparent 30%, rgba(0,0,0,0.4));
        }
        .paper-photo__ghost {
          position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
          z-index: 2; width: 100%; text-align: center; pointer-events: none;
          font-family: var(--font-fraunces), serif; font-weight: 700;
          font-size: clamp(3rem, 12vw, 11rem); line-height: 0.9; letter-spacing: -0.02em;
          color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.35);
          text-transform: uppercase; white-space: pre-line;
        }
        .paper-photo__inner { position: relative; z-index: 3; text-align: center; }
        .paper-photo__eyebrow {
          display: inline-block; font-family: var(--font-fraunces); font-style: italic;
          color: #f0d6a0; font-size: 1.0625rem; margin-bottom: 0.6rem;
        }
        .paper-photo__title {
          font-family: var(--font-fraunces), serif; font-weight: 700; color: #fff;
          font-size: clamp(1.75rem, 4vw, 3rem); margin: 0 0 0.85rem; letter-spacing: -0.01em;
        }
        .paper-photo__lead {
          color: rgba(255,255,255,0.88); font-size: 1.0625rem; line-height: 1.7;
          margin: 0 auto; max-width: 40rem;
        }
      `}</style>
    </section>
  );
}
