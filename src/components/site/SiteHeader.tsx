"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { BUSINESS, buildWhatsAppUrl, buildTelUrl } from "@/lib/contact";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/tours", label: "Tours" },
  { href: "/states", label: "States" },
  { href: "/circuits", label: "Circuits" },
  { href: "/senior-companion", label: "Companion" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "site-header",
        scrolled && "site-header--scrolled"
      )}
    >
      <div className="site-container site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="Sanchaari home" onClick={closeMenu}>
          <Image
            src="/images/logo.png"
            alt=""
            width={56}
            height={56}
            className="site-header__logo"
            priority
          />
          <span className="site-header__name">
            <span className="site-header__name-main">Sanchaari</span>
            <span className="site-header__name-sub">South India Heritage Tours</span>
          </span>
        </Link>

        <nav
          className={cn("site-header__nav", open && "is-open")}
          aria-label="Primary"
        >
          <ul>
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "site-header__link",
                      active && "is-active"
                    )}
                    aria-current={active ? "page" : undefined}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="site-header__cta">
          <a
            href={buildTelUrl()}
            className="site-header__call"
            aria-label={`Call ${BUSINESS.name}`}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18" fill="currentColor">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
            </svg>
            <span>Call</span>
          </a>
          <a
            href={buildWhatsAppUrl(
              `Hello Sanchaari, I'd like to enquire about your South India tours.`
            )}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn--whatsapp site-header__wa"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18">
              <path
                fill="currentColor"
                d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.815 11.815 0 0 1 3.488 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"
              />
            </svg>
            <span>WhatsApp</span>
          </a>
          <button
            type="button"
            className="site-header__toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <style jsx>{`
        .site-header__inner {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding-block: 0.875rem;
        }
        .site-header__brand {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--heritage-ink);
          text-decoration: none;
        }
        .site-header__logo {
          width: 3rem;
          height: 3rem;
          object-fit: contain;
        }
        .site-header__name {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }
        .site-header__name-main {
          font-family: var(--font-fraunces);
          font-weight: 600;
          font-size: 1.25rem;
          letter-spacing: 0.01em;
        }
        .site-header__name-sub {
          font-family: var(--font-poppins);
          font-size: 0.6875rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--heritage-muted);
        }
        .site-header__nav {
          margin-left: auto;
        }
        .site-header__nav ul {
          display: flex;
          gap: 1.75rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .site-header__link {
          display: inline-flex;
          align-items: center;
          height: var(--tap-target);
          font-family: var(--font-poppins);
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--heritage-ink);
          text-decoration: none;
          position: relative;
        }
        .site-header__link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0.5rem;
          height: 2px;
          width: 0;
          background: var(--heritage-rust);
          transition: width 0.25s ease;
        }
        .site-header__link:hover::after,
        .site-header__link.is-active::after {
          width: 100%;
        }
        .site-header__link.is-active {
          color: var(--heritage-rust);
        }
        .site-header__cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        .site-header__call {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.5rem 0.875rem;
          min-height: var(--tap-target);
          border: 1px solid var(--heritage-line-strong);
          border-radius: var(--radius-pill);
          color: var(--heritage-ink);
          font-weight: 600;
          font-size: 0.9375rem;
          text-decoration: none;
          background: var(--heritage-ivory);
          transition: all var(--transition-fast);
        }
        .site-header__call:hover {
          background: var(--heritage-ink);
          color: var(--heritage-cream);
          border-color: var(--heritage-ink);
        }
        .site-header__call svg {
          width: 1rem;
          height: 1rem;
          fill: currentColor;
        }
        .site-header__toggle {
          display: none;
          width: var(--tap-target);
          height: var(--tap-target);
          background: var(--heritage-ivory);
          border: 1px solid var(--heritage-line-strong);
          border-radius: var(--radius-md);
          padding: 0.75rem 0.625rem;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
        }
        .site-header__toggle span {
          display: block;
          height: 2px;
          background: var(--heritage-ink);
          border-radius: 2px;
        }
        @media (max-width: 960px) {
          .site-header__name-sub {
            display: none;
          }
          .site-header__nav {
            position: fixed;
            inset: 4.25rem 0 auto 0;
            background: var(--heritage-cream);
            border-bottom: 1px solid var(--heritage-line);
            padding: 1.25rem var(--site-pad-x) 2rem;
            transform: translateY(-110%);
            transition: transform 0.3s ease;
            box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.08);
          }
          .site-header__nav.is-open {
            transform: translateY(0);
          }
          .site-header__nav ul {
            flex-direction: column;
            gap: 0.25rem;
          }
          .site-header__link {
            width: 100%;
            font-size: 1.0625rem;
            padding-block: 0.5rem;
            border-bottom: 1px solid var(--heritage-line);
          }
          .site-header__link::after {
            display: none;
          }
          .site-header__toggle {
            display: inline-flex;
          }
          .site-header__call span,
          .site-header__wa span {
            display: none;
          }
          .site-header__call,
          .site-header__wa {
            padding: 0.5rem 0.75rem;
          }
        }
        @media (max-width: 480px) {
          .site-header__inner {
            gap: 0.5rem;
          }
          .site-header__logo {
            width: 2.5rem;
            height: 2.5rem;
          }
          .site-header__name-main {
            font-size: 1.0625rem;
          }
        }
      `}</style>
    </header>
  );
}
