import React from 'react'
import { PieChart, Pie, Legend } from "recharts";


const SourcesGraph = () => {

const data = [
    { name: "Group A", value: 400, fill: "#0088FE" },
    { name: "Group B", value: 300, fill: "#00C49F" },
    { name: "Group C", value: 300, fill: "#FFBB28" },
    { name: "Group D", value: 200, fill: "#FF8042" }
  ];

  
  return (
    <PieChart width={800} height={400} >
    <text x={125} y={207} textAnchor="middle" dominantBaseline="middle">
    Sum
   </text>
    <Legend
      height={36}
      iconType="circle"
      layout="vertical"
      verticalAlign="middle"
      iconSize={10}

    />
    <Pie
      data={data}
      cx={120}
      cy={200}
      innerRadius={60}
      outerRadius={70}
      fill="#FFFFFF"
      paddingAngle={0}
      dataKey="value"
    >
     
    </Pie>

  </PieChart>  )
}

export default SourcesGraph