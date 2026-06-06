import type { Metadata } from "next";
import BreadcrumbTrail from "@/components/site/BreadcrumbTrail";
import ToursExplorer from "@/components/site/ToursExplorer";
import { PACKAGES } from "@/data/packages";

export const metadata: Metadata = {
  title: "All Tours",
  description:
    "Hand-curated South Indian temple and heritage tours across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh and Telangana. Filter by state, theme, duration and departure city.",
};

export default function ToursPage() {
  return (
    <section className="site-section">
      <div className="site-container site-container--wide">
        <BreadcrumbTrail
          items={[{ label: "Home", href: "/" }, { label: "Tours" }]}
        />
        <ToursExplorer packages={PACKAGES} />
      </div>
    </section>
  );
}
