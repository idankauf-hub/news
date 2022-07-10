import React, { ChangeEvent, useState ,useEffect} from 'react';
import { SearchIcon } from "../../Icons";
import {
  SearchFormContainer,
  SearchButton,
  Input,
  VerticalLine,
} from "./style";

// import DropDown from '../dropdown/DropDown';

function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

const Search = () => {
  const [input, setInput] = useState<string>("");
  const debouncedValue = useDebounce<string>(input, 500)

  const handleChange=(event: ChangeEvent<HTMLInputElement>)=>{
    setInput(event.currentTarget.value)
    console.log(input)
  };

  useEffect(() => {
   console.log(input)
  }, [debouncedValue])
  return (
    <SearchFormContainer>
      <SearchButton>
        <SearchIcon />
      </SearchButton>
      <Input onChange={handleChange}></Input>
      <VerticalLine></VerticalLine>
      {/* <DropDown/> */}
    </SearchFormContainer>
  );
};

export default Search;
