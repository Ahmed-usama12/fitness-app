import { useTheme } from "@/hooks/use-theme";
import { ArrowUpRight, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslations } from "use-intl";

export default function MealsSection() {
  // Translation
  const t = useTranslations();
  //   Hook
  const { theme } = useTheme();
  return (
    <section className="relative flex min-h-[705px] flex-col items-center gap-6 overflow-hidden bg-[url(@assets/images/meals-bg.jpg)] bg-cover bg-center px-4 py-8 lg:py-0">
      {/* Title */}
      <svg viewBox="0 0 800 60" className="mx-auto hidden h-fit md:block">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={theme === "dark" ? "#a1a1a1" : "#242424"} />
            <stop offset="80%" stopColor={theme === "dark" ? "#242424" : "#ffffff"} />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="45"
          textAnchor="middle"
          fontFamily="rubik"
          fontSize="48"
          fontWeight="bold"
          fill="transparent"
          stroke="url(#gradient)"
          strokeWidth="1"
        >
          HEALTHY
        </text>
      </svg>

      {/* Headline */}
      <div className="relative flex w-full flex-col items-center justify-start gap-2 bg-transparent from-stone-700 to-stone-800 px-4 pt-6 text-center sm:gap-3 lg:absolute lg:top-14 lg:h-[450px] lg:bg-neutral-400 dark:bg-radial-[at_50%_75%]">
        <span className="text-main flex items-center gap-2 text-sm font-medium sm:text-base">
          <Dumbbell className="h-5 w-5 rotate-45 sm:h-6 sm:w-6" />
          {t("healthy-nutritions")}
        </span>

        <h2 className="font-baloo text-lg leading-snug font-black text-black sm:text-xl lg:w-xl lg:text-4xl dark:text-white">
          {t.rich("Health-title", {
            highlight: (chunks) => <span className="text-main">{chunks}</span>,
          })}
        </h2>
      </div>

      {/* Meals Photos */}
      <div className="font-baloo relative flex w-full flex-col items-center justify-center gap-4 sm:gap-6 lg:absolute lg:top-2/3 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:flex-row">
        {/* Breakfast */}
        <div className="relative aspect-square w-full rounded-xl bg-[url(@assets/images/breackfast.jpg)] bg-cover bg-center sm:w-80 lg:w-96">
          <div className="absolute bottom-0 flex w-full flex-col gap-2 rounded-b-xl bg-radial-[at_25%_25%] from-slate-200 to-slate-400 p-3 sm:gap-3 sm:p-4 dark:bg-radial-[at_25%_25%] dark:from-slate-500 dark:to-slate-700">
            <h3 className="text-lg font-bold text-black sm:text-xl dark:text-white">
              {t("breackfast")}
            </h3>
            <Link
              to="/healthy?category=Breakfast"
              className="text-main flex items-center gap-2 text-sm font-medium sm:text-base"
            >
              {t("read-more")}
              <ArrowUpRight className="bg-main h-5 w-5 rounded-full p-1 text-black" />
            </Link>
          </div>
        </div>

        {/* Lunch */}
        <div className="relative aspect-square w-full rounded-xl bg-[url(@assets/images/lunch.jpg)] bg-cover bg-center sm:w-80 lg:w-96">
          <div className="absolute bottom-0 flex w-full flex-col gap-2 rounded-b-xl bg-radial-[at_25%_25%] from-neutral-200 to-neutral-400 p-3 sm:gap-3 sm:p-4 dark:bg-radial-[at_25%_25%] dark:from-stone-600 dark:to-stone-800">
            <h3 className="text-lg font-bold text-black sm:text-xl dark:text-white">
              {t("lunch")}
            </h3>
            <Link
              to="/healthy?category=Beef"
              className="text-main flex items-center gap-2 text-sm font-medium sm:text-base"
            >
              {t("read-more")}
              <ArrowUpRight className="bg-main h-5 w-5 rounded-full p-1 text-black" />
            </Link>
          </div>
        </div>

        {/* Dinner */}
        <div className="relative aspect-square w-full rounded-xl bg-[url(@assets/images/dinner.jpg)] bg-cover bg-center sm:w-80 lg:w-96">
          <div className="absolute bottom-0 flex w-full flex-col gap-2 rounded-b-xl bg-radial-[at_25%_25%] from-white to-slate-400 p-3 sm:gap-3 sm:p-4 dark:bg-radial-[at_25%_25%] dark:from-gray-300 dark:to-gray-500">
            <h3 className="text-lg font-bold text-black sm:text-xl dark:text-white">
              {t("dinner")}
            </h3>
            <Link
              to="/healthy?category=Pork"
              className="text-main flex items-center gap-2 text-sm font-medium sm:text-base"
            >
              {t("read-more")}
              <ArrowUpRight className="bg-main h-5 w-5 rounded-full p-1 text-black" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
