import { Header } from "@/components/layout/header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <Header />

      <Outlet />

      <h1>footer</h1>
    </div>
  );
}
