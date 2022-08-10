export type Languages =
  | "ar"
  | "de"
  | "en"
  | "es"
  | "fr"
  | "he"
  | "it"
  | "nl"
  | "no"
  | "pt"
  | "ru"
  | "sv"
  | "ud"
  | "zh"
  | "";

export type SortBy = "relevancy" | "popularity" | "publishedAt";
export type EndPoints = "everything" | "top-headlines";
export type Categories =
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology"
  | "";

export type Country =
  | "ae"
  | "ar"
  | "at"
  | "au"
  | "be"
  | "bg"
  | "br"
  | "ca"
  | "ch"
  | "cn"
  | "co"
  | "cu"
  | "cz"
  | "de"
  | "eg"
  | "fr"
  | "gb"
  | "gr"
  | "hk"
  | "hu"
  | "id"
  | "ie"
  | "il"
  | "in"
  | "it"
  | "jp"
  | "kr"
  | "lt"
  | "lv"
  | "ma"
  | "mx"
  | "my"
  | "ng"
  | "nl"
  | "no"
  | "nz"
  | "ph"
  | "pl"
  | "pt"
  | "ro"
  | "rs"
  | "ru"
  | "sa"
  | "se"
  | "sg"
  | "si"
  | "sk"
  | "th"
  | "tr"
  | "tw"
  | "ua"
  | "us"
  | "ve"
  | "za"
  | "";

  export interface Sources {
    status: string;
    sources: {
      id: string;
      name: string;
      description: string;
      url: string;
      category: string;
      language: string;
      country: string;
    }[];
  }