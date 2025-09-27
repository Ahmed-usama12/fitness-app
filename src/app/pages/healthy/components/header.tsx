import { Dumbbell } from "lucide-react";
import { useTranslations } from "use-intl";

export default function MealsCategoriestHeader() {
  // translation
  const t = useTranslations();

  // const locale = useLocale();
  return (
    <>
      <div className="relative z-20 h-16">
        {/*Text background */}
        <svg
          width={370}
          height={65}
          className="absolute left-1/2 z-10 hidden -translate-1/2 -translate-y-0 opacity-40 md:block"
        >
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#eeeeee" />
              <stop offset="100%" stopColor="#242424" />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="55"
            textAnchor="middle"
            fontFamily="rubik"
            fontSize="64"
            fontWeight="bold"
            fill="transparent"
            stroke="url(#gradient2)"
            strokeWidth="1"
          >
            HEALTY
          </text>
        </svg>

        {/* text */}
        <span className="text-main font-baloo absolute left-1/2 z-20 flex -translate-x-1/2 translate-y-3 items-end gap-3 text-lg font-semibold md:bottom-1">
          <Dumbbell className="rotate-45" width={34} height={30} />
          {t("healthy-nutritions")}
        </span>
      </div>

      {/* Header*/}
      <div className="relative z-20 mt-6 flex justify-center">
        <h1 className="font-baloo text-xl leading-snug font-black text-black uppercase sm:text-xl lg:w-xl lg:text-4xl dark:text-white">
          {t.rich("Health-title", {
            highlight: (chunks) => <span className="text-main">{chunks}</span>,
          })}
        </h1>
      </div>
    </>
  );
}
