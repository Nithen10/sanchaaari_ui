import Link from "next/link";
import { BUSINESS } from "@/lib/contact";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="site-container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <h4>{BUSINESS.name}</h4>
            <p className="site-footer__tagline">{BUSINESS.tagline}</p>
            <p className="site-footer__about">
              Sanchaari curates thoughtfully designed temple and heritage
              journeys across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh
              and Telangana, with dedicated companion services for senior
              travellers.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/tours/group">Group Tours (Samuha)</Link></li>
              <li><Link href="/tours/private">Private Tours (Samraksha)</Link></li>
              <li><Link href="/tours/custom">Customize Your Trip</Link></li>
              <li><Link href="/states">States</Link></li>
              <li><Link href="/circuits">Temple Circuits</Link></li>
            </ul>
          </div>

          <div>
            <h4>Sanchaari</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/senior-companion">Senior Companion Service</Link></li>
              <li><Link href="/become-a-companion">Become a Companion</Link></li>
              <li><Link href="/contact">Contact &amp; FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4>Reach us</h4>
            <ul className="site-footer__contact">
              <li>
                <a href={`tel:${BUSINESS.phoneHref}`}>{BUSINESS.phone}</a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
              </li>
              <li>{BUSINESS.address}</li>
              <li><span className="site-footer__hours">{BUSINESS.hours}</span></li>
            </ul>
            <ul className="site-footer__social" aria-label="Social channels">
              <li><a className="site-footer__social-link" href={BUSINESS.social.instagram} target="_blank" rel="noreferrer noopener">Instagram</a></li>
              <li><a className="site-footer__social-link" href={BUSINESS.social.facebook} target="_blank" rel="noreferrer noopener">Facebook</a></li>
              <li><a className="site-footer__social-link" href={BUSINESS.social.youtube} target="_blank" rel="noreferrer noopener">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} Sanchaari Travels. All rights reserved.</span>
          <span className="site-footer__seal">Verified companions · Senior-friendly itineraries · Crafted in India</span>
        </div>
      </div>

      <style>{`
        .site-footer {
          position: relative;
          padding-block: 5rem 2rem;
        }
        .site-footer::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(212, 165, 116, 0.5) 50%,
            transparent 100%
          );
          pointer-events: none;
        }

        .site-footer__grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1.3fr;
          gap: 3rem;
        }

        .site-footer h4 {
          position: relative;
          font-family: var(--font-fraunces), serif;
          padding-bottom: 0.5rem;
          margin-bottom: 1rem;
        }
        .site-footer h4::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 1.5rem;
          height: 2px;
          background: var(--heritage-gold);
          border-radius: 1px;
          transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .site-footer__grid > div:hover h4::after {
          width: 3rem;
        }
        .site-footer__brand h4 {
          font-size: 1.5rem;
          letter-spacing: 0.02em;
        }

        .is-site .site-footer__tagline {
          color: var(--heritage-gold);
          font-style: italic;
          font-family: var(--font-fraunces);
          font-size: 0.9375rem;
          margin-bottom: 0.75rem;
        }
        .is-site .site-footer__about {
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.7;
          font-size: 0.9375rem;
          max-width: 22rem;
        }
        .is-site .site-footer p {
          color: rgba(255, 255, 255, 0.78);
        }

        .site-footer ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .is-site .site-footer__contact li,
        .is-site .site-footer__contact li a {
          color: rgba(255, 255, 255, 0.78);
          font-size: 0.9375rem;
        }
        .is-site .site-footer__hours {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.8125rem;
        }

        .is-site .site-footer ul li a {
          display: inline-block;
          color: rgba(255, 255, 255, 0.72);
          text-decoration: none;
          transition:
            color 0.25s ease,
            transform 0.25s ease;
        }
        .is-site .site-footer ul li a:hover,
        .is-site .site-footer ul li a:focus-visible {
          color: var(--heritage-gold);
          transform: translateX(4px);
        }

        .is-site .site-footer__contact li a {
          position: relative;
        }
        .is-site .site-footer__contact li a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 1px;
          background: var(--heritage-gold);
          transition: width 0.3s ease;
        }
        .is-site .site-footer__contact li a:hover::after,
        .is-site .site-footer__contact li a:focus-visible::after {
          width: 100%;
        }

        .site-footer__social {
          flex-direction: row;
          gap: 0.625rem;
          margin-top: 1.25rem;
        }
        .is-site .site-footer .site-footer__social-link {
          display: inline-flex;
          align-items: center;
          padding: 0.4375rem 0.875rem;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 999px;
          font-size: 0.8125rem;
          letter-spacing: 0.01em;
          color: rgba(255, 255, 255, 0.78);
          transition:
            border-color 0.25s ease,
            background 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease;
        }
        .is-site .site-footer .site-footer__social-link:hover,
        .is-site .site-footer .site-footer__social-link:focus-visible {
          border-color: var(--heritage-gold);
          background: rgba(212, 165, 116, 0.08);
          color: var(--heritage-gold);
          transform: translateY(-2px);
        }

        .site-footer__bottom {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .is-site .site-footer__seal {
          font-style: italic;
          color: var(--heritage-gold);
        }

        @media (max-width: 900px) {
          .site-footer__grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
        }
        @media (max-width: 540px) {
          .site-footer__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}
