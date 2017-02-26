import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import CLIRouter from './components/cli-router';


  ReactDOM.render((
    <Provider store={store}>
      <CLIRouter />
    </Provider>
  ),
  document.getElementById('root'));
