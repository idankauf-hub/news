import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { DisplayColumn } from "../../styles/layouts";

export const CardsContainer = styled(DisplayColumn)`
  align-items: flex-start;
  background-color: ${COLORS.ghostwhite};
  gap: 24px;
  flex: 1;
  width: 100%;
  height: 100%;

  // overflow-y: auto;

`;
