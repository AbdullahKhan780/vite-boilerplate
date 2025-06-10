import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { Metadata } from "../components/metadata";

import SabilDesignImg from "../assets/sabil-design.webp";

export function NotFound() {
  const { t } = useTranslation();
  const Navigate = useNavigate();

  return (
    <>
      <Metadata title={"Darb Assabil - 404"} />
      <section
        id="notFound"
        className="bg-black px-3 h-screen flex flex-col gap-3 items-center justify-center text-white"
      >
        <div className="flex flex-col gap-3 items-center justify-center pb-10">
          <p className="text-xl">404</p>
          <h3 className="capitalize text-6xl font-medium">
            {t("page not found")}
          </h3>
          <p className="text-stone-500">
            {t("sorry, we couldn't find the page you're looking for.")}
          </p>

          <button
            type="button"
            onClick={() => Navigate("/")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <i className="fa-solid fa-arrow-left" />
            {t("back to home")}
          </button>
        </div>

        <img src={SabilDesignImg} alt="Sabil design" />
      </section>
    </>
  );
}
