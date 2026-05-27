import Image from "next/image";
import Link from "next/link";
import type { Temple } from "@/data/temples";
import { STATES } from "@/data/states";

export default function TempleCard({ temple }: { temple: Temple }) {
  const stateName = STATES.find((s) => s.slug === temple.state)?.name ?? "";
  return (
    <Link href={`/temples/${temple.slug}`} className="temple-card card">
      <div className="card__media">
        {temple.images[0] && (
          <Image
            src={temple.images[0]}
            alt=""
            fill
            sizes="(max-width: 640px) 90vw, 22rem"
            style={{ objectFit: "cover" }}
          />
        )}
        {temple.badges.length > 0 && (
          <div className="temple-card__badges">
            {temple.badges.slice(0, 2).map((b) => (
              <span key={b} className="badge badge--gold">{b}</span>
            ))}
          </div>
        )}
      </div>
      <div className="card__body">
        <span className="temple-card__state">{stateName}</span>
        <h3 className="card__title">{temple.name}</h3>
        <p className="temple-card__deity">{temple.deity}</p>
        <p className="temple-card__city">{temple.city}</p>
      </div>

      <style>{`
        .temple-card { text-decoration: none; }
        .temple-card__badges {
          position: absolute;
          top: 0.875rem;
          left: 0.875rem;
          display: flex;
          gap: 0.375rem;
          flex-wrap: wrap;
          z-index: 2;
        }
        .temple-card__state {
          font-family: var(--font-poppins);
          font-size: 0.75rem;
          letter-spacing: 0.14em;
          color: var(--heritage-muted);
          text-transform: uppercase;
        }
        .temple-card__deity {
          font-family: var(--font-fraunces);
          font-style: italic;
          color: var(--heritage-rust);
          font-size: 0.9375rem;
          margin: 0;
        }
        .temple-card__city {
          font-size: 0.8125rem;
          color: var(--heritage-muted);
          margin: 0;
        }
      `}</style>
    </Link>
  );
}
