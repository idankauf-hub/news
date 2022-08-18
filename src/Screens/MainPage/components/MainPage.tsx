import React, { useEffect, useState } from "react";
import Cards from "../../../Comps/cards/Cards";
import Graph from "../../../Comps/datesGraph/Graph";
import GraphCard from "../../../Comps/graphCard/GraphCard";
import { Navbar } from "../../../Comps/navbar/Navbar";
import SourcesGraph from "../../../Comps/sourcesGraph/SourcesGraph";
import {
  ColumnGraphs,
  Container,
  ColumnCards,
  Row,
  UnderLine,
  TotalResults,
} from "./MainPageStyle";

import Title from "../../../Comps/title/Title";
import DropDowns from "../../../Comps/dropdownsFilters/DropDowns";
import {
  API_KEY,
  BASE_URL,
  useGetArticles,
} from "../../../Services/Api";
import {useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const MainPage = () => {
  const Query = useSelector((state: RootState) => state.query);
  const ApiStatus = useSelector((state: RootState) => state.apiStatus);
  const [queryUrl, setQueryUrl] = useState<string>("");

  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

  const graphData = useGetArticles(queryUrl);

  const isQueryEmpty = () => {
    return Query.query.search.length === 0;
  };

  const buildApiQuery = () => {
    let queryUrl = "";
    if (Query.query.endpoint === "top-headlines") {
      if (isQueryEmpty()) {
        queryUrl = `${BASE_URL}${Query.query.endpoint}?country=${Query.query.filters.country}&category=${Query.query.filters.category}&sources=${Query.query.filters.sources}&pageSize=10&apiKey=${API_KEY}`;
      } else {
        queryUrl = `${BASE_URL}${Query.query.endpoint}?sources=${Query.query.filters.sources}&country=${Query.query.filters.country}&q=${Query.query.search}&category=${Query.query.filters.category}&pageSize=10&apiKey=${API_KEY}`;
      }
    } else {
      queryUrl = `${BASE_URL}${Query.query.endpoint}?q=${Query.query.search}&sortBy=${Query.query.sortby}&from=${Query.query.filters.date}&to=${Query.query.filters.date}&sources=${Query.query.filters.sources}&language=${Query.query.filters.language}&pageSize=10&apiKey=${API_KEY}`;
    }
    setQueryUrl(queryUrl);
  };
  useEffect(() => {
    buildApiQuery();
  }, [Query.query.endpoint, Query.query.filters, Query.query.search]);

  return (
    <>
      <Navbar />
      <Container>
        <DropDowns />
        <UnderLine />
        {Query.query.endpoint === "top-headlines" &&
        Query.query.search.length === 0 ? (
          <Title
            city={
              regionNames.of(Query.query.filters.country.toUpperCase()) || ""
            }
          />
        ) : (
          Query.query.endpoint === "top-headlines" && (
            <TotalResults>
              <>
                {ApiStatus.error || ApiStatus.loading ? 0 : graphData.length}{" "}
                Total results
              </>
            </TotalResults>
          )
        )}
        {Query.query.endpoint === "everything" && !ApiStatus.error && (
          <TotalResults>
            <>
              {ApiStatus.error || ApiStatus.loading ? 0 : graphData.length}{" "}
              Total results
            </>
          </TotalResults>
        )}
        <Row>
          <ColumnCards>
            <Cards />
          </ColumnCards>
          <ColumnGraphs>
            <GraphCard
              title="Sources"
              GraphElement={() => <SourcesGraph graphData={graphData} />}
            />
            <GraphCard
              title="Dates"
              GraphElement={() => <Graph graphData={graphData} />}
            />
          </ColumnGraphs>
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
