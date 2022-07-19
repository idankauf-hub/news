import React, { ChangeEvent, useEffect, useState } from "react";
import {
  SearchFormContainer,
  SearchButton,
  Input,
  VerticalLine,
} from "./style";
import MenuItem from "@mui/material/MenuItem";

import DropDown from "../select/DropDown";

interface SearchProps {
  placeholder?: string;
  searchFunction: (e: string) => void;
  input: string;
  Icon?: () => JSX.Element;
  //recentSearches:string[]; //last searches per user - local storage
}

const data = ["Top Headlines", "Everything"];

const Search: React.FC<SearchProps> = ({
  Icon,
  placeholder = "Search",
  input,
  searchFunction,
}) => {

  const handleDropDown = (value: string) => {
    console.log(value);

  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    searchFunction(event.currentTarget.value);
  };

  return (
    <SearchFormContainer>
      <SearchButton>{Icon && <Icon />}</SearchButton>
      <Input
        placeholder={placeholder}
        onChange={handleChange}
        value={input}
      ></Input>
      <VerticalLine></VerticalLine>
      <DropDown
        data={data}
        getDropDownValue={handleDropDown}
      />
    </SearchFormContainer>
  );
};

export default Search;
