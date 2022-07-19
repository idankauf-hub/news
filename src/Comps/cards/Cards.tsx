import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import { CardsContainer } from "./style";
import {mockData} from "../../mockData";

interface CardsProps {
  query?: string;
  endpoint?: string;
}

const Cards: React.FC<CardsProps> = ({ query, endpoint }) => {
  const [data, setData] = useState<any>(mockData);
  console.log(data.articles)
  useEffect(() => {
    //call api and setData
    //do Http Query
  }, []);

  const changeDateForamt = (value: string) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const d = new Date(value);
    const dayName = days[d.getDay()];
    const monthName = months[d.getMonth()];
    const date = d.getDate();
    const year = d.getFullYear();
    const formatted = `${dayName} ${monthName} ${date}, ${year}`;
    return formatted;
  };

  return (
    <CardsContainer> 
      
      {data.articles.map((article:any, i:number) => {
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
      })}
    </CardsContainer>
  );
};

export default Cards;
