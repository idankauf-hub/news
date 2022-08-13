import React, { useState, useEffect, useRef, useCallback } from "react";
import Card from "../card/Card";
import { CardsContainer } from "./style";
import { mockData } from "../../mockData";

import { RootState } from "../../store/store";
import useArticlesSearch, { getArticles } from "../../Services/Api";
import NotFound from "../notFound/NotFound";

import dayjs from "dayjs";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import Title from "../title/Title";

interface ISourcesData {
  setGraphsData: (e: []) => void;
}

const Cards = ({ setGraphsData }: ISourcesData) => {
  const [data, setData] = useState<any>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const Query = useSelector((state: RootState) => state.query);
  const Status = useSelector((state: RootState) => state.apiStatus);

  const dispatch = useDispatch();

  const observer = useRef<any>();
  const { articles, hasMore } = useArticlesSearch(
    Query.query.queryUrl,
    pageNumber
  );
  const lastArticleElementRef = useCallback(
    (node: any): void => {
      if (Status.loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [Status.loading, hasMore]
  );
  //delete if unused
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  const [articlesLength, setArticlesLength] = useState<string>();
  const [title, setTitle] = useState<JSX.Element>(
    <Title
      city={regionNames.of(Query.query.filters.country.toUpperCase()) || ""}
    />
  );

  useEffect(() => {
    // dispatch(setLoading(true));
    // // getArticles(Query.query.queryUrl).then((value: any) => {
    // //   dispatch(setLoading(false));
    // //   if (value?.response?.data?.status == "error") {
    // //     dispatch(setError(true));
    // //     return;
    // //   }
    // //   setData(value);
    // //   setArticlesLength(value.articles.length);
    // //   setGraphsData(value);
    // //   dispatch(setError(false));
    // // });
    setGraphsData(articles);
    console.log();
  }, [articles]);

  const changeDateForamt = (value: string) => {
    const formatted = dayjs(value).format("dddd MMM D, YYYY");
    return formatted;
  };

  if (Status.error || articles.length===0) {
    return <NotFound />;
  }
  if (Status.loading) {
    return <CircularProgress />;
  }

  return (
    <CardsContainer>
      {Query.query.endpoint === "top-headlines" ? (
        title
      ) : (
        <>{articlesLength} Total results</>
      )}
      {articles &&
        articles.map(
          (
            article: {
              description: any;
              author: any;
              publishedAt: string;
              urlToImage: any;
              url: string | undefined;
              title: string | undefined;
            },
            index: number
          ) => {
            if (articles.length === index + 1) {
              return (
                <Card
                  refLastArticle={lastArticleElementRef}
                  key={index}
                  description={article.description || ""}
                  author={article.author || ""}
                  publishedAt={changeDateForamt(article.publishedAt)}
                  urlToImage={article.urlToImage || ""}
                  urlToNews={article.url}
                  title={article.title}
                />
              );
            } else {
              return (
                <Card
                  key={index}
                  description={article.description || ""}
                  author={article.author || ""}
                  publishedAt={changeDateForamt(article.publishedAt)}
                  urlToImage={article.urlToImage || ""}
                  urlToNews={article.url}
                  title={article.title}
                />
              );
            }
          }
        )}
    </CardsContainer>
  );
};

export default Cards;
