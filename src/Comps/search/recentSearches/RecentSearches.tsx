import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Container, Row, Title, ClearButton, Search } from "./style";
import {} from "../../../styles/layouts";
import {} from "../../../styles/typography";
import { DeleteIcon } from "../../../Icons";

type ISearch = {
  value: string[];
  setInput: Dispatch<SetStateAction<string>>;
};
const RecentSearches: React.FC<ISearch> = ({ value, setInput }) => {
  const [items, setItems] = useState<string[]>(value);

  const clearSearches = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    localStorage.setItem("lastSearches", JSON.stringify([]));
    setItems([]);
  };
  const chooseSearch = (item: string) => {
    setInput(item);
  };
  const deleteSearch = (
    item: string,
    event: { preventDefault: () => void }
  ) => {
    console.log(item);
    event.preventDefault();
  };
  useEffect(() => {
    if (items) {
      const item = localStorage.getItem("lastSearches");
      setItems(JSON.parse(item || ""));
    }
  }, [value]);

  return (
    <Container>
      <Row>
        <Title>RECENT SEARCHES</Title>
        <ClearButton onMouseDown={clearSearches}>CLEAR</ClearButton>
      </Row>
      {items?.map((item: string, i: number) => (
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
