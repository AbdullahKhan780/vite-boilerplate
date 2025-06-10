// Portal.tsx  – reusable hook + component
import React from "react";
import { createPortal } from "react-dom";

export function usePortalRoot(id = "portal-root") {
  const [RootRef, setRootRef] = React.useState<HTMLElement | null>(null);

  React.useLayoutEffect(() => {
    // 1️⃣  Look for an existing node (SSR hydration or multiple portals)
    let root = document.getElementById(id);

    // 2️⃣  If it doesn't exist, create and append it
    if (!root) {
      root = document.createElement("div");
      root.setAttribute("id", id);
      document.body.appendChild(root);
    }

    setRootRef(root);

    // 3️⃣  Clean-up (only if we created it)
    return () => {
      if (root && root.childElementCount === 0) {
        root.remove();
      }
    };
  }, [id]);

  return RootRef;
}

interface PortalProps {
  children: React.ReactNode;
  /** When you need a different host element ID (optional) */
  to?: string;
}

export function Portal({ children, to }: PortalProps) {
  const target = usePortalRoot(to);

  return target ? createPortal(children, target) : null;
}
