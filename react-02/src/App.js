import React, { Component } from 'react';
import Game from './components/layout/TicTacToe';
import Home from './components/layout/Home';
import { AppAccount } from './components/account/AppAccount';
import { HomeIcon, TicTacToe, AccountIcon, City} from './components/layout/MenuPanel';
import './css/App.css';
import './css/MenuPanel.css';
import './css/TicTacToe.css';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      whatToShow: <AppAccount />,
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
      this.setState({ whatToShow: <AppAccount /> })
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
              <AccountIcon accountClick={this.accountClick}/>
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