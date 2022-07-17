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

type Data = {
  month:string;
  frequency:string|number;
};
interface GraphProps{
  data:Data[];
}

const Graph: React.FC<GraphProps> = ({ data }) => {

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
