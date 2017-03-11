import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import 'isomorphic-fetch';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';

import routes from './public/js/components/router';
import NotFoundPage from './public/js/components/not-found-page';
// import * as reducers from './public/js/reducers/index';

import * as actions from './public/js/actions/index';
import configureStore from './public/js/store';

const app = express();


app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(bodyParser.json());


app.get('*', (req, res) => {
  if (req.headers['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === 'production') {
    res.redirect(`https://lumen-spot.herokuapp.com${req.url}`);
  }
  const store = configureStore();
  console.log(store);

  if (req.query.lat && req.query.lng) {
    const lat = req.query.lat;
    const lng = req.query.lng;
    if (!isNaN(lat) && !isNaN(lng)) {
      console.log('testingggggggg', lat, lng);
      const coords = `${lat},${lng}`;
      store.dispatch(actions.fetchLocationCoordsSuccess(coords));
      return Promise.all([
        store.dispatch(actions.fetchSunTimes(coords)), store.dispatch(actions.fetchWeather(coords)),
        store.dispatch(actions.fetchInspiration(coords))
      ]).then(() => {
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
            if (renderProps) {
              // const initialState = {
              //   locationCoords: null,
              //   displayResults: false,
              //   warningState: false,
              //   warningMessage: null,
              //   sunTimesResults: null,
              //   weatherResults: null,
              //   inspirationResults: null,
              //   coordsLoadingStatus: false,
              //   routing: { location: renderProps.location }
              // };

              // const store = createStore(reducers.locationReducer, initialState);
              preloadedState = JSON.stringify(store.getState()).replace(/</g, '\\u003c');

              const component = (
                <Provider store={store}>
                  <RouterContext {...renderProps} />
                </Provider>
              );

              // if current route matched we have renderProps
              console.log('*');
              markup = renderToString(component);
              console.log('**');
            } else {
              // otherwise render 404 page
              markup = renderToString(<NotFoundPage />);
              res.status(404);
            }
            console.log(preloadedState, '***************', preloadedState); // JSON.stringify(preloadedState).replace(/</g, '\\u003c')
            return res.render('index', { react: markup, state: preloadedState });
          }
        );
      });
    }
  }

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
      if (renderProps) {
        // const initialState = {
        //   locationCoords: null,
        //   displayResults: false,
        //   warningState: false,
        //   warningMessage: null,
        //   sunTimesResults: null,
        //   weatherResults: null,
        //   inspirationResults: null,
        //   coordsLoadingStatus: false,
        //   routing: { location: renderProps.location }
        // };

        // const store = createStore(reducers.locationReducer, initialState);

        const component = (
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );

        // if current route matched we have renderProps
        markup = renderToString(component);
      } else {
        // otherwise render 404 page
        markup = renderToString(<NotFoundPage />);
        res.status(404);
      }
      return res.render('index', { react: markup });
    }
  );
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

app.listen(process.env.PORT || 8081);
console.log(`the server is listening on port ${process.env.PORT || 8081}`);
console.log(`Visit localhost:${process.env.PORT || 8081}`);
