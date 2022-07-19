import React from "react";
import Card from "../../Comps/card/Card";
import Cards from "../../Comps/cards/Cards";
import Graph from "../../Comps/datesGraph/Graph";
import GraphCard from "../../Comps/graphCard/GraphCard";
import { Navbar } from "../../Comps/navbar/Navbar";
import SourcesGraph from "../../Comps/sourcesGraph/SourcesGraph";
import Underline from "../../Comps/underline/Underline";
import { ColumnGraphs, Container,ColumnCards, Row } from "../../MainPageStyle";

const MainPage = () => {
  const data = [
    {
      month: "MAR",
      frequency: 4000,
    },
    {
      month: "APR",
      frequency: 2000,
    },
    {
      month: "MAY",
      frequency: 3000,
    },
    {
      month: "JUN",
      frequency: 2780,
    },
    {
      month: "JUL",
      frequency: 1890,
    },
    {
      month: "AUG",
      frequency: 2390,
    },
    {
      month: "SEP",
      frequency: 3490,
    },
  ];
  return (
    <>
      <Navbar />

      {/* <DropDowns/> */}
      <Underline />
      <Container>
        {/* <Title/> */}
        <Row>
        <ColumnCards><Cards /></ColumnCards>
        <ColumnGraphs>
        <GraphCard
          title="Sources"
          GraphElement={() => (
            <SourcesGraph data={[
              { name: "NBC", value: 200, fill: "#0088FE" },
              { name: "WALLA", value: 300, fill: "#00C49F" },
              { name: "Group C", value: 300, fill: "#FFBB28" },
              { name: "Group D", value: 200, fill: "#FF8042" },
            ]}  />
          )}
        />
        <GraphCard
          title="Dates"
          GraphElement={() => (
            <Graph
              data={[
                {
                  month: "MAY",
                  frequency: 3000,
                },
                {
                  month: "MAY",
                  frequency: 2600,
                },
              ]}
            />
          )}
        /></ColumnGraphs>
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
