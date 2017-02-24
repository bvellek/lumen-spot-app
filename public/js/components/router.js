import React from 'react';
import { Route, IndexRoute } from 'react-router';

import PageContainer from './page-container';
import LandingContainer from './landing-container';
import LocationContainer from './location-container';
import NotFoundPage from './not-found-page';

const routes = (
  <Route path="/" component={PageContainer}>
    <IndexRoute component={LandingContainer} />
    <Route path="location" component={LocationContainer} />
    {/* <Route path="location/:coords" component={LocationContainer} /> */}
    <Route path="*" component={NotFoundPage} />
  </Route>

);

export default routes;
