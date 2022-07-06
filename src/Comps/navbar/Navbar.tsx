import React from 'react'
import {NavBarContainer,Logo} from './style'
import { LogoIcon } from '../../Icons/index';
// import Search from '../search/Search';



export const Navbar = () => {
  return (
    <NavBarContainer>
      <Logo>
        <LogoIcon/>
      </Logo>
        {/* <Search/> */}
    </NavBarContainer>
  )
}
