 import React from 'react'
import { NavLink } from 'react-router-dom'
// this is the navlinks you see on the page, tells the browser what route to go to.

const Nav = () => {
  return (
<div>
  <nav className="nav-Main">
    <ul>
      <li><NavLink to={"/dogs"} style={{ textDecoration: 'none' }}>Dogs</NavLink></li>
      <li><NavLink to={"/space"} style={{ textDecoration: 'none' }}>Space</NavLink></li>
      <li><NavLink to={"/videogames"} style={{ textDecoration: 'none' }}>Videogames</NavLink></li>
      <li><NavLink exact to={"/search"} style={{ textDecoration: 'none' }}>Search</NavLink></li>
    </ul>
  </nav>
</div>
)
}


export default Nav;
