import { useState, useEffect } from "react";
import Search from "../../../Comps/search/Search";
import useDebounce from "../../../Hooks/useDebounce";
import { SearchIcon } from "../../../Icons";

export const SearchMainPage = () => {
  const [input, setInput] = useState<string>("");
  const debouncedValue = useDebounce<string>(input, 500);

  const handleChange = (value: string) => {
    setInput(value.toUpperCase());
  };

  useEffect(() => {
    //call api
    console.log(input); 
  }, [debouncedValue]);

  return (
    <Search
      input={input}
      searchFunction={handleChange}
      Icon={() => (
        <>
          <SearchIcon />
        </>
      )}
    />
  );
};
