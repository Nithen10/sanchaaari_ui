import type { Metadata } from "next";
import Reveal from "@/components/site/GSAPReveal";
import BreadcrumbTrail from "@/components/site/BreadcrumbTrail";
import { BUSINESS } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Sanchaari uses cookies and similar technologies on this website.",
};

export default function CookiesPage() {
  return (
    <section className="site-section">
      <div className="site-container legal-page">
        <BreadcrumbTrail
          items={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]}
        />
        <Reveal>
          <span className="eyebrow">Legal</span>
          <h1>Cookie Policy</h1>
          <p className="legal-page__meta">Last updated: June 2026</p>
          <p>
            We use a small number of cookies to keep this website working and to
            understand how it is used so we can improve it. You can control or clear
            cookies in your browser settings at any time. The full cookie details are
            being finalised and will appear here shortly.
          </p>
          <p>
            Questions about cookies? Email us at{" "}
            <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
          </p>
        </Reveal>
      </div>

      <style>{`
        .legal-page { max-width: 50rem; }
        .legal-page__meta { color: var(--heritage-muted); margin-bottom: 1.5rem; }
        .legal-page p { line-height: 1.75; margin-bottom: 1rem; }
      `}</style>
    </section>
  );
}
