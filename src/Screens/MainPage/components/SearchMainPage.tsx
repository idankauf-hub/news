import { useState, useEffect } from "react";
import Search from "../../../Comps/search/Search";
import useDebounce from "../../../Hooks/useDebounce";
import { SearchIcon } from "../../../Icons";
import DropDown from "../../../Comps/select/DropDown";

export const SearchMainPage = () => {
  const [input, setInput] = useState<string>("");
  const debouncedValue = useDebounce<string>(input, 500);

  const handleChange = (value: string) => {
    setInput(value);
  };

  useEffect(() => {
    //call api
    console.log(input); //do Http Query
  }, [debouncedValue]);

  return (
    <>
      <Search
        input={input}
        searchFunction={handleChange}
        Icon={() => (
          <>
            <SearchIcon />
          </>
        )}
      />
    </>
  );
};
