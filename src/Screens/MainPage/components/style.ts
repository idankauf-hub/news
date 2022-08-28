import styled from "styled-components";

interface Props {
  width: string;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: row;
  width: ${(props) => props.width};
  @media (max-width: 600px) {
    display: none;
  }
  @media (max-width: 1450px) {
    margin-left: 4vw;
  }
  @media (max-width: 600px) {
    width: 70vw;
  }
  margin-left: 9vw;
  height: 50px;
  background: #ffffff;
  border-radius: 10px;
`;
