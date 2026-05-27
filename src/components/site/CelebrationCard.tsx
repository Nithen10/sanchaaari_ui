import Image from "next/image";
import Link from "next/link";
import type { Celebration } from "@/data/celebrations";

export default function CelebrationCard({ c }: { c: Celebration }) {
  return (
    <Link
      href={`/celebrations/${c.slug}`}
      className="celeb-card"
      aria-label={`${c.name}, ${c.dateLabel}`}
    >
      <div className="celeb-card__media">
        <Image
          src={c.image}
          alt=""
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 720px) 50vw, (max-width: 1100px) 33vw, 25vw"
          style={{ objectFit: "cover" }}
        />
        <span className="celeb-card__date">{c.dateLabel}</span>
      </div>
      <div className="celeb-card__body">
        <h3>{c.name}</h3>
        <p>{c.shortBlurb}</p>
      </div>
    </Link>
  );
}
