import React from 'react';
import ticTacToe from '../../images/tic-tac-toe.svg';
import home from '../../images/home.svg';
import account from '../../images/account1.svg';
import city from '../../images/city1.svg';

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