import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/GSAPReveal";
import BreadcrumbTrail from "@/components/site/BreadcrumbTrail";
import CelebrationCard from "@/components/site/CelebrationCard";
import { CELEBRATIONS, getCelebrationBySlug } from "@/data/celebrations";
import { STATES } from "@/data/states";

export function generateStaticParams() {
  return CELEBRATIONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCelebrationBySlug(slug);
  if (!c) return { title: "Festival not found" };
  return {
    title: `${c.name} 2026 · Sanchaari`,
    description: c.description.slice(0, 160),
    openGraph: {
      title: c.name,
      description: c.shortBlurb,
      images: [{ url: c.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: c.name,
      description: c.shortBlurb,
      images: [c.image],
    },
  };
}

export default async function CelebrationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCelebrationBySlug(slug);
  if (!c) return notFound();

  const stateNames = c.states
    .map((s) => STATES.find((st) => st.slug === s)?.name)
    .filter((x): x is string => Boolean(x));

  const related = CELEBRATIONS.filter(
    (x) =>
      x.slug !== c.slug && x.states.some((s) => c.states.includes(s)),
  ).slice(0, 3);

  return (
    <div className="celeb-detail">
      <section className="celeb-hero">
        <div className="celeb-hero__media">
          <Image
            src={c.image}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="celeb-hero__shade" aria-hidden="true" />
        </div>
        <div className="site-container celeb-hero__inner">
          <BreadcrumbTrail
            items={[
              { label: "Home", href: "/" },
              { label: "Celebrations", href: "/celebrations" },
              { label: c.name },
            ]}
          />
          <span className="celeb-hero__date">{c.dateLabel}</span>
          <h1 className="celeb-hero__title">{c.name}</h1>
          <p className="celeb-hero__states">
            {stateNames.join(" · ")} · {c.kind === "festival" ? "Festival" : "Event"}
          </p>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container celeb-detail__grid">
          <article className="celeb-detail__main">
            <Reveal>
              <p className="section-lead celeb-detail__lead">{c.description}</p>
            </Reveal>
            <Reveal delay={1}>
              <span className="eyebrow">Why it matters</span>
              <h2>The story behind {c.name}</h2>
              <p>{c.significance}</p>
            </Reveal>
            {c.history && (
              <Reveal delay={2}>
                <span className="eyebrow">History &amp; origins</span>
                <h2>How {c.name} began</h2>
                <p>{c.history}</p>
              </Reveal>
            )}
            {c.rituals && c.rituals.length > 0 && (
              <Reveal delay={3}>
                <span className="eyebrow">Rituals &amp; traditions</span>
                <h2>How it is observed</h2>
                <ul className="celeb-detail__rituals">
                  {c.rituals.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </Reveal>
            )}
            {c.foods && c.foods.length > 0 && (
              <Reveal delay={1}>
                <span className="eyebrow">Food &amp; special dishes</span>
                <h2>What you&rsquo;ll taste at {c.name}</h2>
                <ul className="celeb-detail__foods">
                  {c.foods.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </Reveal>
            )}
            {c.whatToExpect && (
              <Reveal delay={2}>
                <span className="eyebrow">If you go</span>
                <h2>What to expect</h2>
                <p>{c.whatToExpect}</p>
              </Reveal>
            )}
            {c.bestPlaces.length > 0 && (
              <Reveal delay={2}>
                <span className="eyebrow">Where to experience it</span>
                <h2>Best places for {c.name}</h2>
                <ul className="celeb-detail__places">
                  {c.bestPlaces.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </Reveal>
            )}
          </article>

          <aside className="celeb-detail__side">
            <div className="celeb-detail__card">
              <h3>At a glance</h3>
              <dl>
                <div>
                  <dt>When</dt>
                  <dd>{c.dateLabel} · {c.months.join(", ")} 2026</dd>
                </div>
                <div>
                  <dt>Where</dt>
                  <dd>{stateNames.join(", ")}</dd>
                </div>
                <div>
                  <dt>Type</dt>
                  <dd>{c.kind === "festival" ? "Festival" : "Event"}</dd>
                </div>
                <div>
                  <dt>Interests</dt>
                  <dd>
                    <div className="celeb-detail__chips">
                      {c.interests.map((i) => (
                        <span key={i} className="celeb-detail__chip">{i}</span>
                      ))}
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="site-section site-section--cream2">
          <div className="site-container">
            <Reveal>
              <span className="eyebrow">More to celebrate</span>
              <h2 className="section-title">
                Festivals near {stateNames[0] ?? "this region"}
              </h2>
            </Reveal>
            <div className="celeb-detail__related">
              {related.map((r) => (
                <CelebrationCard key={r.slug} c={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="site-section celeb-detail__cta">
        <div className="site-container celeb-detail__cta-inner">
          <Reveal>
            <h2>Plan a trip around {c.name}</h2>
            <p>
              Tell us your dates and we&rsquo;ll build an itinerary that puts
              you in the right place at the right hour for {c.name}.
            </p>
            <div className="celeb-detail__cta-buttons">
              <Link href="/tours/custom" className="btn btn--primary btn--lg">
                Customise a trip
              </Link>
              <Link href="/celebrations" className="btn btn--ghost btn--lg">
                See all festivals &amp; events
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        .celeb-hero {
          position: relative;
          color: #fff;
          min-height: clamp(20rem, 55vh, 30rem);
          display: flex;
          align-items: flex-end;
          padding-block: clamp(3rem, 7vw, 5rem);
        }
        .celeb-hero__media { position: absolute; inset: 0; }
        .celeb-hero__shade {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.75) 100%);
        }
        .celeb-hero__inner { position: relative; z-index: 2; }
        .celeb-hero__inner :global(.breadcrumbs),
        .celeb-hero__inner :global(.breadcrumbs a) { color: rgba(255,255,255,0.85); }
        .celeb-hero__inner :global(.breadcrumbs span[aria-current="page"]) { color: #fff; }
        .celeb-hero__date {
          display: inline-block;
          background: var(--heritage-rust);
          color: var(--heritage-ivory);
          padding: 0.5rem 0.875rem;
          font-family: var(--font-poppins);
          font-weight: 700;
          font-size: 0.9375rem;
          border-radius: var(--radius-sm);
          margin: 1.25rem 0 0.75rem;
          box-shadow: 0 0.25rem 0.625rem rgba(0, 95, 115, 0.35);
        }
        .celeb-hero__title {
          font-family: var(--font-fraunces);
          color: #fff;
          font-size: clamp(2.25rem, 5vw, 4rem);
          margin: 0 0 0.5rem;
          line-height: 1.05;
        }
        .celeb-hero__states {
          font-family: var(--font-fraunces);
          font-style: italic;
          color: var(--heritage-gold);
          font-size: 1.125rem;
          margin: 0;
        }

        .celeb-detail__grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 20rem;
          gap: 3rem;
          align-items: start;
        }
        .celeb-detail__main h2 {
          margin-block: 0.5rem 0.75rem;
          font-size: clamp(1.5rem, 2.4vw, 2rem);
        }
        .celeb-detail__main h2 + p { margin-bottom: 1.75rem; }
        .celeb-detail__lead { margin-bottom: 2rem; }
        .celeb-detail__places {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));
          gap: 0.75rem;
        }
        .celeb-detail__places li {
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          padding: 0.875rem 1.125rem;
          border-radius: var(--radius-md);
          font-family: var(--font-poppins);
          font-size: 0.9375rem;
          color: var(--heritage-ink);
        }
        .celeb-detail__rituals,
        .celeb-detail__foods {
          list-style: disc;
          padding-left: 1.25rem;
          margin: 0 0 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .celeb-detail__rituals li,
        .celeb-detail__foods li {
          line-height: 1.6;
          font-size: 1rem;
          color: var(--heritage-ink);
        }

        .celeb-detail__card {
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          position: sticky;
          top: calc(var(--nav-height) + 5rem);
        }
        .celeb-detail__card h3 {
          font-family: var(--font-fraunces), serif;
          font-size: 1.25rem;
          margin-bottom: 1rem;
          padding-bottom: 0.625rem;
          border-bottom: 2px solid var(--heritage-rust);
        }
        .celeb-detail__card dl { display: flex; flex-direction: column; gap: 1rem; }
        .celeb-detail__card dt {
          font-family: var(--font-poppins);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--heritage-muted);
          margin-bottom: 0.25rem;
        }
        .celeb-detail__card dd {
          margin: 0;
          color: var(--heritage-ink);
          font-size: 0.9375rem;
          line-height: 1.55;
        }
        .celeb-detail__chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.375rem;
        }
        .celeb-detail__chip {
          background: var(--heritage-cream-2);
          color: var(--heritage-ink);
          font-family: var(--font-poppins);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.3125rem 0.625rem;
          border-radius: var(--radius-pill);
        }

        .celeb-detail__related {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .celeb-detail__cta-inner { max-width: 40rem; margin: 0 auto; text-align: center; }
        .celeb-detail__cta h2 { margin-bottom: 0.75rem; }
        .celeb-detail__cta p { font-size: var(--font-size-lg); margin-bottom: 1.5rem; }
        .celeb-detail__cta-buttons {
          display: inline-flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        @media (max-width: 900px) {
          .celeb-detail__grid { grid-template-columns: 1fr; }
          .celeb-detail__card { position: static; }
          .celeb-detail__related { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .celeb-detail__related { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
