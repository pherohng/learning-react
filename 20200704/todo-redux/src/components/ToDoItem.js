import React, { Component } from 'react';

import ToDoStatus from '../store/constants/todo-status';

export class ToDoItem extends Component {
  constructor(props) {
    super(props);

    this.toggleStatus = this.toggleStatus.bind(this);
    this.markForDeletion = this.markForDeletion.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
  }

  toggleStatus() {
    this.props.onToggleStatus(this.props.todo.id);
  }

  markForDeletion() {
    this.props.onMarkForDeletion(this.props.todo.id);
  }

  removeToDo() {
    this.props.onRemoveToDo(this.props.todo.id);
  }

  render() {
    let todo = this.props.todo;
    let completed = todo.status === ToDoStatus.COMPLETED;
    let classes = `todo ${completed ? ToDoStatus.COMPLETED : ''} ${todo.markedForDeletion ? 'fall' : ''}`;

    return (
      <div className={classes} style={{ display: 'flex' }} onAnimationEnd={this.removeToDo}>
        <li className="todo-item">
          {todo.description}
        </li>

        <button className="check-btn" onClick={this.toggleStatus}>
          <i className="fas fa-check"></i>
        </button>
        <button className="trash-btn" onClick={this.markForDeletion}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
  }
}
