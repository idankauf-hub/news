import { SortBy, Categories, Country, Languages } from "./types";

export const SortbyData: SortBy[] = ["Relevancy", "Popularity", "Published at"];

export const CategoryData: Categories[] = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];
export const CountryData: Country[] = [
  "ae",
  "ar",
  "at",
  "au",
  "be",
  "bg",
  "br",
  "ca",
  "ch",
  "cn",
  "co",
  "cu",
  "cz",
  "de",
  "eg",
  "fr",
  "gb",
  "gr",
  "hk",
  "hu",
  "id",
  "ie",
  "il",
  "in",
  "it",
  "jp",
  "kr",
  "lt",
  "lv",
  "ma",
  "mx",
  "my",
  "ng",
  "nl",
  "no",
  "nz",
  "ph",
  "pl",
  "pt",
  "ro",
  "rs",
  "ru",
  "sa",
  "se",
  "sg",
  "si",
  "sk",
  "th",
  "tr",
  "tw",
  "ua",
  "us",
  "ve",
  "za",
];

export const Language: Languages[] = [
  "ar",
  "de",
  "en",
  "es",
  "fr",
  "he",
  "it",
  "nl",
  "no",
  "pt",
  "ru",
  "sv",
  "zh",
];

export const LanguageCodesAndNames = {
  ar: "Arabic",
  de: "German",
  en: "English",
  es: "Spanish",
  fr: "French",
  he: "Hebrew",
  it: "Italian",
  nl: "Dutch",
  no: "Norwegian",
  pt: "Portuguese",
  ru: "Russian",
  sv: "Swedish",
  zh: "Chinese",
};
export function setToLanguageCode(
  object: {
    [x: string]: any;
    ar?: string;
    de?: string;
    en?: string;
    es?: string;
    fr?: string;
    he?: string;
    it?: string;
    nl?: string;
    no?: string;
    pt?: string;
    ru?: string;
    sv?: string;
    zh?: string;
  },
  value: any
) {
  return Object.keys(object).find((key) => object[key] === value);
}

export const everythingFilters = ["Sort by", "Dates", "Sources", "Language"];
export const topHeadlinesFilters = ["Country", "Category", "Sources"];
