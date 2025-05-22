import { createContext, useContext, useState } from "react";

const ThemeContext=createContext();  //creating context

export const ThemeProvider=({children})=>{     //providing
    const[darkMode,setDarkMode]=useState(false);

    const toggleTheme=()=>{
        setDarkMode(!darkMode);
    }
    return(
        <>
        <ThemeContext.Provider value={{darkMode,toggleTheme}}>
            <div className={darkMode?"dark":"light"}>
                {children}
            </div>
        </ThemeContext.Provider>
        </>
    )
}

export const useTheme=()=>useContext(ThemeContext);