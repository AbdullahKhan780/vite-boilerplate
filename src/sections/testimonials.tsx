import { useTranslation } from "react-i18next";
import { cn } from "../libs/utils";

import Avatar1 from "../assets/placeholder/avatar-1.jpg";
import Avatar2 from "../assets/placeholder/avatar-2.jpg";
import Avatar3 from "../assets/placeholder/avatar-3.jpg";

import ColonImg from "../assets/colon.svg";

const TestimonialData = [
  {
    id: 2,
    message: "Really fast and great service!",
    customer: {
      avatar: Avatar2,
      name: "Jane Smith",
    },
  },
  {
    id: 1,
    message:
      "I've been using their service for the past three months, and they are incredibly fast.",
    reviews: 4,
    customer: {
      avatar: Avatar1,
      name: "Alice Johnson",
    },
  },
  {
    id: 3,
    message: "Great experience.",
    customer: {
      avatar: Avatar3,
      name: "John doe",
    },
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-black px-3 pb-10">
      <div className="relative overflow-auto flex items-center gap-3 snap-x snap-mandatory py-10">
        {TestimonialData.map((item) => (
          <div
            key={item.id}
            className={cn(
              "bg-white/5 w-full h-full rounded-3xl",
              item.message.split(" ").length > 10 ? "min-w-2xl" : "min-w-xs"
            )}
          >
            <TestimonialCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialCard(item: {
  id: number;
  message: string;
  reviews?: number;
  customer: { avatar: string; name: string };
}) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-between gap-2 rounded-3xl p-5 text-white min-h-[300px]">
      <div className="flex flex-col gap-2 flex-grow">
        <p className="capitalize text-stone-500 md:text-base text-sm">
          {t("customer review")}
        </p>
        <h3 className="text-xl md:text-3xl">{item.message}</h3>

        {item.reviews ? (
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }, (_, index) => (
              <i
                key={index.toString()}
                className={cn(
                  "fa-solid fa-star text-xl md:text-2xl",
                  index < (item.reviews ?? 0)
                    ? "text-yellow-400"
                    : "text-stone-500"
                )}
              />
            ))}

            <h3 className="text-xl md:text-2xl px-2">{item.reviews}</h3>
          </div>
        ) : null}
      </div>

      {!item.reviews ? (
        <img className="w-12 self-end" src={ColonImg} alt="colon" />
      ) : null}

      <div className="flex items-end justify-between">
        <div className="flex items-center gap-3">
          <img
            className="w-14 h-14 rounded-full"
            src={item.customer.avatar}
            alt={`${item.customer.name} avatar`}
          />

          <div>
            <p className="md:text-xl font-medium">{item.customer.name}</p>
            <p className="text-sm md:text-base text-stone-500 capitalize">
              {t("customer")}
            </p>
          </div>
        </div>

        {item.reviews ? <img src={ColonImg} alt="colon" /> : null}
      </div>
    </div>
  );
}
