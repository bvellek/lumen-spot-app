import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import routes from './public/js/components/router';
import NotFoundPage from './public/js/components/not-found-page';

require('isomorphic-fetch');

const app = express();


app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(bodyParser.json());


app.get('*', (req, res) => {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {
      console.log('*****&&&&****&&&&***&&&&', renderProps);
      if (err) {
        return res.status(500).send(err.message);
      }

      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      let markup;
      if (renderProps) {
        // if current route matched we have renderProps
        markup = renderToString(<RouterContext {...renderProps} />);
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
