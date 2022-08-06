import { useState, useEffect } from "react";
import Search from "../../../Comps/search/Search";
import useDebounce from "../../../Hooks/useDebounce";
import { SearchIcon } from "../../../Icons";
import DropDown from "../../../Comps/select/DropDown";
import RecentSearches from "../../../Comps/search/recentSearches/RecentSearches"
import FormControl from "@mui/material/FormControl";
import { VerticalLine } from "../../../Comps/search/style";
import { Container } from "./style";



export const SearchMainPage = () => {
  const [input, setInput] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);


  const debouncedValue = useDebounce<string>(input, 500);
  const placeholders = ["Top Headlines", "Everything"]
  const lastSearches = [];

  const addItem=()=>{
    if(!input){
    }
    else{
      setItems([...items,input])
      console.log(items)
    }
  }

  const handleChange = (value: string) => {
    setInput(value);
  };
  const handleDropDown = (value: string) => {
    console.log(value);
  };


  useEffect(() => {
    addItem()

    //call api 
    // addToRecentSearches([],input)
  }, [debouncedValue]);

  useEffect(() => {
    localStorage.setItem('lastSearches',JSON.stringify(items))
  }, [items]);

  return (
    <>
    <FormControl fullWidth>
    <Container>
      <Search
        input={input}
        searchFunction={handleChange}
        Icon={() => (
          <>
            <SearchIcon />
          </>
        )}
      />
       <VerticalLine/>
      <DropDown
        data={placeholders}
        onSelect={handleDropDown}
        placeholder={placeholders[0]}
      />
      </Container>
      <RecentSearches value={items}/>
       </FormControl>
    </>
  );
};
