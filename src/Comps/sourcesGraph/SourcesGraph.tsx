import React, { useEffect, useState } from "react";
import { PieChart, Pie, Legend, Label } from "recharts";

import { GraphColors } from "../../styles/colors";
import { CustomeLegend, GraphT, Row, Span, Li, LiText } from "./style";
import { GraphProps } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { CircularProgress } from "@mui/material";
import { NotFounedChartIcon } from "../../Icons";
import NotFoundChart from "../notFound/NotFoundChart";
import { parse } from "path";

const SourcesGraph: React.FC<GraphProps> = ({ data, placeholder = "Sum" }) => {
  console.log(data);
  const [sourcesData, setSourcesData] = useState<
    { name: string; value: number; total: number; fill: string }[]
  >([]);
  const Status = useSelector((state: RootState) => state.apiStatus);

  const setSumOfSources = (sources: any) => {
    const sourcesSum = sumSources(sources);
    const sourcesSumWithOutDuplicates = removeDuplicates(sourcesSum);
    const sortedTopSources = getTop4Sources(sourcesSumWithOutDuplicates);
    addOthers(sortedTopSources, data);
    const sortedTopSourcesWithColors = addColorsToArray(sortedTopSources);
    setSourcesData(sortedTopSourcesWithColors);
  };
  const sumSources = (data: any) => {
    let sourcesSum = [];
    let count = 0;
    let nameToSum = "";

    for (const x in data) {
      nameToSum = data[x].source.name;
      for (const x in data) {
        if (nameToSum === data[x].source.name) {
          count++;
        }
      }
      sourcesSum.push({
        name: nameToSum,
        value: count,
        total: data.length,
      });
      count = 0;
    }
    return sourcesSum;
  };
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
  const addOthers = (sortedTopSources: any, data: any) => {
    let sum = 0;
    for (const x in sortedTopSources) {
      sum += sortedTopSources[x].value;
    }
    sortedTopSources.push({
      name: "Others",
      value: data.length - sum,
      total: data.length,
    });
  };

  useEffect(() => {
    setSumOfSources(data);
  }, [data]);

  if (Status.loading) {
    return <div style={{marginLeft:"45%",justifyContent:"center",marginTop:"25%"}}><CircularProgress /></div>;
  }
  if (Status.error || data.length === 0) {
    return <NotFoundChart />;
  }
  return (
    <GraphT>
      <PieChart width={200} height={124}>
        <Pie
          cx={"50%"}
          cy={"50%"}
          data={sourcesData || []}
          innerRadius={50}
          outerRadius={60}
          fill="#FFFFFF"
          paddingAngle={0}
          dataKey="value"
        >
          <Label
            value={placeholder}
            position="center"
            style={{
              fontFamily: "Mulish",
              fontSize: "12px",
              fill: "#030035",
              fontWeight: "400",
              lineHeight: "16px",
            }}
          />
        </Pie>
      </PieChart>
      <CustomeLegend>
        <ul>
          {sourcesData.map((item, i) => (
            <Row key={i}>
              <Li color={GraphColors[i]}>
                <LiText>{item.name}</LiText>
              </Li>
              <Span>{`${((item.value / item.total) * 100).toFixed(0)}%`}</Span>
            </Row>
          ))}
        </ul>
      </CustomeLegend>
    </GraphT>
  );
};

export default SourcesGraph;
