import React from "react";
import { connect } from "react-redux";
import { loadMore } from "../actions/imageActions";
import { incrementPage } from "../actions/searchbarActions";

const DisplayImages = (props) => {
  console.log(props);
  const capitalize = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  };

  const loadMore = (e) => {
    e.preventDefault();
    props.incrementPage();
    props.loadMore(props.page_num, props.query, props.per_page);
  };

  return (
    <>
      <div className="result-head">
        <p className="search-query">{capitalize(props.query)}</p>
        <p className="result-num">{`${props.total_results} Images has been found`}</p>
      </div>
      <div className="container img-container">
        <div className="row">
          {props.images.map((item) => {
            return (
              <div className="col" key={item.id}>
                <img src={item.urls.regular} alt={item.alt_description} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <button onClick={loadMore} className="custom-btn load-more-btn">
          Load More
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  images: state.image.images,
  total_results: state.image.total_results,
  query: state.search.query,
  page_num: state.search.page_num,
  per_page: state.search.per_page,
});

export default connect(mapStateToProps, { loadMore, incrementPage })(
  DisplayImages
);
