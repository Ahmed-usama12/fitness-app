"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  return (
    <div className="p-4 backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <div className="relative flex-1">
          <Input
            type="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask Me Any Things"
            className="w-full rounded-full text-white placeholder:text-gray-400"
          />
        </div>
        <Button
          icon={false}
          type="submit"
          size="icon"
          className="h-10 w-10 cursor-pointer rounded-full bg-orange-600 hover:bg-orange-700"
          disabled={!message.trim()}
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
