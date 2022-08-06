import React, { useState, createContext } from "react";

// Default color mode is deepBlue
const defaultColorScheme = "deepBlue";

type ThemeColorContextType = {
  colorScheme: string;
  setColorScheme: (value: string) => void;
};

export const ThemeColorContext = createContext<ThemeColorContextType>({
  colorScheme: defaultColorScheme,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setColorScheme: () => {},
});

export const ThemeColorProvider: React.FC = ({ children }): JSX.Element => {
  const [colorScheme, setColorScheme] = useState(defaultColorScheme);

  // useEffect(() => {
  //   // We'd get the theme from a web API / local storage in a real app
  //   // We've hardcoded the theme in our example
  //   const currentTheme = defaultColorScheme;
  //   setColorScheme(currentTheme);
  // }, []);

  return (
    <ThemeColorContext.Provider value={{ colorScheme, setColorScheme }}>
      {children}
    </ThemeColorContext.Provider>
  );
};
