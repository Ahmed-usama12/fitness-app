type RowProps = { label: string; value: string };

export default function Ingredients() {
  const rows: RowProps[] = [
    {
      label: "Meal Breasts",
      value: "250g",
    },
    {
      label: "Meal Breasts",
      value: "250g",
    },
    {
      label: "Meal Breasts",
      value: "250g",
    },
    {
      label: "Meal Breasts",
      value: "250g",
    },
  ];

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-3xl font-semibold text-white">Ingredients</h2>
      <div className="grid grid-cols-1 overflow-hidden rounded-2xl px-2 py-4 shadow-xl md:gap-5 lg:grid-cols-2 lg:gap-16">
        {rows.map((row, idx) => (
          <IngredientRow key={idx} {...row} isLast={idx === rows.length - 1} />
        ))}
      </div>
    </section>
  );
}

function IngredientRow({ label, value }: RowProps & { isLast?: boolean }) {
  return (
    <>
      <div className="flex items-center justify-between border-b-2 pb-4 text-gray-200">
        <span className="text-sm font-semibold md:text-base">{label}</span>
        <span className="text-sm text-red-600 md:text-base">{value}</span>
      </div>
    </>
  );
}
