import styled from "styled-components";
import { COLORS } from "../../globalStyle";
import { DisplayRow ,DisplayCenterRow} from "../../layouts";
import {BoldTitle, Text,BoldTitleBluishBlack,TextLightGray,TextDarkPurple} from "../../typography"

interface ImageProps{
    urlImage:string | undefined;
}
export const CardContainer = styled(DisplayCenterRow)`

position:relative;
padding: 0px;
width: 988px;
height: 242px;
background: ${COLORS.white};
border: 1px solid ${COLORS.ghostwhite};
box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
border-radius: 20px;


`;

export const CardImage = styled.div<ImageProps>`
display: inline-block;
width: 244px;
height: 242px;
border-radius: 20px 0px 0px 20px;
border: 1px solid ${COLORS.paleblue};
background: url(${props => props.urlImage});
background-size: 100% 100%;
`;

export const DataContainer = styled.div`
display: inline-block;
flex-direction: column;
align-items: flex-end;
padding: 0px 16px;
width: 744px;
height: 226px;
flex: 1;
justify-content: space-between;
`;
export const DateDiv = styled(DisplayRow)`

justify-content: space-between;
align-items: flex-start;
padding: 0px;
gap: 10px; 
width: 711px;
height: 22px;
margin-bottom: 19.25px;

`;
export const DateText = styled(TextLightGray)`
width: 126px;
height: 22px;
align-items: center;
letter-spacing: 0.25px;
`;
export const Title = styled(BoldTitleBluishBlack)`
width: 470px;
height: 21px;
margin-up:19.25px;

flex: none;
order: 1;
flex-grow: 0;
margin-bottom: 19.25px;
`;
export const AuthorName = styled(TextLightGray)`
width: 67px;
height: 22px;
display: flex;
align-items: center;
letter-spacing: 0.25px;
`;
export const Description = styled(TextDarkPurple)`
width: 711px;
height: 32px;
line-height: 16px;
`;

export const BtnDiv = styled(DisplayCenterRow)`
justify-content: flex-end;
padding: 0px;
gap: 10px;
width: 711px;
height: 36px;
`;