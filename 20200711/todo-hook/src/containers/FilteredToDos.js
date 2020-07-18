import React, { useContext } from 'react';
import { FilterCriteria, ActionType } from '../constants';
import { ToDosContext, FilterContext } from '../context/providers';
import { ToDoList } from '../components';

const FilteredToDos = () => {
  const { todos, dispatch } = useContext(ToDosContext);
  const { filter } = useContext(FilterContext);

  const filtered = todos.filter((todo) => filter.criteria === FilterCriteria.ALL || todo.status === filter.criteria);

  return (
    <ToDoList todos={filtered}
      onToggleStatus={(id) => dispatch({
        type: ActionType.TOGGLE_STATUS,
        payload: { id }
      })}
      onRemoveToDo={(id) => dispatch({
        type: ActionType.REMOVE_TODO,
        payload: { id }
      })}
    />
  );
};

export default FilteredToDos;
