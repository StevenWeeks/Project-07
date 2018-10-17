 import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
  return (
<div>
  <nav className="nav-Main">
    <ul>
      <li><button><NavLink to={"/search/dogs"} style={{ textDecoration: 'none' }}>Dogs</NavLink></button></li>
      <li><button><NavLink to={"/search/pigs"} style={{ textDecoration: 'none' }}>Pigs</NavLink></button></li>
      <li><button><NavLink to={"/search/videogames"} style={{ textDecoration: 'none' }}>Videogames</NavLink></button></li>
    </ul>
  </nav>
</div>
)
}


export default Nav;
