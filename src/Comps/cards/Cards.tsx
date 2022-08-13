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

  const removeDuplicates = (sourcesSum: any) => {
    const ids = sourcesSum.map((o: { name: any }) => o.name);
    const filtered = sourcesSum.filter(
      ({ name }: any, index: number) => !ids.includes(name, index + 1)
    );
    return filtered;
  };
  const getTop4Sources = (sourcesSumWithOutDuplicates: any) => {
    return sourcesSumWithOutDuplicates
      .sort((a: any, b: any) => b.value - a.value)
      .slice(0, 4);
  };
  const addColorsToArray = (sortedTopSources: any) => {
    return sortedTopSources.map((obj: any, i: number) => ({
      ...obj,
      fill: GraphColors[i],
    }));
  };
  const addOthers = (sortedTopSources: any) => {
    let sum = 0;
    for (const x in sortedTopSources) {
      sum += sortedTopSources[x].value;
    }
    sortedTopSources.push({
      name: "Others",
      value: data?.articles?.length - sum,
      total: data?.articles?.length,
    });
  };
  const sendSumOfSources = (sources: any) => {
    const sourcesSum = sumSources(sources);
    const sourcesSumWithOutDuplicates = removeDuplicates(sourcesSum);
    const sortedTopSources = getTop4Sources(sourcesSumWithOutDuplicates);
    addOthers(sortedTopSources);
    const sortedTopSourcesWithColors = addColorsToArray(sortedTopSources);
    setGraphsData(sortedTopSourcesWithColors);
  };
  const sumSources = (data: any) => {
    let sourcesSum = [];
    let count = 0;
    let nameToSum = "";

    for (const x in data?.articles) {
      nameToSum = data.articles[x].source.name;
      for (const x in data.articles) {
        if (nameToSum === data.articles[x].source.name) {
          count++;
        }
      }
      sourcesSum.push({
        name: nameToSum,
        value: count,
        total: data?.articles.length,
      });
      count = 0;
    }
    return sourcesSum;
  };

  useEffect(() => {
    //call api and setData
    getArticles(Query.query.queryUrl).then((value) => {
      setData(value);
      sendSumOfSources(value);
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
