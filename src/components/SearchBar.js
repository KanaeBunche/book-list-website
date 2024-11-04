// components/Search.js
import React from 'react';

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="search">
      {/* TODO: Create an input field for searching books by title */}
      <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={(e) => {
          // TODO: Call setSearchTerm with the input value
          setSearchTerm(e.target.value);
        }}
      />
      {/* TODO: Consider adding a button to clear the search */}
    </div>
  );
}

export default Search;

