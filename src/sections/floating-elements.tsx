import { useTranslation } from "react-i18next";
import { Chip } from "../components/ui/chip";

import RightHandImg from "../assets/right-hand.svg";
import ShieldImg from "../assets/shield.svg";
import FingerprintImg from "../assets/fingerprint.svg";
import PackageImg from "../assets/package.svg";
import TruckImg from "../assets/truck.svg";
import QrcodeImg from "../assets/qrcode.svg";
import AvatarImg from "../assets/placeholder/avatar.png";

export function FloatingElementsSection() {
  const { t } = useTranslation();

  return (
    <section id="floatingElements" className="bg-[#C40C0C]">
      <div className="w-full mx-auto overflow-hidden flex flex-col items-center">
        <div className="relative w-full h-full z-[2] self-start origin-bottom-right rotate-0 flex flex-col">
          <div className="relative flex flex-col items-end">
            <img
              className="block w-auto relative z-[1] rtl:-left-40 rtl:md:-left-0 ltr:-right-40 ltr:md:right-0 rtl:-scale-x-100 ltr:scale-x-100"
              src={RightHandImg}
              alt="right hand"
            />

            <div className="px-3 w-full -mt-14 -me-0 md:-me-60">
              <div className="-rotate-5 flex items-center justify-start px-5 py-4 h-[70px] w-full max-w-xl mx-auto rounded-full bg-white/20 backdrop-blur-sm text-black border-2 border-white/10">
                <p className="text-2xl capitalize">{t("search")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[900px]">
          <div className="absolute w-full h-full left-0 right-0 -bottom-30 mx-auto flex flex-col items-center">
            <div className="absolute w-[1200px] -bottom-80 mx-auto border-8 border-white/10 rounded-full aspect-square">
              <img
                src={ShieldImg}
                className="absolute -top-16 sm:top-0 md:top-40 left-[500px] sm:left-80 md:left-27 -translate-x-1/2 w-24 -rotate-25"
                alt="shield"
              />
            </div>
            <div className="absolute -bottom-60 w-[1000px] border-8 border-white/10 rounded-full mx-auto aspect-square">
              <img
                src={FingerprintImg}
                className="absolute w-24 right-1/3 md:right-1/12 -translate-x-1/2 top-32 md:top-65 -rotate-25"
                alt="fingerprint"
              />

              <div className="w-full max-w-[250px] rounded-2xl bg-white/20 backdrop-blur-sm p-2 flex items-center justify-between gap-2 absolute -top-5 left-1/3 border-2 border-white/10 -rotate-25">
                <img src={AvatarImg} alt="avatar" />

                <div className="flex-1 capitalize">
                  <h3 className="font-medium leading-4">{t("hatem")}</h3>
                  <p className="text-sm">{t("selected account")}</p>
                </div>

                <div className="w-6 h-6 bg-white/30 backdrop-blur-sm p-1 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-arrow-right-arrow-left text-xs" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-80 w-[900px] border-8 border-white/10 rounded-full mx-auto aspect-square pt-50">
              <div className="rotate-12 w-xs sm:w-md md:w-full mx-auto flex items-start justify-center px-3">
                <OrderCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OrderCard() {
  const { t } = useTranslation();

  return (
    <div className="flex items-start gap-2 rounded-2xl bg-white/20 backdrop-blur-sm p-3 w-full max-w-md border-2 border-white/10">
      <div>
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
          <img src={PackageImg} alt="package" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-1">
        <div className="flex items-start justify-between gap-2 w-full">
          <div>
            <h3 className="capitalize font-medium">{t("ref# SH10271")}</h3>
            <Chip className="bg-primary border-0 capitalize !text-xs font-medium text-white">
              {t("no qr code linked")}
            </Chip>
          </div>

          <h3 className="font-medium uppercase">
            {t("lyd {{amount}}", { amount: 1469 })}
          </h3>
        </div>
        <div className="flex items-start justify-between gap-2 w-full">
          <div className="flex flex-col gap-1">
            <p className="font-medium capitalize text-sm">{t("from")}</p>
            <div className="flex items-center gap-2">
              <img src={TruckImg} className="w-4" alt="truck" />

              <p className="font-medium text-sm">طرابلس</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <p className="font-medium capitalize text-sm">{t("destination")}</p>

            <div className="flex items-center gap-2">
              <img
                src={QrcodeImg}
                className="w-4 h-4 bg-green-600 rounded-full"
                alt="qrcode"
              />

              <p className="font-medium text-sm">بشر</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between w-full">
          <p className="capitalize font-medium text-sm text-sky-600">
            {t("products")}
          </p>
          <p className="capitalize font-medium text-xs">
            {t("{{days}} days ago - modified {{date}}", {
              days: 25,
              date: "Apr 20, 2025",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
