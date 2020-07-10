import React, { Component } from 'react';

import ToDoControl from '../containers/ToDoControl';
import FilteredToDos from '../containers/FilteredToDos';

export class ToDoApp extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Todo App</h1>
        </header>

        <ToDoControl />
        <FilteredToDos />
      </>
    );
  }
}
