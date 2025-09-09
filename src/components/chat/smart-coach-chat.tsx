"use client";

import { useState } from "react";
import { ChatHeader } from "./chat-header";
import { ChatMessages } from "./chat-messages";
import { ChatInput } from "./chat-input";
import { PreviousConversations } from "./previous-conversations";

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
    {
      id: "2",
      content: "Can You Please Tell Me How To Gain 20kg Weight?",
      sender: "user",
      timestamp: new Date(),
    },
    {
      id: "3",
      content: "Of Course! I Will Be Glad To Help!",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "Thank you for your question! Let me help you with that.",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const handleMenuClick = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative mx-auto flex h-screen max-w-md flex-col overflow-hidden rounded-3xl border-2 border-red-500 bg-black/90 backdrop-blur-sm">
      {/* Background blur effect */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 blur-sm"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4Ca7CGx8PyjQ2fy9mk6ad7EDT0JOkl.png')`,
        }}
      />

      <div className="relative z-10 flex h-full flex-col">
        <ChatHeader onMenuClick={handleMenuClick} />
        <ChatMessages messages={messages} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>

      <PreviousConversations isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </div>
  );
}
