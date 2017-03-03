import { locationReducer, initialState } from '../public/js/reducers/index';

describe('Location Reducer', () => {
  it('should return the initial state', () => {
    expect(locationReducer(undefined, {})).toEqual({
      locationCoords: null,
      displayResults: false,
      warningState: false,
      warningMessage: null,
      sunTimesResults: null,
      weatherResults: null,
      inspirationResults: null,
      loadingStatus: false,
    });
  });

  it('should handle LOADING_STATUS_TRUE', () => {
    const stateAfter = {
      locationCoords: null,
      displayResults: false,
      warningState: false,
      warningMessage: null,
      sunTimesResults: null,
      weatherResults: null,
      inspirationResults: null,
      loadingStatus: true,
    };
    expect(locationReducer(initialState, {
    type: 'LOADING_STATUS_TRUE'
    })).toEqual(stateAfter);
  });

  it('should handle FETCH_LOCATION_COORDS_SUCCESS (set new coords, stop loading status, display results)', () => {
    const testCoords = '34.97979,-122.9384';
    const stateAfter = {
      locationCoords: testCoords,
      displayResults: true,
      warningState: false,
      warningMessage: null,
      sunTimesResults: null,
      weatherResults: null,
      inspirationResults: null,
      loadingStatus: false,
    };
    expect(locationReducer(initialState, {
    type: 'FETCH_LOCATION_COORDS_SUCCESS',
    coords: testCoords
    })).toEqual(stateAfter);
  });

  it('should handle FETCH_LOCATION_COORDS_ERROR (stop loading status, change warning message, change warning state)', () => {
    const testWarning = 'there was an error';
    const stateAfter = {
      locationCoords: null,
      displayResults: false,
      warningState: true,
      warningMessage: testWarning,
      sunTimesResults: null,
      weatherResults: null,
      inspirationResults: null,
      loadingStatus: false,
    };
    expect(locationReducer(initialState, {
    type: 'FETCH_LOCATION_COORDS_ERROR',
    error: testWarning
    })).toEqual(stateAfter);
  });

  it('should handle GET_CURRENT_LOCATION_SUCCESS (set new coords, stop loading status, display results)', () => {
    const testCoords = '34.97979,-122.9384';
    const stateAfter = {
      locationCoords: testCoords,
      displayResults: true,
      warningState: false,
      warningMessage: null,
      sunTimesResults: null,
      weatherResults: null,
      inspirationResults: null,
      loadingStatus: false,
    };
    expect(locationReducer(initialState, {
    type: 'GET_CURRENT_LOCATION_SUCCESS',
    coords: testCoords
    })).toEqual(stateAfter);
  });

  it('should handle GET_CURRENT_LOCATION_ERROR (stop loading status, change warning message, change warning state)', () => {
    const stateAfter = {
      locationCoords: null,
      displayResults: false,
      warningState: true,
      warningMessage: 'Sorry we were not able to get your current location. Please enter a location above.',
      sunTimesResults: null,
      weatherResults: null,
      inspirationResults: null,
      loadingStatus: false,
    };
    expect(locationReducer(initialState, {
    type: 'GET_CURRENT_LOCATION_ERROR',
    error: 'ERR'
    })).toEqual(stateAfter);
  });
});
