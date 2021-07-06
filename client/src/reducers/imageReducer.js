import {
  GET_IMAGES,
  LOAD_MORE,
  IMAGES_LOADING,
  IMAGES_LOADING_MORE,
} from "../actions/types";

const initialState = {
  loading: false,
  loading_more: false,
  images: [],
  total_results: 0,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
        images: action.payload.results,
        total_results: action.payload.total,
        loading: false,
      };
    case LOAD_MORE:
      // let new_images = state.images;
      // console.log(new_images, action.payload.results);
      const new_images = state.images.concat(action.payload.results);
      return {
        ...state,
        images: new_images,
        loading_more: false,
      };
    case IMAGES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case IMAGES_LOADING_MORE:
      return {
        ...state,
        loading_more: true,
      };
    default:
      return state;
  }
};
