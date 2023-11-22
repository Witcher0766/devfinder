import { createContext } from "react";
import useLocalStorage from 'use-local-storage';

const ThemeContext = createContext();


export const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useLocalStorage("theme", "light");
    

    const toggleTheme = () => {
       const newTheme = theme === "light" ? "dark" : "light"
       setTheme(newTheme);
    }


    return (
        <ThemeContext.Provider value={{toggleTheme, theme}} >
        {children}
        </ThemeContext.Provider>
    )
}


export default ThemeContext;