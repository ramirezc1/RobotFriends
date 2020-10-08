import React from "react";

const SearchBox = ({ searchField, onSearchChange }) => {
  return (
    <div className="pa3">
      <input
        onChange={onSearchChange}
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        name="searchField"
      />
    </div>
  );
};

export default SearchBox;
