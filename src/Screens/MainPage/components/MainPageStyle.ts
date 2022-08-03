import styled from "styled-components";
import { COLORS } from "../../../styles/colors";
import { DisplayRow, DisplayColumn } from "../../../styles/layouts";

export const Container = styled(DisplayColumn)`
  justify-content: center;
  padding: 0px 240px 10px;
  gap: 20px;
  background: ${COLORS.ghostwhite};
`;
export const Row = styled(DisplayRow)`
  align-items: flex-start;
  padding: 0px;
  gap: 15px;
`;
export const ColumnGraphs = styled(DisplayColumn)`
  align-items: flex-start;
  padding: 20px 0px 0px;
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

export const UnderLine = styled.div`
  width: 100%;
  height: 0px;
  opacity: 0.5;
  border: 1px solid ${COLORS.lightgray};
`;
