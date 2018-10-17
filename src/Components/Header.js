import React from 'react'
import Nav from './Nav';
import Search from './SearchBar'



const Header = (props) => {
    return (
      <div>
        <Search onSearch={props.onSearch} />
        <Nav />
      </div>

    );
}

export default Header;
