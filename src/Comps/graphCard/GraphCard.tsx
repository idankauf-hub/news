import React from "react";
import { CardContainer, Title,UnderLine,TitleContainer,GraphContainer} from "./style";
interface GraphCardProps {
  title?: string;
  GraphElement?: () => JSX.Element;
}
const GraphCard: React.FC<GraphCardProps> = ({ title, GraphElement }) => {
  return (
    <CardContainer>
        <TitleContainer>
            <Title>{title}</Title>
            <UnderLine/>
        </TitleContainer>
        <GraphContainer>
        {GraphElement && <GraphElement/>}

        </GraphContainer>

    </CardContainer>
  );
};

export default GraphCard;
