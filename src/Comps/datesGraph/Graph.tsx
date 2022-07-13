import React from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
  } from "recharts";

const Graph = () => {
  return (
{/* <ResponsiveContainer width="100%">
        <AreaChart
          width={730}
          height={250}
          data={[1,2,2,3,3,3,3,3,3]}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="Name" />
          <YAxis yAxisId="Value" orientation="left" domain={["auto", "auto"]} />
          <YAxis yAxisId="Comp" orientation="right" />

          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />

          <Area
            // name={coin}
            type="monotone"
            dataKey="Value"
            yAxisId="Value"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            name="Compound"
            type="monotone"
            dataKey="Comp"
            yAxisId="Comp"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>  ) */}
}

export default Graph