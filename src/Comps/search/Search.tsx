import React, { ChangeEvent, FocusEventHandler, useEffect, useState } from "react";
import { SearchFormContainer, SearchButton, Input } from "./style";

interface SearchProps {
  placeholder?: string;
  searchFunction: (e: string) => void;
  input: string;
  Icon?: () => JSX.Element;
  onBlur?:FocusEventHandler<HTMLInputElement>;
  onFocus?:FocusEventHandler<HTMLInputElement>;
  //recentSearches:string[]; //last searches per user - local storage
}

const Search: React.FC<SearchProps> = ({
  Icon,
  placeholder = "Search",
  input,
  searchFunction,
  onFocus,
  onBlur
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    searchFunction(event.currentTarget.value);
  };

  return (
    <SearchFormContainer>
      <SearchButton>{Icon && <Icon />}</SearchButton>
      <Input
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        onChange={handleChange}
        value={input}
      ></Input>
    </SearchFormContainer>
  );
};

export default Search;
