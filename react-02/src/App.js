import React from 'react';
import logo from './logo.svg';
import santa from './images/santa.svg';
import elf from './images/elf.svg';
import wreath from './images/wreath.svg';
import reindeer from './images/reindeer.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={santa} className="App-components one" alt="santa" />
          <img src={elf} className="App-components two" alt="elf" />
          <img src={wreath} className="App-components three" alt="wreath" />
          <img src={reindeer} className="App-components four" alt="reindeer" />
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

export default App;
