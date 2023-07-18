import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en.json";
import trTranslation from "./locales/tr.json";
import ruTranslation from "./locales/ru.json";
import zhTranslation from "./locales/zh.json";
import ptBrTranslation from "./locales/pt-br.json";
import esTranslation from "./locales/es.json";
import frTranslation from "./locales/fr.json";
import deTranslation from "./locales/de.json";
import vnTranslation from "./locales/vn.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  tr: {
    translation: trTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
  zh: {
    translation: zhTranslation,
  },
  pt: {
    translation: ptBrTranslation,
  },
  es: {
    translation: esTranslation,
  },
  fr: {
    translation: frTranslation,
  },
  de: {
    translation: deTranslation,
  },
  vn: {
    translation: vnTranslation,
  },
};

export const availableLanguages = [
  "en",
  "tr",
  "ru",
  "zh",
  "pt-br",
  "es",
  "fr",
  "de",
  "vn",
];
export const defaultLocale = "en";

const determineLngFn = (code: string): string => {
  if (!code || code.length === 0) {
    return (i18n.language = defaultLocale);
  }

  // Full locale match
  if (availableLanguages.includes(code.toLowerCase())) {
    return (i18n.language = code.toLowerCase());
  }

  // Base locale match
  const codeBase = code.split("-")[0].toLowerCase();
  if (availableLanguages.includes(codeBase)) {
    return (i18n.language = codeBase);
  }

  // Fallback
  return (i18n.language = defaultLocale);
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    react: {
      useSuspense: true,
    },
    load: "languageOnly",
    lowerCaseLng: true,
    fallbackLng: determineLngFn,
    debug: true,
    preload: [defaultLocale],
    keySeparator: ".",
    interpolation: { escapeValue: false },
  });

export default i18n;
