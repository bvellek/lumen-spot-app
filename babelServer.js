'use strict';

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _pug = require('pug');

var _pug2 = _interopRequireDefault(_pug);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _router = require('./public/js/components/router');

var _router2 = _interopRequireDefault(_router);

var _notFoundPage = require('./public/js/components/not-found-page');

var _notFoundPage2 = _interopRequireDefault(_notFoundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// const LandingContainer = require('./public/js/components/landing-container');
// const LocationContainer = require('./public/js/components/location-container');


app.set('view engine', 'pug');

app.use(_express2.default.static(__dirname + '/public'));
app.use(_express2.default.static(__dirname + '/assets'));

//
// app.get('/', (req, res) => {
//
//   const landingComponent = renderToStaticMarkup(React.createElement(LandingContainer));
//   console.log(landingComponent);
//   res.render('index', {
//     title: 'Lumen Spot',
//     react: landingComponent
//   })
// });
//
// app.get('/location', (req, res) => {
//
//   const locationComponent = renderToStaticMarkup(React.createElement(LocationContainer));
//   console.log(locationComponent);
//   res.render('index', {
//     title: 'Lumen Spot Location Search',
//     react: locationComponent
//   })
// });

app.get('*', function (req, res) {
  (0, _reactRouter.match)({ routes: _router2.default, location: req.url }, function (err, redirectLocation, renderProps) {

    if (err) {
      return res.status(500).send(err.message);
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    var markup = void 0;
    if (renderProps) {
      // if current route matched we have renderProps
      markup = (0, _server.renderToStaticMarkup)(_react2.default.createElement(_reactRouter.RouterContext, renderProps));
    } else {
      // otherwise render 404 page
      markup = (0, _server.renderToStaticMarkup)(_react2.default.createElement(_notFoundPage2.default, null));
      res.status(404);
    }

    return res.render('index', { react: markup });
  });
});

app.listen(process.env.PORT || 8081);
console.log('the server is listening on port ' + (process.env.PORT || 8081));
console.log('Visit localhost:' + (process.env.PORT || 8081));
