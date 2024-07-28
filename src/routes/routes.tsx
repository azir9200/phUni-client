import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { AdminPath } from "./adminRoutes";
import { routesGenerator } from "../utils/RoutesGenerator";
import { studentPath } from "./studentRoutes";
import { FacultyPath } from "./facultyRoutes";
import { SuperAdminPath } from "./superAdminRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/superAdmin",
    element: <App />,
    children: routesGenerator(SuperAdminPath),
  },
  {
    path: "/admin",
    element: <App />,
    children: routesGenerator(AdminPath),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routesGenerator(FacultyPath),
  },
  {
    path: "/student",
    element: <App />,
    children: routesGenerator(studentPath),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
