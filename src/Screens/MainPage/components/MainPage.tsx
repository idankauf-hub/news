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

import { dateData } from "../../../mockData";
import Title from "../../../Comps/title/Title";
import DropDowns from "../../../Comps/dropdownsFilters/DropDowns";
import { getLocation } from "../../../Services/Api";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from "../../../store/query";

import { RootState } from "../../../store/store";

const MainPage = () => {
  const Query = useSelector((state: RootState) => state.query);
  const ApiStatus = useSelector((state: RootState) => state.apiStatus);
  const [dates, setDates] = useState<[]>([]);
  const [sources, setSources] = useState<[]>([]);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [title, setTitle] = useState<JSX.Element>(<></>);

  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

  const dispatch = useDispatch();

  const setGraphsData = (value: [], totalResults: number) => {
    setTotalResults(totalResults);
    setSources(value);
    setDates(value);
  };
  useEffect(() => {
    setTitle(
      <Title
        city={regionNames.of(Query.query.filters.country.toUpperCase()) || ""}
      />
    );
  }, []);
  useEffect(() => {
    if (
      Query.query.endpoint === "top-headlines" ||
      Query.query.search.length === 0 ||
      Query.query.filters.category.length === 0 ||
      Query.query.filters.country === "us" ||
      Query.query.filters.sources.length === 0
    ) {
      setTitle(
        <Title
          city={regionNames.of(Query.query.filters.country.toUpperCase()) || ""}
        />
      );
    } else {
      setTitle(
        <TotalResults>
          <>
            {ApiStatus.error || ApiStatus.loading ? 0 : totalResults} Total
            results
          </>
        </TotalResults>
      );
    }
  }, [Query.query.endpoint]);

  return (
    <>
      <Navbar />
      <Container>
        <DropDowns />
        <UnderLine />
        {/* {title} */}
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
                {ApiStatus.error || ApiStatus.loading ? 0 : totalResults} Total
                results
              </>
            </TotalResults>
          )
        )}
        {Query.query.endpoint === "everything" && ApiStatus.error != true && (
          <TotalResults>
            <>
              {ApiStatus.error || ApiStatus.loading ? 0 : totalResults} Total
              results
            </>
          </TotalResults>
        )}
        <Row>
          <ColumnCards>
            <Cards setGraphsData={setGraphsData} />
          </ColumnCards>
          <ColumnGraphs>
            <GraphCard
              title="Sources"
              GraphElement={() => <SourcesGraph data={sources} />}
            />
            <GraphCard
              title="Dates"
              GraphElement={() => <Graph data={dates} />}
            />
          </ColumnGraphs>
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
