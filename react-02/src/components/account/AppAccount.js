import React, { Component } from 'react'
import AppHeader from "./AppHeader";
import AccController from './AccController';
// import { functions } from './AccountPojo'
// import { Account as AccountPojo } from './AccountPojo'
import { AccountController } from './AccountPojo'
import AddAccount from "./AddAccount";
// import { thisExpression } from '@babel/types';
// import '../../css/account.css';

export class AppAccount extends Component {
    constructor() {
        super();
        this.accounts = new AccountController();
        this.state = {
            accountsArray: this.accounts.allAccounts,
            //--1-----
            // accController: this.accounts.allAccounts,
            //----------------------
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
        this.accounts.addAccount(this.state.lastUsedID + 1, name, balance);
        console.log(this.accounts.allAccounts);
        this.setState({
            accountsArray: this.accounts.allAccounts,
            lastUsedID: this.state.lastUsedID + 1
        });
        //--1------
        // const newAccount = {
        //     id: this.state.lastUsedID+1,
        //     accountName: name,
        //     balance: Number(balance)
        // }
        // this.setState({ 
        //     accController: [...this.state.accController, newAccount],
        //     lastUsedID: this.state.lastUsedID + 1
        // });
    }

    delAccount = (id) => {
        this.accounts.removeAccount(id);
        this.setState({ accountsArray: this.accounts.allAccounts });

        console.log(this.accounts.allAccounts);
        //--1--
        // this.setState({ accountsArray: [...this.state.accountsArray.filter(account => account.id !== id)] });
    }

    onClickAccount = (id) => {
        console.log(id);
        // this.selectedStyle
    }

    render() {
        return (
            <div style={{ display: 'flex' }}>
                <div>
                    <AppHeader />
                    <AddAccount addAccount={this.addAccount} />
                    <AccController className="accountBackground" accountsArray={this.state.accountsArray} delAccount={this.delAccount} onClickAccount={this.onClickAccount} />
                </div>
                <div style={{ width: '100%' }}>
                    <div id="accSummaryDiv" style={this.summaryStyle()}>
                        <ul style={{
                            marginLeft: '10%',
                            textAlign: 'left'}}>
                            <li>Highest: Checking Account: $100</li>
                            <li>Lowest: Saving Account: $50</li>
                            <li>Total Balance: $150</li>
                        </ul>
                    </div>
                    <div id="accActivityDiv">Withdraw</div>
                </div>
            </div>
        )
    }

    summaryStyle = () => {
        return {
            background: '#575757',
            color: '#fff',
            // textAlign: 'center',
            padding: '2px',
        }
    }
}


export default AppAccount
