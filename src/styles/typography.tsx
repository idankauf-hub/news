import styled from "styled-components";
import { COLORS } from "./colors";
import { FONTWEIGHT } from "./fontWeight";
import { FONTSIZE } from "./fontSize";

export const H2 = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: ${FONTWEIGHT.regular};
  font-size: ${FONTSIZE.text};
  line-height: 22px;
`;
export const H3 = styled(H2)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: ${FONTWEIGHT.regular};
  font-size: ${FONTSIZE.cardtitle};
  line-height: 21px;
  text-align: center;
  color: ${COLORS.purpleblue};
`;

export const H1LightGray = styled(H2)`
  color: rgba(90, 90, 137, 0.5);

`;
export const H1DarkPurple = styled(H2)`
color:${COLORS.darkpurple};
`;

export const BoldCardTitle = styled(H2)`
  font-weight: ${FONTWEIGHT.bold};
  font-size: ${FONTSIZE.cardtitle};
  line-height: 21px;
`;
export const BoldTitleBluishBlack = styled(BoldCardTitle)`
color: ${COLORS.bluishblack};
`;
export const H1Bold = styled(H2)`
  font-weight: ${FONTWEIGHT.bold};
  font-size: ${FONTSIZE.graphtitle};
  line-height: 32px;
`;
