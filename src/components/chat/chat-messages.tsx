import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage } from "./chat-message";
import type { Chat } from "./smart-coach-chat";

/**
 * Chat Messages Component
 * @param {ChatMessagesProps} props - The props for the ChatMessages component
 * @param {Chat[]} props.chat - The chat messages to display
 * @returns {JSX.Element} The ChatMessages component
 */

interface ChatMessagesProps {
  chat: Chat[];
}

export function ChatMessages({ chat }: ChatMessagesProps) {
  return (
    <ScrollArea className="flex-1 overflow-auto p-4">
      <div className="space-y-4">
        {chat.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
    </ScrollArea>
  );
}
