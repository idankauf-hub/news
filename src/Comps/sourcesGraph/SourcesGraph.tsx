import React from "react";
import { PieChart, Pie, Legend, Label } from "recharts";
import { GraphColors } from "../../styles/colors";
import { CustomeLegend, GraphT, Row, Span, Li, LiText } from "./style";

type Data = {
  name: string;
  value:number;
  fill: string;
  total:number
};
interface GraphProps {
  placeholder?: string;
  data: Data[];
}

const SourcesGraph: React.FC<GraphProps> = ({ data, placeholder = "Sum" }) => {
  return (
    <GraphT>
      <PieChart width={200} height={124}>
        <Pie
          cx={"50%"}
          cy={"50%"}
          data={data}
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
          {data.map((item, i) => (
            <Row key={i}>
              <Li color={GraphColors[i]}>
                <LiText>{item.name}</LiText>
              </Li>
              <Span>{`${(item.value/item.total)*100}%`}</Span>
            </Row>
          ))}
        </ul>
      </CustomeLegend>
    </GraphT>
  );
};

export default SourcesGraph;
