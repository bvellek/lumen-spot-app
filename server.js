// vendor imports
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import compression from 'compression';
import 'isomorphic-fetch';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';

// component imports
import routes from './public/js/components/router';
import NotFoundPage from './public/js/components/not-found-page';

// redux imports
import * as actions from './public/js/actions/index';
import configureStore from './public/js/store';

const app = express();

// Compression for pagespeed
app.use(compression({ level: 9, threshold: 0 }));

app.set('view engine', 'pug'); // tells the render to use Pug template
app.use(express.static(path.join(__dirname, 'public'))); // serving static assets
app.use(express.static(path.join(__dirname, 'assets'))); // serving static assets
app.use(bodyParser.json()); // for parsing the body of post requests

// matches the url and directs to correct response
function matcher(req, res, store) {
  match(
    { routes, location: req.url || '/' },
    (err, redirectLocation, renderProps) => {
      if (err) {
        return res.status(500).send(err.message);
      }

      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      let markup;
      let preloadedState;


      if (renderProps) { // if current route matched we have renderProps
        // the state we will provide for initial client-side (so the server and client match)
        preloadedState = JSON.stringify(store.getState()).replace(/</g, '\\u003c');

        const component = (
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );

        // this is where the components get rendered to a string to be inserted in Pug template
        markup = renderToString(component);
      } else { // otherwise render 404 page
        markup = renderToString(<NotFoundPage />);
        res.status(404);
      }
      // rendering the markup and preloadedState into the pug template
      return res.render('index', { react: markup, state: preloadedState });
    }
  );
}

app.get('*', (req, res) => {
  // force use of https://
  if (req.headers['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === 'production') {
    res.redirect(`https://lumen-spot.herokuapp.com${req.url}`);
  }

  // initialize store
  const store = configureStore();

  // check to see if a lat and lng are provided in the query string of URL
  if (req.query.lat && req.query.lng) {
    const lat = req.query.lat;
    const lng = req.query.lng;

    // check to see that the lat and lng are numbers - and fetch & render appropriate content for lat/lng
    if (!isNaN(lat) && !isNaN(lng)) {
      const coords = `${lat},${lng}`;
      store.dispatch(actions.fetchLocationCoordsSuccess(coords));
      return Promise.all([
        store.dispatch(actions.fetchSunTimes(coords)), store.dispatch(actions.fetchWeather(coords)),
        store.dispatch(actions.fetchInspiration(coords))
      ]).then(() => {
        matcher(req, res, store);
      });
    }
  }
  // if no lat/lng in query string of URL then just load/render inital state
  matcher(req, res, store);
});


// Sun Times API proxy
app.post('/location', (req, res) => {
  const coords = req.body.coords;
  const coordsArray = coords.split(',');
  const lat = coordsArray[0];
  const long = coordsArray[1];
  const api = `http://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&formatted=0`;
  fetch(api).then((response) => (
    response.json()
  )).then((results) => {
    res.status(200).json(results);
  }).catch(() => {
    res.status(500).json({ error: 'could not get sun times data' });
  });
});


// start server on https://localhost:8081/ or on the environmental PORT (for heroku)
app.listen(process.env.PORT || 8081);
console.log(`the server is listening on port ${process.env.PORT || 8081}`);
console.log(`Visit localhost:${process.env.PORT || 8081}`);
