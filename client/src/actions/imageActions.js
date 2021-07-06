import axios from "axios";
import {
  GET_IMAGES,
  LOAD_MORE,
  IMAGES_LOADING,
  IMAGES_LOADING_MORE,
} from "./types";

const { REACT_APP_UNSPLASH_ID } = process.env;

export const getImages = (query, per_page) => (dispatch) => {
  dispatch(setImagesLoading());
  axios
    .get(
      `https://api.unsplash.com/search/photos/?page=1&per_page=${per_page}&query=${query}&client_id=${REACT_APP_UNSPLASH_ID}`
    )
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: GET_IMAGES,
        payload: res.data,
      });
    })
    .catch((err) =>
      console.log(
        "Error happened during fetching!",
        err.response.data,
        err.response.status
      )
    );
};

export const loadMore = (page_num, query, per_page) => (dispatch) => {
  dispatch(setImagesLoadingMore());
  axios
    .get(
      `https://api.unsplash.com/search/photos/?page=${page_num}&per_page=${per_page}&query=${query}&client_id=${REACT_APP_UNSPLASH_ID}`
    )
    .then((res) => {
      dispatch({
        type: LOAD_MORE,
        payload: res.data,
      });
    })
    .catch((err) =>
      console.log(
        "Error happened during fetching!",
        err.response.data,
        err.response.status
      )
    );
};

export const setImagesLoading = () => {
  return { type: IMAGES_LOADING };
};

export const setImagesLoadingMore = () => {
  return { type: IMAGES_LOADING_MORE };
};
