import MainLayout from "@/app/layout";
import About from "@/app/pages/about/page";
import AuthLayout from "@/app/pages/auth/layout";
import Login from "@/app/pages/auth/login";
import Register from "@/app/pages/auth/register";
import Classes from "@/app/pages/classes/page";
import Healthy from "@/app/pages/healthy/page";
import Homepage from "@/app/pages/home/page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./protected-route";
import ForgotPassword from "@/app/pages/auth/forgot-password/forgot-password";
import OTP from "@/app/pages/auth/forgot-password/otp";

export default function AppRouter() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <Homepage /> },
        { path: "/about", element: <About /> },
        { path: "/classes", element: <Classes /> },
        { path: "/healthy", element: <Healthy /> },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "forgot-password", element: <ForgotPassword /> },
        { path: "otp", element: <OTP /> },
      ],
    },
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}
