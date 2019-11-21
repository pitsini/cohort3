import React from 'react';
import ticTacToe from '../images/tic-tac-toe.svg';
import home from '../images/home.svg';
import account from '../images/account1.svg';
import city from '../images/city1.svg';
// import hoverElf from '../images/ttt.svg';

const MenuPanel  = (props) => {
    return (
        <div>
            <Home />
            <TicTacToe />
            <Account />
            <City />
        </div>
    )
}

const Home = (props) => {
    return (
        <img src={home} className="components one" alt="home" />
    )
}

const City = (props) => {
    return (
        <img src={city} className="components four" alt="city" />
    )
}

const Account = (props) => {
    return (
        <img src={account} className="components three" alt="account" />
    )
}

// class TicTacToe extends React.Component {
//     constructor(props) {
//         super(props);
        // this.state = { image: elf };

        // // This binding is necessary to make `this` work in the callback
        // this.hoverOver = this.hoverOver.bind(this);
        // this.hoverOut = this.hoverOut.bind(this);
    // }

    // hoverOver() {
    //     this.setState(state => ({
    //         image: hoverElf
    //     }));
    // }

    // hoverOut() {
    //     this.setState(state => ({
    //         image: elf
    //     }));
    // }

const TicTacToe = (props) => {
    return (
        <img src={ticTacToe} className="components two" alt="ticTacToe" />
        // <img className="components two" alt="elf"
        //     src={this.state.image}
        //     onMouseOver={this.hoverOver}
        //     onMouseOut={this.hoverOut}
        // />
    )
}

export default MenuPanel