import styled from "styled-components";
import { COLORS } from "../../../styles/colors";
export const Container = styled.div`
  position: absolute;
  overflow: hidden;
  margin-top: 5.5vh;
  width: 22vw;

  @media (max-width: 1440px) {
    margin-top: 7.5vh;
    margin-left: 8vw;
    width: 29.8vw;
  }
  @media (min-width: 1441px) {
    margin-top: 5.7vh;
    margin-left: 9vw;

    width: 22.1vw;
  }
  max-height: 132px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  z-index: 1;
  overflow-y: auto;
  padding: 10px 15px 10px 2.52%;
`;


export const LastSearchesTitle = styled.div`
  @media (max-width: 1440px) {
    margin-bottom: 1.7vh;
  }
  @media (min-width: 1441px) {
    margin-bottom: 1.7vh;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;
export const Title = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: ${COLORS.darkpurple};
`;
export const Search = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.1px;
  color: ${COLORS.darkpurple};
  width: 100%;
`;

export const ClearButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 22px;
  color: ${COLORS.darkpurple};
`;
