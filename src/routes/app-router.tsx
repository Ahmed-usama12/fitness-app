import MainLayout from "@/app/layout";
import AuthLayout from "@/app/pages/auth/layout";
import Healthy from "@/app/pages/healthy/page";
import Homepage from "@/app/pages/home/page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./protected-route";
import { Toaster } from "@/components/ui/sonner";
import ResetPassword from "@/app/pages/auth/forgot-password/page";
import StepsRestPassProvider from "@/context/step-reset-pass/provider";
import Login from "@/app/pages/auth/login/page";
import Register from "@/app/pages/auth/signup/page";
import Profile from "@/app/pages/profile/page";
import MealDetails from "@/app/pages/healthy/components/meal-details";
import WorkoutsLayout from "@/app/pages/classes/layout";
import AboutLayout from "@/app/pages/about/layout";

export default function AppRouter() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Homepage /> },
        { path: "/about", element: <AboutLayout /> },
        { path: "/classes", element: <WorkoutsLayout /> },
        { path: "/healthy", element: <Healthy /> },
        {
          path: "/profile",
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
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
