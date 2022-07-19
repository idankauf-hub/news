import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { DisplayRow, DisplayCenterRow,DisplayColumn } from "../../styles/layouts";
import {
  BoldTitle,
  Text,
  BoldTitleBluishBlack,
  TextLightGray,
  TextDarkPurple,
} from "../../styles/typography";

export const CardsContainer = styled(DisplayColumn)`

align-items: flex-start;
padding: 20px 0px 0px;
gap: 24px;
flex: 1;

width: 100%;
height: 100%;
overflow-y: auto
`;
