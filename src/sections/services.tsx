import { Trans, useTranslation } from "react-i18next";

import PlainLogo from "../assets/plain-logo.svg";
import AppleStoreBadge from "../assets/apple-store-badge.svg";
import PlayStoreBadge from "../assets/google-play-badge.svg";
import MapImg from "../assets/map.svg";

import UAEFlag from "../assets/flags/uae.svg";
import ChinaFlag from "../assets/flags/china.svg";
import USAFlag from "../assets/flags/usa.svg";

import F1Img from "../assets/f1.webp";
import WarehouseImg from "../assets/warehouse-employee.webp";

import WarehouseCurvedPattern from "../assets/bg-curved.svg";

import NextLogo from "../assets/store-logos/next.svg";
import SharqiaaLogo from "../assets/store-logos/sharqiaa.svg";
import ShienLogo from "../assets/store-logos/shien.svg";
import AlibabaLogo from "../assets/store-logos/alibaba.svg";
import AmazonLogo from "../assets/store-logos/amazon.svg";
import NoonLogo from "../assets/store-logos/noon.svg";
import HMLogo from "../assets/store-logos/hm.svg";
import TemuLogo from "../assets/store-logos/temu.svg";

export function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section id="services" className="max-w-6xl w-full mx-auto pb-10 px-3">
      <div className="grid grid-cols-6 md:grid-cols-10 gap-3">
        {/* column 1 */}
        <div className="flex flex-col gap-3 col-span-6 sm:col-span-3 md:col-span-3">
          <div className="w-full h-full bg-primary rounded-3xl flex flex-col gap-2 items-center justify-center p-5">
            <div className="relative flex flex-col">
              <div className="w-auto self-end pb-3">
                <div className="w-6 h-6 rounded-lg bg-white" />
              </div>
              <div className="w-full flex flex-col items-center justify-center py-3 min-w-[200px]">
                <div className="w-full p-2 bg-white rtl:rounded-tl-xl ltr:rounded-tr-xl rounded-s-xl">
                  <h3 className="text-xl font-medium capitalize">
                    <Trans
                      i18nKey={"experienceFastestShipment"}
                      components={[
                        <span
                          key="0"
                          className="lowercase bg-primary text-white px-2 rounded-xl"
                        />,
                      ]}
                    />
                  </h3>
                </div>
                <div className="w-full h-auto flex items-center flex-grow bg-white rounded-xl -me-10">
                  <div className="bg-primary rounded-e-xl w-full h-full" />
                  <h3 className="min-w-fit text-xl font-medium capitalize p-2">
                    {t("logistic system")}
                  </h3>
                </div>
                <div className="max-w-fit h-auto self-start px-3 bg-white rounded-s-xl rtl:rounded-bl-xl ltr:rounded-br-xl p-2">
                  <h3 className="text-xl font-medium capitalize">
                    {t("at your fingertips.")}
                  </h3>
                </div>
              </div>

              <div className="w-auto self-end pt-2">
                <div className="w-8 h-8 rounded-lg bg-white" />
              </div>
            </div>

            <div className="w-full">
              <p className="capitalize text-white font-medium pb-1">
                {t("download the app now")}
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={PlainLogo}
                  className="w-9 h-9 bg-red-800 p-1 rounded-xl"
                  alt="logo"
                />

                <div className="flex items-center justify-between gap-3">
                  <img src={AppleStoreBadge} alt="logo" />
                  <img src={PlayStoreBadge} alt="logo" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-full bg-black/5 rounded-3xl flex flex-col gap-3 items-center p-5"
            style={{
              backgroundImage: `url(${MapImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
              backgroundPosition: "bottom",
            }}
          >
            <h3 className="text-3xl capitalize font-medium max-w-[100px] me-auto">
              {t("import internationally")}
            </h3>

            <div className="flex items-center gap-3 w-full">
              <img src={UAEFlag} alt="united arab emirates flag" />
              <img src={ChinaFlag} alt="china flag" />
              <img src={USAFlag} alt="united states flag" />
            </div>

            <div className="h-[100px]" />
          </div>

          <div className="rounded-3xl w-full bg-black pt-5 px-5 flex flex-col gap-3">
            <p className="capitalize text-white text-sm">
              {t("effortlessly track your shipments anytime, anywhere!")}
            </p>

            <div className="bg-white/10 p-3 rounded-t-3xl">
              <h3 className="text-lg text-white capitalize font-medium">
                {t("status")}
              </h3>

              <div className="flex flex-col pt-3">
                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center justify-center">
                    <div className="bg-green-500 flex items-center justify-center h-6 w-6 rounded-full text-white">
                      <i className="fa-solid fa-plus text-xs" />
                    </div>

                    <hr className="h-[50px] w-[2px] bg-green-500" />
                  </div>

                  <div>
                    <p className="capitalize text-white text-sm">
                      {t("a new shipment is created by abdullah khan")}
                    </p>
                    <small className="text-stone-500 text-xs">
                      31 Aug 2024 - 01:35 PM
                    </small>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center justify-center">
                    <div className="bg-green-500 flex items-center justify-center h-6 w-6 rounded-full text-white">
                      <i className="fa-solid fa-arrow-down text-xs" />
                    </div>

                    <hr className="h-[30px] w-[2px] bg-green-500" />
                  </div>

                  <div>
                    <p className="capitalize text-white text-sm">
                      {t("shipment arrived at tripoli")}
                    </p>
                    <small className="text-stone-500 text-xs">
                      3 Sept 2024 - 04:00 PM
                    </small>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center justify-center">
                    <div className="bg-orange-500 flex items-center justify-center h-6 w-6 rounded-full text-white">
                      <i className="fa-solid fa-truck-front text-xs" />
                    </div>

                    <hr className="h-[30px] w-[2px] bg-orange-500" />
                  </div>

                  <div>
                    <p className="capitalize text-white text-sm">
                      {t("in transit to destination")}
                    </p>
                    <small className="text-stone-500 text-xs">
                      9 Sept 2024 - 08:03 PM
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* column 2 */}
        <div className="flex flex-col gap-3 flex-3 col-span-6 sm:col-span-3 md:col-span-4">
          <div className="h-auto">
            <div className="flex items-start gap-3 pb-3">
              <i className="fa-solid fa-caret-right text-2xl text-primary" />

              <div>
                <h3 className="capitalize text-2xl font-medium">
                  {t("shipments")}
                </h3>
                <p className="capitalize text-xl text-stone-500">
                  {t("successfully delivered")}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between bg-[#292929] text-white py-3 px-5 divide-x divide-black rounded-2xl">
              <div className="w-1/4 flex items-center justify-center">
                <h4 className="text-3xl font-medium">10</h4>
              </div>
              <div className="w-1/4 flex items-center justify-center">
                <h4 className="text-3xl font-medium">39</h4>
              </div>
              <div className="w-1/4 flex items-center justify-center">
                <h4 className="text-3xl font-medium">40</h4>
              </div>
              <div className="w-1/4 flex items-center justify-center">
                <h4 className="text-3xl font-medium">25</h4>
              </div>
            </div>
          </div>

          <div
            className="relative rounded-3xl overflow-hidden flex-grow flex flex-col justify-end p-5 h-[600px] sm:h-auto"
            style={{
              backgroundImage: `url(${F1Img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full h-[80px] flex items-start justify-between px-5 pb-5">
              <div className="relative self-end">
                <div className="absolute w-8 h-8 rounded-lg bg-white bottom-0 left-5" />
                <div className="absolute w-6 h-6 rounded-lg bg-white -top-2 -right-7" />
              </div>

              <div className="w-8 h-8 rounded-lg bg-white" />
            </div>

            <div className="relative flex flex-col items-center justify-end mask-[url(./assets/svg-pattern.svg)] mask-no-repeat mask-center bg-white">
              <div className="relative z-[2] w-full max-w-fit p-2 rounded-t-2xl">
                <div className="flex items-center justify-center gap-2 pt-2">
                  <i className="fa-solid fa-bolt text-primary" />
                  <p className="capitalize text-sm font-medium">
                    {t("we're fast, really fast")}
                  </p>
                </div>
              </div>
              <div className="relative z-[2] w-full max-w-xs p-3 rounded-3xl">
                <h3 className="capitalize text-2xl font-medium max-w-xs mx-auto text-center">
                  {t("deliver shipments faster than f1!")}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* column 3 */}

        <div className="flex flex-col sm:flex-row md:flex-col col-span-6 md:col-span-3">
          <div
            className="flex flex-col justify-between gap-3 flex-grow rounded-3xl w-full h-[600px] md:h-auto"
            style={{
              backgroundImage: `url(${WarehouseImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="p-4 h-full">
              <img className="w-14" src={PlainLogo} alt="Plain logo" />
            </div>

            <div className="relative w-full h-full overflow-hidden rounded-b-3xl flex items-end justify-center">
              <div className="w-full flex flex-col gap-2 items-end justify-end text-right px-3 py-10 relative z-[1]">
                <h3 className="text-3xl font-medium capitalize w-full">
                  {t("warehouses")}
                </h3>
                <p className="text-stone-500 capitalize">
                  {t(
                    "sell your products globally through our warehouses, ensuring 100% customer satisfaction."
                  )}
                </p>
              </div>
              <img
                className="absolute right-0 left-0 -bottom-20 w-full z-0 object-cover"
                src={WarehouseCurvedPattern}
                alt="curved shape"
              />
            </div>
          </div>

          <div className="rounded-3xl p-5 w-full">
            <div className="grid grid-cols-3 place-items-center">
              <img src={NextLogo} className="w-18" alt="next" />
              <img src={AmazonLogo} className="w-18" alt="amazon" />
              <img src={AlibabaLogo} className="w-18" alt="alibaba" />
              <img src={HMLogo} className="w-18" alt="hm" />
              <img src={ShienLogo} className="w-18" alt="shien" />
              <img src={TemuLogo} className="w-18" alt="temu" />
              <img src={SharqiaaLogo} className="w-18" alt="sharqiaa" />
              <img src={NoonLogo} className="w-18" alt="noon" />

              <div className="flex items-center justify-center">
                <p className="capitalize max-w-[100px] text-center">
                  {t("and many more...")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
