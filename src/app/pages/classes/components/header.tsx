import { Dumbbell } from "lucide-react";
import { useLocale, useTranslations } from "use-intl";

export default function WorkoutHeader() {
  // translation
  const t = useTranslations("workouts-section");

  const locale = useLocale();
  return (
    <div className="relative h-16">
      {/*Text background */}
      <svg
        width={370}
        height={65}
        className="absolute left-1/2 z-10 hidden -translate-1/2 -translate-y-0 md:block"
      >
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#eeeeee" />
            <stop offset="100%" stopColor="#242424" />
          </linearGradient>
        </defs>
        <text
          x={locale === "ar" ? "370" : "0"}
          y="65"
          fontFamily="rubik"
          fontSize="64"
          fontWeight="bold"
          fill="transparent"
          stroke="url(#gradient2)"
          strokeWidth="1"
        >
          WORKOUTS
        </text>
      </svg>

      {/* text */}
      <span className="text-main font-baloo absolute left-1/2 z-10 flex -translate-x-1/2 translate-y-3 items-end gap-3 text-lg font-semibold md:bottom-1">
        <Dumbbell className="rotate-45" width={34} height={30} />
        {t("fitness-class")}
      </span>
    </div>
  );
}
