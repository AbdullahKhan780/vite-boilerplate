import React from "react";
import { Button } from "./ui/button";
import Logo from "../assets/logo.svg";
import AppleLogo from "../assets/apple.svg";
import AndroidLogo from "../assets/android.svg";
import { useTranslation } from "react-i18next";

import Package from "../../package.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router";

export const MenuItems = [
  // { label: "track", href: "#" },
  { label: "faq's", href: "#faqs" },
  { label: "contact us", href: "#contact-us" },
];

export function Navbar() {
  const { t } = useTranslation();

  useGSAP(() => {
    gsap.from("#logo", {
      duration: 2,
      yPercent: -100,
      stagger: 0.1,
      ease: "expo.out",
    });
  });

  return (
    <nav className="max-w-6xl mx-auto flex items-center justify-between px-3">
      <div className="flex items-center gap-3">
        <a href="/" id="logo">
          <img
            src={Logo}
            className="relative w-16 h-16 z-50 bg-blend-difference"
            alt="logo"
          />
        </a>

        <ul className="menu-items md:flex hidden items-center gap-6 text-lg font-medium ps-12">
          {MenuItems.map((menu, index) => (
            <li key={index.toString()}>
              <Link
                to={menu.href}
                type="button"
                className="capitalize hover:text-primary cursor-pointer transition-all ease-in-out"
              >
                {t(menu.label)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center gap-3">
        <Button
          className="capitalize"
          aria-label="Sign in"
          onClick={() => {
            window.open("https://app.sabil.ly");
          }}
        >
          {t("sign in")}
        </Button>

        <div className="md:flex hidden items-center justify-center gap-3">
          <Button
            size="icon"
            variant="secondary"
            aria-label="apple app"
            onClick={() => {
              window.open(Package.appLinks.appstore);
            }}
          >
            <img src={AppleLogo} className="w-8" alt="apple logo" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            aria-label="android app"
            onClick={() => {
              window.open(Package.appLinks.playstore);
            }}
          >
            <img src={AndroidLogo} className="w-8" alt="android logo" />
          </Button>
        </div>

        <div className="md:hidden block">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

export function MobileMenu() {
  const { t } = useTranslation();

  const MenuRef = React.useRef<HTMLDivElement>(null);

  const tl = React.useRef<gsap.core.Timeline>(null);

  useGSAP(
    () => {
      const links = document.querySelectorAll(".menu-item");

      tl.current = gsap
        .timeline()
        .to(".menu-container", {
          duration: 1,
          opacity: 1,
          height: "100vh",
          ease: "expo.inOut",
        })
        .from(
          links,
          {
            duration: 1,
            opacity: 0,
            y: 20,
            stagger: 0.1,
            ease: "expo.inOut",
          },
          "-=0.5"
        )
        .to(
          ".ham1",
          {
            rotate: 45,
            top: "calc(50% - 1px)",
            stagger: 0.1,
            ease: "power2.inOut",
          },
          "<"
        )
        .to(
          ".ham2",
          {
            top: "calc(50% - 1px)",
            rotate: -45,
            stagger: 0.1,
            ease: "power2.inOut",
          },
          "<"
        )
        .reverse();
    },
    { scope: MenuRef }
  );

  const onMenuToggle = () => {
    if (tl.current) tl.current.reversed(!tl.current.reversed());
  };

  return (
    <div ref={MenuRef}>
      <ul className="menu-container fixed top-0 right-0 left-0 bg-white/90 backdrop-blur-sm z-30 overflow-hidden pb-10 pt-3 opacity-0 h-0">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-start gap-6 text-3xl font-medium px-3">
          <h3 className="text-sm font-normal pt-20">{t("menu")}</h3>
          {MenuItems.map((menu, index) => (
            <Link
              key={index.toString()}
              to={menu.href}
              className="menu-item capitalize hover:text-primary cursor-pointer"
              onClick={() => {
                onMenuToggle();
              }}
            >
              {t(menu.label)}
            </Link>
          ))}

          <h3 className="text-sm font-normal capitalize">
            {t("get in touch")}
          </h3>
          <a
            href="mailto:support@sabil.ly"
            className="menu-item underline underline-offset-10"
          >
            support@sabil.ly
          </a>

          <div className="menu-item flex items-center justify-center gap-3">
            <Button
              size="icon"
              variant="secondary"
              aria-label="apple app"
              onClick={() => {
                window.open(Package.appLinks.appstore);
              }}
            >
              <img src={AppleLogo} className="w-8" alt="apple logo" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              aria-label="android app"
              onClick={() => {
                window.open(Package.appLinks.playstore);
              }}
            >
              <img src={AndroidLogo} className="w-8" alt="android logo" />
            </Button>
          </div>
        </div>
      </ul>

      <Button
        size="icon"
        variant="ghost"
        className="relative flex flex-col item-center justify-center z-30 transform translate-0"
        onClick={() => onMenuToggle()}
        aria-label="hamburger"
      >
        <span className="ham1 absolute h-[2px] w-7 border border-black bg-black rounded-full top-[calc(50%-1px-.2rem)]" />
        <span className="ham2 absolute h-[2px] w-7 border border-black bg-black rounded-full top-[calc(50%-1px+.2rem)]" />
      </Button>
    </div>
  );
}
