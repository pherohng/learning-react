import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './main.css';

import reducers from './store/reducers';
import { ToDoApp } from './components/ToDoApp';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <ToDoApp />
  </Provider>,
  document.querySelector('#root')
);
