import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import { CardsContainer } from "./style";
import { mockData } from "../../mockData";
import { setLoading, setError } from "../../store/apiStatus";
import { RootState } from "../../store/store";
import { getArticles } from "../../Services/Api";
import NotFound from "../notFound/NotFound";

import dayjs from "dayjs";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import Title from "../title/Title";

interface ISourcesData {
  setGraphsData: (e: []) => void;
}

const Cards = ({ setGraphsData }: ISourcesData) => {
  const [data, setData] = useState<any>(mockData);
  const Query = useSelector((state: RootState) => state.query);
  const Status = useSelector((state: RootState) => state.apiStatus);
  //delete if un used
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  const [articlesLength, setArticlesLength] = useState<string>();
  const [title, setTitle] = useState<JSX.Element>(
    <Title
      city={regionNames.of(Query.query.filters.country.toUpperCase()) || ""}
    />
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    getArticles(Query.query.queryUrl).then((value: any) => {
      dispatch(setLoading(false));
      if (value?.response?.data?.status == "error") {
        dispatch(setError(true));
        return;
      }
      setData(value);
      setArticlesLength(value.articles.length);
      setGraphsData(value);
      dispatch(setError(false));
    });
  }, [Query]);

  const changeDateForamt = (value: string) => {
    const formatted = dayjs(value).format("dddd MMM D, YYYY");
    return formatted;
  };

  if (Status.loading) {
    return <CircularProgress />;
  }
  if (Status.error) {
    return <NotFound />;
  }
  return (
    <CardsContainer>
      {Query.query.endpoint === "top-headlines" ? (
        title
      ) : (
        <>{articlesLength} Total results</>
      )}
      {data &&
        data?.articles?.map(
          (
            article: {
              description: string;
              author: string;
              publishedAt: string;
              urlToImage: string;
              url: string | undefined;
              title: string | undefined;
            },
            i: number
          ) => {
            return (
              <Card
                key={i}
                description={article.description || ""}
                author={article.author || ""}
                publishedAt={changeDateForamt(article.publishedAt)}
                urlToImage={article.urlToImage || ""}
                urlToNews={article.url}
                title={article.title}
              />
            );
          }
        )}
    </CardsContainer>
  );
};

export default Cards;
