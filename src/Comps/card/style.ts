import styled from "styled-components";
import { COLORS } from "../../styles/colors";
import { DisplayRow, DisplayCenterRow } from "../../styles/layouts";
import {
  BoldTitleBluishBlack,
  H1LightGray,
  H1DarkPurple,
} from "../../styles/typography";

interface ImageProps {
  urlImage: string | undefined;
}
export const CardContainer = styled(DisplayCenterRow)`
  position: relative;

  padding: 0px;
  width: 100%;
  height: 15%;
  background: ${COLORS.white};
  border: 1px solid ${COLORS.lightgray};
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
`;

export const CardImage = styled.img<ImageProps>`
  display: inline;
  width: 30%;
  height: 100%;
  box-sizing: border-box;

  border-radius: 20px 0px 0px 20px;
  border-right: 1px solid ${COLORS.lightgray};
  background-image: url(${(props) => props.urlImage});
  background-size: 100% 100%;
`;

export const DataContainer = styled.div`
  display: inline-block;
  flex-direction: column;
  align-items: flex-end;
  padding: 8px 17px;
  gap: 10px;

  width: 76%;
  height: 100%;
  justify-content: space-between;
`;
export const DateDiv = styled(DisplayRow)`
  // justify-content: space-between;
  // align-items: flex-start;
  // padding: 0px;
  // gap: 10px;
  // width: 80%;
  // height: 22px;

  margin-bottom: 16px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const DateText = styled(H1LightGray)`
  width: 100%;
  height: 22px;
  align-items: center;
  letter-spacing: 0.25px;
`;
export const Title = styled(BoldTitleBluishBlack)`
  width: 80%;
  height: 21px;
  margin-up: 19.25px;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin-bottom: 19.25px;
`;
export const AuthorName = styled(H1LightGray)`
  height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.25px;
`;
export const Description = styled(H1DarkPurple)`
  height: 32px;
  line-height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

export const BtnDiv = styled(DisplayCenterRow)`
  justify-content: flex-end;
  padding: 0px;
  margin-bottom: 10px;
  gap: 10px;
  // width: 100%;
  height: 36px;
`;
