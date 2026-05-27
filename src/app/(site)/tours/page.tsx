import type { Metadata } from "next";
import Reveal from "@/components/site/GSAPReveal";
import BreadcrumbTrail from "@/components/site/BreadcrumbTrail";
import Filters from "@/components/site/Filters";
import { PACKAGES } from "@/data/packages";

export const metadata: Metadata = {
  title: "All Tours",
  description:
    "Hand-curated South Indian temple and heritage tours across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh and Telangana. Filter by state, theme, duration and departure city.",
};

export default function ToursPage() {
  return (
    <>
      <section className="site-section tours-hero">
        <div className="site-container">
          <BreadcrumbTrail
            items={[{ label: "Home", href: "/" }, { label: "Tours" }]}
          />
          <Reveal>
            <span className="eyebrow">Browse journeys</span>
            <h1>All tours, all five states.</h1>
            <p className="section-lead">
              Filter by state, theme, duration or departure city to find a
              journey that fits your pace. Every tour can be customised, and
              every senior traveller can add a personal companion.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="site-section" style={{ paddingTop: 0 }}>
        <div className="site-container site-container--wide">
          <Filters packages={PACKAGES} />
        </div>
      </section>

      <style>{`
        .tours-hero { padding-bottom: 2rem; }
        .tours-hero h1 { max-width: 22ch; margin-block: 0.5rem 1.25rem; }
      `}</style>
    </>
  );
}
