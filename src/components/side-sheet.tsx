import React from "react";
import { Portal } from "../hooks/usePortal";
import { cn } from "../libs/utils";
import { Button } from "./ui/button";

import Close from "../assets/close.svg";

interface SideSheetProps {
  children?: (
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => React.ReactNode;
  content?: React.ReactNode;
  backdrop?: boolean;
  position?: "left" | "right";
}

export function SideSheet({
  children,
  content,
  backdrop = true,
  position = "right",
}: SideSheetProps) {
  const [IsOpen, setIsOpen] = React.useState(false);

  return (
    <React.Fragment>
      {children?.(setIsOpen)}
      {IsOpen && (
        <Portal>
          <div
            className={cn(
              "flex flex-col fixed top-0 left-0 right-0 bottom-0 z-20",
              position === "left" ? "items-start" : "items-end"
            )}
          >
            {/* Backdrop */}
            {backdrop && (
              <div
                className={
                  "absolute left-0 top-0 right-0 bottom-0 bg-black/20 z-0"
                }
              />
            )}
            <div className="w-full max-w-2xl h-full bg-white z-20">
              <div className="flex items-center justify-between">
                <div />
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setIsOpen(false)}
                  aria-label="close menu"
                >
                  <img src={Close} alt="close menu" />
                </Button>
              </div>
              {content}
            </div>
          </div>
        </Portal>
      )}
    </React.Fragment>
  );
}
