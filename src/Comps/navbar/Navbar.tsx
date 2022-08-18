import React, { useState } from "react";
import { NavBarContainer, Logo } from "./style";
import { LogoIcon } from "../../Icons";
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
