import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

import * as reducers from './reducers/index';

const middleware = [
  // logger(),
  thunk
];

if (process.env.NODE_ENV === 'dev') {
  const createLogger = require('redux-logger');
  const logger = createLogger();
  middleware.push(logger);
}

let preloadedState;

// try to use preloadedState on client side but not on server side
try {
  preloadedState = window.__PRELOADED_STATE__;
} catch (e) {
  console.log('Store: this is rendering on server, so window is not defined. this is expected.');
}

export default function configureStore() {
  return createStore(reducers.locationReducer, preloadedState, applyMiddleware(...middleware));
}
