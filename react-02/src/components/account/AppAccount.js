import React, { Component } from 'react'
import AppHeader from "./AppHeader";
import { AccController } from './AccController';
// import { functions } from './AccountPojo'
// import { Account as AccountPojo } from './AccountPojo'
import { AccountController } from './AccountPojo'
import AddAccount from "./AddAccount";
// import { thisExpression } from '@babel/types';
import '../../css/account.css';
import DepositWithdrawForm from './DepositWithdrawForm';

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
            lastUsedID: 0,
            currentIndex: -1
        }
    }

    // Add Account
    addAccount = (name, balance) => {
        this.accounts.addAccount(this.state.lastUsedID + 1, name, Number(balance));
        console.log(this.accounts.allAccounts);
        this.setState({
            accountsArray: this.accounts.allAccounts,
            lastUsedID: this.state.lastUsedID + 1,
            currentIndex: -1
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

        let index = this.accounts.allAccounts.map(each => each.id).indexOf(id);
        console.log('index: ', index);

        this.setState({ currentIndex: index });
    }

    depositWithdraw = (activityType, balance) => {
        console.log('activityType: ', activityType);
        console.log('balance: ', balance);

            switch (activityType) {
                case 'deposit':
                    this.accounts.allAccounts[this.state.currentIndex].deposit(Number(balance));
                    console.log(this.accounts.allAccounts);
                    this.setState({
                        accountsArray: this.accounts.allAccounts
                    });
                    break;
                case 'withdraw':
                    this.accounts.allAccounts[this.state.currentIndex].withdraw(Number(balance));
                    console.log(this.accounts.allAccounts);
                    this.setState({
                        accountsArray: this.accounts.allAccounts
                    });
                    break;
                default:
                    break;
            }
    }

    

    render() {
        return (
            <div>
            <div>
                <AppHeader />
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '40%' }}>
                    <AddAccount addAccount={this.addAccount} />
                    <AccController 
                        className="accountBackground" 
                        accountsArray={this.state.accountsArray} 
                        delAccount={this.delAccount} 
                        onClickAccount={this.onClickAccount}                        
                    />
                </div>
                <div style={{ width: '60%' }}>
                    {/* < AccControllerSummary accountsArray={this.state.accountsArray} /> */}
                    <div id="accSummaryDiv" style={this.summaryStyle()}>
                        <ul style={{ marginLeft: '10%', textAlign: 'left' }}>
                            <li>Highest Balance: ${this.accounts.checkHighest() === -Infinity ? '0' : this.accounts.checkHighest()}</li>
                            <li>Lowest Balance: ${this.accounts.checkLowest() === Infinity ? '0' : this.accounts.checkLowest()}</li>
                            <li>Total Balance: ${this.accounts.totalBalance()} </li>
                        </ul>
                    </div>
                        <DepositWithdrawForm activities={this.depositWithdraw} />
                </div>
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
