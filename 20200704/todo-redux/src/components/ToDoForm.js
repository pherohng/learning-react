import React, { Component } from 'react';

import FilterCriteria from '../store/constants/filter-criteria';

export class ToDoForm extends Component {
  constructor(props) {
    super(props);

    this.toDoInputRef = React.createRef();

    this.addToDo = this.addToDo.bind(this);
    this.filterToDos = this.filterToDos.bind(this);
  }

  addToDo(e) {
    e.preventDefault();

    let description = this.toDoInputRef.current.value.trim();

    if (description) {
      this.props.onAddToDo(this.toDoInputRef.current.value);
      this.toDoInputRef.current.value = '';
    }
  }

  filterToDos(e) {
    this.props.onFilterToDos(e.target.value);
  }

  render() {
    return (
      <form onSubmit={this.addToDo}>
        <input ref={this.toDoInputRef} type="text" className="todo-input" maxLength="50" />
        <button type="submit" className="todo-button">
          <i className="fas fa-plus-square"></i>
        </button>

        <div className="select" onChange={this.filterToDos}>
          <select name="todos" className="filter-todo">
            <option value={FilterCriteria.ALL}>All</option>
            <option value={FilterCriteria.COMPLETED}>Completed</option>
            <option value={FilterCriteria.UNCOMPLETED}>Uncompleted</option>
          </select>
        </div>
      </form>
    );
  }
}
