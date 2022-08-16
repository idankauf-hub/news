import { useState, useEffect, useRef, RefObject } from "react";
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
import RecentSearches from "../../../Comps/search/recentSearches/RecentSearches";
import { setSelectedInput } from "../../../store/selectedInput";

export const SearchMainPage = () => {
  const [input, setInput] = useState<string>("");
  const [inputRecent, setInputToRecent] = useState<string>("");
  const [widthInput, setWidthInput] = useState<string>("423px");

  const [searches, setSearches] = useState<string[]>([]);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isLastSearchesExists, setIsLastSearchesExists] =
    useState<boolean>(false);

  const inputRef = useRef<any>(null);
  const searchContainerRef = useRef<any>(null);
  const dropDownRef = useRef<any>(null);
  const optionsRef = useRef<any>(null);

  const Query = useSelector((state: RootState) => state.query);

  const debouncedValue = useDebounce<string>(input, 500);
  const placeholders = ["Top Headlines", "Everything"];
  const dispatch = useDispatch();

  const addItemToLocalStorage = (input: string) => {
    if (input) {
      var storage = JSON.parse(localStorage.getItem("lastSearches") || "[]");
      if (storage.indexOf(input) == -1) {
        storage.push(input);
        localStorage.setItem("lastSearches", JSON.stringify(storage));
      }
    }
  };

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

  const handleInputFocus = () => {
    if (document.activeElement === inputRef.current) {
      setIsFocus(true);
      // setWidthInput("663px");
      // dispatch(setSelectedInput(true))
    } else {
      setIsFocus(false);
      // dispatch(setSelectedInput(false))
      // setWidthInput("423px");
    }
  };
  // useOutsideAlerter(inputRef, dropDownRef, optionsRef);
  function useOutsideAlerter(ref: any, dropDownRef: any, optionsRef: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        console.log(dropDownRef.current);
        console.log(ref.current);
        console.log("option", optionsRef.current);
        if (dropDownRef.current)
          if (ref.current && !ref.current.contains(event.target)) {
            if (
              dropDownRef.current &&
              !dropDownRef.current.contains(event.target)
            )
              if (
                optionsRef.current &&
                !optionsRef.current.contains(event.target)
              )
                setWidthInput("623px");
              else {
                setWidthInput("423px");
              }
          } else {
            setWidthInput("623px");
          }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, dropDownRef, optionsRef]);
  }

  useEffect(() => {
    if (localStorage.getItem("lastSearches") === null) {
      setIsLastSearchesExists(false);
    } else {
      setIsLastSearchesExists(true);
    }
  }, [isFocus]);

  useEffect(() => {
    addItemToLocalStorage(input);
    setInputToRecent(input);
    dispatch(updateSearch(input));
  }, [debouncedValue]);

  const buildApiQuery = () => {
    let queryUrl = "";
    if (Query.query.endpoint === "top-headlines") {
      if (isQueryEmpty()) {
        queryUrl = `${BASE_URL}${Query.query.endpoint}?country=${Query.query.filters.country}&category=${Query.query.filters.category}&sources=${Query.query.filters.sources}&pageSize=10&apiKey=${API_KEY}`;
      } else {
        queryUrl = `${BASE_URL}${Query.query.endpoint}?sources=${Query.query.filters.sources}&country=${Query.query.filters.country}&q=${Query.query.search}&category=${Query.query.filters.category}&pageSize=10&apiKey=${API_KEY}`;
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
        <Container width={widthInput} ref={searchContainerRef}>
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
            forwardedRef={dropDownRef}
            forwardedRefOptions={optionsRef}
            data={placeholders}
            onSelect={handleEndpointDropDown}
            placeholder={placeholders[0]}
          />
        </Container>
        {isFocus && isLastSearchesExists && (
          <RecentSearches
            value={inputRecent}
            setInput={setInput}
            setClear={setSearches}
          />
        )}
      </FormControl>
    </>
  );
};
