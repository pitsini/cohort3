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
        this.duplicate = false;
        this.state = {
            accountsArray: this.accounts.allAccounts,
            lastUsedID: 0,
            currentIndex: -1,
            message1: "",
            message2: ""
        }
    }

    // Add Account
    addAccount = (name, balance) => {
        if (name === "" || balance === "") {
            this.setState({ 
                message1: "Account name or balance can't be blank",
                message2: "" });
            return;
        } else if (balance <= 0) {
            this.setState({
                message1: "Balance can't be less than or equal 0",
                message2: ""
            });
        return;
        }
        
        // checking duplicate account
        this.duplicate = false;
        this.accounts.allAccounts.forEach(each => {
            if (each.accountName === name) {
                this.duplicate = true;
            }
        })
        console.log("duplicate", this.duplicate);

        if (this.duplicate === true) {
            this.setState({
                message1: "Account name is already exists",
                message2: ""
            });
            return;
        }

        this.accounts.addAccount(this.state.lastUsedID + 1, name, Number(balance));
        console.log(this.accounts.allAccounts);
        this.onClickAccount(this.state.lastUsedID + 1);
        this.setState({
            accountsArray: this.accounts.allAccounts,
            lastUsedID: this.state.lastUsedID + 1,
            // currentIndex: -1,
            message1: "",
            message2: ""
        });
    }

    delAccount = (id) => {
        this.accounts.removeAccount(id);
        this.setState({ accountsArray: this.accounts.allAccounts });

        console.log(this.accounts.allAccounts);
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
        console.log('allAccounts: ', this.accounts.allAccounts);
        console.log('currentIndex: ', this.state.currentIndex);

        // Check if any account has been selected
        if (this.state.currentIndex === -1) {
            this.setState({
                message1: "",
                message2: "No account has been selected. Choose account on your left." 
            });
            return;
        }

        // Check if balance input is empty or <= 0
        if (balance === "") {
            this.setState({
                message1: "",
                message2: "Amount box can't be empty"
            });
            return;
        } else if (balance <= 0) {
            this.setState({
                message1: "",
                message2: "Amount can't be less than or equal 0"
            });
            return;
        }

            switch (activityType) {
                case 'deposit':
                    this.accounts.allAccounts[this.state.currentIndex].deposit(Number(balance));
                    console.log(this.accounts.allAccounts);
                    this.setState({
                        accountsArray: this.accounts.allAccounts,
                        message1: "",
                        message2: "Successful deposit"
                    });
                    break;
                case 'withdraw':
                    this.accounts.allAccounts[this.state.currentIndex].withdraw(Number(balance));
                    console.log(this.accounts.allAccounts);
                    this.setState({
                        accountsArray: this.accounts.allAccounts,
                        message1: "",
                        message2: "Successful withdraw"
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
                    <div className="redTxt">{this.state.message1}</div>
                    <AddAccount addAccount={this.addAccount} />
                    <div id="accountHeader" className="flex">
                        <div className="col30width">Account Name</div>
                        <div className="col30width">Balance</div>
                    </div>
                    <AccController
                        className="accountBackground" 
                        accountsArray={this.state.accountsArray} 
                        delAccount={this.delAccount} 
                        onClickAccount={this.onClickAccount}                        
                    />
                </div>
                <div style={{ width: '60%' }}>
                        <div id="accSummaryDiv" style={this.summaryStyle()}>
                            <div>Highest Balance: ${this.accounts.checkHighest() === -Infinity ? '0.00' : this.accounts.checkHighest().toFixed(2)}</div>
                            <div>Lowest Balance: ${this.accounts.checkLowest() === Infinity ? '0.00' : this.accounts.checkLowest().toFixed(2)}</div>
                            <div>Total Balance: ${this.accounts.totalBalance().toFixed(2)} </div>
                        {/* <ul style={{ marginLeft: '10%', textAlign: 'left' }}>
                                <li>Highest Balance: ${this.accounts.checkHighest() === -Infinity ? '0' : this.accounts.checkHighest().toFixed(2)}</li>
                                <li>Lowest Balance: ${this.accounts.checkLowest() === Infinity ? '0' : this.accounts.checkLowest().toFixed(2)}</li>
                                <li>Total Balance: ${this.accounts.totalBalance().toFixed(2)} </li>
                        </ul> */}
                    </div>
                    <div className="redTxt">{this.state.message2}</div>
                        <DepositWithdrawForm activities={this.depositWithdraw} currentAccName={this.state.currentIndex !== -1 ? "for "+this.accounts.allAccounts[this.state.currentIndex].accountName+" Account":""} />
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
