import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './main.css';
import { DrumMachine } from './components/DrumMachine';

ReactDOM.render(
  <DrumMachine />,
  document.querySelector('#root')
);
