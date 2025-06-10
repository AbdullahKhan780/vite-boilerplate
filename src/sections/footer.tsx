import { useTranslation } from "react-i18next";

import Package from "../../package.json";

import SabilDesignImg from "../assets/sabil-design.webp";
import LibyaFlag from "../assets/flags/lby.svg";
import UAEFlag from "../assets/flags/uae.svg";
import AppQRImg from "../assets/app-qr.webp";
// Partners
import HurufLogo from "../assets/partners/huruf.svg";
import OriduneLogo from "../assets/partners/oridune.svg";
import { Link } from "react-router";

export function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <section id="contact-us" className="bg-black flex flex-col gap-3 pb-10">
      <div className="flex items-center justify-center">
        <img className="w-md" src={SabilDesignImg} alt="sabil pattern design" />
      </div>

      <div className="grid grid-cols-4 gap-3 text-white max-w-6xl mx-auto w-full px-3">
        <div className="col-span-4 md:col-span-3 w-full rounded-2xl bg-white/5 p-3 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl pb-3 capitalize">{t("location")}</h3>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <img className="w-8 h-8" src={LibyaFlag} alt="libya flag" />

                <p>
                  Main Tariq Zanatah Aljadida, Tripoli -{" "}
                  <span className="text-stone-500">Libya</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  className="w-8 h-8"
                  src={UAEFlag}
                  alt="united arab emirates flag"
                />

                <p>
                  Al murar - Deira KOHI NOOR building SHOP 34, Dubai -{" "}
                  <span className="text-stone-500">UAE</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between py-3">
            <div />

            <select
              defaultValue={i18n.language}
              onChange={(e) => {
                i18n.changeLanguage(e.target.value);
              }}
            >
              <option value="ar">{t("Arabic")}</option>
              <option value="en">{t("English")}</option>
            </select>
          </div>

          <div className="flex md:flex-row flex-col items-end md:items-center justify-between gap-3">
            <a
              href="mailto:support@sabil.ly"
              className="self-start text-3xl md:text-4xl font-medium"
            >
              support@sabil.ly
            </a>

            <div className="flex items-center gap-5">
              <a
                href={Package.support.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-4xl font-medium"
              >
                <i className="fa-brands fa-facebook text-4xl" />
              </a>
              <a
                href={Package.support.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="text-4xl font-medium"
              >
                <i className="fa-brands fa-whatsapp text-4xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-4 md:col-span-1 grid grid-cols-2 gap-3">
          <div className="col-span-2 w-full rounded-2xl bg-white/5 p-3 flex items-center justify-between">
            <h3 className="self-end capitalize">{t("scan to download")}</h3>

            <img
              className="w-24 bg-black p-2 rounded-xl"
              src={AppQRImg}
              alt="app download qrcode"
            />
          </div>
          <button
            type="button"
            className="col-span-1 w-full rounded-2xl bg-white/5 p-3 flex flex-col text-left cursor-pointer"
            onClick={() => {
              window.open(Package.appLinks.appstore);
            }}
          >
            <div className="flex items-center justify-between gap-3 pb-10">
              <i className="fa-brands fa-apple text-stone-500" />
              <i className="fa-solid fa-arrow-right -rotate-45 text-stone-500" />
            </div>
            <h3 className="self-end capitalize">{t("open app store")}</h3>
          </button>
          <button
            type="button"
            className="col-span-1 w-full rounded-2xl bg-white/5 p-3 flex flex-col text-left cursor-pointer"
            onClick={() => {
              window.open(Package.appLinks.playstore);
            }}
          >
            <div className="flex items-center justify-between gap-3 pb-10">
              <i className="fa-brands fa-google-play text-stone-500" />
              <i className="fa-solid fa-arrow-right -rotate-45 text-stone-500" />
            </div>
            <h3 className="self-end capitalize text-left">
              {t("open play store")}
            </h3>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-10 items-center justify-center">
        <div className="flex items-center justify-center gap-3">
          <a href={Package.partners.huruftech} target="_blank" rel="noreferrer">
            <img src={HurufLogo} alt="Huruf tech" />
          </a>
          <a href={Package.partners.oridune} target="_blank" rel="noreferrer">
            <img src={OriduneLogo} alt="Oridune tech" />
          </a>
        </div>

        <p className="capitalize text-stone-500">
          {t("copyright © 2025. all rights reserved.")}
        </p>

        <div className="flex items-center divide-x divide-stone-500">
          <Link
            to="legal/terms-conditions"
            target="_blank"
            rel="noreferrer"
            className="capitalize text-stone-500 px-1.5"
          >
            {t("terms of services")}
          </Link>
          <Link
            to="legal/privacy-policy"
            target="_blank"
            rel="noreferrer"
            className="capitalize text-stone-500 px-1.5"
          >
            {t("privacy policy")}
          </Link>
        </div>
      </div>
    </section>
  );
}
