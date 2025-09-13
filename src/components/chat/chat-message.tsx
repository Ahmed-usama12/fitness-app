import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { Chat } from "./smart-coach-chat";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: Chat;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender === "user";

  return (
    <div className={`flex items-start gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      <Avatar className="h-8 w-8 flex-shrink-0">
        <AvatarFallback className={isUser ? "bg-gray-600" : "bg-gray-700"}>
          {isUser ? (
            <User className="h-4 w-4 text-white" />
          ) : (
            <Bot className="h-4 w-4 text-white" />
          )}
        </AvatarFallback>
      </Avatar>

      <div className={`max-w-[80%] ${isUser ? "text-right" : "text-left"}`}>
        <div
          className={`inline-block rounded-2xl px-4 py-3 text-white ${
            isUser ? "rounded-tr-sm bg-orange-600" : "rounded-tl-sm bg-gray-700"
          }`}
        >
          <p className="text-sm leading-relaxed">{message.content}</p>
        </div>
      </div>
    </div>
  );
}
