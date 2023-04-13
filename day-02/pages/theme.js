import React from 'react';
import {useCurrentTheme, useThemeToggle} from "@/contexts/ThemeContext";

const Theme = () => {
    const {currentTheme} = useCurrentTheme()
    const {toggleTheme} = useThemeToggle()

    const onThemeChange = () => {
       toggleTheme()
    }


    return (
        <div>
            Current Theme - {currentTheme}
            <div>
                <button onClick={onThemeChange}>Toggle Theme</button>
            </div>
        </div>
    );
};

export default Theme;
