import React, { useState, createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  const value = {
    theme: theme,
    toggleTheme: toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };