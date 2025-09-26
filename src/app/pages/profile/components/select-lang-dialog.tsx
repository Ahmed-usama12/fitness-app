import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useContext, useEffect } from "react";
import { Check } from "lucide-react";
import { LanguageContext } from "@/components/providers/components/use-intel-provider";
import { useTranslations } from "use-intl";

export default function SelectLangaugeDialog() {
  // context
  const { locale, setLocale } = useContext(LanguageContext);

  // Translation
  const t = useTranslations();

  // available languages
  const languages = {
    en: "English",
    ar: "العربية",
  };

  // sync locale with localStorage
  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <DropdownMenu>
      {/* Trigger */}
      <DropdownMenuTrigger asChild>
        <div className="hover:border-main hover:dark:border-main hover:text-main z-10 flex cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border border-black p-8 transition-all duration-300 ease-in-out dark:border-white">
          <Globe className="text-main" />
          <h3 className="text-center text-[18px] font-semibold">{t("select-lang")}</h3>
          <h3 className="text-center">
            (<span className="text-main">{languages[locale]}</span>)
          </h3>
        </div>
      </DropdownMenuTrigger>

      {/* Dropdown content */}
      <DropdownMenuContent className="w-56" align="center">
        <DropdownMenuGroup>
          {Object.entries(languages).map(([key, label]) => (
            <DropdownMenuItem key={key} onClick={() => setLocale(key as "en" | "ar")}>
              {label}
              {locale === key && (
                <DropdownMenuShortcut>
                  <Check />
                </DropdownMenuShortcut>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
