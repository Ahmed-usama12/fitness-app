import { X, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "use-intl";

interface Chat {
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

interface PreviousConversationsProps {
  isOpen: boolean;
  onClose: () => void;
  conversations: MessageWrapper[];
  currentChatId: string;
  onSelectChat: (chatId: string) => void;
  onNewChat: () => void;
}

export function PreviousConversations({
  isOpen,
  onClose,
  conversations,
  currentChatId,
  onSelectChat,
  onNewChat,
}: PreviousConversationsProps) {
  // Translations
  const t = useTranslations();

  // Render
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
            <h2 className="text-lg font-semibold text-white">{t("previous-conversations")}</h2>
            <div className="flex items-center gap-2">
              {/* New Chat Button */}
              <Button
                icon={false}
                variant="ghost"
                size="icon"
                onClick={onNewChat}
                className="size-6 text-white hover:bg-white/10"
                title="New Chat"
              >
                <Plus className="h-5 w-5" />
              </Button>

              {/* Close Button */}
              <Button
                icon={false}
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="size-6 text-white hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto">
            {conversations.length === 0 ? (
              <div className="p-4 text-center text-gray-400">
                <p className="text-sm">{t("no-conversations-yet")}</p>
                <p className="mt-1 text-xs">{t("start-a-new-chat-to-begin")}</p>
              </div>
            ) : (
              conversations.map((conversation) => {
                const lastMessage = conversation.chats[conversation.chats.length - 1];
                const isActive = conversation.id === currentChatId;

                return (
                  <div
                    key={conversation.id}
                    onClick={() => {
                      onSelectChat(conversation.id);
                      onClose();
                    }}
                    className={`group flex cursor-pointer items-center justify-between border-b border-gray-800/50 p-4 hover:bg-white/5 ${
                      isActive ? "bg-white/10" : ""
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-white">
                        {conversation.title}
                      </p>
                      {lastMessage && (
                        <p className="mt-1 truncate text-xs text-gray-400">
                          {lastMessage.content.slice(0, 50)}
                          {lastMessage.content.length > 50 ? "..." : ""}
                        </p>
                      )}
                      <p className="mt-1 text-xs text-gray-500">
                        {new Date(conversation.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400 transition-colors group-hover:text-white" />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}
