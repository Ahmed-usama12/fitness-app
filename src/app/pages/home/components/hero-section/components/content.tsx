import { isMobileContext } from "@/components/providers/components/mobile.provider";
import { Button } from "@/components/ui/button";

import man from "@assets/images/man-1.png";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useFormatter, useTranslations } from "use-intl";
export default function HeroContent() {
  // Hook
  const nav = useNavigate();

  // translation
  const t = useTranslations("hero-section");
  const g = useTranslations();
  // format numbers
  const format = useFormatter();

  // check if this screen is mobile
  const { isMobile } = useContext(isMobileContext);
  return (
    <div className="flex flex-col gap-5 px-5 md:flex-row md:gap-32 md:px-20">
      {/* description part */}
      <div className="w-full md:my-auto">
        {/* title */}
        <h2 className="font-baloo text-6xl font-bold">
          {t.rich("title", {
            span: (value) => <span className="text-main">{value}</span>,
          })}
        </h2>

        {/* message */}
        <p className="font-rubik before:bg-main relative ms-5 mt-8 w-3/4 text-lg before:absolute before:-start-5 before:h-full before:w-1 before:rounded-full">
          {t("message")} !
        </p>

        {/* statistics */}
        <div className="mt-16 flex w-3/4 flex-col justify-between md:flex-row">
          <div>
            <h3 className="my-1 text-xl font-bold">{format.number(1200, "units")}+</h3>
            <p className="text-lg">{t("active-member")}</p>
          </div>

          <div>
            <h3 className="my-1 text-xl font-bold">{format.number(12, "units")}+</h3>
            <p className="text-lg">{t("certified-trainers")}</p>
          </div>

          <div>
            <h3 className="my-1 text-xl font-bold">{format.number(20, "units")}+</h3>
            <p className="text-lg">{t("year-of-experience")}</p>
          </div>
        </div>

        <div className="mt-16 flex justify-between gap-12 md:justify-start">
          <Button icon={!isMobile} className="w-40" onClick={() => nav("/classes")}>
            {g("get-started")}
          </Button>
          <Button icon={!isMobile} variant="secondary">
            {g("explore-more")}
          </Button>
        </div>
      </div>

      {/* Image */}
      <img
        src={man}
        className="mx-auto mt-auto md:mx-0 md:ms-auto md:max-h-[519px] lg:max-h-[650px]"
      />
    </div>
  );
}
