import { RouterProvider } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "./routes/routes";
import "./index.css";
import "../i18n.ts";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={Router} />
    </StrictMode>
  );
} else {
  throw new Error("Root element not found");
}
