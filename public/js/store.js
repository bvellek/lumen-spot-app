import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import * as reducers from './reducers/index';

const middleware = [
  logger(),
  thunk
];

let preloadedState;

// try to use preloadedState on client side but not on server side
try {
  preloadedState = window.__PRELOADED_STATE__;
} catch (e) {
  console.log(e, 'coming from store');
}

export default function configureStore() {
  return createStore(reducers.locationReducer, preloadedState, applyMiddleware(...middleware));
}
