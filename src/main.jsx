import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./Error-page";
import RouteHome from "./routes/RouteHome";
import RouteSeeMore from "./routes/RouteSeeMore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteHome />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/project-more",
    element: <RouteSeeMore />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
