import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const SearchFormContainer = styled.form`
  display: flex;
  width: 75%;
  // left: 1px;
  height: 50px;
  position: relative;
`;

export const SearchButton = styled.button.attrs({
  type: "submit",
})`
  position: absolute;
  height: 24px;
  width: 24.46px;
  border: none;
  background: none;
  left: 16.75px;
  top: 13px;
`;

export const Input = styled.input.attrs(({ placeholder }) => ({
  type: "input",
  placeholder: placeholder,
}))`
  border-radius: 10px;
  padding: 9px 4px 9px 56px;
  border: 0;
  outline: 0;
`;

export const VerticalLine = styled.div`
  border: 0.5px solid ${COLORS.lightgray};
  position: relative;
  top: 50%;
  width: 30px;
  height: 0px;
  opacity: 0.5;
  transform: rotate(90deg);
`;
