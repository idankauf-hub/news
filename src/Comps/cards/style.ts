import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { DisplayColumn } from "../../styles/layouts";
import { H2 } from "../../styles/typography";

export const CardsContainer = styled(DisplayColumn)`
  align-items: flex-start;
  background-color: ${COLORS.ghostwhite};
  gap: 24px;
  flex: 1;
  width: 100%;
  height: 100%;

  // overflow-y: auto;

`;
export const TotalResults = styled(H2)`
  letter-spacing: 0.25px;
  color: rgba(90, 90, 137, 0.5);
`;

