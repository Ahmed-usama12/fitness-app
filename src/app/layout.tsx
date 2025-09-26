import { DialogDemo } from "@/components/chat/dialog-chat";
import { Header } from "@/components/layout/header";
import ChatBotProvider from "@/context/chat-context/provider";
import Footer from "@/components/layout/footer";
import { Outlet } from "react-router-dom";
import ScrollTicker from "@/components/common/scroll-ticker";

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
      <Footer />
       <ScrollTicker />
    </div>
  );
}

