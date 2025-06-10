import React from "react";
import { Metadata } from "./components/metadata";
import { Navbar } from "./components/navbar";

import * as Brands from "./assets/brands/index";

import { Trans, useTranslation } from "react-i18next";
import { cn } from "./libs/utils";
import { SellWithUsSection } from "./sections/sell-with-us";
import { ServicesSection } from "./sections/services";
import { ExploreSection } from "./sections/explore";
import { IntegrationSection } from "./sections/integration";
import { PackAndDeliverSection } from "./sections/pack-and-deliver";
import { FloatingElementsSection } from "./sections/floating-elements";
import { WarehouseSection } from "./sections/warehouse";
import { ATMSection } from "./sections/atm";
import { ATMCardsSection } from "./sections/cards";
import { Testimonials } from "./sections/testimonials";
import { Footer } from "./sections/footer";
import { FAQSection } from "./sections/faqs";
// import { GallerySection } from "./sections/gallery";
import { useOpenAppStores } from "./hooks/useOpenAppStores";

import CargoShipImg from "./assets/cargo-ship.webp";
import CargoShipMobileImg from "./assets/cargo-ship-mobile.webp";

import StarImg from "./assets/star.svg";

import gsap from "gsap";

import { Observer } from "gsap/Observer";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Marquee from "react-fast-marquee";
import { ScrollToHash } from "./hooks/scrollToHash";

gsap.registerPlugin(
  useGSAP,
  ScrollSmoother,
  ScrollTrigger,
  SplitText,
  Observer
);

function App() {
  const { i18n } = useTranslation();

  // const wrapperRef = React.useRef<HTMLDivElement>(null);
  // const contentRef = React.useRef<HTMLDivElement>(null);

  useOpenAppStores();

  const CurrentLanguage = i18n.language;

  React.useEffect(() => {
    const handleChangeLanguage = (lng?: string) => {
      const Language = lng || i18n.language;

      const HTMLElement = document.querySelector("html");
      if (HTMLElement?.lang) {
        HTMLElement.setAttribute("dir", Language === "ar" ? "rtl" : "ltr");
        HTMLElement.lang = Language;
      }
    };

    handleChangeLanguage();
    i18n.on("languageChanged", handleChangeLanguage);

    return () => {
      i18n.off("languageChanged", handleChangeLanguage);
    };
  }, [i18n]);

  // useGSAP(() => {
  //   // ScrollSmoother
  //   // ScrollSmoother.create({
  //   //   wrapper: wrapperRef.current,
  //   //   content: contentRef.current,
  //   //   smooth: 2,
  //   //   effects: true,
  //   //   smoothTouch: 0.1,
  //   // });

  //   gsap.set(".split", { opacity: 1 });

  //   SplitText.create(".split", {
  //     type: "words,lines",
  //     linesClass: "line",
  //     autoSplit: true,
  //     mask: "lines",
  //     onSplit: (self) => {
  //       gsap.from(self.lines, {
  //         duration: 4,
  //         yPercent: 100,
  //         opacity: 0,
  //         stagger: 0.4,
  //         ease: "expo.out",
  //       });
  //     },
  //   });

  //   const stl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#hero",
  //       scrub: 1,
  //       start: "top bottom", // position of trigger meets the scroller position
  //       end: "bottom top",
  //     },
  //   });

  //   stl
  //     .to(".heroTitle", {
  //       x: 400,
  //       ease: "power4.in",
  //       duration: 1,
  //     })
  //     .to(
  //       ".cargoShip",
  //       {
  //         scale: 1.2,
  //         ease: "power4.in",
  //         duration: 1,
  //       },
  //       0
  //     );
  // }, []);

  return (
    <React.Fragment>
      <Metadata title={"Darb Assabil - Home"} />

      {/* <div ref={wrapperRef}>
        <div ref={contentRef}> */}
      <main className="relative min-h-screen h-full">
        <header className="sticky top-0 z-20 bg-white/30 backdrop-blur-sm h-full">
          <Navbar />
        </header>
        <section id="hero" className="py-10">
          <div className="h-auto md:min-h-[100dvh]">
            {/* Main title */}
            <h1 className="text-center uppercase font-bold split will-change-transform">
              <Trans
                i18nKey={"heroHeading"}
                components={[
                  <span key="0" className="text-3xl md:text-6xl" />,
                  <span
                    key="1"
                    className={cn(
                      CurrentLanguage === "ar"
                        ? "text-9xl md:text-[20rem]"
                        : "text-8xl md:text-[16rem]"
                    )}
                  />,
                ]}
              />
            </h1>

            <div
              className={cn(
                "relative",
                CurrentLanguage === "ar"
                  ? "-mt-20 md:-mt-55"
                  : "-mt-16 md:-mt-45"
              )}
            >
              {/* Cargo Ship */}
              <img
                src={CargoShipImg}
                className="cargoShip w-full h-full md:block hidden"
                alt="Cargo Ship"
              />

              <img
                src={CargoShipMobileImg}
                className="cargoShip w-full h-full md:hidden block"
                alt="Cargo Ship"
              />

              {/* Brands */}
              <div
                id="brandsContainer"
                className="flex items-center justify-center absolute bottom-0 w-full min-h-min bg-black/50 backdrop-blur-lg px-3 py-10"
              >
                <div className="relative bg-black/50 w-full max-w-6xl mx-auto rounded-3xl py-3 overflow-hidden">
                  <div className="absolute top-0 bottom-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-[2]" />

                  <Marquee
                    speed={40}
                    gradient={false}
                    autoFill
                    className="brand"
                  >
                    {Object.entries(Brands).map(([title, brand], index) => (
                      <img
                        key={index.toString()}
                        src={brand.default}
                        title={title}
                        className="brand w-14 md:w-18 mx-6"
                        alt={`Brand ${index}`}
                      />
                    ))}
                  </Marquee>
                  <div className="absolute top-0 bottom-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-[2]" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full min-h-fit py-10 bg-black text-white whitespace-nowrap overflow-hidden">
            <div className="absolute top-0 bottom-0 left-0 w-52 h-full bg-gradient-to-r from-black to-transparent z-[2]" />
            <ServicesMarquee />
            <div className="absolute top-0 bottom-0 right-0 w-52 h-full bg-gradient-to-l from-black to-transparent z-[2]" />
          </div>
        </section>

        <SellWithUsSection />
        <ServicesSection />
        <ExploreSection />
        <IntegrationSection />
        <PackAndDeliverSection />
        <FloatingElementsSection />
        <WarehouseSection />
        <ATMSection />
        <ATMCardsSection />
        <Testimonials />
        {/* <GallerySection /> */}
        <FAQSection />
        <Footer />
      </main>
      {/* </div>
      </div> */}
      <ScrollToHash />
    </React.Fragment>
  );
}

