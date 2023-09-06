import React, { useState } from "react";

function SearchBar({ onTagSearch }) {
const [tags, setTags] = useState([]);

  //HANDLE CHANGE
    const handleTagsChange = (e) => {
    setTags(e.target.value);
  };

//HANDLE SEARCH

  const handleTagsSearch = () => {
    onTagSearch(tags);
  };



  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by title..."
        value={tags}
        onChange={handleTagsChange}
      />
      
      <button onClick={handleTagsSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
