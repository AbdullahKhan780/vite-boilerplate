import { Trans, useTranslation } from "react-i18next";
import { Chip } from "../components/ui/chip";
import { Button } from "../components/ui/button";

import StudioLight1 from "../assets/studio-light-1.svg";
import StudioLight2 from "../assets/studio-light-2.svg";

import PostmanLogo from "../assets/postman.svg";
import ChartBarsImg from "../assets/chart-bars.svg";
import WorkflowImg from "../assets/workflow.svg";

export function IntegrationSection() {
  const { t } = useTranslation();

  return (
    <section
      id="integration"
      className="relative px-3 pb-10 bg-gradient-to-b from-transparent to-[#C40C0C]"
    >
      <div className="max-w-6xl mx-auto relative bg-gradient-to-b from-[#FF6767] to-[#C40C0C] ring-4 ring-black/5 bg-primary h-full w-full rounded-3xl pt-10 overflow-hidden">
        <img
          src={StudioLight1}
          className="absolute left-0 top-0"
          alt="studio light"
        />
        <img
          src={StudioLight2}
          className="absolute right-0 top-0"
          alt="studio light"
        />
        <div className="relative z-[1] w-full h-full bg-[url(./assets/grid-pattern.svg)] bg-no-repeat bg-cover px-2">
          <div className="relative flex flex-col items-center justify-center gap-10 z-[1] px-2 pb-10 md:pb-32">
            <Chip className="bg-white border-0 capitalize shadow-sm">
              {t("power of integration")}
            </Chip>

            <div className="flex flex-col items-center justify-center gap-3 text-center">
              <h3 className="capitalize text-4xl md:text-7xl font-medium text-white">
                {t("integrate. automate. fulfil")}
              </h3>
              <p className="text-white text-sm md:text-base max-w-5xl md:max-w-3xl capitalize">
                {t("integrationDescription")}
              </p>
            </div>

            <div className="w-full mx-auto max-w-3xl flex md:flex-row flex-col gap-3 items-center justify-between bg-white/40 backdrop-blur-sm rounded-2xl md:rounded-full border-2 border-white/50 p-1.5">
              <div className="flex items-center md:justify-start justify-center gap-3 w-full">
                <img src={PostmanLogo} className="w-10" alt="postman" />

                <h3 className="capitalize text-xl">
                  <Trans
                    i18nKey="apiReferenceTitle"
                    components={[<span key="1" className="uppercase" />]}
                  />
                </h3>
              </div>

              <Button
                variant="secondary"
                className="capitalize max-w-full md:max-w-fit w-full"
              >
                <Trans
                  i18nKey="apiReferenceBtn"
                  components={[<span key="1" className="uppercase" />]}
                />
              </Button>
            </div>
          </div>

          <div className="flex md:flex-row flex-col justify-between items-end gap-5 w-full max-w-full md:max-w-4xl mx-auto px-3">
            <div className="bg-white w-full rounded-t-3xl md:rounded-b-none rounded-b-3xl flex sm:flex-row flex-col items-center gap-3 justify-center pt-5 ps-5 h-full min-h-[250px]">
              <div className="flex flex-col gap-2 w-full">
                <h3 className="text-2xl capitalize font-medium">
                  {t("boost your sales")}
                </h3>
                <p className="text-stone-500 capitalize text-sm">
                  {t(
                    "unlock the potential to grow your business by integrating with us."
                  )}
                </p>
              </div>

              <div className="bg-stone-200 border-s-2 border-t-2 border-stone-300 w-full h-full ltr:rounded-tl-3xl rtl:rounded-tr-3xl ltr:rounded-br-3xl ltr:md:rounded-br-none rtl:rounded-bl-3xl rtl:md:rounded-bl-none pt-5 ps-5 overflow-hidden">
                <p className="text-stone-500 capitalize">{t("total sales")}</p>
                <h3 className="text-2xl font-medium">3,500</h3>

                <div className="flex flex-between items-end gap-3 pt-3">
                  <div className="self-start flex flex-col gap-2 text-stone-500">
                    <p>1000</p>
                    <p>800</p>
                    <p>400</p>
                    <p>200</p>
                    <p>0</p>
                  </div>

                  <div className="w-full flex-1 h-40 relative overflow-hidden">
                    <img
                      src={ChartBarsImg}
                      className="absolute w-full h-full bottom-0 object-contain object-bottom"
                      alt="chart bars"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-white rounded-t-3xl flex flex-col gap-3 justify-start p-5 min-h-[200px]">
              <div>
                <h3 className="text-2xl capitalize font-medium">
                  {t("simple standardized data")}
                </h3>
                <p className="text-stone-500 text-sm capitalize">
                  <Trans
                    i18nKey={"standardizedDescription"}
                    components={[<span key="1" className="uppercase" />]}
                  />
                </p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-3">
                  <Chip className="capitalize gap-1 !text-sm">
                    <i className="fa-solid fa-globe" /> {t("web")}
                  </Chip>
                  <Chip className="capitalize gap-1 !text-sm">
                    <i className="fa-solid fa-mobile-screen-button" />{" "}
                    {t("mobile app")}
                  </Chip>
                  <Chip className="capitalize gap-1 !text-sm">
                    <i className="fa-solid fa-question" /> {t("other")}
                  </Chip>
                </div>

                <img src={WorkflowImg} className="w-50" alt="grid pattern" />

                <Chip className="capitalize max-w-fit bg-black mx-auto text-white !text-sm gap-2">
                  <i className="fa-solid fa-code" />
                  <Trans
                    i18nKey={"standarisedJSONBtn"}
                    components={[<span key="1" className="uppercase" />]}
                  />
                </Chip>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute h-32 w-full bottom-0 bg-gradient-to-b from-transparent to-[#E68686] z-[1]" />

        {/* Cards 1 */}
        <div className="md:block hidden absolute w-xs h-[400px] bg-white/40 backdrop:blur-3xl rounded-3xl -bottom-0 border-2 border-white/30 origin-bottom -rotate-[20deg]" />
        <div className="md:block hidden absolute w-sm h-[400px] bg-white/40 backdrop:blur-3xl rounded-3xl -bottom-10 border-2 border-white/30 origin-bottom -rotate-[20deg]" />
        {/* Cards 2 */}
        <div className="md:block hidden absolute w-xs h-[400px] bg-white/40 backdrop:blur-3xl rounded-3xl right-0 bottom-0 border-2 border-white/30 origin-bottom rotate-[20deg]" />
        <div className="md:block hidden absolute w-sm h-[400px] bg-white/40 backdrop:blur-3xl rounded-3xl right-0 -bottom-10 border-2 border-white/30 origin-bottom rotate-[20deg]" />
      </div>
    </section>
  );
}
