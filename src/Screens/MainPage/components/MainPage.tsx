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
} from "./MainPageStyle";

import { dateData, sourcesData } from "../../../mockData";
import Title from "../../../Comps/title/Title";
import DropDowns from "../../../Comps/dropdownsFilters/DropDowns";
import { getLocation, getAllTopHeadlinesSources } from "../../../Services/Api";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from "../../../store/query";
import axios from "axios";
import { RootState } from "../../../store/store";
import { CountryData } from "../../../types/datatypes";

const MainPage = () => {
  const Query = useSelector((state: RootState) => state.query);
  const [dates, setDates] =
    useState<{ month: string; frequency: number }[]>(dateData);
  const [sources, setSources] =
    useState<{ name: string; value: number; fill: string }[]>(sourcesData);

  const dispatch = useDispatch();

  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  useEffect(() => {
    getLocation().then((value) => {
      dispatch(updateFilters({ country: value }));
    });
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <DropDowns />
        <UnderLine></UnderLine>
        <Title
          city={regionNames.of(Query.query.filters.country.toUpperCase()) || ""}
        />
        <Row>
          <ColumnCards>
            <Cards />
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
