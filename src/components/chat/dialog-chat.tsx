import { Button } from "@/components/ui/button";

import { SmartCoachChat } from "./smart-coach-chat";
import emo from "@assets/images/emo.png";
import { useChat } from "@/context/chat-context/hooks";
import { useTranslations } from "use-intl";
export function DialogDemo() {
  const { show, setShow } = useChat();

  // Translations
  const t = useTranslations();

  return (
    <>
      <div
        onClick={() => setShow(true)}
        className="fixed end-6 bottom-6 z-50 flex cursor-pointer flex-col items-center drop-shadow-2xl/50 drop-shadow-amber-700"
      >
        {/* Robot Character */}
        <div className="mb-4 h-[98px] w-[100px]">
          <img src={emo} alt="Smart Coach Robot" className="size-full object-cover" />
        </div>

        {/* Chat Button */}
        <Button
          icon={false}
          className="transform rounded-full border-0 bg-gradient-to-r from-red-500 to-orange-500 text-lg font-semibold text-white shadow-2xl transition-all duration-200 hover:scale-105 hover:from-red-600 hover:to-orange-600"
        >
          {t("hey-ask-me")}
        </Button>
      </div>

      {show && <SmartCoachChat />}
    </>
  );
}
