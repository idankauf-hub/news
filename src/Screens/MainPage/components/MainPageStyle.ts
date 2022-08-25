import styled from "styled-components";
import { COLORS } from "../../../styles/colors";
import { DisplayRow, DisplayColumn } from "../../../styles/layouts";
import { H2 } from "../../../styles/typography";

export const Container = styled(DisplayColumn)`
  justify-content: center;
  @media (max-width: 1441px) {
    padding: 0px 8.5%;
  }
  padding: 0px 12.5%;
  gap: 20px;
  background-color: ${COLORS.ghostwhite};
`;
export const Row = styled(DisplayRow)`
  align-items: flex-start;
  padding: 0px;
  gap: 15px;
`;
export const ColumnGraphs = styled(DisplayColumn)`
  align-items: flex-start;
  gap: 24px;
  width: 30%;
  @media (max-width: 1441px) {
    width: 28%;
  }
  height: 100vh;
`;
export const ColumnCards = styled(DisplayColumn)`
  align-items: flex-start;
  overflow-y: auto;
  padding: 0px 17px 0px 0px;
  gap: 24px;
  width: 70%;
  height: 100vh;

  @media (max-width: 1441px) {
    width: 72%;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-corner {
    background: #000;
  }
  ::-webkit-scrollbar-thumb {
    background: #a0a3bd;
    -webkit-border-radius: 10px;
  }
`;

export const UnderLine = styled.div`
  @media (max-width: 1441px) {
    width: 100%;
  }
  @media (min-width: 1440px) {
    width: 94%;
  }
  width: 100%;
  height: 0px;
  opacity: 0.5;
  border: 1px solid ${COLORS.lightgray};
`;

export const TotalResults = styled(H2)`
  letter-spacing: 0.25px;
  color: rgba(90, 90, 137, 0.5);
`;
