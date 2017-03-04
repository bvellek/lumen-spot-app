import * as actions from '../public/js/actions/index';


// Loading Status Test
describe('Loading Status Action', () => {
  it('should create an action to change coords loading status to true', () => {
    const expectedAction = {
      type: 'COORDS_LOADING_STATUS_TRUE'
    };
    expect(actions.coordsLoadingStatusTrue()).toEqual(expectedAction);
  });
});


// Fetch Location Coords Test
describe('Fetch Location Coords Success Action', () => {
  it('should create an action to show fetch location coords success', () => {
    const testCoords = '34,-122.687';
    const expectedAction = {
      type: 'FETCH_LOCATION_COORDS_SUCCESS',
      coords: '34,-122.687'
    };
    expect(actions.fetchLocationCoordsSuccess(testCoords)).toEqual(expectedAction);
  });
});

describe('Fetch Location Coords Error Action', () => {
  it('should create an action to show fetch location coords error', () => {
    const error = 'Sorry! We could not geocode your location.';
    const expectedAction = {
      type: 'FETCH_LOCATION_COORDS_ERROR',
      error: 'Sorry! We could not geocode your location.'
    };
    expect(actions.fetchLocationCoordsError(error)).toEqual(expectedAction);
  });
});


//Get Current Location Test
describe('Get Current Loaction Succes Action', () => {
  it('should create an action to show get current location success', () => {
    const testCoords = '34,-122.687';
    const expectedAction = {
      type: 'GET_CURRENT_LOCATION_SUCCESS',
      coords: '34,-122.687'
    };
    expect(actions.getCurrentLocationSuccess(testCoords)).toEqual(expectedAction);
  });
});

describe('Get Current Loaction Error Action', () => {
  it('should create an action to show get current location error', () => {
    const error = 'error';
    const expectedAction = {
      type: 'GET_CURRENT_LOCATION_ERROR',
      error: 'error'
    };
    expect(actions.getCurrentLocationError(error)).toEqual(expectedAction);
  });
});


// Fetch Sun Times Test
describe('Fetch Sun Times Success Action', () => {
  it('should create an action to show fetch sun times success', () => {
    const results = '{sunrise: 10:00pm}';
    const expectedAction = {
      type: 'FETCH_SUN_TIMES_SUCCESS',
      results: '{sunrise: 10:00pm}'
    };
    expect(actions.fetchSunTimesSuccess(results)).toEqual(expectedAction);
  });
});

describe('Fetch Sun Times Error Action', () => {
  it('should create an action to show fetch sun times error', () => {
    const error = 'error';
    const expectedAction = {
      type: 'FETCH_SUN_TIMES_ERROR',
      error: 'error'
    };
    expect(actions.fetchSunTimesError(error)).toEqual(expectedAction);
  });
});


// Fetch Weather Info Test
describe('Fetch Weather Success Action', () => {
  it('should create an action to show fetch weather success', () => {
    const weather = '{wind: "6mph from the east"}';
    const expectedAction = {
      type: 'FETCH_WEATHER_SUCCESS',
      weather: '{wind: "6mph from the east"}'
    };
    expect(actions.fetchWeatherSuccess(weather)).toEqual(expectedAction);
  });
});

describe('Fetch Weather Error Action', () => {
  it('should create an action to show fetch weather error', () => {
    const error = 'error';
    const expectedAction = {
      type: 'FETCH_WEATHER_ERROR',
      error: 'error'
    };
    expect(actions.fetchWeatherError(error)).toEqual(expectedAction);
  });
});


// Fetch Inspiration Pictures Test
describe('Fetch Inspiration Success Action', () => {
  it('should create an action to show fetch inspiration success', () => {
    const inspiration = {
      iso: '800',
      ss: '1/500',
      user: 'John'
    };
    const expectedAction = {
      type: 'FETCH_INSPIRATION_SUCCESS',
      inspiration: {
        iso: '800',
        ss: '1/500',
        user: 'John'
      }
    };
    expect(actions.fetchInspirationSuccess(inspiration)).toEqual(expectedAction);
  });
});

describe('Fetch Inspiration Error Action', () => {
  it('should create an action to show fetch inspiration error', () => {
    const error = 'error';
    const expectedAction = {
      type: 'FETCH_INSPIRATION_ERROR',
      error: 'error'
    };
    expect(actions.fetchInspirationError(error)).toEqual(expectedAction);
  });
});
