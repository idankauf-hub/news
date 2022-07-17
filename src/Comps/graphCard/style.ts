import styled from "styled-components";
import { COLORS } from "../../globalStyle";

export const CardContainer = styled.div`
  position:relative;

  width: 412px;
  height: 355px;
  background: #ffffff;
  border: 1px solid #d9dbe9;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
`;

export const Title = styled.p`
  position: absolute;
  left: 5.46%;
  right: 74.68%;
  top: 6.04%;
  bottom: 83.94%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #14142b;
`;

export const UnderLine = styled.div`
  position: absolute;
  left: 5.07%;
  right: 89.08%;
  top: 20.52%;
  bottom: 82.48%;
  border-radius: 10px;
  background: #5a5a89;

  border: 4px solid #5a5a89;
`;

export const TitleContainer = styled.div`
display: flex;
flex-direction: row;
height:23%;
width:100%;
`;
export const GraphContainer= styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

`;