import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { Label } from "recharts";
import {
  DisplayColumn,
  DisplayCetnerColumn,
  DisplayRow,
} from "../../styles/layouts";

interface ColorProps {
  color: string | undefined;
}
export const CustomeLegend = styled(DisplayColumn)`
  margin-left: 2vh;
  width: 90%;
  height: 16vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-corner {
    background: #000;
  }
  ::-webkit-scrollbar-thumb {
    background: #a0a3bd;
    -webkit-border-radius: 10px;
  }
  padding: 1.3vh;
`;
export const GraphT = styled(DisplayCetnerColumn)`
  padding: 0px;
  width: 100%;
  height: 275px;
`;

export const Row = styled(DisplayRow)`
  justify-content: space-between;
  margin-left: 0.5vh;
`;
export const Span = styled.span`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.3px;

  color: ${COLORS.gray};
`;

export const Li = styled.li<ColorProps>`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.3px;
  margin-bottom: 10px;
  color: ${(props) => props.color};
`;

export const LiText = styled.p`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: ${COLORS.darkpurpleblack};
`;
