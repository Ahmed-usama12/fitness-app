import MealsSection from "./components/meals-section/meals-section";
import WhyUsSection from "./components/whyus-section/why-us-section";

export default function Homepage() {
  return (
    <main>
      {/* Why us Section */}
      <WhyUsSection />
      {/* Healty Section */}
      <MealsSection />
    </main>
  );
}
