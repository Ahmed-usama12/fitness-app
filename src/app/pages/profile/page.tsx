import { useLoginContext } from "@/context/login-context";
import { BadgeInfo, EarthLock, LogOut, RefreshCw, ShieldAlert } from "lucide-react";
import { useTranslations } from "use-intl";
import ChangePasswordDialog from "./components/change-password-dialog";
import GoalDialog from "./components/goal-dialog";
import LevelDialog from "./components/level-dialog";
import WeightDialog from "./components/weight-dialog";
import { useLogout } from "@/hooks/use-logout";
import SelectLangaugeDialog from "./components/select-lang-dialog";
import ChangeProfileTheme from "./components/change-profile-theme";
import { Link } from "react-router-dom";

export default function Profile() {
  //context
  const { user } = useLoginContext();

  // Hook
  const { mutate: logout } = useLogout();
  //translation
  const t = useTranslations("profile-page");

  //kyc data
  const data = [
    {
      title: t("goal"),
      dialog: <GoalDialog />,
      userData: user?.goal,
    },
    {
      title: t("level"),
      dialog: <LevelDialog />,
      userData: user?.activityLevel,
    },
    {
      title: t("weight"),
      dialog: <WeightDialog />,
      userData: `${user?.weight} ${t("kg")}`,
    },
  ];

  return (
    <main className="relative min-h-screen bg-[url('@/assets/images/background.png')] bg-cover bg-center pb-12">
      {/*overlay*/}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[45px] dark:bg-[rgba(36,36,36,0.6)]"></div>

      {/*profile kyc*/}
      <section className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-20 px-4 pt-40 pb-12 text-center sm:grid-cols-2 md:grid-cols-3">
          {data.map((item) => (
            <div key={item.title} className="z-10">
              {/*title*/}
              <h3 className="font-baloo text-4xl font-extrabold">{item.title}</h3>
              {/*dialog*/}
              <p>{item.dialog}</p>
              {/*data*/}
              <div className="bg-main flex justify-between gap-7 rounded-[15px] border border-black px-4 py-2 font-bold capitalize dark:border-white">
                <p> {item.userData}</p>
                <RefreshCw />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*profile setting*/}
      <section className="mx-auto max-w-3xl py-2">
        <div className="grid grid-cols-1 gap-10 px-4 sm:grid-cols-2 md:grid-cols-3">
          {/*Change password*/}
          <ChangePasswordDialog />

          {/*language*/}
          <SelectLangaugeDialog />

          {/* Theme */}
          <ChangeProfileTheme />

          {/* Security */}
          <div className="hover:border-main hover:dark:border-main hover:text-main z-10 flex cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border border-black p-8 transition-all duration-300 ease-in-out dark:border-white">
            <EarthLock className="text-main" />
            <h3 className="text-[18px] font-semibold">{t("security")}</h3>
          </div>

          {/* Privcy */}
          <Link
            to={"/privacy"}
            className="hover:border-main hover:dark:border-main hover:text-main z-10 flex cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border border-black p-8 py-14 transition-all duration-300 ease-in-out dark:border-white"
          >
            <ShieldAlert className="text-main" />
            <h3 className="text-[18px] font-semibold">{t("privacy-policy")}</h3>
          </Link>

          {/* Help */}
          <div className="hover:border-main hover:dark:border-main hover:text-main z-10 flex cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border border-black p-8 transition-all duration-300 ease-in-out dark:border-white">
            <BadgeInfo className="text-main" />
            <h3 className="text-[18px] font-semibold">{t("help")}</h3>
          </div>

          {/* Logout */}
          <div
            onClick={() => logout()}
            className="hover:border-main hover:dark:border-main hover:text-main z-10 flex cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border border-black p-8 py-14 transition-all duration-300 ease-in-out md:col-start-2 dark:border-white"
          >
            <LogOut className="text-main" />
            <h3 className="text-[18px] font-semibold">{t("logout")}</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
