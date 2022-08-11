import axios from "axios";
import { Sources } from "../types/types";
export const BASE_URL = "https://newsapi.org/v2/";
export const API_KEY = "5529c1884ca1461388de52aa5845d8e7";

export async function getLocation(): Promise<string> {
  return await axios
    .get<{ country_code: string }>("https://ipapi.co/json/")
    .then((response) => {
      const data = response.data.country_code.toLowerCase();
      return data;
    })
    .catch((error) => {
      return error;
    });
}

export const getAllTopHeadlinesSources = async (
  country: string
): Promise<string[]> => {
  var sourcesName: string[] = [];
  return await axios
    .get<Sources>(
      `https://newsapi.org/v2/top-headlines/sources?country=${country}&apiKey=${API_KEY}`
    )
    .then((response) => {
      response.data.sources.map((item: any) => {
        let name = item.name.toString();
        sourcesName.push(name);
      });
      return sourcesName;
    })
    .catch((error) => {
      return error;
    });
};
export const getArticles = async (QueryUrl: string): Promise<string[]> => {
  return await axios
    .get(QueryUrl)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
