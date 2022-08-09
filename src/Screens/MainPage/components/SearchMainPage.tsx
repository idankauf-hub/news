import { useState, useEffect, useRef, RefObject } from "react";
import Search from "../../../Comps/search/Search";
import useDebounce from "../../../Hooks/useDebounce";
import { SearchIcon } from "../../../Icons";
import type { RootState } from "../../../store/store";

import { useSelector, useDispatch } from "react-redux";
import { updateSearch } from "../../../store/query";
import { FormControl } from "@mui/material";
import { VerticalLine } from "../../../Comps/search/style";
import DropDown from "../../../Comps/select/DropDown";
import { Container } from "./style";
import RecentSearches from "../../../Comps/search/recentSearches/RecentSearches";

export const SearchMainPage = () => {
  const [input, setInput] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const inputRef = useRef<any>(null);

  const debouncedValue = useDebounce<string>(input, 500);
  const placeholders = ["Top Headlines", "Everything"];

  const addItem = () => {
    if (input) setItems([...items, input]);
  };
  const Query = useSelector((state: RootState) => state.query);
  const dispatch = useDispatch();

  const handleChange = (value: string) => {
    setInput(value);
    dispatch(updateSearch({ input: value }));
  };

  const handleDropDown = (value: string) => {
    console.log(value);
  };

  const handleInputFocus = () => {
    if (document.activeElement === inputRef.current) {
      setIsFocus(true);
    } else {
      setIsFocus(false);
    }
  };

  useEffect(() => {
    addItem();
    //call api
    // addToRecentSearches([],input)
    //change input in store redux
  }, [debouncedValue]);

  useEffect(() => {
    localStorage.setItem("lastSearches", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    //call api
  }, [Query]);

  return (
    <>
      <FormControl fullWidth>
        <Container>
          <Search
            onFocus={handleInputFocus}
            onBlur={handleInputFocus}
            input={input}
            searchFunction={handleChange}
            forwardedRef={inputRef}
            Icon={() => (
              <>
                <SearchIcon />
              </>
            )}
          />
          <VerticalLine />
          <DropDown
            data={placeholders}
            onSelect={handleDropDown}
            placeholder={placeholders[0]}
          />
        </Container>
        {document.activeElement === inputRef.current && (
          <RecentSearches value={items} setInput={setInput} />
        )}
      </FormControl>
    </>
  );
};
