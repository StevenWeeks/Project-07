import React from 'react'
import Pic from "./Gallery-item"
import NoResult from "./NoResults"

const Gallery = props => {

  const results = props.data
  const name = props.name
  let pics;
  console.log(results)
  if (results.length > 0){
    pics = results.map(pic =>
      <Pic url={`http://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} key={pic.id} title={pic.title} />)
      return (
        <div className="pic-holder">
          <h2>{name} Pics</h2>
          <ul  className="pic-list">
            {pics}
          </ul>
        </div>
  )
} else {   return (
   <NoResult /> )}



}

export default Gallery
