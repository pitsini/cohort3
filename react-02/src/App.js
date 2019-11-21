import React, { Component } from 'react';
import logo from './logo.svg';
import MenuPanel from './components/MenuPanel';
import Game from './components/TicTacToe';
import './App.css';
import './components/MenuPanel.css';
import './components/TicTacToe.css';

class App extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <MenuPanel />
            {/* <SantaComponent />
            <ElfComponent />
            <WreathComponent />
            <ReindeerComponent /> */}
          </div>
          <Game />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
