import SidebarRecipe from "./components/sidebar-recipe";
import ViewDetails from "./components/view-details";
import Ingredients from "./components/ingredients";

export default function RecipeSection() {
  return (
    <div className="relative mt-40 px-20">
      {/* Background blur effect */}
      <div className="absolute inset-0 -z-10 bg-[url('@assets/images/recipeSection.jpg')] bg-cover opacity-20 blur-2xl" />
      <div className="flex gap-8">
        <SidebarRecipe />
        <div className="flex-1">
          <ViewDetails />
          <Ingredients />
        </div>
      </div>
    </div>
  );
}
