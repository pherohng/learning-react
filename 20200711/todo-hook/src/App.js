import React, { useContext } from "react";
import { ThemeContext } from "./context/providers";
import { ThemeBar, Controls, FilteredToDos } from "./containers";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main theme={theme}>
      <ThemeBar />

      <header>
        <h1>Todo App</h1>
      </header>

      <Controls />
      <FilteredToDos />
    </main>
  );
};

export default App;
