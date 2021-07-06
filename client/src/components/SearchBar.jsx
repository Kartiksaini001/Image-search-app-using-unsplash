import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import { connect } from "react-redux";
import { getImages } from "../actions/imageActions";
import { updateQuery } from "../actions/searchbarActions";

class SearchBar extends Component {
  state = {
    query: "random",
  };
  render() {
    const fetchImages = (e) => {
      e.preventDefault();
      this.props.updateQuery(this.state.query);
      this.props.getImages(this.state.query, this.props.per_page);
    };

    const handleChange = (e) => {
      this.setState({ query: e.target.value });
    };

    return (
      <>
        <form className="form-search d-flex justify-content-between">
          <input
            type="text"
            placeholder="Search for photos..."
            name="searchbar"
            className="search-input px-4"
            onChange={handleChange}
          />
          <button
            onClick={fetchImages}
            className="custom-btn search-btn d-flex align-items-center justify-content-center"
          >
            <FaSearch />
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  images: state.image.images,
  per_page: state.search.per_page,
  query: state.search.query,
});

export default connect(mapStateToProps, { getImages, updateQuery })(SearchBar);
