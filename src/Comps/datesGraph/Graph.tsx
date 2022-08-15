import { CircularProgress } from "@mui/material";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { XAxis, ResponsiveContainer, AreaChart, Area, Tooltip } from "recharts";

import { RootState } from "../../store/store";
import { GraphProps } from "../../types/types";
import NotFoundChart from "../notFound/NotFoundChart";

const Graph: React.FC<GraphProps> = ({ data }) => {
  const [dates, setDates] = useState<
    {
      month: string;
      frequency: number;
    }[]
  >([]);
  const Status = useSelector((state: RootState) => state.apiStatus);

  const setSumOfSources = (sources: any) => {
    const sourcesDateSum = sumSourcesDate(sources);
    const sourcesDatesWithOutDuplicates = removeDuplicates(sourcesDateSum);
    if (sourcesDatesWithOutDuplicates.length === 1) {
      sourcesDatesWithOutDuplicates.push(sourcesDatesWithOutDuplicates[0]);
    }
    setDates(sourcesDatesWithOutDuplicates.reverse());
  };
  const sumSourcesDate = (data: any) => {
    let sourcesSum = [];
    let count = 0;
    for (const x in data) {
      const formatted = dayjs(data[x].publishedAt).format("D MMM");
      for (const x in data) {
        if (formatted === dayjs(data[x].publishedAt).format("D MMM")) {
          count++;
        }
      }
      sourcesSum.push({
        month: formatted,
        frequency: count,
      });
      count = 0;
    }
    return sourcesSum;
  };
  const removeDuplicates = (sourcesSum: any) => {
    const ids = sourcesSum.map((o: { month: any }) => o.month);
    const filtered = sourcesSum.filter(
      ({ month }: any, index: number) => !ids.includes(month, index + 1)
    );

    return filtered;
  };
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p style={{ fontFamily: "Roboto", color: "#5A5A89" }}>{`${label}`}</p>
          <p
            style={{ fontFamily: "Roboto", color: "#5A5A89" }}
          >{`Frequency: ${payload[0].value} articals`}</p>
        </div>
      );
    }

    return null;
  };

  useEffect(() => {
    setSumOfSources(data);
  }, [data]);

  if (Status.error || data.length === 0) {
    return <NotFoundChart />;
  }
  if (Status.loading) {
    return (
      <div
        style={{
          marginLeft: "45%",
          justifyContent: "center",
          marginTop: "25%",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div
      style={{
        height: "30vh",
        width: "100%",
        padding: 10,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={dates}
          margin={{
            top: 0,
            right: 17,
            left: 18,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0058B9" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#00B9FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            fill="#5A5A89"
            fontWeight={700}
            fontSize={11}
            fontFamily={"Roboto"}
            interval={0}
          />
          <Area
            type="monotone"
            dataKey="frequency"
            stroke="#0058B9"
            fontFamily="Roboto"
            strokeWidth={4}
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Tooltip content={<CustomTooltip />} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
