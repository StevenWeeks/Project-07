// import react and react component (including classes that extend it, such as App.js)
import React, { Component } from 'react'
import createHistory from 'history/createBrowserHistory'

//use history to change the route in the browser
const history = createHistory()
// export Search/ extend components to include this
  export default class Search extends Component {

//setting the state of searchterm to undefined
    state = {
      searchTerm:''
    }
    // when the text in the search input changes, this sets the searchTerm as the value in the input
    onSearchChange = e => {
      this.setState ({
        searchTerm: e.target.value
      })
    }
// this function handles what happens after the search button is pressed, preventing the page from refreshing,
// props is called from component and uses the onSearch function on the input of the search bar.
// then pushes the route of /search and the input/query value.  Then resets the search bar text.
    handleSubmit = e => {
      e.preventDefault()

      let searcher = this.query.value
      this.props.onSearch(this.state.searchTerm)
      let looky = `/search/${searcher}`
      history.push(looky)
      e.currentTarget.reset()
    }
// this renders the search bar and search button.  using a SVG to get the magnifying glass art on the button, so folks
// know to click it.
    render () {
      return (
        <form className="search-bar" onSubmit={this.handleSubmit}>
        <div className="search-bar-div">
          <input
            type="search"
            onChange={this.onSearchChange}
            name="search"
            ref={(input) => this.query = input}
            placeholder="Search..."
           required />
          <button type="submit" id="submit" className="search-button">
            <div><span> <svg fill="#fff" height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>

          </svg> </span> </div> </button>
        </div>
        </form>
      )
    }
  }
