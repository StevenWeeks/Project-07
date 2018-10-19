import React from 'react'
import Pic from "./Gallery-item"
import NoResult from "./NoResults"
// this gallery component brings in info from the Pic component, using the props from it to set up the url of each picture in the Gallery
// set up a key and title incase it was wanted for other things later on, then each picture would have a unique ID and you could label
// each pic with it's title from the json data if wanted.
const Gallery = props => {

  const results = props.data
  const name = props.name
  let pics;

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
