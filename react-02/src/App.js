import React, { Component } from 'react';
import Game from './components/layout/TicTacToe';
import Home from './components/layout/Home';
import { AppAccount } from './components/account/AppAccount';
import { AppCity } from './components/city/AppCity';
import { AppLinkedList } from './components/linkedList/AppLinkedList';
import { AppFifoLifo } from './components/fifoLifo/AppFifoLifo';
import { HomeIcon, TicTacToe, AccountIcon, City, LinkedList, FifoLifo} from './components/layout/MenuPanel';
import './css/App.css';
import './css/MenuPanel.css';
import './css/TicTacToe.css';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      whatToShow: <AppLinkedList />,
    }
  }

  homeClick = () => {
    this.setState({ whatToShow: <Home /> })
  }

  ticTacToeClick = () =>  {
    this.setState({ whatToShow: <Game />})
  }

  accountClick = () => {
      this.setState({ whatToShow: <AppAccount /> })
  }

  cityClick = () => {
    this.setState({ whatToShow: <AppCity /> })
  }

  linkedListClick = () => {
    this.setState({ whatToShow: <AppLinkedList /> })
  }

  fifoLifoClick = () => {
    this.setState({ whatToShow: <AppFifoLifo /> })
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
              <City cityClick={this.cityClick} />
              <LinkedList linkedListClick={this.linkedListClick} />
              <FifoLifo fifoLifoClick={this.fifoLifoClick} />
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