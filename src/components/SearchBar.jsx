import React, { useState } from "react";

function SearchBar({ onTagSearch, handleKeyDown }) {
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
    
<div className="search-bar d-flex justify-content-center align-items-center mt-5">
  <input
    style={{ width: '300px', height: '50px', fontSize: '16px' }}
    className="w-50 h-30"
    type="text"
    placeholder="Search by title..."
    value={tags}
    onChange={handleTagsChange}
    onKeyDown={(e) => handleKeyDown(e)}
  />

  <button
    className="btn btn-md btn-dark rounded border border-warning p-2"
    style={{ width: '300px', height: '50px', fontFamily: 'Share', fontSize: '16px' }}
    onClick={handleTagsSearch}
  >
    Search
  </button>
</div>

  );
}

export default SearchBar;
