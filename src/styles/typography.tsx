import styled from "styled-components";
import { COLORS } from "./colors";

export const Text = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;
export const TextLightGray = styled(Text)`
  color: rgba(90, 90, 137, 0.5);

`;
export const TextDarkPurple = styled(Text)`
color:${COLORS.darkpurple};
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
export const BoldTitleBluishBlack = styled(BoldTitle)`
color: ${COLORS.bluishblack};
`;
export const BigBoldTitle = styled(Text)`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`;
