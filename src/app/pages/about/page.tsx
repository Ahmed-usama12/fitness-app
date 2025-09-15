import { useTranslations } from "use-intl";
import AboutHeader from "./components/header";
import Photos from "./components/photos";
import vector from "@assets/images/main-vector.png";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
export default function About() {
  // translation
  const t = useTranslations("about-section");

  // hook
  const nav = useNavigate();

  // programs
  const programs = [
    { title: t("personal-trainer"), parg: t("pt-parag") },
    { title: t("cardio-programs"), parg: t("cp-parag") },
    { title: t("quality-equipment"), parg: t("qe-parag") },
    { title: t("healthy-nutritions"), parg: t("hn-parag") },
  ];

  return (
    <section className="my-10 grid grid-cols-1 gap-20 px-5 md:grid-cols-2 md:px-20">
      {/* photos */}
      <Photos />

      {/* description */}
      <div className="row-start-1 row-end-2">
        {/* headline */}
        <AboutHeader />

        {/* title */}
        <h2 className="font-baloo mt-10 text-4xl font-bold">
          {t.rich("empower", { A: (value) => <span className="text-main">{value}</span> })}
        </h2>

        {/* paragraph */}
        <p className="font-rubik mt-6 text-lg leading-8">{t("paragraph")}</p>

        {/* programs */}
        <div className="mt-16 mb-12 grid grid-cols-2 gap-6">
          {programs.map((el, index) => (
            <React.Fragment key={index}>
              <div className="col-span-2 md:col-span-1">
                <h3 className="font-baloo mb-4 flex items-center gap-4 text-[20px] font-bold">
                  <img src={vector} className="size-4" />
                  {el.title}
                </h3>
                <p>{el.parg}</p>
              </div>
              {index === 1 && <Separator className="col-span-2 my-2" />}
            </React.Fragment>
          ))}
        </div>

        {/* Button */}
        <Button className="min-w-36" onClick={() => nav("/classes")}>
          {t("get-started")}
        </Button>
      </div>
    </section>
  );
}
