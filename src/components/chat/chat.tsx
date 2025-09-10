import ChatBotProvider from "@/context/chat-context/provider";
import { SmartCoachChat } from "./smart-coach-chat";
import { DialogDemo } from "./dialog-chat";

export default function Chat() {
  return (
    <ChatBotProvider>
      <DialogDemo />
      <SmartCoachChat />
    </ChatBotProvider>
  );
}
