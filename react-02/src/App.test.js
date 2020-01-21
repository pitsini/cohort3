import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/layout/Home';
import Game from './components/layout/TicTacToe';
import { AppAccount } from './components/account/AppAccount';
import { AppCity } from './components/city/AppCity';
import { AppLinkedList } from './components/linkedList/AppLinkedList';
import { AppFifoLifo } from './components/fifoLifo/AppFifoLifo';
import { HomeIcon, TicTacToe, AccountIcon, City, LinkedList, FifoLifo } from './components/layout/MenuPanel';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <div>
      <App /> 
      <Home />
      <Game />
      <AppAccount />
      <AppLinkedList />
      <AppFifoLifo />

      <HomeIcon />
      <TicTacToe />
      <AccountIcon />
      <City />
      <LinkedList />
      <FifoLifo />
    </div>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
