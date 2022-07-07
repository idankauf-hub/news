import React from "react";
import { SearchIcon } from "../../Icons";
import {
  SearchFormContainer,
  SearchButton,
  Input,
  VerticalLine,
} from "./style";
// import DropDown from '../dropdown/DropDown';

const Search = () => {
  return (
    <SearchFormContainer>
      <SearchButton>
        <SearchIcon />
      </SearchButton>
      <Input></Input>
      <VerticalLine></VerticalLine>
      {/* <DropDown/> */}
    </SearchFormContainer>
  );
};

export default Search;
