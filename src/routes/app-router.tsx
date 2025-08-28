import MainLayout from "@/app/layout";
import Homepage from "@/app/pages/home/page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function AppRouter() {
	const routes = createBrowserRouter([
		{
			path: "/",
			element: <MainLayout />,
			children: [{ index: true, element: <Homepage /> }],
		},
	]);

	return <RouterProvider router={routes}></RouterProvider>;
}
