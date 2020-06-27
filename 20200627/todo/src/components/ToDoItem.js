import React, { Component } from 'react';

export class ToDoItem extends Component {
  constructor(props) {
    super(props);

    this.toggleStatus = this.toggleStatus.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
  }

  toggleStatus() {
    this.props.onToggleStatus(this.props.todo.id);
  }

  removeToDo() {
    this.props.onRemoveToDo(this.props.todo.id);
  }

  render() {
    let todo = this.props.todo;

    return (
      <div className={`todo ${todo.status === 'completed' ? 'completed' : ''}`} style={{ display: 'flex' }}>
        <li className="todo-item">
          {todo.description}
        </li>

        <button className="check-btn" onClick={this.toggleStatus}>
          <i className="fas fa-check"></i>
        </button>
        <button className="trash-btn" onClick={this.removeToDo}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
  }
}
