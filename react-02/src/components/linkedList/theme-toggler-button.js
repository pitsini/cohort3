import React, { useContext } from 'react'
import { ButtonThemeContext, ToggleThemeContext } from './theme-context';

function ThemeTogglerButton() {
    const buttonTheme = useContext(ButtonThemeContext)
    const toggleTheme = useContext(ToggleThemeContext)

    return (
        <button
            onClick={toggleTheme}
            style={{ background: buttonTheme.backgroundBtn,
                float: 'right', 
                width: '120px' }}>
            Change Theme
        </button>
    );
}

export default ThemeTogglerButton;