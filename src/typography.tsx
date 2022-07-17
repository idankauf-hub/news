import styled from "styled-components";
import { COLORS } from "./globalStyle";

export const Text = styled.h5`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const Paragraph = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
`;

export const BoldTitle = styled(Text)`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
`;
export const BigBoldTitle = styled(Text)`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`;
