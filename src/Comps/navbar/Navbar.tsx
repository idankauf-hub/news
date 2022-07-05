import React from 'react'
import "./navbar.css"
import { ReactComponent as Logo } from '../../Assets/Dispatcher Logo.svg';
import Search from '../search/Search';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <Logo/>
      </div>
        <Search/>
    </div>
  )
}
