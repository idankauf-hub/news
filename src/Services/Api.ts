import axios from "axios";
import { Sources } from "../types/types";
export const BASE_URL = "https://newsapi.org/v2/";
export const API_KEY = "ea71674db5a34c77826a88200ef3ab5e";

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
