import React, { ChangeEvent, useEffect, useState } from "react";
import {
  SearchFormContainer,
  SearchButton,
  Input,
} from "./style";


interface SearchProps {
  placeholder?: string;
  searchFunction: (e: string) => void;
  input: string;
  Icon?: () => JSX.Element;
  //recentSearches:string[]; //last searches per user - local storage
}



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
    </SearchFormContainer>
  );
};

export default Search;
