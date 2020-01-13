import React, { useState } from 'react'
// import { themes } from './theme-context';
import { ThemeContext, themes } from './theme-context';
import ThemedButton from './themed-button';


// export const ThemeContext = React.createContext(
//     themes.dark // default value
// );

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    );
}

const [theme, setTheme] = useState(themes.light)

function toggleTheme() {
    setTheme(
        theme === themes.dark
            ? themes.light
            : themes.dark
    )
}

function App() {
    // const [theme, setTheme] = useState(theme.light)

    return (
        <div>
            <ThemeContext.Provider value={theme}>
                <ThemedButton onClick={toggleTheme()}>
                    Change Theme
                </ThemedButton>
                {/* <Toolbar changeTheme={toggleTheme()} /> */}
            </ThemeContext.Provider>
        </div>
    )
}
// class App extends Component {
constructor(props) {
    super(props);
    this.state = {
        theme: themes.light,
    };

    this.toggleTheme = () => {
        this.setState(state => ({
            theme:
                state.theme === themes.dark
                    ? themes.light
                    : themes.dark,
        }));
    };
}

render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    
}
}

export default App