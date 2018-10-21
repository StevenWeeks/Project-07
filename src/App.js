import React, { Component } from 'react';
import './App.css'
import apiKey from './Config'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

// Components
import Header from './Components/Header'
import Gallery from "./Components/Gallery"

import Search from "./Components/SearchBar"
import Error404 from "./Components/Error404"

// Set up the default state of the App class.  This also exports the App class/ makes it part of Component.
export default class App extends Component {
  constructor (){
    super()
   this.state = {
    pictures: [],
    dogs: [],
    space: [],
    videogames: [],
    searchTerm: "",
    isLoading: true
   }
  }

// the three default searches of the flickr api, using fetch (as it sets a promise) and then commands to tell the data to get transformed to json, then using json info to set
// states of the empty containers. with this.setState and filling in the info for the appropriate items.
  defaultSearch = () => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responder => {
      this.setState({
        dogs: responder.photos.photo,
        isLoading: false
      })
    })
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=space&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responder => {
      this.setState({
        space: responder.photos.photo,
        isLoading: false
      })
    })
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=videogames&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responder => {
      this.setState({
        videogames: responder.photos.photo,
        isLoading: false
      })
    })
  }
  // This is the function used to search for new pictures, the default is set to berries.  Sets the searchTerm to be used in the fetch for each search
  // sets the states of the empty pictures object, the searched term and loadingstate.  If there's an error getting info from Flickr the  .catch will
  // tell the user as such.
  searchy = (searchTerm="berries") => {
    this.setState ({
        searchTerm: searchTerm,
        isLoading: true
      })


    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responder => {
        this.setState({
          pictures: responder.photos.photo,
          searchTerm: searchTerm,
          isLoading: false
        })
      })

    .catch(error => {
      console.log("There was an error fetching and parsing data from flickr.", error)
    })
  }

  //this function is then used when the components searchy and defaultSearch mount to the dom, enabling the use of them.
  componentDidMount() {
  this.searchy()
  this.defaultSearch()
  }





 // this renders the routing  used for the app.  the first route of /search makes it so the Search component only appears on a route that
 // starts with /search.  the / route makes the Header component appear on every page as they all start with a /
 // Wrapped the switch, which tells the app what to render when a route is switched, in a ternary operator  for when the isLoading state
 // is true, which just shows a loading message.  The routes tell the app the gallery name, and what data it should load in the Gallery
 // the last route is if any unknown route is attempted, the user will get a 404 message.
    render() {
        return (
        <BrowserRouter>
          <div>
              <div className="main-Header">
                <Route path="/search" component={() => <Search onSearch={this.searchy}/>}/>
                <Route path="/" component= {Header} />

               </div>


        { this.state.isLoading ?  <h1>Loading, please wait...</h1>:
          <Switch>
              <Route exact path="/" render={ () => <Gallery name="Berries" data={this.state.pictures} />} />
              <Route exact path="/dogs" render={ () => <Gallery name="Dogs" data={this.state.dogs} />} />
              <Route exact path="/space" render={ () => <Gallery name="Space" data={this.state.space}/>} />
              <Route exact path="/videogames" render={ () => <Gallery  name="Videogames" data={this.state.videogames} />} />
              <Route path="/search" render={ () => <Gallery name={this.state.searchTerm} data={this.state.pictures} />} />
              <Route component= {Error404} />
          </Switch>
        }
        </div>
        </BrowserRouter>

    )
  }
}
