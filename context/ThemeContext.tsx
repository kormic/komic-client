import React from "react";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "themeConfig";

type ThemeContextType = {
  theme?: string;
  toggleTheme?: React.DispatchWithoutAction;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

const useThemeContext = () => {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useThemeContext must be used within ");
  }

  return context;
};

export { useThemeContext, ThemeContextProvider };
