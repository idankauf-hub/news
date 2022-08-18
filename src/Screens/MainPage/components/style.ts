import styled from "styled-components";

interface Props {
  width: string;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: row;
  width: ${(props) => props.width};
  @media (max-width: 1450px) {
    margin-left: 8.2vw;
  }
  margin-left: 9vw;
  height: 50px;
  background: #ffffff;
  border-radius: 10px;
`;
