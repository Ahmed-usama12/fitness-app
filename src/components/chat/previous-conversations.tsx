"use client";

import { X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Conversation {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
}

interface PreviousConversationsProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PreviousConversations({ isOpen, onClose }: PreviousConversationsProps) {
  // Mock conversation data
  const conversations: Conversation[] = [
    {
      id: "1",
      title: "Lorem ipsum dolor sit amet",
      lastMessage: "Thank you for your help!",
      timestamp: new Date(),
    },
    {
      id: "2",
      title: "Lorem ipsum dolor sit amet",
      lastMessage: "That was very helpful",
      timestamp: new Date(),
    },
    {
      id: "3",
      title: "Lorem ipsum dolor sit amet",
      lastMessage: "I understand now",
      timestamp: new Date(),
    },
    {
      id: "4",
      title: "Lorem ipsum dolor sit amet",
      lastMessage: "Perfect explanation",
      timestamp: new Date(),
    },
    {
      id: "5",
      title: "Lorem ipsum dolor sit amet",
      lastMessage: "Thanks for the advice",
      timestamp: new Date(),
    },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-80 transform bg-black/90 backdrop-blur-sm transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-700 p-4">
            <h2 className="text-lg font-semibold text-white">Previous Conversations</h2>
            <Button
              icon={false}
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className="group flex cursor-pointer items-center justify-between border-b border-gray-800/50 p-4 hover:bg-white/5"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm text-white">{conversation.title}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400 transition-colors group-hover:text-white" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
