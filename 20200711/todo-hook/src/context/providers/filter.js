import React, { useReducer } from 'react';
import { FilterCriteria } from '../../constants';
import { filter } from '../reducers';

export const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filter, { criteria: FilterCriteria.ALL });

  const context = {
    filter: state,
    dispatch
  };

  return (
    <FilterContext.Provider value={context}>
      {children}
    </FilterContext.Provider>
  );
};
