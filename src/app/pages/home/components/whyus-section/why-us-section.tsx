import top1 from "@/assets/images/top-left.png";
import top2 from "@/assets/images/top-right.jpg";
import bottom1 from "@/assets/images/bottom-left.jpg";
import bottom2 from "@/assets/images/right-bottom.png";
import { Dumbbell } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "use-intl";

export default function WhyUsSection() {
  // Translation
  const t = useTranslations();

  return (
    <section className="bg-white dark:bg-zinc-800 font-baloo  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left div */}
          <div className="flex flex-col gap-10">
            {/* Header */}
            <div className="flex flex-col gap-2">
              <h1 className=" font-baloo font-black text-3xl sm:text-4xl text-gray-600 dark:text-white">
                {t("why-us")}
              </h1>
              <span className="text-main flex items-center gap-2 font-medium text-sm sm:text-base">
                <Dumbbell className="w-5 h-5 sm:w-6 sm:h-6 rotate-45" />
                {t("why-us")}
              </span>
            </div>

            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 dark:text-white">
                  {t.rich("why-us-title", {
                    highlight: (chunks) => (
                      <span className="text-main">{chunks}</span>
                    ),
                  })}
                </h1>
                {/* Content */}
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed dark:text-white">
                  {t("why-us-content")}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-main rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">01</span>
                    </div>
                    <Separator
                      orientation="vertical"
                      className="hidden sm:block h-6 border-l border-dotted border-gray-300"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-zic-900 dark:text-white mb-1 sm:mb-2">
                      {t("feature-one-head")}
                    </h3>
                    <p className="text-zic-600 dark:text-white text-sm sm:text-base">
                      {t("feature-one-content")}
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-main rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">02</span>
                    </div>
                    <Separator
                      orientation="vertical"
                      className="hidden sm:block h-6 border-l border-dotted border-gray-300"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-white mb-1 sm:mb-2">
                      {t("Feature-two-head")}
                    </h3>
                    <p className="text-zinc-600 dark:text-white text-sm sm:text-base">
                      {t("Feature-two-content")}
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-main rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">03</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-white mb-1 sm:mb-2">
                      {t("Feature-three-head")}
                    </h3>
                    <p className="text-zinc-600 dark:text-white text-sm sm:text-base">
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
              <div className="relative h-52 sm:h-72 lg:h-80 rounded-2xl overflow-hidden">
                <img
                  src={top1}
                  alt="Person in white workout clothes in gym"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-52 sm:h-72 lg:h-80 rounded-2xl overflow-hidden">
                <img
                  src={bottom1}
                  alt="Person in gym with equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-4 sm:pt-6 lg:pt-8">
              <div className="relative h-44 sm:h-60 lg:h-64 rounded-2xl overflow-hidden">
                <img
                  src={top2}
                  alt="Tattooed person lifting weights"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-44 sm:h-60 lg:h-64 rounded-2xl overflow-hidden">
                <img
                  src={bottom2}
                  alt="Person stretching"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
