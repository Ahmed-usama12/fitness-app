import { ThemeToggle } from "@/components/common/theme-toggel";
import { useTheme } from "@/hooks/use-theme";
import { MoonStar, SunMoon } from "lucide-react";
export default function ChangeProfileTheme() {
  // Hook
  const { theme } = useTheme();

  return (
    <div className="hover:border-main hover:dark:border-main hover:text-main z-10 flex cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border border-black p-8 transition-all duration-300 ease-in-out dark:border-white">
      {theme == "light" ? <SunMoon className="text-main" /> : <MoonStar className="text-main" />}
      <h3 className="text-[18px] font-semibold">
        Mood <span className="text-main">{`(${theme})`}</span>
      </h3>
      <ThemeToggle />
    </div>
  );
}
