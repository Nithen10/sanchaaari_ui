import type { Metadata } from "next";
import Reveal from "@/components/site/GSAPReveal";
import BreadcrumbTrail from "@/components/site/BreadcrumbTrail";
import { BUSINESS } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Sanchaari collects, uses and protects the personal information you share when planning a journey.",
};

export default function PrivacyPage() {
  return (
    <section className="site-section">
      <div className="site-container legal-page">
        <BreadcrumbTrail
          items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        />
        <Reveal>
          <span className="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <p className="legal-page__meta">Last updated: June 2026</p>
          <p>
            We collect only the information needed to plan and arrange your journey —
            such as your name, contact details and travel preferences — and we never
            sell it. We use it to respond to enquiries, prepare itineraries and keep
            you informed about your booking. The full policy is being finalised and
            will appear here shortly.
          </p>
          <p>
            To ask about your data or request changes, email us at{" "}
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
