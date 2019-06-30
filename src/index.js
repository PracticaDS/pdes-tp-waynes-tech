// @flow
import React from 'react';
import './index.css';
import App from './components/App';
import { initialState } from './constants';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer';
import type { Store } from './types';
import LoginPage from './componentsLogin/LoginPage.js';
import UsuarioFabricaPage from './componentsSeleccionFabrica/UsuarioFabricas.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const store: Store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const element = document.getElementById('root');
if (!element) {
  throw new Error("couldn't find element with id root");
}
//<App />
render(
  <Provider store={store}>
     <Router>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/fabricas" component={UsuarioFabricaPage} />
      <Route exact path="/fabrica" component={App} />
    </Router>
  </Provider>,
  element
);