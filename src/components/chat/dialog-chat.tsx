import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { SmartCoachChat } from "./smart-coach-chat";
import emo from "@assets/images/dumbll.png";
export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="fixed right-6 bottom-6 z-50 flex flex-col items-center">
          {/* Robot Character */}
          <div className="mb-4">
            <img src={emo} alt="Smart Coach Robot" className="size-40 drop-shadow-2xl" />
          </div>

          {/* Chat Button */}
          <Button
            icon={false}
            className="transform rounded-full border-0 bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-200 hover:scale-105 hover:from-red-600 hover:to-orange-600"
          >
            Hey Ask Me
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <SmartCoachChat />
      </DialogContent>
    </Dialog>
  );
}
