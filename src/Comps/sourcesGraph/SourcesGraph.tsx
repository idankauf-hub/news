import React from "react";
import { PieChart, Pie, Legend, Label } from "recharts";
import { CustomeLegend, GraphT, Row, Span, Li, LiText } from "./style";

type Data = {
  name: string;
  value: string | number;
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
          cx={"60%"}
          cy={"50%"}
          data={data}
          innerRadius={50}
          outerRadius={60}
          fill="#FFFFFF"
          paddingAngle={0}
          dataKey="value"
        >
          <Label value={placeholder} position="center" />
        </Pie>
      </PieChart>
      <CustomeLegend>
        <ul>
          {data.map((item) => (
            <Row>
              <Li color={item.fill}>
                <LiText>{item.name}</LiText>
              </Li>
              <Span>{item.value}</Span>
            </Row>
          ))}
        </ul>
      </CustomeLegend>
    </GraphT>
  );
};

export default SourcesGraph;
