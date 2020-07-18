import React from 'react';
import { FilterCriteria } from '../constants';

const ToDoForm = ({ onAddToDo, onFilterToDos }) => {
  const submit = (e) => {
    e.preventDefault();
    onAddToDo(e.target.description.value);
  };

  return (
    <form onSubmit={submit}>
      <input type="text" name='description' maxLength="50" />
      <button type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select-wrapper">
        <select onChange={(e) => onFilterToDos(e.target.value)}>
          <option value={FilterCriteria.ALL}>All</option>
          <option value={FilterCriteria.COMPLETED}>Completed</option>
          <option value={FilterCriteria.UNCOMPLETED}>Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default ToDoForm;
