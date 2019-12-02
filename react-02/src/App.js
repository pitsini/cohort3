import React, { Component } from 'react';
import Game from './components/TicTacToe';
import Home from './components/Home';
import {HomeIcon, TicTacToe, Account, City} from './components/MenuPanel';
import './css/App.css';
import './css/MenuPanel.css';
import './css/TicTacToe.css';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      whatToShow: <Home />,
    }
  }

  homeClick = () => {
    this.setState({ whatToShow: <Home /> })
    console.log("Eh!");
  }

ticTacToeClick = () =>  {
  this.setState({ whatToShow: <Game />})
  console.log("Yo!");
}

accountClick = () => {
  console.log("Hey!");
}

cityClick = () => {
  console.log("Sup!");
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="head">
            <div>
              <HomeIcon homeClick={this.homeClick}/>
              <TicTacToe ticTacToeClick={this.ticTacToeClick} />
              <Account accountClick={this.accountClick}/>
              <City cityClick={this.cityClick}/>
            </div>
          </div>
        </header>
        <div>
          {this.state.whatToShow}
        </div>
      </div>
    );
  }
}

export default App;
