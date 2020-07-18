import React, { useContext } from 'react';
import { ActionType } from '../constants';
import { ToDosContext, FilterContext } from '../context/providers';
import { ToDoForm } from '../components';

const Controls = () => {
  const { dispatch: todosDispatch } = useContext(ToDosContext);
  const { dispatch: filterDispatch } = useContext(FilterContext);

  return (
    <ToDoForm
      onAddToDo={(description) => todosDispatch({
        type: ActionType.ADD_TODO,
        payload: { description }
      })}
      onFilterToDos={(criteria) => filterDispatch({
        type: ActionType.FILTER_TODOS,
        payload: { criteria }
      })}
    />
  );
};

export default Controls;
