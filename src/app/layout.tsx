import { DialogDemo } from "@/components/chat/dialog-chat";
import { Header } from "@/components/layout/header";
import ChatBotProvider from "@/context/chat-context/provider";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Chat */}
      <ChatBotProvider>
        <DialogDemo />
      </ChatBotProvider>

      {/* Content */}
      <Outlet />

      {/* Footer */}
      <h1>footer</h1>
    </div>
  );
}
