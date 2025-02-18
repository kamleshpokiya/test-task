import { createBrowserRouter } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import DashboardLayout from "@/layouts/DashboardLayout";
import Assets from "@/pages/Assets";
import Challenges from "@/pages/Challenges";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/tools/assets",
        element: <Assets />,
      },
      {
        path: "/tools/challenges",
        element: <Challenges />,
      },
    ],
  },
]);
