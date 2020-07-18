import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, onToggleStatus, onRemoveToDo }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {
          todos.map(todo => (
            <ToDoItem key={todo.id} todo={todo}
              onToggleStatus={(id) => onToggleStatus(id)}
              onRemoveToDo={(id) => onRemoveToDo(id)} />
          ))
        }
      </ul>
    </div>
  );
};

export default ToDoList;
