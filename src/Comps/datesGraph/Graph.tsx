import { CircularProgress } from "@mui/material";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { XAxis, ResponsiveContainer, AreaChart, Area, Tooltip } from "recharts";

import { RootState } from "../../store/store";
import { GraphProps } from "../../types/types";
import NotFoundChart from "../notFound/NotFoundChart";

const Graph: React.FC<GraphProps> = ({ graphData }) => {
  const [data, setData] = useState<any>(graphData);
  const [dates, setDates] = useState<
    {
      month: string;
      frequency: number;
    }[]
  >([]);

  const [interval, setIntervals] = useState<number>(0);
  const Status = useSelector((state: RootState) => state.apiStatus);

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
              Total Articles:{` ${payload[0].value}`}
            </p>
          </div>
        </div>
      );
    }

    return null;
  };

  useEffect(() => {
    const result: { [key: string]: number } = {};
    for (let i = 0; i < graphData?.length; i++) {
      const date = graphData[i]?.publishedAt;
      const day = date.substring(0, 10);
      const resolution = day;
      if (result[resolution] === undefined) {
        result[resolution] = 1;
      } else {
        result[resolution] = result[resolution] + 1;
      }
    }
    const datesGraphData = Object.entries(result)
      .sort()
      .map(([key, value]: any) => {
        return {
          month: new Date(key).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "numeric",
          }),
          frequency: value,
        };
      });
    if (datesGraphData.length === 1) {
      const result: { [key: string]: number } = {};

      for (let i = 0; i < graphData?.length; i++) {
        const date = graphData[i]?.publishedAt;
        const day = dayjs(date).format("H A D MMM");
        const resolution = day;
        if (result[resolution] === undefined) {
          result[resolution] = 1;
        } else {
          result[resolution] = result[resolution] + 1;
        }
      }
      const datesGraph2Data = Object.entries(result)
        .sort()
        .map(([key, value]: any) => {
          return {
            month: key,
            frequency: value,
          };
        });
      if (datesGraph2Data.length >= 10) {
        setIntervals(5);
      }
      setDates(datesGraph2Data);
    } else {
      if (datesGraphData.length >= 10) {
        setIntervals(5);
      }
      setDates(datesGraphData);
    }
  }, [graphData]);

  if (Status.error || data?.length === 0 || data === undefined) {
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
