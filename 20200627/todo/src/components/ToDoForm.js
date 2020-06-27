import React, { Component } from 'react';

export class ToDoForm extends Component {
  constructor(props) {
    super(props);

    this.toDoInputRef = React.createRef();

    this.filterToDos = this.filterToDos.bind(this);
    this.addToDo = this.addToDo.bind(this);
  }

  filterToDos(e) {
    this.props.onFilterToDos(e.target.value);
  }

  addToDo() {
    this.props.onAddToDo(this.toDoInputRef.current.value);
  }

  render() {
    return (
      <form onSubmit={this.addToDo}>
        <input ref={this.toDoInputRef} type="text" className="todo-input" maxLength="40" />
        <button type="submit" className="todo-button">
          <i className="fas fa-plus-square"></i>
        </button>

        <div className="select" onChange={this.filterToDos}>
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
  }
}
