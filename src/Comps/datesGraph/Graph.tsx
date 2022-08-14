import { CircularProgress } from "@mui/material";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { XAxis, ResponsiveContainer, AreaChart, Area } from "recharts";
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
    const sourcesSum = sumSourcesDate(sources);
    const sourcesSumWithOutDuplicates = removeDuplicates(sourcesSum);
    setDates(sourcesSumWithOutDuplicates);
  };
  const sumSourcesDate = (data: any) => {
    let sourcesSum = [];
    let count = 0;
    for (const x in data) {
      const formatted = dayjs(data[x].publishedAt).format("D MMM");
      for (const x in data) {
        if (
          formatted ===
          dayjs(data[x].publishedAt).format("D MMM")
        ) {
          count++;
        }
      }
      sourcesSum.push({
        month: formatted,
        frequency: count,
      });
      count = 0;
    }
    console.log(sourcesSum)
    return sourcesSum;
  };
  const removeDuplicates = (sourcesSum: any) => {
    const ids = sourcesSum.map((o: { month: any }) => o.month);
    const filtered = sourcesSum.filter(
      ({ month }: any, index: number) => !ids.includes(month, index + 1)
    );
    console.log(filtered)

    return filtered;
  };

  useEffect(() => {
    setSumOfSources(data);
  }, [data]);

  if (Status.loading) {
    return <CircularProgress />;
  }
  if (Status.error || data.length === 0) {
    return <NotFoundChart />;
  }

  return (
    <div
      style={{
        height: "149px",
        width: "412.19px",
        marginTop: "22%",
        padding: 10,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={dates}
          margin={{ top: 10, right: 15, left: 15, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="100%" stopColor="#0058B9" stopOpacity={0.15} />
              <stop offset="0%" stopColor="#00B9FF" stopOpacity={0.15} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            stroke="#5A5A89"
            fontWeight={700}
            fontSize={13}
            interval={0}
          />
          {/* <Tooltip /> */}
          <Area
            type="monotone"
            dataKey="frequency"
            stroke="#0058B9"
            strokeWidth={4}
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
