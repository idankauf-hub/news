import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { Label } from "recharts";
import {DisplayColumn,DisplayCetnerColumn,DisplayRow} from "../../styles/layouts"
interface ColorProps {
  color: string | undefined;
}
export const CustomeLegend = styled(DisplayColumn)`
  width: 80%;
  height: 143px;
`;
export const GraphT = styled(DisplayCetnerColumn)`
  padding: 0px;
  width: 100%;
  height: 275px;
`;

export const Row = styled(DisplayRow)`
  justify-content: space-between;
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

  color: ${(props) => props.color};
`;

export const LiText = styled.text`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  letter-spacing: 0.2px;
  color: ${COLORS.darkpurpleblack};
`;


