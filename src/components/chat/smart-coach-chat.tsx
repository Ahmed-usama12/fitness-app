import { useState } from "react";
import { ChatHeader } from "./chat-header";
import { ChatMessages } from "./chat-messages";
import { ChatInput } from "./chat-input";
import { PreviousConversations } from "./previous-conversations";
import { generateBotResponse } from "@/lib/api/chatbot.api";

export interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export function SmartCoachChat() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello How Can I Assist You Today ?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    };

    // Add user message
    setMessages((prev) => [...prev, userMessage]);

    // Insert temporary AI placeholder
    const thinkingId = (Date.now() + 1).toString();
    const aiThinking: Message = {
      id: thinkingId,
      content: "Thinking ...",
      sender: "ai",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, aiThinking]);

    // Build history including new user turn
    const history = [...messages, userMessage].map((m) => ({
      sender: m.sender,
      content: m.content,
    }));

    try {
      const aiText = await generateBotResponse(history);
      // Replace placeholder with real AI response
      setMessages((prev) =>
        prev.map((m) => (m.id === thinkingId ? { ...m, content: aiText || "(no response)" } : m)),
      );
    } catch {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === thinkingId ? { ...m, content: "Sorry, I had an issue processing that." } : m,
        ),
      );
    }
  };

  const handleMenuClick = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="max-h fixed end-10 bottom-3 z-50 flex h-[712px] max-h-[712px] min-h-[712px] w-[375px] flex-col overflow-hidden rounded-3xl border-2 border-red-500 bg-black/90 backdrop-blur-sm">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-[url('@assets/images/chat-bg.jpg')] bg-cover bg-center opacity-20 blur-sm" />

      <div className="relative z-10 flex h-full flex-col overflow-auto">
        <ChatHeader onMenuClick={handleMenuClick} />

        <ChatMessages messages={messages} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>

      <PreviousConversations isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </div>
  );
}
