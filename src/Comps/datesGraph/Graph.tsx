import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
type DataProps = {
  dates: string;
};
const Graph: React.FC<DataProps> = ({ dates }) => {
  const data = [
    {
      name: "MAR",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "APR",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "MAY",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "JUN",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "JUL",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "AUG",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "SEP",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div style={{ height: "149px", width: "412.19px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 15, left: 15, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="100%" stopColor="#0058B9" stopOpacity={0.15} />
              <stop offset="0%" stopColor="#00B9FF" stopOpacity={0.15} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
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
            dataKey="uv"
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
