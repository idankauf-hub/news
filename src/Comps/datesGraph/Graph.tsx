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

  const [interval, setIntervals] = useState<number>(0);
  const Status = useSelector((state: RootState) => state.apiStatus);

  const setSumOfSources = (sources: any) => {
    let dateByHour;
    const sourcesDateSum = sumSourcesDate(sources);
    const sourcesDatesWithOutDuplicates = removeDuplicates(sourcesDateSum);
    if (sourcesDatesWithOutDuplicates.length === 1) {
      dateByHour = sumSourcesByHour(sources);
      const dateByHoursWitoutDuplicates = removeDuplicates(dateByHour);
      if (dateByHoursWitoutDuplicates.length === 1) {
        let dateByMinute;
        dateByMinute = sumSourcesByMinute(sources);
        const dateByHoursWitouDuplicates = removeDuplicates(dateByMinute);
        setDates(dateByHoursWitouDuplicates.reverse());
        setIntervals(2);
      } else {
        setDates(dateByHoursWitoutDuplicates.reverse());
      }
    } else {
      setDates(sourcesDatesWithOutDuplicates.reverse());
    }
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
  const sumSourcesByHour = (data: any) => {
    let sourcesSum = [];
    let count = 0;
    for (const x in data) {
      const formatted = dayjs(data[x].publishedAt).format("H A D MMM");
      for (const x in data) {
        if (formatted === dayjs(data[x].publishedAt).format("H A D MMM")) {
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
  const sumSourcesByMinute = (data: any) => {
    let sourcesSum = [];
    let count = 0;
    for (const x in data) {
      const formatted = dayjs(data[x].publishedAt).format("H:m D/M");
      for (const x in data) {
        if (formatted === dayjs(data[x].publishedAt).format("H:m D/M")) {
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
        <div>
          <h3
            style={{
              fontFamily: "Roboto",
              color: "black",
              fontWeight: "unset",
              marginBottom: "5px",
            }}
          >{`${label}`}</h3>
          <div
            style={{
              display: "flex",
              width: "100px",
            }}
          >
            <p
              style={{
                fontFamily: "Roboto",
                color: "black",
                fontSize: "0.8rem",
                fontWeight: "noraml",
              }}
            >
              Total Articals:{` ${payload[0].value}`}
            </p>
          </div>
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
        height: "28vh",
        width: "100%",
        padding: 10,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={dates}
          margin={{
            top: 20,
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
            fontWeight={"bold"}
            fontSize={"13px"}
            fontFamily={"Roboto"}
            interval={interval}
            tick={{
              fontSize: "11px",
              width: "10px",
              height: "100px",
              fontWeight: "700px",
            }}

            // tick={<CustomTick/>}
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
