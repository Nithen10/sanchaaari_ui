"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./GSAPReveal";
import { BUSINESS } from "@/lib/contact";

const EXPLORE_LINKS = [
  { href: "/tours/group", label: "Group Tours (Samuha)" },
  { href: "/tours/private", label: "Private Tours (Samraksha)" },
  { href: "/tours/custom", label: "Customize Your Trip" },
  { href: "/states", label: "States" },
  { href: "/circuits", label: "Temple Circuits" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/senior-companion", label: "Senior Companion Service" },
  { href: "/become-a-companion", label: "Become a Companion" },
  { href: "/contact", label: "Contact & FAQ" },
];

const SOCIAL_LINKS = [
  { href: BUSINESS.social.instagram, label: "Instagram" },
  { href: BUSINESS.social.facebook, label: "Facebook" },
  { href: BUSINESS.social.youtube, label: "YouTube" },
];

export default function SiteFooter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    setEmail("");
  };

  return (
    <footer className="site-footer" id="site-footer">
      <div className="site-container site-footer__inner">
        {/* BAND A — brand + address */}
        <div className="site-footer__top">
          <Reveal className="site-footer__brand" from="bottom">
            <span className="site-footer__logo">{BUSINESS.name}</span>
            <span className="site-footer__logo-sub">
              Heritage Journeys Across South India
            </span>
          </Reveal>

          <Reveal className="site-footer__addr" from="bottom" delay={1}>
            <p>Based in Bengaluru</p>
            <p>Crafted in India</p>
            <p>
              T.{" "}
              <a href={`tel:${BUSINESS.phoneHref}`}>{BUSINESS.phone}</a>
            </p>
            <p>
              E.{" "}
              <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
            </p>
          </Reveal>
        </div>

        {/* BAND B — newsletter + socials | link columns */}
        <div className="site-footer__mid">
          <Reveal className="site-footer__connect" from="bottom">
            <p className="site-footer__news-head">Plan slowly. Stay connected.</p>
            <form className="site-footer__news" onSubmit={onSubmit}>
              <input
                type="email"
                className="site-footer__news-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
                required
              />
              <button
                type="submit"
                className="site-footer__news-btn"
                aria-label="Subscribe"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 12h15M13 6l6 6-6 6"
                  />
                </svg>
              </button>
            </form>
            {sent && (
              <p className="site-footer__news-ok" role="status">
                Thank you — we&rsquo;ll be in touch.
              </p>
            )}

            <p className="site-footer__connect-head">Connect with Sanchaari</p>
            <ul className="site-footer__social" aria-label="Social channels">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.label}>
                  <a
                    className="site-footer__social-link"
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="site-footer__col" from="bottom" delay={1}>
            <h4>Explore</h4>
            <ul>
              {EXPLORE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="site-footer__col" from="bottom" delay={2}>
            <h4>Company</h4>
            <ul>
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* BAND C — bottom bar */}
        <div className="site-footer__bottom">
          <span className="site-footer__copy">
            © {new Date().getFullYear()} Sanchaari Travels. All rights reserved.
          </span>
          <nav className="site-footer__legal" aria-label="Legal">
            <Link href="/terms">Terms and Conditions</Link>
            <span aria-hidden="true">•</span>
            <Link href="/privacy">Privacy Policy</Link>
            <span aria-hidden="true">•</span>
            <Link href="/cookies">Cookie Policy</Link>
          </nav>
          <span className="site-footer__seal">
            Verified companions · Senior-friendly itineraries · Crafted in India
          </span>
        </div>

        <p className="site-footer__credit">
          Torn-paper texture designed by{" "}
          <a href="https://www.freepik.com" target="_blank" rel="noreferrer noopener">
            kjpargeter / Freepik
          </a>
        </p>
      </div>

      <style>{`
        .site-footer {
          position: relative;
          background: #1b1a18;
          padding-block: clamp(3.5rem, 6vw, 6rem) 1.75rem;
        }
        .site-footer__inner { display: flex; flex-direction: column; }
        .site-footer__credit {
          margin: 1rem 0 0;
          text-align: center;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
        }
        .is-site .site-footer .site-footer__credit a { color: rgba(255, 255, 255, 0.55); text-decoration: underline; }
        .is-site .site-footer .site-footer__credit a:hover { color: #b8956a; }

        /* BAND A */
        .site-footer__top {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 2rem;
          align-items: start;
          padding-bottom: clamp(2.5rem, 5vw, 4rem);
        }
        .site-footer__logo {
          display: block;
          font-family: var(--font-fraunces), serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600;
          letter-spacing: 0.01em;
          color: #fff;
          line-height: 1;
        }
        .is-site .site-footer__logo-sub {
          display: block;
          margin-top: 0.6rem;
          font-family: var(--font-poppins), sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
        }
        .is-site .site-footer__addr { text-align: right; }
        .is-site .site-footer__addr p {
          margin: 0 0 0.5rem;
          font-family: var(--font-poppins), sans-serif;
          font-size: 1rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.92);
        }
        .is-site .site-footer__addr a { color: rgba(255, 255, 255, 0.92); text-decoration: none; transition: color 0.25s ease; }
        .is-site .site-footer__addr a:hover { color: var(--heritage-gold); }

        /* BAND B */
        .site-footer__mid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: clamp(2rem, 4vw, 4rem);
          padding-block: clamp(2.5rem, 5vw, 4rem);
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }
        .is-site .site-footer__news-head {
          font-family: var(--font-poppins), sans-serif;
          font-size: 1.0625rem;
          color: #fff;
          margin: 0 0 1.1rem;
        }
        .site-footer__news {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          max-width: 22rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
          transition: border-color 0.3s ease;
        }
        .site-footer__news:focus-within { border-color: #b8956a; }
        .site-footer__news-input {
          flex: 1;
          background: transparent;
          border: 0;
          outline: 0;
          padding: 0.6rem 0;
          font-family: var(--font-poppins), sans-serif;
          font-size: 1rem;
          color: #fff;
        }
        .site-footer__news-input::placeholder { color: rgba(255, 255, 255, 0.55); }
        .site-footer__news-btn {
          background: transparent;
          border: 0;
          cursor: pointer;
          color: rgba(255, 255, 255, 0.8);
          display: inline-flex;
          padding: 0.25rem;
          transition: color 0.25s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .site-footer__news-btn:hover { color: #b8956a; transform: translateX(4px); }
        .is-site .site-footer__news-ok {
          margin: 0.75rem 0 0;
          font-size: 0.875rem;
          font-style: italic;
          color: #b8956a;
        }
        .is-site .site-footer__connect-head {
          margin: clamp(2rem, 4vw, 3rem) 0 0.9rem;
          font-family: var(--font-poppins), sans-serif;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.9);
        }
        .site-footer__social {
          list-style: none; margin: 0; padding: 0;
          display: flex; flex-wrap: wrap; gap: 1.25rem;
        }
        .is-site .site-footer .site-footer__social-link {
          font-family: var(--font-poppins), sans-serif;
          font-size: 1rem;
          color: #b8956a;
          text-decoration: none;
          position: relative;
          transition: color 0.25s ease;
        }
        .is-site .site-footer .site-footer__social-link::after {
          content: "";
          position: absolute; left: 0; bottom: -3px;
          width: 0; height: 1px; background: #b8956a;
          transition: width 0.3s ease;
        }
        .is-site .site-footer .site-footer__social-link:hover { color: #fff; }
        .is-site .site-footer .site-footer__social-link:hover::after { width: 100%; }

        /* link columns */
        .is-site .site-footer__col h4 {
          font-family: var(--font-poppins), sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #b8956a;
          margin: 0 0 1.25rem;
        }
        .site-footer__col ul {
          list-style: none; margin: 0; padding: 0;
          display: flex; flex-direction: column; gap: 0.75rem;
        }
        .is-site .site-footer__col ul li a {
          font-family: var(--font-poppins), sans-serif;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          transition: color 0.25s ease, transform 0.25s ease;
          display: inline-block;
        }
        .is-site .site-footer__col ul li a:hover,
        .is-site .site-footer__col ul li a:focus-visible {
          color: #fff;
          transform: translateX(4px);
        }

        /* BAND C */
        .site-footer__bottom {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 1rem 1.5rem;
          padding-top: 1.5rem;
          margin-top: 0;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
        }
        .site-footer__copy { justify-self: start; }
        .site-footer__legal {
          justify-self: center;
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .site-footer__legal span { color: rgba(255, 255, 255, 0.3); }
        .is-site .site-footer .site-footer__legal a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: color 0.25s ease;
        }
        .is-site .site-footer .site-footer__legal a:hover,
        .is-site .site-footer .site-footer__legal a:focus-visible { color: #fff; }
        .is-site .site-footer__seal { justify-self: end; text-align: right; font-style: italic; color: rgba(255, 255, 255, 0.6); }

        @media (max-width: 720px) {
          .site-footer__bottom { grid-template-columns: 1fr; justify-items: center; text-align: center; }
          .site-footer__copy { justify-self: center; }
          .is-site .site-footer__seal { justify-self: center; text-align: center; }
        }

        @media (max-width: 860px) {
          .site-footer__top { grid-template-columns: 1fr; }
          .is-site .site-footer__addr { text-align: left; }
          .site-footer__mid { grid-template-columns: 1fr 1fr; }
          .site-footer__connect { grid-column: 1 / -1; }
        }
        @media (max-width: 540px) {
          .site-footer__mid { grid-template-columns: 1fr; gap: 2.25rem; }
        }
      `}</style>
    </footer>
  );
}
