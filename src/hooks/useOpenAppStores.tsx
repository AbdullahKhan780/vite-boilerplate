import { useLocation } from "react-router";
import Package from "../../package.json";
import React from "react";

export function useOpenAppStores() {
  const Location = useLocation();

  const cleanHash = Location.hash.replace(/\/$/, "");

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  React.useEffect(() => {
    if (cleanHash === "#download-app") {
      const ua =
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        navigator.userAgent || navigator.vendor || (window as any).opera;

      const isAndroid = /android/i.test(ua);

      const isIOS =
        // iPad, iPhone, iPod **and** iPadOS 13+ (which reports itself as “Mac”)
        (/iPad|iPhone|iPod/.test(ua) ||
          (navigator.platform === "MacIntel" &&
            navigator.maxTouchPoints > 1)) &&
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        !(window as any).MSStream;

      if (isAndroid) window.open(Package.appLinks.playstore);

      if (isIOS) window.open(Package.appLinks.appstore);

      history.replaceState(null, '', Location.pathname + Location.search);
    }
  }, [Location]);

  return null;
}
