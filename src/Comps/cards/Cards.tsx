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

interface ISourcesData {
  setGraphsData: (e: []) => void;
}

const Cards = ({ setGraphsData }: ISourcesData) => {
  const [data, setData] = useState<any>(mockData);
  const Query = useSelector((state: RootState) => state.query);
  const Status = useSelector((state: RootState) => state.apiStatus);

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
      setGraphsData(value);
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
