import { Sources } from "../types/types";

import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLoadingGlobal, setErrorGlobal } from "../store/apiStatus";

export const BASE_URL = "https://newsapi.org/v2/";
export const API_KEY = "9ce231647996401e92c8f127de8255e1";

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
  const [articles, setArticles] = useState<any>([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState<any>([]);
  const [error, setError] = useState(false);
  const [totalResults, setTotalResults] = useState<number>(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setArticles([]);
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

        setTotalResults(response.data.totalResults);
        setArticles((prevArticles: any) => {
          return [...prevArticles, ...response.data.articles];
        });
        setHasMore(
          response.data.totalResults / 10 > pageNumber && pageNumber < 10
        );
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
