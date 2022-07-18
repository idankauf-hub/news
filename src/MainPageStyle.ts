import styled from "styled-components";
import { COLORS } from "./globalStyle";
import { DisplayRow, DisplayCenterRow,DisplayColumn } from "./layouts";
import {
  BoldTitle,
  Text,
  BoldTitleBluishBlack,
  TextLightGray,
  TextDarkPurple,
} from "./typography";

export const Container = styled(DisplayColumn)`
justify-content: center;
padding: 0px 240px 10px;
gap: 20px;

`;
export const Row = styled(DisplayRow)`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 15px;

`;
export const ColumnGraphs = styled(DisplayColumn)`
align-items: flex-start;
padding: 20px 0px 0px;;
gap: 24px;
width: 40%;
height: 757px;
`;
export const ColumnCards = styled(DisplayColumn)`

align-items: flex-start;
padding: 0px;
gap: 24px;
width: 60%;
height: 1231px;

`;