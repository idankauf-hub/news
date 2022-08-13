import styled from "styled-components";
import { DisplayColumn, DisplayCetnerColumn } from "../../styles/layouts";
import { FONTWEIGHT } from "../../styles/fontWeight";
import { H3 } from "../../styles/typography";
import { COLORS } from "../../styles/colors";

export const NotFoundContainer = styled(DisplayColumn)`
  align-items: center;
  padding: 275px 0px 0px;
  gap: 30px;
  width: 100%;
  height: 100%;
`;
export const NotFoundText = styled(H3)``;

export const NotFoundChartContainer = styled(DisplayCetnerColumn)`
  padding: 0px;
  gap: 16px;
  width: 372px;
  height: 247px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
`;

export const NotFoundChartText = styled(H3)``;
