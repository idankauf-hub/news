import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import { CardsContainer } from "./style";
import { mockData } from "../../mockData";

import dayjs from "dayjs";

interface CardsProps {
  query?: string;
  endpoint?: string;
}

const Cards: React.FC<CardsProps> = ({ query, endpoint }) => {
  const [data, setData] = useState<any>(mockData);

  useEffect(() => {
    //call api and setData
    //
  }, []);

  const changeDateForamt = (value: string) => {
    const formatted = dayjs(value).format("dddd MMM D, YYYY");
    return formatted;
  };

  return (
    <CardsContainer>
      {data.articles.map(
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
            ></Card>
          );
        }
      )}
    </CardsContainer>
  );
};

export default Cards;
