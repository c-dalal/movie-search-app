import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
 

  const handleChange = (e) => {
    onSearch(e.target.value); // Call the parent's callback
  };

  return (
    <div className='search-box'>
        <h6>Search for movies here : </h6>
       <input 
       className='search'
       type="text" 
       placeholder="Search.."
             onChange={handleChange}
       ></input>
    </div>
  )
}

export default SearchBar
