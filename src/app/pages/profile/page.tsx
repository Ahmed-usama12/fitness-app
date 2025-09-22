import { useLoginContext } from "@/context/login-context"
import { RefreshCw } from "lucide-react";
import { useTranslations } from "use-intl";
import ChangePasswordDialog from "./components/change-password-dialog";
import GoalDialog from "./components/goal-dialog";
import LevelDialog from "./components/level-dialog";
import WeightDialog from "./components/weight-dialog";

export default function Profile() {
    //context
    const { user } = useLoginContext();

    //translation
    const t = useTranslations('profile-page');

    //kyc data
    const data = [
        {
            title: t("goal"),
            dialog: <GoalDialog />,
            userData: user?.goal
        },
        {
            title: t("level"),
            dialog: <LevelDialog />,
            userData: user?.activityLevel
        },
        {
            title: t("weight"),
            dialog: <WeightDialog />,
            userData: `${user?.weight} ${t("kg")}`
        }
    ]

    return (
        <main className="relative min-h-screen bg-[url('@/assets/images/background.png')] bg-cover bg-center">
            {/*overlay*/}
            <div className="absolute inset-0  bg-white/60 dark:bg-[rgba(36,36,36,0.6)] backdrop-blur-[45px]"></div>

            {/*profile kyc*/}
            <section className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 pt-40 pb-12 gap-20 text-center">
                    {data.map((item) => (
                        <div key={item.title} className="z-10">
                            {/*title*/}
                            <h3 className="font-baloo font-extrabold text-4xl ">{item.title}</h3>
                            {/*dialog*/}
                            <p>{item.dialog}</p>
                            {/*data*/}
                            <div className="flex justify-between gap-7 bg-main border border-black dark:border-white rounded-[15px] py-2 px-4 font-bold capitalize">
                                <p> {item.userData}</p>
                                <RefreshCw />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/*profile setting*/}
            <section className="max-w-3xl mx-auto py-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
                    {/*Change password*/}
                    <ChangePasswordDialog />
                    {/*language*/}
                </div>

            </section>
        </main>

    )
}
