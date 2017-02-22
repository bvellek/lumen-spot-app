import React from 'react';
import ReactDOM from 'react-dom';

// import LandingContainer from './components/landing-container';
import routes from './components/router';


document.addEventListener('DOMContentLoaded', () => ReactDOM.render((routes), document.getElementById('root')));
