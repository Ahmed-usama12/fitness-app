import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Outlet } from "react-router-dom";
import ScrollTicker from "@/components/common/scroll-ticker";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollTicker />
      <Footer />
    </>
  );
}
