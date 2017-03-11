import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app';
import LandingPage from './landing-page';
import LocationContainer from './location-container';
import NotFoundPage from './not-found-page';


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage} />
    <Route path="location" component={LocationContainer} />
    <Route path="location/:coords" component={LocationContainer} />
    <Route path="*" component={NotFoundPage} />
  </Route>

);

export default routes;
