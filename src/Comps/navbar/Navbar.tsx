import React from 'react'
import "./navbar.css"
import { ReactComponent as Logo } from '../../Assets/Dispatcher Logo.svg';


export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <Logo/>
      </div>
      <div className='search'>
        search comp here
      </div>
    </div>
  )
}
