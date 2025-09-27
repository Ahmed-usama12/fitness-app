import top1 from "@/assets/images/top-left.png";
import top2 from "@/assets/images/top-right.jpg";
import bottom1 from "@/assets/images/bottom-left.jpg";
import bottom2 from "@/assets/images/right-bottom.png";
import { Dumbbell } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "use-intl";
import { useTheme } from "@/hooks/use-theme";

export default function WhyUsSection() {
  // Translation
  const t = useTranslations();

  //   Hook
  const { theme } = useTheme();

  return (
    <section className="font-baloo bg-white px-4 py-12 sm:px-6 lg:px-8 dark:bg-zinc-800">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left div */}
          <div className="flex flex-col gap-10">
            {/* Header */}

            <div className="relative">
              <svg viewBox="0 0 800 60" className="hidden h-fit md:block">
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
                  {t("why-us")}
                </text>
              </svg>
              <span className="text-main font-baloo absolute top-0 flex items-end gap-3 text-lg font-semibold md:bottom-1 ltr:left-1 rtl:right-1 rtl:text-3xl">
                <Dumbbell className="rotate-45" width={34} height={30} />
                {t("why-us")}
              </span>
            </div>

            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="mb-4 text-3xl leading-tight font-bold text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
                  {t.rich("why-us-title", {
                    highlight: (chunks) => <span className="text-main">{chunks}</span>,
                  })}
                </h1>
                {/* Content */}
                <p className="text-base leading-relaxed text-gray-600 sm:text-lg dark:text-white">
                  {t("why-us-content")}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-main flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12">
                      <span className="text-sm font-bold text-white">01</span>
                    </div>
                    <Separator
                      orientation="vertical"
                      className="hidden h-6 border-l border-dotted border-gray-300 sm:block"
                    />
                  </div>
                  <div>
                    <h3 className="text-zic-900 mb-1 font-bold sm:mb-2 dark:text-white">
                      {t("feature-one-head")}
                    </h3>
                    <p className="text-zic-600 text-sm sm:text-base dark:text-white">
                      {t("feature-one-content")}
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-main flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12">
                      <span className="text-sm font-bold text-white">02</span>
                    </div>
                    <Separator
                      orientation="vertical"
                      className="hidden h-6 border-l border-dotted border-gray-300 sm:block"
                    />
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-zinc-900 sm:mb-2 dark:text-white">
                      {t("Feature-two-head")}
                    </h3>
                    <p className="text-sm text-zinc-600 sm:text-base dark:text-white">
                      {t("Feature-two-content")}
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4">
                  <div className="bg-main flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12">
                    <span className="text-sm font-bold text-white">03</span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-zinc-900 sm:mb-2 dark:text-white">
                      {t("Feature-three-head")}
                    </h3>
                    <p className="text-sm text-zinc-600 sm:text-base dark:text-white">
                      {t("Feature-three-content")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right div (Images) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-52 overflow-hidden rounded-2xl sm:h-72 lg:h-80">
                <img
                  src={top1}
                  alt="Person in white workout clothes in gym"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative h-52 overflow-hidden rounded-2xl sm:h-72 lg:h-80">
                <img
                  src={bottom1}
                  alt="Person in gym with equipment"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-4 sm:pt-6 lg:pt-8">
              <div className="relative h-44 overflow-hidden rounded-2xl sm:h-60 lg:h-64">
                <img
                  src={top2}
                  alt="Tattooed person lifting weights"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative h-44 overflow-hidden rounded-2xl sm:h-60 lg:h-64">
                <img src={bottom2} alt="Person stretching" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
