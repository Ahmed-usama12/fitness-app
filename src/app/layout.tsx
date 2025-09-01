import Footer from "@/components/layout/footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
	return (
		<>
			<h1>header</h1>
			<Outlet />
			<Footer/>
		</>
	);
}
