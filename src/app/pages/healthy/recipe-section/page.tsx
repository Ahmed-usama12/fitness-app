import SidebarRecipe from "./components/sidebar-recipe";
import ViewDetails from "./components/view-details";
import { useParams } from "react-router-dom";
import  { useMealsDataDetails } from "../hooks/use-meals-by-category";

export default function RecipeSection() {

  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <div>No recipe ID provided</div>;
  }

  const { payload } = useMealsDataDetails(id);



    
  



  return (
    <div className="relative mt-40 px-20">
      {/* Background blur effect */}
      <div className="absolute inset-0 -z-10 bg-[url('@assets/images/recipeSection.jpg')] bg-cover opacity-20 blur-2xl" />
      <div className="flex gap-8">
       {payload?.meals&& <SidebarRecipe   currentCategories={payload?.meals[0].strCategory}/>}
        {payload?.meals&&
        <div className="flex-1">
          <ViewDetails meals={payload?.meals} />
        </div>}
      </div>
    </div>
  );
}
