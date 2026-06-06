import HeroVideo from "@/components/HeroVideo";
import HomeBodyLock from "@/components/HomeBodyLock";
import HomeBelow from "@/components/site/HomeBelow";
import SmoothScroll from "@/components/site/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <HomeBodyLock />
      <a href="#home-below" className="skip-link">
        Skip to content
      </a>
      <HeroVideo />
      <HomeBelow />
    </>
  );
}
