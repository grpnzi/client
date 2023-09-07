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

    <div className="container mt-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 mb-2">
          <input
            style={{ height: '50px', fontSize: '16px' }}
            className="form-control"
            type="text"
            placeholder="Search by title..."
            value={tags}
            onChange={handleTagsChange}
            onKeyDown={(e) => handleKeyDown(e)}
          />
        </div>
        <div className="col-md-2 d-flex justify-content-center align-items-center">
          <button
            className="text-center btn btn-sm btn-dark rounded border border-warning"
            style={{ width: '160px', maxHeight: '45px', fontFamily: 'Share', fontSize: '16px' }}
            onClick={handleTagsSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>

  );
}

export default SearchBar;
