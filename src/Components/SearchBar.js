import React, { Component } from 'react'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

  export default class Search extends Component {


    state = {
      searchTerm:''
    }

    onSearchChange = e => {
      this.setState ({
        searchTerm: e.target.value
      })
    }

    handleSubmit = e => {
      e.preventDefault()

      let searcher = this.query.value
      this.props.onSearch(this.state.searchTerm)
      let looky = `/search/${searcher}`
      history.push(looky)
      e.currentTarget.reset()
    }

    render () {
      return (
        <form className="search-bar" onSubmit={this.handleSubmit}>
          <label className="is-hide" htmlFor="search">Image Search</label>
          <input
            type="search"
            onChange={this.onSearchChange}
            name="search"
            ref={(input) => this.query = input}
            placeholder="Search..."
            required />
          <button type="submit" id="submit" className="search-button" value="&#x1F50D;"> <strong className="material">Submit</strong> </button>
        </form>
      )
    }
  }
