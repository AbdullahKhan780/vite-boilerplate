import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationEN from "./src/locales/en/translation.json";
import translationAR from "./src/locales/ar/translation.json";

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    detection: {
      order: ["localStorage"], // First check localStorage, then browser settings
      lookupLocalStorage: "i18nextLng",
    },
    fallbackLng: "en",
    supportedLngs: ["en", "ar"],
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
