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
  recentSearches:string[]; //last searches per user - local storage


}

const Search = () => {
  const [input, setInput] = useState<string | undefined>("");
  const debouncedValue = useDebounce<string | undefined>(input, 500)
  const textInput = useRef<HTMLInputElement>(null);

  const handleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    setInput(textInput?.current?.value)
    console.log(input)
  };
  const handleChange=(event: ChangeEvent<HTMLInputElement>)=>{
    setInput(event.currentTarget.value)
    console.log(input)
  };
  useEffect(() => {
   console.log(input)
  }, [debouncedValue])
  return (
    <SearchFormContainer onSubmit={handleSubmit}>
      <SearchButton>
        <SearchIcon />
      </SearchButton>
      <Input onChange={handleChange} ref={textInput}></Input>
      <VerticalLine></VerticalLine>
      {/* <DropDown/> */}
    </SearchFormContainer>
  );
};

export default Search;
