import styled from "styled-components";
import { COLORS } from "../../globalStyle";

interface ColorProps {
  color: string | undefined;
}
export const CustomeLegend = styled.div`
  display: flex;
  flex-direction: column;

  width: 372px;
  height: 143px;
`;
export const GraphT = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0px;
  width: 372px;
  height: 275px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

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
