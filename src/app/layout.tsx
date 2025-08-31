import { Outlet } from "react-router-dom";

export default function MainLayout() {
	return (
		<>
			<h1>header</h1>
			<Outlet />
			<h1>footer</h1>
		</>
	);
}
