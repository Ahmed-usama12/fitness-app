import { useTheme } from "@/hooks/use-theme";
import { Dumbbell } from "lucide-react";
import { useTranslations } from "use-intl";
import MealCard from "./components/meals";

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

      {/*Meals*/}
      <MealCard/>
    </section>
  );
}
