import React, { ChangeEvent, useState ,useEffect,useRef} from 'react';
import {NavBarContainer,Logo} from './style'
import { LogoIcon } from '../../Icons'
import Search from '../search/Search';



export const Navbar = () => {

  const searchApi=(query:string)=>{
    console.log(query) //do Http Query
  };

  return (
    <NavBarContainer>
      <Logo>
        <LogoIcon/>
      </Logo>
        <Search placeholder='Search' searchFunction={searchApi} debounceTime={1000}/>
    </NavBarContainer>
  )
}
