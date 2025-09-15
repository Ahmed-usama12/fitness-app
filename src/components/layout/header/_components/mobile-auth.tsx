import { Button } from "@/components/ui/button";
import { useTranslations } from "use-intl";

/**
 * Mobile authentication component
 * Provides login and signup buttons for mobile users
 */
export default function MobileAuth() {
  //  Translations
  const t = useTranslations();

  return (
    <div className="flex flex-col w-full px-5 space-y-3 pt-6 border-t">
      <Button className="w-full">{t("login")}</Button>
      <Button
        className="w-full"
        variant={"secondary"}
      >
        {t("signup")}
      </Button>
    </div>
  );
}
