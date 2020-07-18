import React, { useContext } from "react";
import { ThemeColor, ActionType } from "../constants";
import { ThemeContext } from "../context/providers";

const ThemeBar = () => {
  const { dispatch } = useContext(ThemeContext);

  return (
    <aside id='theme-bar'>
      {
        Object.keys(ThemeColor).map((color) => {
          return (
            <button onClick={() => dispatch({ type: ActionType.CHANGE_THEME, payload: { theme: ThemeColor[color] } })}>
              <span className={ThemeColor[color]}></span>
            </button>
          );
        })
      }
    </aside>
  );
};

export default ThemeBar;
