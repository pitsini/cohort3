import React, { Component } from 'react';
import Game from './components/layout/TicTacToe';
import Home from './components/layout/Home';
import { AppAccount } from './components/account/AppAccount';
import { AppCity } from './components/city/AppCity';
import { AppLinkedList } from './components/linkedList/AppLinkedList';
import { HomeIcon, TicTacToe, AccountIcon, City, LinkedList, Fifo} from './components/layout/MenuPanel';
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
    this.setState({ whatToShow: <AppCity /> })
  }

  linkedListClick = () => {
    this.setState({ whatToShow: <AppLinkedList /> })
  }

  // fifoClick = () => {
  //   this.setState({ whatToShow: <AppFifo /> })
  // }

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
              <Fifo />
              {/* <Fifo linkedListClick={this.FifoClick} /> */}
            </div>
          </div>
        </header>
        <div>
          {this.state.whatToShow}
        </div>
        {/* <h6>Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
          Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
          Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </h6> */}
      </div>
    );
  }
}

export default App;