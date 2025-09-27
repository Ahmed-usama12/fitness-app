import About from "../about/page";

import HeroSection from "./components/hero-section/hero-section";
import WorkoutSection from "./components/workouts-section/workout-section";
import MealsSection from "./components/meals-section/meals-section";
import WhyUsSection from "./components/whyus-section/why-us-section";

export default function Homepage() {
  return (
    <main>
      {/* hero section */}
      <HeroSection />

      {/* about section */}
      <About />

      {/* workout section */}
      <WorkoutSection />

      {/* whyus section */}
      <WhyUsSection />

      {/* Meals Section */}
      <MealsSection />
    </main>
  );
}
