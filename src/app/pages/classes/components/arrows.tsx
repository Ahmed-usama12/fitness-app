import vector from "@assets/images/Vector.svg";
import { useTranslations } from "use-intl";

export default function Arrows() {
    //Translations
    const t = useTranslations();
    return (
        <div className="flex gap-4 py-2">
            {Array(3).fill(null).map((_, i) => (
                <div key={i} className="flex gap-2 items-center">
                    <div className="bg-main size-9 border-[2px] border-zinc-50 rounded-full flex items-center justify-center">
                        <img src={vector} className="w-4" alt="icon" />
                    </div>
                    <h3 className="font-baloo font-bold">{t("expertly-designed")}</h3>
                </div>
            ))}
        </div>
    )
}
