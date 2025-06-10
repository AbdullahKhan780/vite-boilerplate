import { useTranslation } from "react-i18next";
import { Chip } from "../components/ui/chip";
import { cn } from "../libs/utils";

import CardLineImg from "../assets/cards-line.svg";
import SabilCardsImg from "../assets/sabil-cards.svg";
import PatternBox from "../assets/pattern-box.svg";

import SabilPrimaryLogo from "../assets/primary-logo.svg";
import NFCImg from "../assets/nfc.svg";

export function ATMCardsSection() {
  const { t } = useTranslation();

  return (
    <section id="atmCards" className="relative bg-black w-full">
      <div className="flex items-center">
        <img
          className="scale-x-100 rtl:-scale-x-100"
          src={CardLineImg}
          alt="cards path line"
        />
        <img
          className="relative rtl:-right-full rtl:md:-right-[30%] ltr:-left-full ltr:md:-left-[30%] -top-[90%] rtl:rotate-35 ltr:-rotate-35 w-[90%] md:w-2xl"
          src={SabilCardsImg}
          alt="sabil cards"
        />
      </div>

      <div className="relative flex flex-col gap-2 px-3 max-w-6xl mx-auto -top-10 md:-top-40">
        <Chip className="bg-white/20 border-2 !border-white/30 shadow-sm capitalize max-w-fit text-white">
          {t("available in libya")}
        </Chip>

        <div className="text-white">
          <div className="flex md:flex-row flex-col items-start md:items-center gap-3 capitalize font-light pb-3">
            <h3 className="text-5xl md:text-8xl">{t("switch up to")}</h3>
            <img src={PatternBox} alt="pattern box" />
          </div>
          <p className="text-4xl md:text-7xl">
            {t("next generation of wallet experience")}
          </p>
        </div>
      </div>
    </section>
  );
}

export function ATMCard({
  type = "premium",
  variant = "dark",
}: {
  type?: "premium" | "platinum";
  variant?: "default" | "dark";
}) {
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        "flex flex-col justify-between w-full max-w-md min-h-[280px] rounded-3xl bg-[url(./assets/card-bg-pattern.svg)] bg-cover overflow-hidden shadow-[-30px_0_25px_5px_rgba(45,0,0,0.5)]",
        variant === "dark" ? "bg-black" : "bg-white"
      )}
    >
      <div className="flex flex-col justify-between flex-grow bg-[url(./assets/card-pattern.svg)] bg-cover bg-no-repeat bg-bottom p-5">
        <div className="flex items-center justify-between">
          <img className="w-10 h-10" src={SabilPrimaryLogo} alt="logo" />

          <img className="w-10 h-10" src={NFCImg} alt="nfc tag" />
        </div>

        <div>
          <Chip
            className={cn(
              "max-w-fit !py-0 !text-sm capitalize text-white",
              type === "platinum" ? "bg-black" : "bg-primary"
            )}
          >
            {t(type)}
          </Chip>

          <div
            className={cn(
              "flex items-center justify-between",
              variant === "dark" ? "text-white" : "text-black"
            )}
          >
            <div className="flex flex-col">
              <h3 className="text-2xl font-light pt-1 whitespace-nowrap">
                5342 6373 7382 7287
              </h3>
              <h3 className="text-xl uppercase font-medium">Mohammad Khalid</h3>
            </div>

            <div className="flex flex-col items-end">
              <p className="uppercase">{t("expiry")}</p>

              <h3 className="font-medium text-lg">12/29</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
