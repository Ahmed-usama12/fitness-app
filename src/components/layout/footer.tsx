import { Mail, Phone } from "lucide-react";
import superFitness from "@/assets/images/3f1b97ac1d19ded33c496670ee9f22167b9fd16b.png"
import { Link } from "react-router-dom";
import { useLocale, useTranslations } from "use-intl";

export default function Footer() {
    //  Translations
    const locale = useLocale();
    const t = useTranslations('footer');

    return (
        <footer dir={locale === "ar" ? "rtl" : "ltr"} className='grid grid-cols-1 gap-y-5 md:grid-cols-2 lg:grid-cols-4 justify-items-center  pt-10 pb-20 px-20 bg-[#F3F3F4] text-[#242424] dark:bg-[#242424] dark:text-[#f3f3f4] '>
            {/*Logo & Slogan*/}
            <div>
                <img
                    src={superFitness}
                    alt="Super Fitness Gym Logo"
                    className="w-[87px] bg-black dark:bg-transparent"
                />
                <p>{t("Slogan1")} <br />
                    {t("Slogan2")}</p>
            </div>

            {/*Contact Info*/}
            <div>
                <h3 className='capitalize font-bold text-lg pb-7'>{t('contact')}</h3>
                <div className="flex gap-4 items-center pb-2">
                    <div className="flex justify-center items-center border border-[#242424] dark:border-[#f3f3f4] size-10 p-2 rounded-full">
                        <Phone size={15.24} strokeWidth={3} />
                    </div>
                    <Link to="tel:+91123456789" dir="ltr" className="hover:text-orange-500">
                        +91 123 456 789
                    </Link>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="flex justify-center items-center border border-[#242424] dark:border-[#f3f3f4] size-10 p-2 rounded-full">
                        <Mail size={15.24} strokeWidth={3} />
                    </div>
                    <Link to="mailto:info@gmail.com" dir="ltr" className="hover:text-orange-500">
                        info@gmail.com
                    </Link>
                </div>
            </div>

            {/* Gym Timing */}
            <div>
                <h3 className='capitalize font-bold text-lg pb-7'>{t("GymTiming")}</h3>
                <p>{t("gym-timing-one")}</p>
                <p>{t("gym-timing-two")}</p>
            </div>

            {/* Location */}
            <div>
                <h3 className='capitalize font-bold text-lg pb-7'>{t("OurLocation")}</h3>
                <p>2715 Ash Dr. San Jose, South <br /> Dakota 83475</p>
            </div>
        </footer>
    )
}
