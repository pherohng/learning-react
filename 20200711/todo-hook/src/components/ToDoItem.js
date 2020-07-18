import React, { useState } from "react";
import { ToDoStatus } from "../constants";

const ToDoItem = ({ todo, onToggleStatus, onRemoveToDo }) => {
  const [markForDeletion, setMarkForDeletion] = useState(false);
  let classes = `todo ${todo.status === ToDoStatus.COMPLETED ? ToDoStatus.COMPLETED : ''} ${markForDeletion ? 'fall' : ''}`;

  return (
    <div className={classes} onAnimationEnd={() => onRemoveToDo(todo.id)}>
      <li className="todo-item">
        {todo.description}
      </li>

      <button className="check-btn" onClick={() => onToggleStatus(todo.id)}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={() => setMarkForDeletion(true)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default ToDoItem;
