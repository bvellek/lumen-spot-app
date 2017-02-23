const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const pug = require('pug');


const LandingContainer = require('./public/js/components/landing-container');
const LocationContainer = require('./public/js/components/location-container');

const app = express();


app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/assets'));



app.get('/', (req, res) => {

  const landingComponent = ReactDOMServer.renderToStaticMarkup(React.createElement(LandingContainer));
  console.log(landingComponent);
  res.render('landing', {
    title: 'Lumen Spot',
    react: landingComponent
  })
});

app.get('/location', (req, res) => {

  const locationComponent = ReactDOMServer.renderToStaticMarkup(React.createElement(LocationContainer));
  console.log(locationComponent);
  res.render('landing', {
    title: 'Lumen Spot Location Search',
    react: locationComponent
  })
});





app.listen(process.env.PORT || 8081);
console.log(`the server is listening on port ${process.env.PORT || 8081}`);
console.log(`Visit localhost:${process.env.PORT || 8081}`);
