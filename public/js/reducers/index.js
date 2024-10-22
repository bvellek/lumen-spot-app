import * as actions from '../actions/index';

export const initialState = {
  locationCoords: null,
  displayResults: false,
  warningState: false,
  warningMessage: null,
  sunTimesResults: null,
  weatherResults: null,
  inspirationResults: null,
  coordsLoadingStatus: false,
};

export const locationReducer = (state = initialState, action) => {
  if (action.type === actions.GET_CURRENT_LOCATION_SUCCESS) {
    const coords = action.coords;
    const modState = Object.assign({}, state, {
      locationCoords: coords,
      displayResults: true,
      coordsLoadingStatus: false
    });
    return modState;
  } else if (action.type === actions.GET_CURRENT_LOCATION_ERROR) {
    const warning = 'Sorry we were not able to get your current location. Please enter a location above.';
    const modState = Object.assign({}, state, {
      warningState: true,
      warningMessage: warning,
      coordsLoadingStatus: false
    });
    return modState;
  } else if (action.type === actions.FETCH_LOCATION_COORDS_SUCCESS) {
    const coords = action.coords;
    const modState = Object.assign({}, state, {
      locationCoords: coords,
      displayResults: true,
      coordsLoadingStatus: false
    });
    return modState;
  } else if (action.type === actions.FETCH_LOCATION_COORDS_ERROR) {
    const warning = action.error;
    const modState = Object.assign({}, state, {
      warningState: true,
      warningMessage: warning,
      coordsLoadingStatus: false
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
  } else if (action.type === actions.COORDS_LOADING_STATUS_TRUE) {
    const modState = Object.assign({}, state, {
      coordsLoadingStatus: true,
      displayResults: false
    });
    return modState;
  }

  return state;
};
