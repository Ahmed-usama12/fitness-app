import { useContext } from "react";
import { ChatbotShow } from "./context";

export function useChat() {
  const ctx = useContext(ChatbotShow);
  if (!ctx) throw new Error("useChat must be used within ChatBotContext");
  return ctx;
}
