import styled from "styled-components";
import { DisplayRow } from "../../styles/layouts";

export const DisplayRowWithGap = styled(DisplayRow)`
  "@media (max-width: 1450px)": {
    max-width: 1000vh;
    padding: 0px;
    background:red
  }
  margin-top: 20px;
  padding: 0px;
  gap: 20px;
  max-width: 70vh;
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
  `;
