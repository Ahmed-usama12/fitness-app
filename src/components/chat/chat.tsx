import ChatBotProvider from "@/context/chat-context/provider";
import { DialogDemo } from "./dialog-chat";

export default function Chat() {
  return (
    <ChatBotProvider>
      <DialogDemo />
    </ChatBotProvider>
  );
}
