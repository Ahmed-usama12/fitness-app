import { useEffect, useState } from "react";
import { ChatHeader } from "./chat-header";
import { ChatMessages } from "./chat-messages";
import { ChatInput } from "./chat-input";
import { PreviousConversations } from "./previous-conversations";
import { generateBotResponse } from "@/lib/api/chatbot.api";
import { useTranslations } from "use-intl";

export interface Chat {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}
interface MessageWrapper {
  id: string;
  chats: Chat[];
  title: string;
  createdAt: Date;
}

export function SmartCoachChat() {
  // State
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentChatId, setCurrentChatId] = useState<string>("");
  const [messages, setMessages] = useState<MessageWrapper[]>(() => {
    try {
      const stored = localStorage.getItem("conversations");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Translations
  const t = useTranslations();

  // Get current chat messages from messages state
  const currentConversation = messages.find((m) => m.id === currentChatId);
  const chat = currentConversation?.chats || [];

  // Save conversations to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("conversations", JSON.stringify(messages));
    } catch {
      // ignore storage errors
    }
  }, [messages]);

  console.log(messages);

  const handleSendMessage = async (content: string) => {
    // Create user message
    const userMessage: Chat = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    };

    // Create AI thinking message
    const thinkingId = (Date.now() + 1).toString();
    const aiThinking: Chat = {
      id: thinkingId,
      content: `${t("thinking")}`,
      sender: "ai",
      timestamp: new Date(),
    };

    let chatIdToUse = currentChatId;

    // If no current chat, create a new one with the first message
    if (!currentChatId) {
      chatIdToUse = Date.now().toString();
      const newConversation: MessageWrapper = {
        id: chatIdToUse,
        chats: [userMessage, aiThinking],
        title: content.slice(0, 30) + (content.length > 30 ? "..." : ""),
        createdAt: new Date(),
      };
      setMessages((prev) => [newConversation, ...prev]);
      setCurrentChatId(chatIdToUse);
    } else {
      // Update existing conversation with new messages
      setMessages((prev) =>
        prev.map((conv) =>
          conv.id === currentChatId
            ? { ...conv, chats: [...conv.chats, userMessage, aiThinking] }
            : conv,
        ),
      );
    }

    // Build history including new user turn
    const history = [...chat, userMessage].map((m) => ({
      sender: m.sender,
      content: m.content,
    }));

    // Generate bot response
    try {
      const aiText = await generateBotResponse(history);
      // Replace placeholder with real AI response
      setMessages((prev) =>
        prev.map((conv) =>
          conv.id === chatIdToUse
            ? {
                ...conv,
                chats: conv.chats.map((m) =>
                  m.id === thinkingId ? { ...m, content: aiText || `${t("no-response")}` } : m,
                ),
              }
            : conv,
        ),
      );
    } catch {
      setMessages((prev) =>
        prev.map((conv) =>
          conv.id === chatIdToUse
            ? {
                ...conv,
                chats: conv.chats.map((m) =>
                  m.id === thinkingId
                    ? { ...m, content: `${t("sorry-i-had-an-issue-processing-that")}` }
                    : m,
                ),
              }
            : conv,
        ),
      );
    }
  };

  // Handle new chat
  const handleNewChat = () => {
    setCurrentChatId("");
  };

  // Handle select chat
  const handleSelectChat = (chatId: string) => {
    setCurrentChatId(chatId);
  };

  // Handle menu click
  const handleMenuClick = () => {
    setIsSidebarOpen(true);
  };

  // Handle close sidebar
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="max-h fixed end-10 bottom-3 z-50 flex h-[712px] max-h-[712px] min-h-[712px] w-[375px] flex-col overflow-hidden rounded-3xl border-2 border-red-500 bg-black/90 backdrop-blur-sm">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-[url('@assets/images/chat-bg.jpg')] bg-cover bg-center opacity-20 blur-sm" />

      {/* chat container */}
      <div className="relative z-10 flex h-full flex-col overflow-auto">
        {/* chat header */}
        <ChatHeader onMenuClick={handleMenuClick} />

        {/* chat messages */}
        <ChatMessages chat={chat} />

        {/* chat input */}
        <ChatInput onSendMessage={handleSendMessage} />
      </div>

      {/* previous conversations */}
      <PreviousConversations
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
        conversations={messages}
        currentChatId={currentChatId}
        onSelectChat={handleSelectChat}
        onNewChat={handleNewChat}
      />
    </div>
  );
}
