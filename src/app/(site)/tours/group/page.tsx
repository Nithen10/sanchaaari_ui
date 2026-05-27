import type { Metadata } from "next";
import Reveal from "@/components/site/GSAPReveal";
import BreadcrumbTrail from "@/components/site/BreadcrumbTrail";
import Filters from "@/components/site/Filters";
import { packagesByKind } from "@/data/packages";

export const metadata: Metadata = {
  title: "Samuha: Group Tours",
  description:
    "Samuha is our group-tour brand. Travel with a small, like-minded group, a dedicated tour manager, and pre-arranged senior-darshan slots at every major temple.",
};

export default function GroupToursPage() {
  const groupTours = packagesByKind("group");
  return (
    <>
      <section className="site-section tours-hero">
        <div className="site-container">
          <BreadcrumbTrail
            items={[
              { label: "Home", href: "/" },
              { label: "Tours", href: "/tours" },
              { label: "Group" },
            ]}
          />
          <Reveal>
            <span className="eyebrow">Samuha · group tours</span>
            <h1>Travel together. Worry less.</h1>
            <p className="section-lead">
              Fixed departure dates, a senior-friendly pace, an experienced
              tour manager and pre-booked darshan slots. Most groups travel
              between 12 and 28, small enough to feel personal yet large
              enough to be lively.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="site-section" style={{ paddingTop: 0 }}>
        <div className="site-container site-container--wide">
          <Filters packages={groupTours} lockedKind="group" />
        </div>
      </section>

      <style>{`
        .tours-hero h1 { max-width: 22ch; margin-block: 0.5rem 1.25rem; }
      `}</style>
    </>
  );
}
