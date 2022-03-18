import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "themeConfig";

type ThemeContextType = {
  theme?: string;
  toggleTheme?: React.DispatchWithoutAction;
};

const themeKey = "theme";

enum THEME {
  LIGHT = "light",
  DARK = "dark",
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);

// TODO: Improve the way the theme is being set. Maybe use next-themes?
// Also set the theme based on the user's system theme
const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<THEME>(THEME.LIGHT);

  useEffect(() => {
    setTheme((localStorage.getItem(themeKey) as THEME) ?? THEME.LIGHT);
  }, []);

  const toggleTheme = () => {
    const themeToSet = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    localStorage.setItem(themeKey, themeToSet);
    setTheme(themeToSet);
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
