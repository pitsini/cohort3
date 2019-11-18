import React, { Component } from 'react';
import logo from './logo.svg';
import SantaComponent from './components/SantaComponent';
import ElfComponent from './components/ElfComponent';
import WreathComponent from './components/WreathComponent';
import ReindeerComponent from './components/ReindeerComponent';
import './App.css';
import './components/components.css';

class App extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <SantaComponent />
            <ElfComponent />
            <WreathComponent />
            <ReindeerComponent />
          </div>
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
