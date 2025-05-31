import { createBrowserRouter } from "react-router";
import { NotFound } from "../components/404.tsx";
import App from "../App.tsx";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
