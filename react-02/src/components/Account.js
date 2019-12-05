import React, { Component } from 'react';
import { functions, AccountController } from '../scripts/account';
import '../css/account.css';

export class Account extends Component {
    constructor(props) {
        super()
        this.controller = new AccountController();
        this.state = {
            want2CreateAccount: false,
            createAccountBtnText: 'Create Account',
            allAccount: [],
            pointer: 0,
        }
    }

    createAccBtnClick = () => {
        console.log("Yo!");
        if (this.state.want2CreateAccount) {
            this.setState({ 
                want2CreateAccount: false,
                createAccountBtnText: 'Create Account',
            });
        } else {
            this.setState({
                want2CreateAccount: true,
                createAccountBtnText: 'Cancel',
            });
        };
    }

    createShowArea = () => {
        return (
            <div className='showArea'>
                <div className='showAccName'></div>
                <div className='showBalance'></div>
                <button className='removeAccBtn' onClick={this.removeAccountClick}>Remove</button>
            </div>
        );
    }

    addAccountClick = () => {
        let accountName = document.getElementById('accountName').value;
        let startingBalance = document.getElementById('startingBalance').value;
        if (accountName !== "" && startingBalance !== "") {
            // rounding number
            const roundAmount = functions.round2Digit(Number(startingBalance));
        
            // create account
            this.controller.addAccount(accountName, roundAmount);
            console.log(this.controller.allAccounts);

            // hide and show div
            this.createAccBtnClick();
            // document.getElementById('allAccDetailDiv').style.visibility = "hidden";
            document.getElementsByClassName("createAccBtn")[0].setAttribute("value", "Create Account");


            // create new div
            let newDiv = functions.createShowArea();
            newDiv.button.setAttribute('onclick', "console.log('Beep')");
            // let newDiv = this.createShowArea;
            // .setAttribute('onclick', "alert('click')");
            // newDiv.onClick = this.removeAccountClick();
            
            document.getElementById('showAllAccountDiv').appendChild(newDiv);

            // show name and balance
            const lastIndex = this.controller.allAccounts.length - 1;
            document.getElementsByClassName("showAccName")[lastIndex].textContent = this.controller.allAccounts[lastIndex].accountName;
            document.getElementsByClassName("showBalance")[lastIndex].textContent = this.controller.allAccounts[lastIndex].balance.toFixed(2);

            // clear value
            document.getElementById('accountName').value = "";
            document.getElementById('startingBalance').value = "";
            document.getElementById('showResult').textContent = "";

            // unhighlight in show area
            for (let i = 0; i < document.getElementById('showAllAccountDiv').children.length; i++) {
                document.getElementById('showAllAccountDiv').children[i].style.backgroundColor = "";
            }

            document.getElementById('accDetailDiv').style.visibility = "hidden";
            document.getElementById('accControllerArea').style.visibility = "visible";
        } else {
            alert("Please fill in account name and starting balance.");
        };
        
    }

    removeAccountClick = (event) => {
        // get index of current account
        // pointer = Array.prototype.slice.call(event.target.parentElement.parentElement.children).indexOf(event.target.parentElement);
        this.setState({
            pointer: Array.prototype.slice.call(event.target.parentElement.parentElement.children).indexOf(event.target.parentElement),
        });

        event.target.parentElement.remove();
        this.controller.removeAccBtn(this.pointer);

        // unhighlight in show area
        for (let i = 0; i < document.getElementById('showAllAccountDiv').children.length; i++) {
            document.getElementById('showAllAccountDiv').children[i].style.backgroundColor = "";
        }

        // hide div and buttons
        document.getElementById('accDetailDiv').style.visibility = "hidden";
        document.getElementById('accControllerArea').style.visibility = "hidden";
        document.getElementById('showResult').textContent = "";
    }

    render() {
        const want2CreateAccount = this.state.want2CreateAccount;
        let createAccountPanel;

        if (want2CreateAccount) {
            createAccountPanel = 
                <div>
                    <input type="text" name="accountName" id="accountName" placeholder="Account name" />
                    <input type="number" name="startingBalance" id="startingBalance" placeholder="$ Amount" />
                <input type="submit" value="Add Account" className="createAccSubmitBtn" onClick={this.addAccountClick} />
                </div>;
        } else {
            createAccountPanel = <div></div>;
        }

        return (
            <div>
                <div id="bigContainer">
                    <div className="container" id="allAccountDiv">
                        <div id="allAccHeadingDiv">
                            Account Summary
                            <input type="submit" value={this.state.createAccountBtnText} className="createAccBtn" onClick={this.createAccBtnClick} />              
                        </div>
                        <div id="allAccDetailDiv">
                            {createAccountPanel}
                        </div>
                        <hr />
                        <div id="showAllAccountDiv"></div>        
                    </div>
                    <div className="container" id="accControllerArea">
                        <input type="submit" value="Hightest Account" id="highestBtn" />
                        <input type="submit" value="Lowest Account" id="lowestBtn" />
                        <input type="submit" value="Total Balance" id="totalBtn" />
                        <div id="showResult"></div>
                    </div>
                    <div className="container" id="accDetailDiv">
                        <div id="accNameDiv">Account name: checking</div>
                        <div id="accBalanceDiv">Balance: $100</div>
                        <hr/>
                        <div className="accActivityDiv">
                            <select id="accActivityChoice">
                                <option value="deposit">Deposit</option>
                                <option value="withdraw">Withdraw</option>
                            </select>
                            <input type="number" name="amount" placeholder="amount" id="accActivityAmount" />
                            <input type="submit" value="Submit" id="accActivityBtn" />
                        </div>
                    </div>

                    <script type="module" src="./scripts/index.js"></script>
                </div>
            </div>
        );
    }
}