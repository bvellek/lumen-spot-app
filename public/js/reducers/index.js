import * as actions from '../actions/index';

const initialState = {
  locationCoords: null,
  displayResults: false,
  warningState: false,
  warningMessage: null
};

export const locationReducer = (state = initialState, action) => {
  if (action.type === actions.GET_CURRENT_LOCATION_SUCCESS) {
    const coords = action.coords;
    const modState = Object.assign({}, state, {
      locationCoords: coords,
      displayResults: true
    });
    return modState;
  } else if (action.type === actions.GET_CURRENT_LOCATION_ERROR) {
    const warning = action.error;
    const modState = Object.assign({}, state, {
      warningState: true,
      warningMessage: warning
    });
    return modState;
  } else if (action.type === actions.FETCH_LOCATION_COORDS_SUCCESS) {
    const coords = action.coords;
    const modState = Object.assign({}, state, {
      locationCoords: coords,
      displayResults: true
    });
    return modState;
  } else if (action.type === actions.FETCH_LOCATION_COORDS_ERROR) {
    const warning = action.error;
    const modState = Object.assign({}, state, {
      warningState: true,
      warningMessage: warning
    });
    return modState;
  }

  return state;
};
