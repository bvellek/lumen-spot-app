import * as actions from '../actions/index';

const initialState = {
  locationCoords: null,
  displayResults: false,
  warningState: false,
  warningMessage: null,
  sunTimesResults: null,
  weatherResults: null,
  inspirationResults: null,
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
  } else if (action.type === actions.FETCH_SUN_TIMES_SUCCESS) {
    const sunResults = action.results;
    const modState = Object.assign({}, state, {
      sunTimesResults: sunResults
    });
    return modState;
  } else if (action.type === actions.FETCH_SUN_TIMES_ERROR) {
    const warning = action.error;
    const modState = Object.assign({}, state, {
      warningState: true,
      warningMessage: warning
    });
    return modState;
  } else if (action.type === actions.FETCH_WEATHER_SUCCESS) {
    const weather = action.weather;
    const modState = Object.assign({}, state, {
      weatherResults: weather
    });
    return modState;
  } else if (action.type === actions.FETCH_WEATHER_ERROR) {
    const warning = action.error;
    const modState = Object.assign({}, state, {
      warningState: true,
      warningMessage: warning
    });
    return modState;
  } else if (action.type === actions.FETCH_INSPIRATION_SUCCESS) {
    const inspiration = action.inspiration;
    const modState = Object.assign({}, state, {
      inspirationResults: inspiration
    });
    return modState;
  } else if (action.type === actions.FETCH_INSPIRATION_ERROR) {
    const warning = action.error;
    const modState = Object.assign({}, state, {
      warningState: true,
      warningMessage: warning
    });
    return modState;
  }

  return state;
};
