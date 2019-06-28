import React, { Component } from "react";
import "./SearchBar.css";
import ReactDOM from "react-dom";
import find from '../Map/components/find.png';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }
  onInputChange(term) {
    const name = this.props.searchBoxName || undefined;
    this.setState({ term });
    if (this.props.onSearchTermChange) {
      this.props.onSearchTermChange({ name, term });
    }
  }
  render() {
    const name = this.props.searchBoxName || undefined;
    return (
      <div className='searchbar'>
        <span className='searchbaricon'><img src={find} alt='search'/></span>            
        <input
          name={name}
          id="search"
          type="text"
          placeholder="Search"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          onKeyPress={this.props.onKeyPress || null}
        ></input>
      </div>
    );
  }
}

export default SearchBar;
