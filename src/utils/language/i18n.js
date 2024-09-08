import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Dil verilerini içe aktarın
import en from "./en.json";

i18n
  .use(initReactI18next) // react-i18next bağlayıcısını kullan
  .init({
    resources: {
      en: {
        translation: en,
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
