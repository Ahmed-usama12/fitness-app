"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatHeaderProps {
  onMenuClick: () => void;
}

export function ChatHeader({ onMenuClick }: ChatHeaderProps) {
  return (
    <header className="flex items-center justify-between bg-black/50 p-4 backdrop-blur-sm">
      <h1 className="text-xl font-semibold text-white">Smart Coach</h1>
      <Button
        icon={false}
        variant="ghost"
        size="icon"
        className="text-white hover:bg-white/10"
        onClick={onMenuClick}
      >
        <Menu className="h-6 w-6" />
      </Button>
    </header>
  );
}
