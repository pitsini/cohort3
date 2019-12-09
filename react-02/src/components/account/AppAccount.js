import React, { Component } from 'react'
import AppHeader from "./AppHeader";
import AccController from './AccController';
// import { functions } from './AccountPojo'
// import { Account as AccountPojo } from './AccountPojo'
import { AccountController } from './AccountPojo'
import AddAccount from "./AddAccount";
// import { thisExpression } from '@babel/types';

export class AppAccount extends Component {
    constructor() {
        super();
        this.accounts = new AccountController();
        this.state = {
            accController: this.accounts.allAccounts,
            // accController: [
            //     // {
            //     //     id: 1,
            //     //     accountName: "Checking",
            //     //     balance: 100
            //     // },
            //     // {
            //     //     id: 2,
            //     //     accountName: "Saving",
            //     //     balance: 1000
            //     // }
            // ],
            lastUsedID: 0
        }
    }

    // Add Account
    addAccount = (name, balance) => {
        const newAccount = {
            id: this.state.lastUsedID+1,
            accountName: name,
            balance: Number(balance)
        }
        this.setState({ 
            accController: [...this.state.accController, newAccount],
            // accController: [...this.state.accController, newAccount],
            lastUsedID: this.state.lastUsedID + 1
        });
    }

    delAccount = (id) => {
        this.setState({ accController: [...this.state.accController.filter(account => account.id !== id)] });
    }

    render() {
        return (
            <div>
                <AppHeader />
                <AddAccount addAccount={this.addAccount} />
                <AccController accController={this.state.accController} delAccount={this.delAccount} />
            </div>
        )
    }
}

export default AppAccount
