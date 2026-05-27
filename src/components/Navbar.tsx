"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/tours", label: "Tours", id: "nav-tours" },
  { href: "/states", label: "States", id: "nav-states" },
  { href: "/circuits", label: "Circuits", id: "nav-circuits" },
  { href: "/senior-companion", label: "Companion", id: "nav-companion" },
  { href: "/contact", label: "Contact", id: "nav-contact" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="navbar" id="navbar">
      <Link href="/" className="navbar-logo" id="navbar-logo">
        <Image
          src="/images/logo.png"
          alt="Sanchaari logo"
          width={256}
          height={256}
          className="logo-icon"
          priority
        />
      </Link>

      <ul className="navbar-nav" id="navbar-nav">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href} id={link.id}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="navbar-right" id="navbar-right">
        <Link href="/tours" className="navbar-cta" id="nav-plan-trip">
          Plan a trip
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
