import React, { useReducer } from 'react';
import { todos } from '../reducers';

export const ToDosContext = React.createContext();

export const ToDosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todos, []);

  const context = {
    todos: state,
    dispatch
  };

  return (
    <ToDosContext.Provider value={context}>
      {children}
    </ToDosContext.Provider>
  );
};
