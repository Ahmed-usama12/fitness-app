import About from "../about/page";

import HeroSection from "./components/hero-section/hero-section";
import WorkoutSection from "./components/workouts-section/workout-section";

export default function Homepage() {
  return (
    <main>
      <HeroSection />
      <About />
      <WorkoutSection />
    </main>
  );
}
