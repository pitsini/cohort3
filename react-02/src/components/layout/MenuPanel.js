import React from 'react';
import ticTacToe from '../../images/tic-tac-toe.svg';
import home from '../../images/home.svg';
import account from '../../images/account.svg';
import city from '../../images/city.svg';
import linkedList from '../../images/linkedList.svg';
import fifoLifo from '../../images/fifo.svg';

export const HomeIcon = (props) => {
    return (
        <img src={home} className="components one" alt="home" onClick={props.homeClick}/>
    )
}

export const City = (props) => {
    return (
        <img src={city} className="components four" alt="city" onClick={props.cityClick}/>
    )
}

export const AccountIcon = (props) => {
    return (
        <img src={account} className="components three" alt="account" onClick={props.accountClick}/>
    )
}

export const TicTacToe = (props) => {
    return (
        <img src={ticTacToe} className="components two" alt="ticTacToe" onClick={props.ticTacToeClick}/>
    )
}

export const LinkedList = (props) => {
    return (
        <img src={linkedList} className="components two" alt="linkedListClick" onClick={props.linkedListClick} />
    )
}

export const FifoLifo = (props) => {
    return (
        <img src={fifoLifo} className="components two" alt="fifoLifoClick" onClick={props.fifoLifoClick} />
    )
}