function ServicesMarquee() {
  const { t } = useTranslation();

  // useGSAP(() => {
  //   const scrollingText = gsap.utils.toArray<HTMLElement>(".rail");

  //   const tl = horizontalLoop(scrollingText, {
  //     repeat: -1,
  //     paddingRight: 30,
  //   });

  //   Observer.create({
  //     onChangeY(self) {
  //       let factor = 2.5;
  //       if (self.deltaY < 0) {
  //         factor *= -1;
  //       }
  //       gsap
  //         .timeline({
  //           defaults: {
  //             ease: "none",
  //           },
  //         })
  //         .to(tl, { timeScale: factor * 2.5, duration: 0.2, overwrite: true })
  //         .to(tl, { timeScale: factor / 2.5, duration: 1 }, "+=0.3");
  //     },
  //   });
  // });

  return (
    <Marquee speed={40} gradient={false} autoFill direction="right">
      <div className="rail flex items-center justify-between gap-x-6">
        {["track", "local", "imports", "warehouse"].map(
          (marqueeText, index) => (
            <div
              key={index.toString()}
              className="flex items-center justify-center overflow-hidden gap-x-3"
            >
              <h2
                className="uppercase font-medium text-3xl md:text-6xl"
                title={marqueeText}
              >
                {t(marqueeText)}
              </h2>

              <div className="w-10 h-10 md:w-18 md:h-18 flex items-center justify-center">
                <img src={StarImg} className="w-full h-full" alt="star" />
              </div>
            </div>
          )
        )}
      </div>
    </Marquee>
  );
}

export default App;
