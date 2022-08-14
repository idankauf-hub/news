import { useState, useEffect } from "react";
import Search from "../../../Comps/search/Search";
import useDebounce from "../../../Hooks/useDebounce";
import { SearchIcon } from "../../../Icons";
import type { RootState } from "../../../store/store";
import { VerticalLine } from "../../../Comps/search/style";
import DropDown from "../../../Comps/select/DropDown";
import { Container } from "./style";
import {
  updateEndPoint,
  updateQueryUrl,
  updateSearch,
} from "../../../store/query";
import { BASE_URL, API_KEY } from "../../../Services/Api";

import { useSelector, useDispatch } from "react-redux";
import { FormControl } from "@mui/material";

export const SearchMainPage = () => {
  const [input, setInput] = useState<string>("");
  const Query = useSelector((state: RootState) => state.query);

  const debouncedValue = useDebounce<string>(input, 500);
  const placeholders = ["Top Headlines", "Everything"];

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
    return Query.query.search.length === 0;
  };
  useEffect(() => {
    dispatch(updateSearch(input));
  }, [debouncedValue]);

  const buildApiQuery = () => {
    let queryUrl = "";
    if (Query.query.endpoint === "top-headlines") {
      if (isQueryEmpty()) {
        queryUrl = `${BASE_URL}${Query.query.endpoint}?country=${Query.query.filters.country}&category=${Query.query.filters.category}&sources=${Query.query.filters.sources}&pageSize=10&apiKey=${API_KEY}`;
      } else {
        queryUrl = `${BASE_URL}${Query.query.endpoint}?sources=${Query.query.filters.sources}&q=${Query.query.search}&category=${Query.query.filters.category}&pageSize=10&apiKey=${API_KEY}`;
      }
    } else {
      queryUrl = `${BASE_URL}${Query.query.endpoint}?q=${Query.query.search}&sortBy=${Query.query.sortby}&from=${Query.query.filters.date}&to=${Query.query.filters.date}&sources=${Query.query.filters.sources}&language=${Query.query.filters.language}&pageSize=10&apiKey=${API_KEY}`;
    }
    dispatch(updateQueryUrl(queryUrl));
  };
  useEffect(() => {
    buildApiQuery();
  }, [
    Query.query.filters,
    Query.query.sortby,
    Query.query.search,
    Query.query.endpoint,
  ]);

  return (
    <>
      <FormControl fullWidth>
        <Container>
          <Search
            input={input}
            searchFunction={handleChange}
            Icon={() => (
                <SearchIcon />
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
