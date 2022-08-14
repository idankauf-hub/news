import React, { useState, useEffect, useRef, useCallback } from "react";
import Card from "../card/Card";
import { CardsContainer } from "./style";
import { mockData } from "../../mockData";

import { RootState } from "../../store/store";
import useArticlesSearch, { getArticles } from "../../Services/Api";
import NotFound from "../notFound/NotFound";

import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import Title from "../title/Title";

interface ISourcesData {
  setGraphsData: (e: [], totalResults: number) => void;
}

const Cards = ({ setGraphsData }: ISourcesData) => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  const Query = useSelector((state: RootState) => state.query);
  const ApiStatus = useSelector((state: RootState) => state.apiStatus);

  const observer = useRef<any>();
  const { articles, hasMore, totalResults } = useArticlesSearch(
    Query.query.queryUrl,
    pageNumber
  );

  const lastArticleElementRef = useCallback(
    (node: HTMLDivElement): void => {
      if (ApiStatus.loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [ApiStatus.loading, hasMore]
  );

  useEffect(() => {
    setGraphsData(articles, totalResults);
  }, [articles, Query]);

  const changeDateForamt = (value: string) => {
    const formatted = dayjs(value).format("dddd MMM D, YYYY");
    return formatted;
  };

  if (ApiStatus.error || articles.length === 0) {
    return <NotFound />;
  }
  if (ApiStatus.loading) {
    return <CircularProgress />;
  }

  return (
    <CardsContainer>
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
