import React, { useState, useEffect, useRef, useCallback } from "react";
import Card from "../card/Card";
import { CardsContainer } from "./style";
import { RootState } from "../../store/store";
import useArticlesSearch from "../../Services/Api";
import NotFound from "../notFound/NotFound";

import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

interface ISourcesData {
  setGraphsData: (e: [], totalResults: number, articalsLength: number) => void;
}

const Cards = ({ setGraphsData }: ISourcesData) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const Query = useSelector((state: RootState) => state.query);

  const observer = useRef<any>();
  const { articles, hasMore, totalResults, loading, error } = useArticlesSearch(
    Query.query.queryUrl,
    pageNumber
  );

  const lastArticleElementRef = useCallback(
    (node: any): void => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    setGraphsData(articles, totalResults, articles.length);
  }, [articles, Query]);

  const changeDateForamt = (value: string) => {
    const formatted = dayjs(value).format("dddd MMM D, YYYY");
    return formatted;
  };

  return (
    <CardsContainer>
      {articles.map(
        (
          article: {
            content: any;
            description: any;
            author: any;
            publishedAt: string;
            urlToImage: any;
            url: string | undefined;
            title: string | undefined;
            source:{id:string,name:string}
          },
          index: number
        ) => {
          if (articles.length === index + 1) {
            return (
              <Card
                refLastArticle={lastArticleElementRef}
                key={index}
                description={
                  article.description === null
                    ? "No Description"
                    : article.description
                }
                author={article.source.name}
                publishedAt={changeDateForamt(article.publishedAt)}
                urlToImage={
                  article.urlToImage === null
                    ? "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                    : article.urlToImage
                }
                urlToNews={article.url}
                title={article.title}
              />
            );
          } else {
            return (
              <Card
                key={index}
                description={
                  article.description === null
                    ? "No Description"
                    : article.description
                }
                author={article.source.name}
                publishedAt={changeDateForamt(article.publishedAt)}
                urlToImage={
                  article.urlToImage === null
                    ? "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                    : article.urlToImage
                }
                urlToNews={article.url}
                title={article.title}
              />
            );
          }
        }
      )}
      {loading && (
        <div style={{ marginLeft: "50%" }}>
          <CircularProgress />
        </div>
      )}
      {(error || articles.length === 0) && <NotFound />}
    </CardsContainer>
  );
};

export default Cards;
