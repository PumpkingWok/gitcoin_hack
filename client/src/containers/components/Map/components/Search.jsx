import React, { Component } from 'react';
import './Search.css';
import find from './find.png';
class Search extends Component {
 
  render() {
    return (
        <div className='search'>
            <span className='searchicon'><img src={find} alt='search'/></span>            
            <input placeholder='Search for recycling campaigns or drop-offs...'></input>
        </div>
    );
  }
}

export default Search;
