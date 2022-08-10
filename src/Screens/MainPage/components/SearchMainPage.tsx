import { useState, useEffect } from "react";
import Search from "../../../Comps/search/Search";
import useDebounce from "../../../Hooks/useDebounce";
import { SearchIcon } from "../../../Icons";
import type { RootState } from "../../../store/store";
import { VerticalLine } from "../../../Comps/search/style";
import DropDown from "../../../Comps/select/DropDown";
import { Container } from "./style";
import { updateEndPoint, updateSearch } from "../../../store/query";
import { BASE_URL, API_KEY } from "../../../Services/Api";

import { useSelector, useDispatch } from "react-redux";
import { FormControl } from "@mui/material";

export const SearchMainPage = () => {
  const [input, setInput] = useState<string>("");
  const [queryUrl, setQueryUrl] = useState<string>("");

  const debouncedValue = useDebounce<string>(input, 500);
  const placeholders = ["Top Headlines", "Everything"];

  const Query = useSelector((state: RootState) => state.query);
  const dispatch = useDispatch();

  const handleChange = (value: string) => {
    setInput(value);
  };
  const handleEndpointDropDown = (value: string) => {
    if (value === "Everything") dispatch(updateEndPoint("everything"));
    else {
      dispatch(updateEndPoint("top-headlines"));
    }
  };
  const isQueryEmpty = () => {
    let isEmpty;
    Query.query.filters.sources.length === 0
      ? (isEmpty = true)
      : (isEmpty = false);
    return isEmpty;
  };
  useEffect(() => {
    dispatch(updateSearch(input));
  }, [debouncedValue]);

  const buildApiQuery = () => {
    if (Query.query.endpoint === "top-headlines") {
      if (isQueryEmpty()) {
        setQueryUrl(
          `${BASE_URL}${Query.query.endpoint}?country=${Query.query.filters.country}&catagory=${Query.query.filters.catagory}&apiKey=${API_KEY}`
        );
      } else {
        setQueryUrl(
          `${BASE_URL}${Query.query.endpoint}?sources=${Query.query.filters.sources}&catagory=${Query.query.filters.catagory}&apiKey=${API_KEY}`
        );
      }
    } else {
      setQueryUrl(
        `${BASE_URL}${Query.query.endpoint}?q=${Query.query.search}&sortBy=${Query.query.sortby}&from=${Query.query.filters.date}&to=${Query.query.filters.date}&sources=${Query.query.filters.sources}&language=${Query.query.filters.language}&apiKey=${API_KEY}`
      );
    }
  };
  useEffect(() => {
    buildApiQuery();
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
