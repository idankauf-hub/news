import styled from "styled-components";
import { DisplayRow } from "../../styles/layouts";

export const DisplayRowWithGap = styled(DisplayRow)`
  @media (max-width: 1500px) {
    margin-top: 20px;
    padding: 0px;
    gap: 20px;
    max-width: 62vw;
    height: 5.5vh;
  }
  @media (min-width: 1551px) {
    margin-top: 20px;
    padding: 0px;
    gap: 20px;
    max-width: 94vh;
    height: 5.5vh;
  }
  margin-top: 20px;
  padding: 0px;
  gap: 20px;
  max-width: 78vh;
  height: 5.5vh;
`;

export const Input = styled.input`
border: "none",
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
color: #5A5A89;
@media (max-width: 1440px) {
  width: 6.5vw;
  font-size: 12.5px;

}
@media (min-width: 1441px) {
  width: 5vw;
  font-size: 12.5px;

}
  `;
