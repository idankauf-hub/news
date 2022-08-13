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

import { dateData } from "../../../mockData";
import Title from "../../../Comps/title/Title";
import DropDowns from "../../../Comps/dropdownsFilters/DropDowns";
import { getLocation } from "../../../Services/Api";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from "../../../store/query";
import { setLoading, setError } from "../../../store/apiStatus";

import axios from "axios";
import { RootState } from "../../../store/store";
import { CountryData } from "../../../types/datatypes";

const MainPage = () => {
  const Query = useSelector((state: RootState) => state.query);
  const [dates, setDates] = useState<[]>([]);
  const [sources, setSources] = useState<[]>([]);


  const dispatch = useDispatch();

  const setGraphsData = (value: []) => {
    setSources(value);
    setDates(value);
  };

  useEffect(() => {
    dispatch(setLoading(true));
    getLocation()
      .then((value) => {
        dispatch(updateFilters({ country: value }));
        dispatch(setLoading(false));
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          dispatch(setError(true));
        }
      });
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <DropDowns />
        <UnderLine />
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
