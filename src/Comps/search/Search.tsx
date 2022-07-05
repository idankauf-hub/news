import React from 'react'
import './search.css'
import { ReactComponent as SearchIcon } from '../../Assets/search.svg';
import DropDown from '../dropdown/DropDown';

const Search = () => {
  return (
    <form className='input'>
        <button className='input_submit' type='submit'><SearchIcon/></button>
        <input type='input' className='input_box' placeholder='Search'></input>
        <div className="vl"></div>
        <DropDown/>
    </form>
    )
}

export default Search