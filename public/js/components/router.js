import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import LandingContainer from './landing-container';
import LocationContainer from './location-container';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={LandingContainer} />
    <Route path="/location" component={LocationContainer}>
      {/* <Route path="/:coords" component={LocationResults} /> */}
    </Route>
  </Router>
);

export default routes;
