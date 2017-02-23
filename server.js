const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const pug = require('pug');
const path = require('path');

const SearchForm = require('./public/js/components/search-form')

const app = express();




app.engine('pug', require('pug').__express)
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {

  const router = ReactDOMServer.renderToString(<SearchForm />);
  console.log(router);
  res.render('landing', {
    title: 'Lumen Spot',
    react: router
  })
});







app.listen(process.env.PORT || 8081);
console.log(`the server is listening on port ${process.env.PORT || 8081}`);
console.log(`Visit localhost:${process.env.PORT || 8081}`);
