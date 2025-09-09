"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Send } from "lucide-react";

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
    <div className="bg-black/50 p-4 backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <div className="relative flex-1">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask Me Any Things"
            className="rounded-full border-gray-600 bg-gray-800/80 pr-12 text-white placeholder:text-gray-400"
          />
          <Button
            icon={false}
            type="button"
            variant="ghost"
            size="icon"
            className="absolute top-1/2 right-1 h-8 w-8 -translate-y-1/2 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            <Mic className="h-4 w-4" />
          </Button>
        </div>
        <Button
          icon={false}
          type="submit"
          size="icon"
          className="h-10 w-10 rounded-full bg-orange-600 hover:bg-orange-700"
          disabled={!message.trim()}
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
