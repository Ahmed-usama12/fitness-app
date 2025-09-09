import About from "../about/page";
import HeroSection from "./components/hero-section/hero-section";
import { DialogDemo } from "@/components/chat/dialog-chat";

export default function Homepage() {
  return (
    <main>
      <HeroSection />
      <About />
      <DialogDemo />
    </main>
  );
}
