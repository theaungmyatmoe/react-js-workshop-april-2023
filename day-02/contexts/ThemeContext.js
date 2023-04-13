import {createContext, useContext, useState} from "react";

const ThemeContext = createContext({
        currentTheme: 'light',
        toggleTheme: () => {
        }
    }
)

const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw  new Error("Theme context does not exist")
    }

    return context
}

export const useCurrentTheme = () => {
    const {currentTheme} = useTheme()
    return {
        currentTheme,
    }
}
export const useThemeToggle = () => {
    const {toggleTheme} = useTheme()
    return {
        toggleTheme,
    }
}

export const ThemeProvider = ({children}) => {
    const [currentTheme, setCurrentTheme] = useState('light')

    const toggleTheme = () => {
        console.log('toggle clicked')
        if (currentTheme === 'light') setCurrentTheme('dark')
        else if (currentTheme === 'dark') setCurrentTheme('light')
        else setCurrentTheme('light')
    }

    const value = {
        currentTheme,
        toggleTheme,
    }

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
