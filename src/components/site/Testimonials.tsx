import type { Testimonial } from "@/data/testimonials";

export default function Testimonials({
  items,
  heading = "What travellers tell us",
  intro,
}: {
  items: Testimonial[];
  heading?: string;
  intro?: string;
}) {
  return (
    <section className="testimonials">
      <div className="testimonials__head">
        <span className="eyebrow">Reviews</span>
        <h2 className="section-title">{heading}</h2>
        {intro ? <p className="section-lead">{intro}</p> : null}
      </div>
      <div className="testimonials__grid">
        {items.map((t, i) => (
          <figure className="testimonial" key={`${t.name}-${i}`}>
            <div className="testimonial__stars" aria-label={`${t.rating} out of 5 stars`}>
              {"★★★★★".slice(0, t.rating)}
              <span className="sr-only">{`${t.rating} out of 5`}</span>
            </div>
            <blockquote className="testimonial__quote">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="testimonial__cite">
              <strong>{t.name}</strong>
              <span>
                {t.age} · {t.city}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <style>{`
        .testimonials__head { margin-bottom: 2.5rem; }
        .testimonials__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
          gap: 1.5rem;
        }
        .testimonial {
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin: 0;
          transition: transform var(--transition-medium), box-shadow var(--transition-medium);
        }
        .testimonial:hover {
          transform: translateY(-3px);
          box-shadow: var(--heritage-shadow);
        }
        .testimonial__stars {
          color: var(--heritage-gold);
          font-size: 1.0625rem;
          letter-spacing: 0.15em;
        }
        .testimonial__quote {
          font-family: var(--font-fraunces), serif;
          font-size: 1.0625rem;
          line-height: 1.55;
          color: var(--heritage-ink);
          margin: 0;
        }
        .testimonial__cite {
          font-family: var(--font-poppins);
          display: flex;
          flex-direction: column;
          gap: 0.125rem;
          font-size: 0.875rem;
        }
        .testimonial__cite strong { color: var(--heritage-ink); font-weight: 600; }
        .testimonial__cite span { color: var(--heritage-muted); font-size: 0.8125rem; }
      `}</style>
    </section>
  );
}
