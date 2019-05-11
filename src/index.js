// @flow

import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
//import * as serviceWorker from './serviceWorker';

/*
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/


import { initialState } from './constants';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducer';
import type { Store } from './types';

const store: Store = createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true, traceLimit: 25 })
);

const element = document.getElementById('root');
if (!element) {
  throw new Error("couldn't find element with id root");
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  element
);