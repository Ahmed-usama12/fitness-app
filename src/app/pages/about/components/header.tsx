import { useTheme } from "@/hooks/use-theme";
import { Dumbbell } from "lucide-react";
import { useTranslations } from "use-intl";

// About us header
export default function AboutHeader() {
  const t = useTranslations("about-section");
  const { theme } = useTheme();
  return (
    <div className="relative">
      <svg viewBox="0 0 800 60" className="h-fit">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={theme === "dark" ? "#a1a1a1" : "#242424"} />
            <stop offset="80%" stopColor={theme === "dark" ? "#242424" : "#ffffff"} />
          </linearGradient>
        </defs>
        <text
          x="0"
          y="50"
          fontFamily="rubik"
          fontSize="64"
          fontWeight="bold"
          fill="transparent"
          stroke="url(#gradient)"
          strokeWidth="1"
        >
          {t("workouts")}
        </text>
      </svg>
      <span className="text-main font-baloo absolute bottom-1 flex items-end gap-3 text-lg font-semibold ltr:left-1 rtl:right-1">
        <Dumbbell className="rotate-45" width={34} height={30} />
        {t("about-us")}
      </span>
    </div>
  );
}
