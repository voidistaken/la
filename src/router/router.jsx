import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "../layouts/GuestLayout";
import Home from "../pages/Home";
import LoginForm from "../pages/LoginForm";
import Contact from '../pages/Contact'
import Help from '../pages/Help'
import Terms from '../pages/Terms'
import AdminLayout from "../layouts/AdminLayout";
import DriverLoginFrom from "../pages/DriverLoginFrom";
import RiderRegistrationForm from "../pages/RiderRegistrationForm";
import Dashboard from "../pages/Dashboard";
import RiderLayout from "../layouts/RiderLayout";
import DriverLayout from "../layouts/DriverLayout";
import DriverDashboard from "../components/DriverDashboard";
import Driver from "../components/Driver";
import Riderr from "../components/Riderr";
export const router = createBrowserRouter([
  {
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/driver",
        element: <Driver />,
      },
      {
        path: "/riderr",
        element: <Riderr />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/rider/register",
        element: <RiderRegistrationForm />,
      },
      {
        path: "/driver/register",
        element: <DriverLoginFrom />,
      },

      {
        path: "*",
        element: <Home />,
      },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: " ",
        element: <Dashboard />,
      },
    ],
  },
  {
    element: <RiderLayout />,
    children: [
      {
        path: "/rider/dashboard",
        element: <h1></h1>,
      },
      {
        path: "/rider/ride",
        element: <h1></h1>,
      },
      {
        path: "/rider/",
        element: <h1></h1>,
      },
      {
        path: "/rider/dashboard",
        element: <h1></h1>,
      },
    ],
  },
  {
    element: <DriverLayout />,
    children: [
      {
        path: "/driver/dashboard",
        element: <DriverDashboard />,
      },
    ],
  },
]);
