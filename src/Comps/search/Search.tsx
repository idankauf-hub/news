import React, { ChangeEvent, useState ,useEffect,useRef} from 'react';
import { SearchIcon } from "../../Icons";
import useDebounce from '../../Hooks/useDebounce'
import {
  SearchFormContainer,
  SearchButton,
  Input,
  VerticalLine,
} from "./style";

// import DropDown from '../dropdown/DropDown';
interface SearchProps{
  placeholder:string;
  debounceTime?:number;
  searchFunction: (e: string) => void
  //recentSearches:string[]; //last searches per user - local storage
}

const Search:React.FC<SearchProps> = ({placeholder,searchFunction,debounceTime}) => {
  const [input, setInput] = useState<string>("");
  const debouncedValue = useDebounce<string>(input, debounceTime)

  const handleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    searchFunction(input);
  };

  const handleChange=(event: ChangeEvent<HTMLInputElement>)=>{
    setInput(event.currentTarget.value)
  };

  useEffect(() => {
      searchFunction(debouncedValue);
  }, [debouncedValue])
  return (
    <SearchFormContainer onSubmit={handleSubmit}>
      <SearchButton>
        <SearchIcon />
      </SearchButton>
      <Input placeholder={placeholder} onChange={handleChange}></Input>
      <VerticalLine></VerticalLine>
      {/* <DropDown/> */}
    </SearchFormContainer>
  );
};

export default Search;
