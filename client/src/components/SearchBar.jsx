import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmit} className="form-search d-flex justify-content-between">
        <input
          type="text"
          placeholder="Search for photos..."
          name="searchbar"
          className="search-input px-4"
        />
        <button className="search-btn d-flex align-items-center justify-content-center">
          <FaSearch />
        </button>
      </form>
    </>
  );
}
