interface IngredientsProps {
  measures: string[];
  ingreduents: string[];
}

export default function Ingredients({ measures, ingreduents }: IngredientsProps) {
  const combined = Object.fromEntries(
    ingreduents.map((ing, index) => [ing, measures[index] || ""]),
  );

  console.log(combined);

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-3xl font-semibold text-white">Ingredients</h2>
      <div className="grid grid-cols-1 overflow-hidden rounded-2xl px-2 py-2 shadow-xl md:gap-5 lg:grid-cols-2 lg:gap-5">
        {Object.entries(combined).map(([ingreduent, measure]) => (
          <div className="flex items-center justify-between border-b-2 pb-1 text-gray-200">
            <span className="text-sm font-semibold md:text-base">{ingreduent}</span>
            <span className="text-sm text-red-600 md:text-base">{measure}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
