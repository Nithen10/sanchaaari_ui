import type { ReactNode } from "react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import StickyContact from "@/components/site/StickyContact";
import SiteBodyClass from "@/components/site/SiteBodyClass";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteBodyClass />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="site-main">
        {children}
      </main>
      <SiteFooter />
      <StickyContact />
    </>
  );
}
