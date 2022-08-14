import React from "react";
import { TitleText } from "./style";

interface TitleProps {
  city: string;
}
const Title: React.FC<TitleProps> = ({ city }) => {
  {
    city.length === 0 ? (
      <TitleText>Top Headlines {city}</TitleText>
    ) : (
      <TitleText>Top Headlines {city}</TitleText>
    );
  }
  return (
    <TitleText>Top Headlines {city.length !== 0 ? "in " + city : ""}</TitleText>
  );
};

export default Title;
