import React from "react";
import { Container, Row, Title, ClearButton, Search } from "./style";
import {} from "../../../styles/layouts";
import {} from "../../../styles/typography";
import { DeleteIcon } from "../../../Icons";
const RecentSearches = () => {
  return (
    <Container>
      <Row>
        <Title>RECENT SEARCHES</Title> <ClearButton>CLEAR</ClearButton>
      </Row>
      <Row>
        <Search>dfdf</Search>
        <DeleteIcon transform="scale(0.5)" />
      </Row>

    </Container>
  );
};

export default RecentSearches;
