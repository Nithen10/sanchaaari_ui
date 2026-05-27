import Link from "next/link";
import SiteBodyClass from "@/components/site/SiteBodyClass";

export default function NotFound() {
  return (
    <>
      <SiteBodyClass />
      <main className="site-main not-found-wrap">
        <div className="site-container">
          <p className="eyebrow">404</p>
          <h1>We can&rsquo;t find that page.</h1>
          <p className="not-found-lead">
            The page you tried to reach has wandered off. Try one of the routes
            below, or talk to us and we&rsquo;ll point you the right way.
          </p>
          <ul className="not-found-links">
            <li><Link href="/" className="btn btn--primary">Back to home</Link></li>
            <li><Link href="/tours" className="btn btn--ghost">Browse tours</Link></li>
            <li><Link href="/contact" className="btn btn--ghost">Contact us</Link></li>
          </ul>
        </div>
      </main>
      <style>{`
        .not-found-wrap { padding-block: clamp(4rem, 12vw, 8rem); }
        .not-found-wrap h1 { font-size: clamp(2.25rem, 4vw, 3.5rem); margin-block: 0.5rem 1rem; max-width: 26ch; }
        .not-found-lead { font-size: var(--font-size-lg); max-width: 42rem; margin-bottom: 2rem; }
        .not-found-links { display: flex; gap: 0.75rem; flex-wrap: wrap; list-style: none; padding: 0; margin: 0; }
      `}</style>
    </>
  );
}
