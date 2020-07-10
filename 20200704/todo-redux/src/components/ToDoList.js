import React, { Component } from 'react';

import { ToDoItem } from './ToDoItem';

export class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.toggleStatus = this.toggleStatus.bind(this);
    this.markForDeletion = this.markForDeletion.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
  }

  toggleStatus(id) {
    this.props.onToggleStatus(id);
  }

  markForDeletion(id) {
    this.props.onMarkForDeletion(id);
  }

  removeToDo(id) {
    this.props.onRemoveToDo(id);
  }

  render() {
    return (
      <div className="todo-container">
        <ul className="todo-list">
          {
            this.props.todos.map(todo => (
              <ToDoItem key={todo.id} todo={todo}
                onToggleStatus={this.toggleStatus}
                onMarkForDeletion={this.markForDeletion} onRemoveToDo={this.removeToDo} />
            ))
          }
        </ul>
      </div>
    );
  }
}
