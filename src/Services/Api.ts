import axios from "axios";
import { Sources } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setError } from "../store/apiStatus";

export const BASE_URL = "https://newsapi.org/v2/";
export const API_KEY = "54ac5dd85b4144dd98cb6bd59a6391c9";

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
      `${BASE_URL}top-headlines/sources?country=${country}&apiKey=${API_KEY}`
    )
    .then((response) => {
      response.data.sources?.map((item: any) => {
        let name = item.name.toString();
        sourcesName.push(name);
      });
      return sourcesName;
    });
};
export const getArticles = async (QueryUrl: string): Promise<[]> => {
  // const dispatch = useDispatch();
  // dispatch(setLoading(true));

  return await axios
    .get(QueryUrl)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      // dispatch(setError(true));
      return error;
    });
};
