import HeroSlider from "@/components/HeroSlider";
import HomeBodyLock from "@/components/HomeBodyLock";
import HomeBelow from "@/components/site/HomeBelow";
import StickyContact from "@/components/site/StickyContact";

export default function Home() {
  return (
    <>
      <HomeBodyLock />
      <a href="#home-below" className="skip-link">
        Skip to content
      </a>
      <HeroSlider />
      <HomeBelow />
      <StickyContact />
    </>
  );
}
