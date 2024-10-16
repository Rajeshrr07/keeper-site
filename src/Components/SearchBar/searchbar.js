import React from 'react';
import './searchbar.css'

function SearchBar({ setSearchQuery }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search notes..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
