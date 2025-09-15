import HeroContent from "./components/content";
import ScrollTicker from "@/components/common/scroll-ticker";

export default function HeroSection() {
  return (
    // Hero section
    <section className="relative min-h-screen w-full bg-[url(@assets/images/background.png)]">
      {/* layer */}
      <div className="grid min-h-screen grid-rows-[1fr_auto] bg-zinc-50/60 pt-24 backdrop-blur-3xl dark:bg-zinc-800/60">
        {/* content */}
        <HeroContent />
        {/* Ticket bar */}
        <ScrollTicker />
      </div>
    </section>
  );
}
