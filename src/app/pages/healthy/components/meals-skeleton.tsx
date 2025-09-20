export default function SkeletonMealsGrid() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="relative animate-pulse overflow-hidden rounded-xl shadow-lg">
            {/* image*/}
            <div className="h-72 w-full bg-zinc-300 dark:bg-zinc-600" />

            {/* title & link*/}
            <div className="absolute bottom-0 flex w-full flex-col gap-2 rounded-b-xl bg-gradient-to-t from-neutral-200 to-neutral-400 p-3 py-4 dark:from-stone-600 dark:to-stone-800">
              <div className="h-4 w-2/3 rounded bg-zinc-400 dark:bg-zinc-600" />
              <div className="h-4 w-1/3 rounded bg-zinc-400 dark:bg-zinc-600" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
