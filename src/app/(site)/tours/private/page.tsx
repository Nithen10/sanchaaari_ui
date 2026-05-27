import type { Metadata } from "next";
import Reveal from "@/components/site/GSAPReveal";
import BreadcrumbTrail from "@/components/site/BreadcrumbTrail";
import Filters from "@/components/site/Filters";
import { packagesByKind } from "@/data/packages";

export const metadata: Metadata = {
  title: "Samraksha: Private Tours",
  description:
    "Samraksha is our private-tour brand. Hand-picked accommodation, a personal vehicle, fully flexible pace, and an optional dedicated companion for senior travellers.",
};

export default function PrivateToursPage() {
  const privateTours = packagesByKind("private");
  return (
    <>
      <section className="site-section tours-hero">
        <div className="site-container">
          <BreadcrumbTrail
            items={[
              { label: "Home", href: "/" },
              { label: "Tours", href: "/tours" },
              { label: "Private" },
            ]}
          />
          <Reveal>
            <span className="eyebrow">Samraksha · private tours</span>
            <h1>Just your family. Your pace.</h1>
            <p className="section-lead">
              Hand-picked accommodation, a personal vehicle and a fully
              flexible itinerary. Add a dedicated senior companion if you&rsquo;d
              like an extra pair of trained hands along the way.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="site-section" style={{ paddingTop: 0 }}>
        <div className="site-container site-container--wide">
          <Filters packages={privateTours} lockedKind="private" />
        </div>
      </section>

      <style>{`
        .tours-hero h1 { max-width: 22ch; margin-block: 0.5rem 1.25rem; }
      `}</style>
    </>
  );
}
