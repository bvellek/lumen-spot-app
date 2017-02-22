import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import LandingContainer from './landing-container';
import LocationContainer from './location-container';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={LandingContainer} />
    <Route path="/location" component={LocationContainer}>
      {/* <Route path="/:coords" component={LocationResults} /> */}
    </Route>
  </Router>
);

export default routes;
