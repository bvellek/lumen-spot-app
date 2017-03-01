import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import CLIRouter from './components/cli-router';

const store = configureStore();

  ReactDOM.render((
    <Provider store={store}>
      <CLIRouter />
    </Provider>
  ),
  document.getElementById('root'));
