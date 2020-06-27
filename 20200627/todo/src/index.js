import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';
import { ToDoApp } from './components/ToDoApp';

ReactDOM.render(
  <ToDoApp />,
  document.querySelector('#root')
);
