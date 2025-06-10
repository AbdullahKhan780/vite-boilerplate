import React from "react";
import { useTranslation } from "react-i18next";
import { cn } from "../libs/utils";

import MessageQuestionImg from "../assets/message-question.svg";

const FAQData = [
  {
    id: 1,
    question: "how to create shipment?",
    content:
      "goto the dashboard here you will see a create shipment button press that.",
  },
  {
    id: 2,
    question: "where can I find my international address?",
    content:
      "goto the dashboard -> open international shipping, here you will see a virtual addresses menu.",
  },
  {
    id: 3,
    question: "is there any prohibited items?",
    content:
      "yes, perfumes, oil & liquids, medicine, diet complements, drones, weapons, and sharp objects.",
  },
];

export function FAQSection() {
  const { t } = useTranslation();

  return (
    <section
      id="faqs"
      className="px-3 pt-20 pb-40 bg-black flex items-center justify-center"
    >
      <div className="max-w-3xl w-full mx-auto flex flex-col items-center justify-center">
        <div className="flex items-center gap-3 pb-10">
          <img
            className="w-12 md:w-14"
            src={MessageQuestionImg}
            alt="faq icon"
          />
          <h3 className="text-4xl md:text-5xl font-medium text-white uppercase">
            {t("faq's")}
          </h3>
        </div>

        <div className="flex flex-col gap-3 w-full">
          {FAQData.map((faq) => (
            <FAQItem key={faq.id} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem(item: { question: string; content: string }) {
  const { t } = useTranslation();
  const [IsOpen, setIsOpen] = React.useState(false);

  return (
    <div className="p-5 text-white last:border-b-0 border-b border-white/10">
      <div className="list-none">
        <button
          type="button"
          className="w-full flex items-start justify-between gap-3 cursor-pointer"
          onClick={() => setIsOpen(!IsOpen)}
        >
          <summary className="text-lg md:text-2xl text-left capitalize">
            {t(item.question)}
          </summary>

          <i
            className={cn(
              "fa-solid fa-circle-chevron-down text-2xl text-primary",
              IsOpen ? "rotate-180" : "rotate-0"
            )}
          />
        </button>
        <p
          className={cn(
            "pt-4 text-stone-500 capitalize",
            IsOpen ? "block" : "hidden"
          )}
        >
          {t(item.content)}
        </p>
      </div>
    </div>
  );
}
