import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { DisplayRow, DisplayCenterRow } from "../../styles/layouts";
import { H1Bold } from "../../styles/typography";

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  @media (min-width: 1450px) {
    width: 80%;
  }
  height: 355px;
  background: ${COLORS.white};
  border: 1px solid ${COLORS.lightgray};
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 20px 15px 25px 5px;
`;

export const Title = styled(H1Bold)`
  position: relative;
  left: 4.46%;
  right: 74.68%;
  top: 6.04%;
  bottom: 83.94%;
`;

export const UnderLine = styled.div`
  position: absolute;
  left: 5.07%;
  right: 88.08%;
  bottom: 90.48%;
  top: 16.52%;
  border-radius: 10px;
  background: ${COLORS.darkpurple};
  border: 3px solid ${COLORS.darkpurple};
`;

export const TitleContainer = styled(DisplayRow)`
  margin-bottom: 1.5vh;
`;
export const GraphContainer = styled(DisplayCenterRow)``;
