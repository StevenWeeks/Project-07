import React from 'react'
import Pic from "./Gallery-item"
import NoResult from "./NoResults"

const Gallery = props => {

  const results = props.data
  let pics;
  console.log(results)
  if (results.length > 0){
  pics = results.map(pic =>
  <Pic url={`http://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} key={pic.id} title={pic.title} />)
  return (
    <div className="pic-holder">
    <ul className="pic-list">
      <h3> {pics.title} </h3>
           {pics}
    </ul>
  </div>
  )
} else {   return (
   <NoResult /> )}



}

export default Gallery
