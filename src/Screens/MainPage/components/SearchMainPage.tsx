import { useState, useEffect } from "react";
import Search from "../../../Comps/search/Search";
import useDebounce from "../../../Hooks/useDebounce";
import { SearchIcon } from "../../../Icons";
import type { RootState } from "../../../store/store";

import { useSelector, useDispatch } from "react-redux";
import { updateEndPoint, updateSearch } from "../../../store/query";
import { FormControl } from "@mui/material";
import { VerticalLine } from "../../../Comps/search/style";
import DropDown from "../../../Comps/select/DropDown";
import { Container } from "./style";
import { Row } from "./MainPageStyle";

export const SearchMainPage = () => {
  const [input, setInput] = useState<string>("");
  const debouncedValue = useDebounce<string>(input, 500);
  const placeholders = ["Top Headlines", "Everything"];

  const Query = useSelector((state: RootState) => state.query);
  const dispatch = useDispatch();

  const handleChange = (value: string) => {
    setInput(value);
    dispatch(updateSearch(value));
  };
  const handleEndpointDropDown = (value: string) => {
    if (value === "Everything") dispatch(updateEndPoint("everything"));
    else {
      dispatch(updateEndPoint("top-headlines"));
    }
  };

  useEffect(() => {
    //change input in store redux
  }, [debouncedValue]);

  useEffect(() => {
    //call api
    //build query url 
    //state url 
    // call api with the query url ^
  }, [Query]);

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
          <VerticalLine />
          <DropDown
            data={placeholders}
            onSelect={handleEndpointDropDown}
            placeholder={placeholders[0]}
          />
        </Container>
      </FormControl>
    </>
  );
};
