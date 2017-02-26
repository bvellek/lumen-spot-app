import * as actions from '../actions/index';

const initialState = {
  searchLocation: null,
  locationCoords: null
};

export const locationReducer = (state = initialState, action) => {
  if (action.type === action.FETCH_LOCATION_COORDS_SUCCESS) {

  } else if (action.type === action.FETCH_LOCATION_COORDS_ERROR) {

  } else if (action.type === action.GET_CURRENT_LOCATION_SUCCESS) {

  } else if (action.type === action.GET_CURRENT_LOCATION_ERROR) {

  }

  return state;
};
