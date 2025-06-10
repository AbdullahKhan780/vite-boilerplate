import { createBrowserRouter } from "react-router";
import App from "../App.tsx";
import { NotFound } from "../pages/404.tsx";
import { Privacy } from "../pages/legal/privacy.tsx";
import { TermsOfServices } from "../pages/legal/terms-conditions.tsx";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "legal/privacy-policy",
    element: <Privacy />,
  },
  {
    path: "legal/terms-conditions",
    element: <TermsOfServices />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
