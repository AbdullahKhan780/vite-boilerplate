import { useTranslation } from "react-i18next";
import { Chip } from "../components/ui/chip";
import { Button } from "../components/ui/button";

import ShienMaskImg from "../assets/shien-mask.webp";
import ProductImg1 from "../assets/product-1.webp";
import ProductImg2 from "../assets/product-2.webp";

export function SellWithUsSection() {
  const { t } = useTranslation();

  return (
    <section id="sellWithUs" className="max-w-6xl w-full mx-auto pb-10 px-3">
      <div className="flex flex-col gap-3">
        <h3 className="text-5xl md:text-8xl capitalize font-medium">
          {t("sell with us")}
        </h3>
        <p className="capitalize text-xl md:text-3xl">
          {t("your dedicated e-commerce partner.")}
        </p>

        <div className="flex items-center gap-2">
          {["#fashion", "#home decor", "#electronics", "all"].map(
            (value, index) => (
              <Chip key={index.toString()} className="border-1">
                {t(value)}
              </Chip>
            )
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 min-h-[300px] py-5">
          <div className="col-span-2 md:col-span-1 w-full bg-primary rounded-3xl flex flex-col items-center p-5 text-white">
            <div className="flex items-center justify-between gap-3 w-full">
              <p className="capitalize">{t("classics")}</p>
              <p>{new Date().getFullYear()}</p>
            </div>
            <div className="py-5" />
            <img src={ShienMaskImg} alt="Store" />
          </div>
          <div className="col-span-2 md:col-span-1 relative w-full ps-10 min-h-[450px] bg-primary/5 rounded-3xl overflow-hidden">
            <div className="flex items-center justify-end h-full gap-3 -me-20">
              <ProductCard
                productImage={ProductImg1}
                title={t("summer shirt")}
                size="32 - 40"
                currency={"aed"}
                amount={23}
                discount={45}
              />
              <ProductCard
                productImage={ProductImg2}
                title={t("leather bag")}
                size="10"
                currency={"aed"}
                amount={193}
                discount={25}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  productImage,
  title,
  amount,
  currency,
  discount,
  size,
}: {
  productImage: string;
  title: string;
  currency: string;
  amount: number;
  discount: number;
  size: string;
}) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-2 rounded-3xl bg-white p-3">
      <img
        src={productImage}
        className="rounded-2xl object-cover"
        alt="Product img"
      />

      <h3 className="font-medium capitalize">{title}</h3>
      <p>{t("Size: {{size}}", { size })}</p>
      <div className="flex items-center justify-between">
        <p className="font-medium">
          {amount} {currency.toUpperCase()}{" "}
          <span className="line-through text-stone-400">
            {discount} {currency.toUpperCase()}
          </span>
        </p>

        <Button
          variant="outlined"
          size="icon"
          aria-label="Shop"
          className="text-black w-10 h-10"
        >
          <i className="fa-solid fa-basket-shopping" />
        </Button>
      </div>
    </div>
  );
}
