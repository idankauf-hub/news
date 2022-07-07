import React from 'react'
import {NavBarContainer,Logo} from './style'
import { LogoIcon } from '../../Icons'
import Search from '../search/Search';



export const Navbar = () => {
  return (
    <NavBarContainer>
      <Logo>
        <LogoIcon/>
      </Logo>
        <Search/>
    </NavBarContainer>
  )
}
