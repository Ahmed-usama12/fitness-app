import ScrollTicker from "@/components/common/scroll-ticker";
import About from "./page";

export default function AboutLayout() {
  return (
    <div className="pt-24 md:pt-44">
      <About />
      <ScrollTicker />
    </div>
  );
}
