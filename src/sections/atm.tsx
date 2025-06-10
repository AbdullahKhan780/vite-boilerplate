import { useTranslation } from "react-i18next";
import { Chip } from "../components/ui/chip";

import ATMImg from "../assets/atm.webp";

export function ATMSection() {
  const { t } = useTranslation();

  return (
    <section
      id="atm"
      className="w-full pb-10 bg-gradient-to-t from-black to-primary"
    >
      <div className="relative min-h-[200px] md:min-h-[300px] w-full overflow-hidden py-20 z-10">
        <div className="relative w-[calc(100%+30px)] h-full -left-5 -right-5 flex items-center justify-between gap-3 bg-[#500000] p-10 -rotate-2 z-[1]">
          {["24/7 atm service", "instant withdrawals", "low fees"].map(
            (marqueeText, index) => (
              <h2
                key={index.toString()}
                className="uppercase font-bold text-4xl md:text-6xl text-white whitespace-nowrap"
                title={marqueeText}
              >
                {t(marqueeText)}
              </h2>
            )
          )}
        </div>
        <div className="relative w-[calc(100%+30px)] h-full -left-5 -right-5 flex items-center justify-between gap-3 bg-white/20 p-10 origin-bottom-left rotate-2">
          {["24/7 atm service", "instant withdrawals", "low fees"].map(
            (marqueeText, index) => (
              <h2
                key={index.toString()}
                className="uppercase font-bold text-4xl md:text-6xl text-[#500000] whitespace-nowrap"
                title={marqueeText}
              >
                {t(marqueeText)}
              </h2>
            )
          )}
        </div>
      </div>

      <div className="flex md:flex-row flex-col-reverse items-center justify-center gap-10 py-10 px-3 bg-[url(./assets/atm-bg-text.svg)] bg-center">
        <div className="max-w-2xl text-white flex flex-col gap-2">
          <div className="flex items-center justify-start">
            <Chip className="bg-red-900 !border-red-900 shadow-sm capitalize">
              {t("available in libya")}
            </Chip>
          </div>
          <h3 className="capitalize text-5xl md:text-6xl font-medium">
            {t("self-service atm by darb assabil")}
          </h3>
          <p className="text-stone-500 capitalize">
            {t("withdraw your funds from any nearest darb assabil branch 24/7")}
          </p>
        </div>

        <div>
          <img src={ATMImg} alt="atm machine" />
        </div>
      </div>
    </section>
  );
}
