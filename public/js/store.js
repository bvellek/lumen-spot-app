import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import * as reducers from './reducers/index';

const middleware = [
  logger(),
  thunk
];

let preloadedState;

try {
  console.log('#', window.__PRELOADED_STATE__);
  preloadedState = window.__PRELOADED_STATE__;
  // Allow the passed state to be garbage-collected
  // delete window.__PRELOADED_STATE__;
} catch (e) {
  console.log(e, 'coming from store');
}

export default function configureStore() {
  return createStore(reducers.locationReducer, preloadedState, applyMiddleware(...middleware));
}
