import type { Metadata } from "next";
import Reveal from "@/components/site/GSAPReveal";
import BreadcrumbTrail from "@/components/site/BreadcrumbTrail";
import { BUSINESS } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "The terms and conditions that govern bookings and use of Sanchaari's South India heritage tour services.",
};

export default function TermsPage() {
  return (
    <section className="site-section">
      <div className="site-container legal-page">
        <BreadcrumbTrail
          items={[{ label: "Home", href: "/" }, { label: "Terms and Conditions" }]}
        />
        <Reveal>
          <span className="eyebrow">Legal</span>
          <h1>Terms and Conditions</h1>
          <p className="legal-page__meta">Last updated: June 2026</p>
          <p>
            These terms govern your booking and use of Sanchaari&rsquo;s tours and
            services. By booking a journey with us you agree to the booking, payment,
            cancellation and travel terms shared with you at the time of confirmation.
            Detailed policy text is being finalised and will appear here shortly.
          </p>
          <p>
            For any clarification in the meantime, please email us at{" "}
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
