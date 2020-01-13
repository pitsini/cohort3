import React, { useState } from 'react'
import { ThemeContext } from './Hooks-theme-context';

// class ThemedButton extends React.Component {
function ThemedButton() {
    const [props, setPros] = useState()
    const [theme, setTheme] = useState()
    // let props = this.props;
    // let theme = this.context;
    return (
        <button
            props
            style={{ backgroundColor: theme.background }}
        />
    );
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;