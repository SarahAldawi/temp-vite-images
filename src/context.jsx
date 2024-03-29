import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();
const getInitialDarkMode = () =>{
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches
}
export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState('cat')
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
 
    
    const body = document.querySelector('body')
    body.classList.toggle('dark-theme', newDarkTheme)
  };
  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
