import { createBrowserRouter } from "react-router-dom";
import Redirect from "./pages/Redirect";
import Login from "./pages/Login";
import RegistrationSuccessful from "./pages/RegistrationSuccessful";

function layout() {
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

return (
  <RouterProvider router={routes}> </RouterProvider>
)
}

export default layout