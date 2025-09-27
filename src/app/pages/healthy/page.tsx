import { useEffect, useState } from "react";
import MealsNavbar from "./components/categories-navbar";
import MealsGrid from "./components/meals-by-category";
import MealsCategoriestHeader from "./components/header";
import { useSearchParams } from "react-router-dom";

export default function MealsPage() {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    } else {
      //  Defalut category
      setSelectedCategory("Chicken");
    }
  }, [categoryFromUrl]);
  //
  return (
    <section className="relative pt-28 text-center">
      {/* Header */}
      <MealsCategoriestHeader />

      <div className="absolute top-0 left-0 h-full w-full bg-zinc-50/40 px-5 pt-8 backdrop-blur-3xl dark:bg-zinc-800/60"></div>
      <div className="relative z-10 mt-6 w-full space-y-8 px-5 md:px-20">
        {/* Navbar */}
        <MealsNavbar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {/* Meals Section */}
        <MealsGrid selectedCategory={selectedCategory} />
      </div>
    </section>
  );
}
