import React, { ChangeEvent, useState } from "react";
import {
  SearchFormContainer,
  SearchButton,
  Input,
  VerticalLine,
} from "./style";
import MenuItem from "@mui/material/MenuItem";

import DropDown from "../select/DropDown";

interface SearchProps {
  placeholder?: string;
  searchFunction: (e: string) => void;
  input: string;
  Icon?: () => JSX.Element;
  //recentSearches:string[]; //last searches per user - local storage
}

interface Item {
  Icon?: string; // jsx element
  title: string;
}

const data: Item[] = [
  { Icon: "f", title: "Everything" },
  { title: "Top Headline" },
];

const ListElement = ({ item }: { item: Item }) => {
  const { Icon, title } = item;
  return <MenuItem value={title}>{title}</MenuItem>;
};



const Search: React.FC<SearchProps> = ({
  Icon,
  placeholder = "Search",
  input,
  searchFunction,
}) => {
  const [label, setLabel] = useState<string>();

  const handleDropDown = (value: Item) => {
    setLabel(value.title);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    searchFunction(event.currentTarget.value);
  };

  return (
    <SearchFormContainer>
      <SearchButton>{Icon && <Icon />}</SearchButton>
      <Input
        placeholder={placeholder}
        onChange={handleChange}
        value={input}
      ></Input>
      <VerticalLine></VerticalLine>
      <DropDown
        data={data}
        ListElement={ListElement}
        getDropDownValue={handleDropDown}
      />
    </SearchFormContainer>
  );
};

export default Search;
