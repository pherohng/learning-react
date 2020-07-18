import React, { useReducer } from 'react';
import { ThemeColor } from '../../constants';
import { theme } from '../reducers';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(theme, ThemeColor.DEFAULT);

  const context = {
    theme: state,
    dispatch
  };

  return (
    <ThemeContext.Provider value={context}>
      {children}
    </ThemeContext.Provider>
  );
};
