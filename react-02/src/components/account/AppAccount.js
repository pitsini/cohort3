import React, { Component } from 'react'
import AppHeader from "./AppHeader";
import AccController from './AccController';
// import { functions } from './AccountPojo'
// import { Account as AccountPojo } from './AccountPojo'
// import { AccController as AccControllerPojo } from './AccountPojo'
import AddAccount from "./AddAccount";
// import { thisExpression } from '@babel/types';

export class AppAccount extends Component {
    state = {
        // accController: new AccountController()
        accController: [
            {
                id: 1,
                accountName: "Checking",
                balance: 100
            },
            {
                id: 2,
                accountName: "Saving",
                balance: 1000
            }
        ]
    }

    // Add Account
    addAccount = (name, balance) => {
        const newAccount = {
            id: name,
            accountName: name,
            balance: Number(balance)
        }
        this.setState({ accController: [...this.state.accController, newAccount] });
    }

    render() {
        return (
            <div>
                <AppHeader />
                <AddAccount addAccount={this.addAccount} />
                <AccController accController={this.state.accController} />
            </div>
        )
    }
}

export default AppAccount
