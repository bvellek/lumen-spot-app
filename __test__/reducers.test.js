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
      coordsLoadingStatus: false,
    });
  });

  it('should handle COORDS_LOADING_STATUS_TRUE', () => {
    const stateAfter = {
      locationCoords: null,
      displayResults: false,
      warningState: false,
      warningMessage: null,
      sunTimesResults: null,
      weatherResults: null,
      inspirationResults: null,
      coordsLoadingStatus: true,
    };
    expect(locationReducer(initialState, {
    type: 'COORDS_LOADING_STATUS_TRUE'
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
      coordsLoadingStatus: false,
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
      coordsLoadingStatus: false,
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
      coordsLoadingStatus: false,
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
      coordsLoadingStatus: false,
    };
    expect(locationReducer(initialState, {
    type: 'GET_CURRENT_LOCATION_ERROR',
    error: 'ERR'
    })).toEqual(stateAfter);
  });

  it('should handle FETCH_SUN_TIMES_SUCCESS (add sunTimesResults)', () => {
    const testSun = '{sunrise: 5:30 am, sunset: 6:00pm}';
    const stateAfter = {
      locationCoords: null,
      displayResults: false,
      warningState: false,
      warningMessage: null,
      sunTimesResults: testSun,
      weatherResults: null,
      inspirationResults: null,
      coordsLoadingStatus: false,
    };
    expect(locationReducer(initialState, {
    type: 'FETCH_SUN_TIMES_SUCCESS',
    results: testSun
    })).toEqual(stateAfter);
  });

  it('should handle FETCH_SUN_TIMES_ERROR (change warning message, change warning state)', () => {
    const stateAfter = {
      locationCoords: null,
      displayResults: false,
      warningState: true,
      warningMessage: 'ERR',
      sunTimesResults: null,
      weatherResults: null,
      inspirationResults: null,
      coordsLoadingStatus: false,
    };
    expect(locationReducer(initialState, {
    type: 'FETCH_SUN_TIMES_ERROR',
    error: 'ERR'
    })).toEqual(stateAfter);
  });

  it('should handle FETCH_WEATHER_SUCCESS (add weatherResults)', () => {
    const testWeather = '{wind: gusty, temp: 65.8}';
    const stateAfter = {
      locationCoords: null,
      displayResults: false,
      warningState: false,
      warningMessage: null,
      sunTimesResults: null,
      weatherResults: testWeather,
      inspirationResults: null,
      coordsLoadingStatus: false,
    };
    expect(locationReducer(initialState, {
    type: 'FETCH_WEATHER_SUCCESS',
    weather: testWeather
    })).toEqual(stateAfter);
  });

  it('should handle FETCH_WEATHER_ERROR (change warning message, change warning state)', () => {
    const stateAfter = {
      locationCoords: null,
      displayResults: false,
      warningState: true,
      warningMessage: 'ERR',
      sunTimesResults: null,
      weatherResults: null,
      inspirationResults: null,
      coordsLoadingStatus: false,
    };
    expect(locationReducer(initialState, {
    type: 'FETCH_WEATHER_ERROR',
    error: 'ERR'
    })).toEqual(stateAfter);
  });

  it('should handle FETCH_INSPIRATION_SUCCESS (add inspirationResults)', () => {
    const testInspiration = '{iso: 800, ss: 1/500}';
    const stateAfter = {
      locationCoords: null,
      displayResults: false,
      warningState: false,
      warningMessage: null,
      sunTimesResults: null,
      weatherResults: null,
      inspirationResults: testInspiration,
      coordsLoadingStatus: false,
    };
    expect(locationReducer(initialState, {
    type: 'FETCH_INSPIRATION_SUCCESS',
    inspiration: testInspiration
    })).toEqual(stateAfter);
  });

  it('should handle FETCH_INSPIRATION_ERROR (change warning message, change warning state)', () => {
    const stateAfter = {
      locationCoords: null,
      displayResults: false,
      warningState: true,
      warningMessage: 'ERR',
      sunTimesResults: null,
      weatherResults: null,
      inspirationResults: null,
      coordsLoadingStatus: false,
    };
    expect(locationReducer(initialState, {
    type: 'FETCH_INSPIRATION_ERROR',
    error: 'ERR'
    })).toEqual(stateAfter);
  });
});
