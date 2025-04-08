"use client"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Redirect from "./pages/Redirect";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import RegistrationSuccessful from "./pages/RegistrationSuccessful";

function layout() {
  if (typeof window === 'undefined') return null;

  const routes = createBrowserRouter([
    {
    path: "/",
    element: <Redirect />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/sucessful",
    element: <RegistrationSuccessful />,
  }
])

return 
  <RouterProvider router={routes} />;

}

export default layout