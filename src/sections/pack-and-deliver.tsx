import { useTranslation } from "react-i18next";

import PackImg from "../assets/pack.png";
import AirplaneImg from "../assets/airplane.svg";

export function PackAndDeliverSection() {
  const { t } = useTranslation();
  return (
    <section id="packDeliver" className="px-3 pb-10 bg-[#C40C0C]">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-white text-[5rem] sm:text-[8rem] md:text-[17rem] uppercase font-bold rtl:pb-5">
          {t("deliver")}
        </h3>

        <div className="flex items-start justify-between md:flex-row flex-col gap-5">
          <h3
            className="text-[5rem] sm:text-[8rem] ltr:md:text-[19rem] rtl:md:text-[17rem] uppercase font-bold text-transparent leading-12 md:leading-0 ltr:pl-0 ltr:md:pl-32 rtl:pr-0 rtl:md:pr-32 md:[writing-mode:sideways-lr]"
            style={{
              WebkitTextStroke: "2px white",
            }}
          >
            {t("pack")}
          </h3>

          <div className="relative flex items-center md:justify-between flex-col md:flex-row-reverse gap-5">
            <div className="relative w-full pt-5 md:pt-0">
              <svg
                viewBox="0 0 942 758"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-[2] fill-black mix-blend-soft-light"
              >
                <title>Airplane</title>
                <path d="M918.206 23.8812C850.433 -44.4018 726.734 45.652 612.59 146.529L205.21 108.311C194.067 107.277 183.287 112.766 177.382 122.362L130.397 200.987C121.892 215.506 126.594 235.02 144.374 242.918L401.517 349.708C337.404 419.631 276.312 495.622 237.472 554.057L68.7096 533.832C56.6121 532.398 44.729 538.592 39.2285 549.794L3.47134 620.469C-3.62986 634.634 2.07249 652.19 16.2882 659.491L199.435 753.766C215.204 759.61 235.378 759.222 259.256 753.208C358.58 728.188 517.558 608.763 647.311 480.055C872.299 256.727 996.286 102.585 918.206 23.8812ZM832.931 187.69C788.726 249.398 719.005 326.709 606.285 438.323C400.383 642.546 249.538 707.004 221.169 699.426L68.6135 620.705L81.8156 594.333L248.369 614.261C259.563 615.496 270.444 610.408 276.55 600.761C317.136 536.551 395.906 439.25 472.598 359.116C486.223 344.588 482.064 320.456 462.627 311.909L197.849 201.921L217.914 168.06L619.621 205.786C627.702 206.525 635.778 203.851 641.891 198.47C817.664 41.5252 864.659 52.7334 876.675 64.857C893.015 81.4395 876.934 126.034 832.931 187.69Z" />
              </svg>
              <img
                className="relative z-[1] w-[90%]"
                src={PackImg}
                alt="package"
              />
              <img
                className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-[0] fill-white"
                src={AirplaneImg}
                alt="airplane"
              />
            </div>

            <div className="md:absolute z-[3] bottom-20 ltr:right-0 ltr:md:-right-14 rtl:left- rtl:md:-left-14 flex flex-wrap justify-end gap-2 md:gap-4 md:max-w-sm w-full">
              {["import", "tracking", "warehousing", "", "", "shipments"].map(
                (service, index) => (
                  <div
                    key={index.toString()}
                    className="flex-grow flex items-center justify-center bg-white/30 backdrop-blur-sm py-2 px-4 h-12 rounded-full text-red-800 md:text-[#672B00]/70 text-xl md:text-2xl uppercase min-w-[100px]"
                  >
                    {t(service)}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
