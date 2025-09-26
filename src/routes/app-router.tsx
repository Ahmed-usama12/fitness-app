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
import AboutLayout from "@/app/pages/about/layout";
import WorkoutsLayout from "@/app/pages/classes/layout";
import Exercise from "@/app/pages/classes/components/exercise";
import { SelectedExerciseProvider } from "@/app/pages/classes/context/selected-exercise.context";

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
        { path: "/about", element: <AboutLayout /> },
        { path: "/classes", element: <WorkoutsLayout /> },
        {
          path: "classes/:id", element:
            <SelectedExerciseProvider>
              <Exercise />
            </SelectedExerciseProvider>
        },
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
