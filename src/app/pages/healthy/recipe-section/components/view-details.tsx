import { useMealsDetails } from "@/hooks/use-meals";

export default function ViewDetails() {
  const { payload, isError, isLoading } = useMealsDetails("52959");

  console.log(payload);

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
          <h1 className="mb-4 text-5xl font-semibold text-white md:text-6xl">Pasta With Meat</h1>
          <p className="max-w-4xl text-base leading-7 text-gray-300">
            Lorem Ipsum dolor sit amet consectetur. Tempus volutpat ut nisi morbi. Lorem Ipsum dolor
            sit amet consectetur. Tempus volutpat ut nisi morbi. Lorem Ipsum dolor sit amet
            consectetur. Tempus volutpat ut nisi morbi.
          </p>

          <div className="mt-10 flex flex-wrap justify-around gap-6">
            <MacroBadge label="Energy" value="100 K" />
            <MacroBadge label="Protein" value="15 G" />
            <MacroBadge label="Carbs" value="58 G" />
            <MacroBadge label="Fat" value="20 G" />
          </div>
        </div>
      </div>
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
