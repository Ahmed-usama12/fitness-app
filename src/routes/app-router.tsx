import MainLayout from "@/app/layout";
import AuthLayout from "@/app/pages/auth/layout";
import Classes from "@/app/pages/classes/page";
import Healthy from "@/app/pages/healthy/page";
import Homepage from "@/app/pages/home/page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./protected-route";
import { Toaster } from "@/components/ui/sonner";
import ResetPassword from "@/app/pages/auth/forgot-password/page";
import StepsRestPassProvider from "@/context/step-reset-pass/provider";
import About from "@/app/pages/about/page";
import Login from "@/app/pages/auth/login/page";
import Register from "@/app/pages/auth/signup/page";
import MealDetails from "@/app/pages/healthy/components/meal-details";

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
        { path: "/healthy/:id?", element: <MealDetails /> },
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
        {
          path: "forgot-password",
          element: (
            <StepsRestPassProvider>
              <ResetPassword />
            </StepsRestPassProvider>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <Toaster />
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}
