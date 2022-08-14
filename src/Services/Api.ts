import axios from "axios";
import { Sources } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setError } from "../store/apiStatus";
import { useEffect, useState } from "react";

export const BASE_URL = "https://newsapi.org/v2/";
export const API_KEY = "d5b0bd2365fb4e8d96725ce42501d396";

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
  return await axios
    .get(QueryUrl)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export default function useArticlesSearch(query: string, pageNumber: number) {
  const dispatch = useDispatch();
  const [articles, setArticles] = useState<any>([]);
  const [hasMore, setHasMore] = useState(false);
  const [totalResults, setTotalResults] = useState<number>(0);

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
        setTotalResults(response.data.totalResults)
        setArticles((prevArticles: any) => {
          return [...prevArticles, ...response.data.articles];
        });
        setHasMore(
          response.data.totalResults / 10 > pageNumber && pageNumber < 10
        );
      })
      .catch((err) => {
        dispatch(setLoading(false));
        dispatch(setError(true));
      });
  }, [query, pageNumber]);
  return { articles, hasMore ,totalResults};
}
