import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

import * as actions from '../public/js/actions/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// describe('async Location actions', () => {
//   afterEach(() => {
//     nock.cleanAll();
//   });
//
//   it('creates COORDS_LOADING_STATUS_TRUE and FETCH_LOCATION_COORDS_SUCCESS when fetchSunTimes is done', () => {
//     const coords = '123,456';
//     window.google.Geocoder = { results: { coords: '123,456' } };
//     const expectedAction = [
//       { type: 'COORDS_LOADING_STATUS_TRUE' }, { type: 'FETCH_LOCATION_COORDS_SUCCESS', coords: coords }
//     ];
//
//     const store = mockStore({ sunTimesResults: null });
//     return store.dispatch(actions.fetchLocationCoords(coords))
//       .then(() => {
//         expect(store.getActions()).toEqual(expectedAction);
//       });
//   });
//
//   // it('creates FETCH_SUN_TIMES_ERROR when fetchSunTimes fails', () => {
//   //   const coords = '123,456';
//   //   nock('https://lumen-spot.herokuapp.com')
//   //     .post('/location', { coords: '123,456' })
//   //     .replyWithError('error');
//   //   const expectedAction = [
//   //     { type: 'FETCH_SUN_TIMES_ERROR', error: 'error' }
//   //   ];
//   //
//   //   const store = mockStore({ sunTimesResults: null });
//   //   return store.dispatch(actions.fetchSunTimes(coords))
//   //     .then(() => {
//   //       expect(store.getActions()).toEqual(expectedAction);
//   //     });
//   // });
// });

describe('async Sun actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates FETCH_SUN_TIMES_SUCCESS when fetchSunTimes is done', () => {
    const coords = '123,456';
    nock('https://lumen-spot.herokuapp.com')
      .post('/location', {
        coords: '123,456'
      })
      .reply('200', {
        results: {
          test: 'testing'
        }
      });
    const expectedAction = [
      { type: 'FETCH_SUN_TIMES_SUCCESS', results: { results: { test: 'testing' } } }
    ];

    const store = mockStore({ sunTimesResults: null });
    return store.dispatch(actions.fetchSunTimes(coords))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });

  it('creates FETCH_SUN_TIMES_ERROR when fetchSunTimes fails', () => {
    const coords = '123,456';
    nock('https://lumen-spot.herokuapp.com')
      .post('/location', { coords: '123,456' })
      .replyWithError('error');
    const expectedAction = [
      { type: 'FETCH_SUN_TIMES_ERROR', error: '[FetchError: request to https://lumen-spot.herokuapp.com/location failed, reason: error]' }
    ];

    const store = mockStore({ sunTimesResults: null });
    return store.dispatch(actions.fetchSunTimes(coords))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
});

describe('async Weather actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('creates FETCH_WEATHER_SUCCESS when fetchWeather is done', () => {
    const coords = '123,456';
    nock('https://api.wunderground.com/api/55dac1657530ad42/conditions/q/')
      .get(`/${coords}.json`)
      .reply('200', {
        results: {
          test: 'testing'
        }
      });
    const expectedAction = [
      { type: 'FETCH_WEATHER_SUCCESS', weather: { results: { test: 'testing' } } }
    ];

    const store = mockStore({ weatherResults: null });
    return store.dispatch(actions.fetchWeather(coords))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
});

describe('async Inspiration actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates FETCH_INSPIRATION_SUCCESS when fetchInspiration is done', () => {
    const coords = '123,456';
    nock('https://api.500px.com/v1/photos')
      .get('/search?geo=123,456,16093&image_size=440&consumer_key=R8Sy4wkElwg0T1PPCce2tE5nXxJHeKKfRVKJclov')
      .reply('200', {
        results: {
          test: 'testing'
        }
      });
    const expectedAction = [
      { type: 'FETCH_INSPIRATION_SUCCESS', inspiration: { results: { test: 'testing' } } }
    ];

    const store = mockStore({ inspirationResults: null });
    return store.dispatch(actions.fetchInspiration(coords))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
});
