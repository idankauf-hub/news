import styled from "styled-components";
import  {COLORS}  from "../../globalStyle";

// export const FlexedRow = styled.div`
// dis flex
// flex-dir row
// `
// export const FlexedRowCenter = styled(FlexedRow)`
// align items cemter
// `

export const SearchFormContainer = styled.form`
  display: flex;
  width: 424px;
  left: 1px;
  height: 50px;
  position: relative;
`;

export const SearchButton = styled.button.attrs({ 
    type: 'submit',
})`
position:absolute;
height: 24px;
width:24.46px;
border: none;
background: none;
left: 16.75px;
top: 13px;
`;

export const Input = styled.input.attrs(({ placeholder}) => ({
  type:  "input",
  placeholder:placeholder
}))`
width: 100%;
border-radius: 10px;
padding: 9px 4px 9px 56px;
`;

export const VerticalLine = styled.div`
position:absolute;
border-left: 0.5px solid ${COLORS.lightgray};

opacity: 0.5;
width: 40px;
height: 30px;
left: 263px;
float: left;
margin-top: 10px;
`;

