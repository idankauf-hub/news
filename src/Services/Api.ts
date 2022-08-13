import axios from "axios";
import { Sources } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setError } from "../store/apiStatus";
import { useEffect, useState } from "react";

export const BASE_URL = "https://newsapi.org/v2/";
export const API_KEY = "38e4c82230ae43f6bfaa032dc942d694";

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

export default function useArticlesSearch(query: string, pageNumber: number) {
  const dispatch = useDispatch();
  const [articles, setArticles] = useState<any>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setArticles([]);
  }, [query]);

  useEffect(() => {
    dispatch(setLoading(true));
    axios
      .get(query + "&page=" + pageNumber)
      .then((response) => {
        dispatch(setLoading(false));
        dispatch(setError(false));

        setArticles((prevArticles: any) => {
          return [...prevArticles, ...response.data.articles];
        });
        setHasMore(response.data.totalResults / 10 > pageNumber);
      })
      .catch((err) => {
        dispatch(setLoading(false));
        dispatch(setError(true));
        console.log(query);
        console.log(err);
      });
  }, [query, pageNumber]);
  return { articles, hasMore };
}
