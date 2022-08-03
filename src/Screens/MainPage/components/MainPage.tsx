import React, { useEffect, useState } from "react";
import Cards from "../../../Comps/cards/Cards";
import Graph from "../../../Comps/datesGraph/Graph";
import GraphCard from "../../../Comps/graphCard/GraphCard";
import { Navbar } from "../../../Comps/navbar/Navbar";
import SourcesGraph from "../../../Comps/sourcesGraph/SourcesGraph";
import { ColumnGraphs, Container,ColumnCards, Row,UnderLine } from "./MainPageStyle";

import { dateData,sourcesData } from "../../../mockData";



const MainPage = () => {
  const [dates, setDates] = useState<{ month: string; frequency: number; }[]>(dateData);
  const [sources, setSources] = useState<{ name: string; value: number; fill: string; }[]>(sourcesData);

  useEffect(() => {
    //call api and set all data and pass it to store of search query
    //
  }, []);

  return (
    <>
      <Navbar />
      {/* <DropDowns/> */}
      <UnderLine></UnderLine>
      <Container>
        {/* <Title/> */}
        <Row>
        <ColumnCards><Cards /></ColumnCards>
        <ColumnGraphs>
        <GraphCard
          title="Sources"
          GraphElement={() => (
            <SourcesGraph data={sources}  />
          )}
        />
        <GraphCard
          title="Dates"
          GraphElement={() => (
            <Graph
              data={dates}
            />
          )}
        /></ColumnGraphs>
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
