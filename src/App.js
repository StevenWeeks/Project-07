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


export default class App extends Component {
  constructor (){
    super()
   this.state = {
    pictures: [],
    dogs: [],
    pigs: [],
    videogames: [],
    searchTerm: "",
    isLoading: true
   }
  }

  searchy = (searchTerm="Berries") => {
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
  defaultSearch = () => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responder => {
      this.setState({
        dogs: responder.photos.photo,
        searchTerm: "dogs",
        isLoading: false
      })
    })
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=pigs&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responder => {
      this.setState({
        pigs: responder.photos.photo,
        searchTerm: "pigs",
        isLoading: false
      })
    })
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=videogames&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responder => {
      this.setState({
        videogames: responder.photos.photo,
        searchTerm:"videogames",
        isLoading: false
      })
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
                <Header onSearch={this.searchy}/>

               </div>


        { this.state.loading ? <p>Loading, please wait...</p> :
          <Switch>
              <Route exact path="/" render={ () => <Redirect to='/search' />} />
              <Route exact path="/search/dogs" render={ () => <Gallery name={this.state.searchTerm} data={this.state.dogs} />} />
              <Route exact path="/search/pigs" render={ () => <Gallery  data={this.state.pigs}/>} />
              <Route exact path="/search/videogames" render={ () => <Gallery  data={this.state.videogames} />} />
              <Route  path="/search/" render={ () => <Gallery name={this.state.searchTerm} data={this.state.pictures} />} />
              <Route component={NoResults} />
          </Switch> }
        </div>
        </BrowserRouter>

    )
  }
}
