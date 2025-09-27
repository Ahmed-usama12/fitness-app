import { useState, type ReactNode } from "react";
import { ChatbotShow } from "./context";

interface ChatBotProviderProps {
  children: ReactNode;
}

export default function ChatBotProvider({ children }: ChatBotProviderProps) {
  const [show, setShow] = useState(false);
  return <ChatbotShow.Provider value={{ show, setShow }}>{children}</ChatbotShow.Provider>;
}
