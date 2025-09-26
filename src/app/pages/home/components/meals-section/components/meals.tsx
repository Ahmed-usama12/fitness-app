import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { useTranslations } from "use-intl"

export default function MealCard() {
    //Translations
    const t = useTranslations()

    return (
        < div className="font-baloo relative flex w-full flex-col items-center justify-center gap-4 sm:gap-6 lg:absolute lg:top-2/3 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:flex-row" >
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
        </div >
    )
}
