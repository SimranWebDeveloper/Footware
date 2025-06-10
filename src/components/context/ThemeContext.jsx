import { createContext, useEffect, useState } from "react";

export const GlobalThemeContext=createContext();

export const ThemeProvider = ({children}) => {
    const[darkMode,setDarkMode]=useState(localStorage.getItem('darkMode') ? JSON.parse(localStorage.getItem('darkMode')) :false )
    
    const toggleTheme = () => {
        setDarkMode(!darkMode)
    }

    useEffect(()=>{
        localStorage.setItem('darkMode',darkMode) 
    },[darkMode])


    return <GlobalThemeContext.Provider value={{darkMode,setDarkMode,toggleTheme}}>
        {children}
    </GlobalThemeContext.Provider>
}