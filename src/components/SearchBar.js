import React from "react";

const SearchBar = ({setSearch}) => {
  return(
      <div>
          <input
          type='text'
          placeholder="search coin... "
          onChange={e => setSearch(e.target.value)} /> 
      </div>
  )
};

export default SearchBar;
