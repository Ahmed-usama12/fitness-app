"use client";

import { CircleX, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useChat } from "@/context/chat-context/hooks";

interface ChatHeaderProps {
  onMenuClick: () => void;
}

export function ChatHeader({ onMenuClick }: ChatHeaderProps) {
  // Context
  const { setShow } = useChat();
  return (
    <header className="relative flex items-center justify-between bg-black/50 p-4 backdrop-blur-sm">
      <h1 className="text-xl font-semibold text-white">Smart Coach</h1>
      <div className="flex items-center justify-center gap-2">
        <Button
          icon={false}
          variant="ghost"
          size="icon"
          className="m-0 size-6 items-center p-0 hover:bg-white/10"
          onClick={onMenuClick}
        >
          <Menu className="size-6" />
        </Button>
        <CircleX onClick={() => setShow(false)} className="size-6 cursor-pointer" />
      </div>
    </header>
  );
}
