import { useMealsDetails } from "@/hooks/use-meals";
import Ingredients from "./ingredients";
import { useParams } from "react-router-dom";

export default function ViewDetails() {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <div>No recipe ID provided</div>;
  }

  const { payload } = useMealsDetails(id);

  function filtterResponse(key: string) {
    let myArray;
    if (payload) {
      myArray = Object.entries(payload?.meals[0])
        .filter(([k, v]) => k.includes(key) && v !== "")
        .map(([, v]) => v);
    }
    return myArray;
  }

  return (
    <section className="relative w-full overflow-hidden rounded-2xl">
      <div className="relative h-[520px] w-full">
        <img
          src={payload?.meals[0].strMealThumb}
          alt="Recipe Hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-10 text-center">
          <h1 className="mb-4 text-5xl font-semibold text-white md:text-6xl">
            {payload?.meals[0].strMeal}
          </h1>
          <p
            className="line-clamp-2 max-w-4xl text-base leading-7 text-gray-300"
            title={payload?.meals[0].strInstructions}
          >
            {payload?.meals[0].strInstructions}
          </p>
          <div className="mt-10 flex flex-wrap justify-around gap-6">
            <MacroBadge label="Energy" value={payload?.meals[0].strMeasure3 || ""} />
            <MacroBadge label="Protein" value={payload?.meals[0].strMeasure1 || ""} />
            <MacroBadge label="Carbs" value={payload?.meals[0].strMeasure5 || ""} />
            <MacroBadge label="Fat" value={payload?.meals[0].strMeasure2 || ""} />
          </div>
        </div>
      </div>

      {/* Ingredients */}
      <Ingredients
        measures={filtterResponse("strMeasure") || []}
        ingreduents={filtterResponse("strIngredient") || []}
      />
    </section>
  );
}

function MacroBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-3xl border border-white/20 bg-black/40 px-6 py-4 backdrop-blur">
      <span className="text-lg font-semibold text-white">{value}</span>
      <span className="text-sm font-bold text-red-600">{label}</span>
    </div>
  );
}
