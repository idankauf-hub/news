import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import { CardsContainer } from "./style";
import { mockData } from "../../mockData";

import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { getArticles } from "../../Services/Api";
import { GraphColors } from "../../styles/colors";

interface ISourcesData {
  setGraphsData: (e: []) => void;
}

const Cards = ({ setGraphsData }: ISourcesData) => {
  const [data, setData] = useState<any>(mockData);
  const Query = useSelector((state: RootState) => state.query);

  useEffect(() => {
    //call api and setData
    getArticles(Query.query.queryUrl).then((value) => {
      setData(value);
      setGraphsData(value);
    });
  }, [Query]);

  const changeDateForamt = (value: string) => {
    const formatted = dayjs(value).format("dddd MMM D, YYYY");
    return formatted;
  };

  return (
    <CardsContainer>
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
