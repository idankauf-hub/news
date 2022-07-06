import React from 'react'
import {NavBarContainer,Logo} from './style'
import { ReactComponent as LogoIcon } from '../../Assets/Dispatcher Logo.svg';
// import Search from '../search/Search';

export interface NavbarProps {
  title: string;
  body: string;
  withFooter: boolean;
}

export const Navbar = ({ title, body, withFooter }: NavbarProps) => {
  return (
    <NavBarContainer>
      <Logo>
        <LogoIcon/>
      </Logo>
        {/* <Search/> */}
    </NavBarContainer>
  )
}
