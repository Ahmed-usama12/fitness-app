import React, { useContext } from "react";
import { musclesGroupContext } from "@/app/pages/classes/context/muscle-group.context";
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
import GenerateBullets from "@/components/common/generate-bullets";

export default function MuscleGroups() {
    // muscle group context
    const { muscleGroup, isFetching, error } = useContext(musclesGroupContext);

    // translation
    const t = useTranslations();
    const locale = useLocale();

    // mobile provider
    const { isMobile } = useContext(isMobileContext);

    // api to setup bullets
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    //  hook to set bullets count and active
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

    // pages to make carousel render groups through two lines
    const pages = [];
    // loop to make every index in  pages array have 6 muscle group
    for (let i = 0; i < group.length; i += 6) {
        pages.push(group.slice(i, i + 6));
    }

    return (
        // loading component
        <CardLoading status={isFetching}>
            {/* display error if exist */}
            <GeneralError error={error}>
                {group.length > 0 ? (
                    <Carousel
                        opts={{
                            align: "start",
                            direction: locale === "ar" ? "rtl" : "ltr",
                            slidesToScroll: 1,
                        }}
                        setApi={setApi}
                    >
                        <CarouselContent>
                            {/* make the carousel content in mobil to render just on card */}
                            {isMobile
                                ? group.map((item) => (
                                    <CarouselItem key={item._id} className="basis:full h-300px sm:basis-1/2">
                                        <MuscleCard item={item} />
                                    </CarouselItem>
                                ))
                                : // on laptop screen render the section with 6 muscle group
                                pages.map((page, index) => (
                                    <CarouselItem key={index} className="basis:full">
                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                            {page.map((item) => (
                                                <div key={item._id} className="h-[300px] md:h-[400px]">
                                                    <MuscleCard item={item} />
                                                </div>
                                            ))}
                                        </div>
                                    </CarouselItem>
                                ))}
                        </CarouselContent>

                        {/* render bullets section if there is have more than one group */}
                        {count > 1 && <GenerateBullets count={count} current={current} />}
                    </Carousel>
                ) : (
                    // render no items to display if there is no group to display
                    <div className="font-baloo text-main mt-20 text-3xl font-bold">{t("no-items")}</div>
                )}
            </GeneralError>
        </CardLoading>
    );
}