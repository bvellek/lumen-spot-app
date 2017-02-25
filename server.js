import express from 'express';
import path from 'path';

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import routes from './public/js/components/router';
import NotFoundPage from './public/js/components/not-found-page';

const app = express();


app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets')));


app.get('*', (req, res) => {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {
      if (err) {
        return res.status(500).send(err.message);
      }

      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      let markup;
      if (renderProps) {
        // if current route matched we have renderProps
        markup = renderToStaticMarkup(<RouterContext {...renderProps} />);
      } else {
        // otherwise render 404 page
        markup = renderToStaticMarkup(<NotFoundPage />);
        res.status(404);
      }
      return res.render('index', { react: markup });
    }
  );
});


app.listen(process.env.PORT || 8081);
console.log(`the server is listening on port ${process.env.PORT || 8081}`);
console.log(`Visit localhost:${process.env.PORT || 8081}`);
