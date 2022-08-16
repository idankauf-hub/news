import styled from "styled-components";

interface Props {
  width: string;
}

export const Container = styled.div<Props>`
display:flex;
flex-direction:row;
// width: 423px;
width:${(props) => props.width};
height: 50px;
left: 1px;
top: 0px;
background: #FFFFFF;
border-radius: 10px;
`;
