import { ArrowUpRight, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslations } from "use-intl";

export default function MealsSection() {
  // Translation
  const t = useTranslations();
  return (
    <section className="bg-[url(@assets/images/meals-bg.jpg)] bg-cover bg-center min-h-[705px] relative overflow-hidden flex flex-col items-center gap-6 px-4 py-8 lg:py-0">
      {/* Title */}
      <h1 className="flex justify-center font-black text-3xl sm:text-4xl lg:text-5xl font-baloo">
        HEALTHY
      </h1>

      {/* Headline */}
      <div
        className="
    flex flex-col items-center justify-start gap-2 sm:gap-3 
    w-full text-center 
    bg-transparent lg:bg-neutral-400  dark:bg-radial-[at_50%_75%] from-stone-700 to-stone-800
    relative lg:absolute lg:top-8
    px-4 pt-6 lg:h-[450px]
  "
      >
        <span className="text-main flex items-center gap-2 font-medium text-sm sm:text-base">
          <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6 rotate-45" />
          {t("healthy-nutritions")}
        </span>

        <h2 className="text-black font-black font-baloo dark:text-white  text-lg sm:text-xl lg:text-4xl lg:w-xl leading-snug">
          {t.rich("Health-title", {
            highlight: (chunks) => <span className="text-main">{chunks}</span>,
          })}
        </h2>
      </div>

      {/* Meals Photos */}
      <div
        className="
    flex flex-col lg:flex-row justify-center gap-4 sm:gap-6 items-center font-baloo w-full
    relative lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-2/3 lg:-translate-y-1/2
  "
      >
        {/* Breakfast */}
        <div className="aspect-square  w-full sm:w-80 lg:w-96 bg-[url(@assets/images/breackfast.jpg)] bg-cover bg-center rounded-xl relative">
          <div className="w-full bg-radial-[at_25%_25%] from-slate-200 to-slate-400 dark:bg-radial-[at_25%_25%] dark:from-slate-500 dark:to-slate-700 absolute bottom-0 rounded-b-xl p-3 sm:p-4 flex flex-col gap-2 sm:gap-3">
            <h3 className="text-black font-bold text-lg sm:text-xl dark:text-white">
              {t("breackfast")}
            </h3>
            <Link
              to=""
              className="text-main font-medium text-sm sm:text-base flex gap-2 items-center"
            >
              {t("read-more")}
              <ArrowUpRight className="w-5 h-5 bg-main rounded-full  text-black p-1" />
            </Link>
          </div>
        </div>

        {/* Lunch */}
        <div className="aspect-square w-full sm:w-80 lg:w-96 bg-[url(@assets/images/lunch.jpg)] bg-cover bg-center rounded-xl relative">
          <div className="w-full bg-radial-[at_25%_25%] from-neutral-200 to-neutral-400 dark:bg-radial-[at_25%_25%] dark:from-stone-600 dark:to-stone-800 absolute bottom-0 rounded-b-xl p-3 sm:p-4 flex flex-col gap-2 sm:gap-3">
            <h3 className="text-black font-bold text-lg sm:text-xl dark:text-white">
              {t("lunch")}
            </h3>
            <Link
              to=""
              className="text-main font-medium text-sm sm:text-base flex gap-2 items-center"
            >
              {t("read-more")}
              <ArrowUpRight className="w-5 h-5 bg-main rounded-full  text-black p-1" />
            </Link>
          </div>
        </div>

        {/* Dinner */}
        <div className="aspect-square w-full sm:w-80 lg:w-96 bg-[url(@assets/images/dinner.jpg)] bg-cover bg-center rounded-xl relative">
          <div className="w-full bg-radial-[at_25%_25%] from-white to-slate-400 dark:bg-radial-[at_25%_25%] dark:from-gray-300 dark:to-gray-500 absolute bottom-0 rounded-b-xl p-3 sm:p-4 flex flex-col gap-2 sm:gap-3">
            <h3 className="text-black font-bold text-lg sm:text-xl dark:text-white">
              {t("dinner")}
            </h3>
            <Link
              to=""
              className="text-main font-medium text-sm sm:text-base flex gap-2 items-center"
            >
              {t("read-more")}
              <ArrowUpRight className="w-5 h-5 bg-main rounded-full  text-black p-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
