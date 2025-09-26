import React, { useContext } from "react";
import MuscleCard from "@/components/common/muscle-card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

import { useLocale, useTranslations } from "use-intl";

import CardLoading from "@/components/common/card-loading";
import { isMobileContext } from "@/components/providers/components/mobile.provider";
import GeneralError from "@/components/common/general-error";
import { musclesGroupContext } from "@/app/pages/classes/context/muscle-group.context";
import GenerateBullets from "@/components/common/generate-bullets";

// Muscle group components
export default function Muscle() {
    //  context to provide muscle group
    const { muscleGroup, isFetching, error } = useContext(musclesGroupContext);
    // mobile provider
    const { isMobile } = useContext(isMobileContext);

    // translation
    const t = useTranslations();
    const locale = useLocale();

    // carousel api to support bullets
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    // Hook to setup bullets
    React.useEffect(() => {
        if (!api) {
            return;
        }
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    // muscle group
    const group = muscleGroup?.muscles ?? [];

    return (
        // Loading component
        <CardLoading status={isFetching}>
            {/* display error if exist */}
            <GeneralError error={error}>
                {/* if there are group render it by carousel */}
                {group.length > 0 ? (
                    <Carousel
                        opts={{
                            align: "start",
                            direction: locale === "ar" ? "rtl" : "ltr",
                            slidesToScroll: isMobile ? 1 : 3,
                        }}
                        setApi={setApi}
                    >
                        <CarouselContent>
                            {group.map((item) => (
                                <CarouselItem
                                    key={item._id}
                                    className="basis:full h-300px sm:basis-1/2 md:h-[400px] md:basis-1/3"
                                >
                                    <MuscleCard item={item} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Bullets and listen on displayed group */}
                        {count > 1 && <GenerateBullets count={count} current={current} />}
                    </Carousel>
                ) : (
                    // if group doesn't have group
                    <div className="font-baloo text-main mt-20 text-3xl font-bold">{t("no-items")}</div>
                )}
            </GeneralError>
        </CardLoading>
    );
}