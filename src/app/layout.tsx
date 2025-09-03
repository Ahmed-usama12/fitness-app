import Footer from "@/components/layout/footer";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/layout/header";

export default function MainLayout() {
	return (
		<>
      <Header />
			<Outlet />
			<Footer/>
		</>
	);
}
