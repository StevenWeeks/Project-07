import React, { Component } from 'react';
import './App.css'
import apiKey from './Config'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

// Components
import Header from './Components/Header'
import Gallery from "./Components/Gallery"
import NoResults from "./Components/NoResults"
import Search from "./Components/SearchBar"
import Error404 from "./Components/Error404"

// Set up the default state of the App class.
export default class App extends Component {
  constructor (){
    super()
   this.state = {
    pictures: [],
    dogs: [],
    pigs: [],
    videogames: [],
    searchTerm: "",
    isLoading: false
   }
  }


  defaultSearch = () => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responder => {
      this.setState({
        dogs: responder.photos.photo,
        isLoading: false
      })
    })
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=pigs&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responder => {
      this.setState({
        pigs: responder.photos.photo,
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
      console.log("There was an error", error)
    })
  }
  componentDidMount() {
  this.searchy()
  this.defaultSearch()
  }






    render() {
        return (
        <BrowserRouter>
          <div>
              <div className="main-Header">
                <Route path="/search" component={() => <Search onSearch={this.searchy}/>}/>
                <Route path="/" component= {Header} />

               </div>


        { this.state.isLoading ? <h1>Loading, please wait...</h1> :
          <Switch>
              <Route exact path="/" render={ () => <Gallery name="Berries" data={this.state.pictures} />} />
              <Route exact path="/dogs" render={ () => <Gallery name="Dogs" data={this.state.dogs} />} />
              <Route exact path="/pigs" render={ () => <Gallery name="Pigs" data={this.state.pigs}/>} />
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
