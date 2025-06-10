// ScrollToHash.tsx
import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToHash() {
  const { hash } = useLocation(); // e.g. “#features”

  useEffect(() => {
    if (!hash) return; // no hash → nothing to do
    // wait for the section to be in the DOM (layout paints first)
    requestAnimationFrame(() => {
      const el = document.querySelector(hash) as HTMLElement | null;
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // optional: give focus for a11y
        el.tabIndex = -1;
        el.focus();
      }
    });
  }, [hash]);

  return null; // renders nothing
}
