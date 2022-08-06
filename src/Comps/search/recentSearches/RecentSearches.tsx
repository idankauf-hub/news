import React, { useEffect, useState } from "react";
import { Container, Row, Title, ClearButton, Search } from "./style";
import {} from "../../../styles/layouts";
import {} from "../../../styles/typography";
import { DeleteIcon } from "../../../Icons";

type ISearch = {
  value: string[];
};
const RecentSearches: React.FC<ISearch> = ({ value }) => {
  const [items, setItems] = useState<string[]>(value);
  const deleteSearches=()=>{
    setItems([])
  }
  useEffect(() => {
    if (items) {
      const item = localStorage.getItem("lastSearches");
      setItems(JSON.parse(item ||""));
    }
  }, [value]);

  return (
    <Container>
      <Row>
        <Title>RECENT SEARCHES</Title>
        <ClearButton onClick={deleteSearches}>CLEAR</ClearButton>
      </Row>
      {items?.map((item: string) => (
        <Row>
          <Search>{item}</Search>
          <DeleteIcon transform="scale(0.5)" />
        </Row>
      ))}
    </Container>
  );
};

export default RecentSearches;
