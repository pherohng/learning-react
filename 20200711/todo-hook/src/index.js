import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, ToDosProvider, FilterProvider } from './context/providers';
import App from './App';

import './scss/style.scss';

ReactDOM.render(
  (
    <ThemeProvider>
      <ToDosProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </ToDosProvider>
    </ThemeProvider>
  ),
  document.querySelector('#root')
);
