//todo ==> all thing is done only in one file

import { useContext, createContext } from "react";

//! default value when context made that can also give value
export const ThemeContext = createContext({
    themeMode: "",
    darkTheme: () => { },
    lightTheme: () => { }
})

export const ThemeProvider = ThemeContext.Provider


// custom hook
export function useTheme() {
    return useContext(ThemeContext)
}