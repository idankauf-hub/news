import React from "react";
import { NotFounedIcon } from "../../Icons";
import { NotFoundContainer, NotFoundText } from "./style";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFounedIcon />
      <NotFoundText>We couldn’t find any matches for your query</NotFoundText>
    </NotFoundContainer>
  );
};

export default NotFound;
