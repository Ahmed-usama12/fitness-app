import { useContext } from "react";
import { ChatbotShow } from "./context";

export function useChat() {
  const ctx = useContext(ChatbotShow);
  if (!ctx) throw new Error("useStepResetPass must be used within StepsRestPassProvider");
  return ctx;
}
