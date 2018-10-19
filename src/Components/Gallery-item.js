
import React from 'react'
// the basic setup of each image before it gets put into the gallery.  gives each a  div, li and img.  The exports it for use in other pages.
const Pic = props => {
  return (
    <div className= 'pic-wrapper'>
  <li className='pic-wrap'>

    <img src={props.url} alt=""  />

  </li>
</div>
 )
}


export default Pic
