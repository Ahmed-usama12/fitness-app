import { createContext } from "react";
import type { ChatBotContext } from "./type";

export const ChatbotShow = createContext<ChatBotContext | undefined>(undefined);
