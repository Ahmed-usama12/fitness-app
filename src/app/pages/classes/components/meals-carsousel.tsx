import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import AutoScroll from "embla-carousel-auto-scroll"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { useLocale, useTranslations } from "use-intl"
export default function MealsCarsousel() {
    const t = useTranslations()
    const locale = useLocale()
    return (
        <Carousel
            opts={{
                align: "start",
                direction: locale === "ar" ? "rtl" : "ltr",
                loop: true,
            }}
            plugins={[
                AutoScroll({
                    startDelay: 1000,
                    speed: 1,
                }),
            ]}
            orientation="horizontal"
        >
            {/*title*/}
            <h3 className="font-medium text-3xl py-4">{t("recomended")}</h3>
            <CarouselContent className="flex gap-4 sm:gap-6" >

                <CarouselItem className="basis-auto flex-shrink-0 w-fit">
                    {/* Breakfast */}
                    <div className="relative aspect-square w-full rounded-xl bg-[url(@assets/images/breackfast.jpg)] bg-cover bg-center sm:w-80 lg:w-96" >
                        <div className="absolute bottom-0 flex w-full flex-col gap-2 rounded-b-xl bg-radial-[at_25%_25%] from-slate-200 to-slate-400 p-3 sm:gap-3 sm:p-4 dark:bg-radial-[at_25%_25%] dark:from-slate-500 dark:to-slate-700">
                            <h3 className="text-lg font-bold text-black sm:text-xl dark:text-white">
                                {t("breackfast")}
                            </h3>
                            <Link
                                to=""
                                className="text-main flex items-center gap-2 text-sm font-medium sm:text-base"
                            >
                                {t("read-more")}
                                <ArrowUpRight className="bg-main h-5 w-5 rounded-full p-1 text-black" />
                            </Link>
                        </div>
                    </div >
                </CarouselItem>
                <CarouselItem className="basis-auto flex-shrink-0 w-fit">
                    {/* Lunch */}
                    <div className="relative aspect-square w-full rounded-xl bg-[url(@assets/images/lunch.jpg)] bg-cover bg-center sm:w-80 lg:w-96" >
                        <div className="absolute bottom-0 flex w-full flex-col gap-2 rounded-b-xl bg-radial-[at_25%_25%] from-neutral-200 to-neutral-400 p-3 sm:gap-3 sm:p-4 dark:bg-radial-[at_25%_25%] dark:from-stone-600 dark:to-stone-800">
                            <h3 className="text-lg font-bold text-black sm:text-xl dark:text-white">
                                {t("lunch")}
                            </h3>
                            <Link
                                to=""
                                className="text-main flex items-center gap-2 text-sm font-medium sm:text-base"
                            >
                                {t("read-more")}
                                <ArrowUpRight className="bg-main h-5 w-5 rounded-full p-1 text-black" />
                            </Link>
                        </div>
                    </div >
                </CarouselItem>
                <CarouselItem className="basis-auto flex-shrink-0 w-fit">
                    {/* Dinner */}
                    <div className="relative aspect-square w-full rounded-xl bg-[url(@assets/images/dinner.jpg)] bg-cover bg-center sm:w-80 lg:w-96" >
                        <div className="absolute bottom-0 flex w-full flex-col gap-2 rounded-b-xl bg-radial-[at_25%_25%] from-white to-slate-400 p-3 sm:gap-3 sm:p-4 dark:bg-radial-[at_25%_25%] dark:from-gray-300 dark:to-gray-500">
                            <h3 className="text-lg font-bold text-black sm:text-xl dark:text-white">
                                {t("dinner")}
                            </h3>
                            <Link
                                to=""
                                className="text-main flex items-center gap-2 text-sm font-medium sm:text-base"
                            >
                                {t("read-more")}
                                <ArrowUpRight className="bg-main h-5 w-5 rounded-full p-1 text-black" />
                            </Link>
                        </div>
                    </div >
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    )

}

