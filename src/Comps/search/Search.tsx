import React, { ChangeEvent} from "react";
import {
  SearchFormContainer,
  SearchButton,
  Input,
  VerticalLine,
} from "./style";

import DropDown from '../select/DropDown';

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
      <DropDown data={[{value:"hey",Icon:() => (<p>dsf</p>)},{value:"hey",Icon:() => (<p>dsf</p>)},{value:"hey",Icon:() => (<p>dsf</p>)}]} 
  
      
      />
    </SearchFormContainer>
  );
};

export default Search;
