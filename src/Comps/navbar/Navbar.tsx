import React, { ChangeEvent, useState, useEffect, useRef } from "react";
import { NavBarContainer, Logo } from "./style";
import { LogoIcon } from "../../Icons";
import Search from "../search/Search";
import useDebounce from "../../Hooks/useDebounce";
import { SearchMainPage } from "../../Screens/MainPage/components/SearchMainPage";

export const Navbar = () => {
  return (
    <NavBarContainer>
      <Logo>
        <LogoIcon />
      </Logo>
      <SearchMainPage />
    </NavBarContainer>
  );
};
//  drop down - pass all types of data (string[], {Icon, value}[])