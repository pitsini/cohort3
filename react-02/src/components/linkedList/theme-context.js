import React from 'react'

const themes = {
    green: {
        background: 'rgb(139, 216, 62)',
        backgroundBtn: 'rgb(156, 248, 147)'
    },
    yellow: {
        background: 'rgb(253, 192, 59)',
        backgroundBtn: 'rgb(248, 246, 147)'
    },
};

const ButtonThemeContext = React.createContext();
const ToggleThemeContext = React.createContext();

export { themes, ButtonThemeContext, ToggleThemeContext }
