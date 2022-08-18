import { NewsApiData, Sources } from "../types/types";

import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLoadingGlobal, setErrorGlobal } from "../store/apiStatus";

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
): Promise<any[]> => {
  var sourcesName: any[] = [];
  return await axios
    .get<Sources>(
      `${BASE_URL}top-headlines/sources?country=${country}&apiKey=${API_KEY}`
    )
    .then((response) => {
      response.data.sources?.map((item: any) => {
        let name = item.name.toString();
        sourcesName.push({ name: name, id: item.id.toString() });
      });
      return sourcesName;
    });
};
export function useGetArticles(QueryUrl: string) {
  const [articles, setArticles] = useState<any>([]);

  QueryUrl = QueryUrl.replace("&pageSize=10", "&pageSize=100");
  QueryUrl = QueryUrl.replace(
    "&sortBy=popularity" || "&sortBy=publishedAt" || "&sortBy=relevancy",
    ""
  );

  useEffect(() => {
    axios
      .get(QueryUrl)
      .then((response) => {
        console.log(response.data);
        setArticles(response.data.articles);
      })
      .catch((error) => {
        return error;
      });
  }, [QueryUrl]);
  return articles;
}

export default function useArticlesSearch(query: string, pageNumber: number) {
  const [articles, setArticles] = useState<any>([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState<any>([]);
  const [error, setError] = useState(false);
  const [totalResults, setTotalResults] = useState<number>(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setError(false);
  }, []);

  useEffect(() => {
    setArticles([]);
    console.log(query);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(query + "&page=" + pageNumber)
      .then((response) => {
        setLoading(false);
        setError(false);
        dispatch(setErrorGlobal(false));
        dispatch(setLoadingGlobal(false));

        setArticles((prevArticles: any) => {
          return [...prevArticles, ...response.data.articles];
        });
        setTotalResults(response.data.totalResults);
        if (totalResults === response.data.articles.length) {
          return;
        }
        setHasMore(pageNumber < 10 && response.data.articles.length !== 0);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        dispatch(setLoadingGlobal(false));
        dispatch(setErrorGlobal(true));
      });
  }, [query, pageNumber]);
  return { articles, hasMore, totalResults, loading, error };
}
