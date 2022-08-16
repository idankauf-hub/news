import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Container, Row, Title, ClearButton, Search } from "./style";
import { DeleteIcon } from "../../../Icons/index";

type ISearch = {
  value: string;
  setInput: Dispatch<SetStateAction<string>>;
  setClear: any;
};
const RecentSearches: React.FC<ISearch> = ({ value, setInput, setClear }) => {
  const [lastSearches, setLastSearches] = useState<string[]>([]);

  const clearSearches = (event: { preventDefault: () => void }) => {
    try {
      setClear([]);
      localStorage.removeItem("lastSearches");
    } catch {}
  };
  const chooseSearch = (item: string) => {
    setInput(item);
  };
  const deleteSearch = (
    item: string,
    event: { preventDefault: () => void }
  ) => {
    event.preventDefault();
    var storage = JSON.parse(localStorage.getItem("lastSearches") || "[]");
    storage.splice(item, 1);
    localStorage.setItem("lastSearches", JSON.stringify(storage));
    setLastSearches(storage);
  };

  useEffect(() => {
    try {
      const item = JSON.parse(localStorage.getItem("lastSearches") || "idan");
      if (value) {
        setLastSearches([...(new Set([...item, value]) as any)]);
      } else {
        setLastSearches(item);
      }
    } catch {}
  }, [value]);

  return (
    <Container>
      <Row>
        <Title>RECENT SEARCHES</Title>
        <ClearButton onMouseDown={clearSearches}>CLEAR</ClearButton>
      </Row>
      {lastSearches &&
        lastSearches.map((item: string, i: number) => (
          <Row key={i}>
            <Search onMouseDown={() => chooseSearch(item)}>{item}</Search>
            <DeleteIcon
              transform="scale(0.5)"
              onMouseDown={(e) => deleteSearch(item, e)}
            />
          </Row>
        ))}
    </Container>
  );
};

export default RecentSearches;
