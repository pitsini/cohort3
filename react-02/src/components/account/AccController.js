import React, { Component } from 'react'
import AccountItem from "./AccountItem";
// import PropTypes from 'prop-types';

export class AccController extends Component {
    constructor () {
        super();
        this.state = {
            selectedId: 0
        }        
    }

    componentDidMount() {
        console.log("didMount from control");
    }

    onClickAccount = (selectedId) => {
        this.setActiveTab(selectedId);
        return this.props.onClickAccount(selectedId);
    }

    isActive = (id) => {
        return this.state.selectedId === id;
    }

    setActiveTab = (selectedId) => {
        this.setState({ selectedId });
    }

    render() {
        // const { accountName, balance, id } = this.props.account
        return this.props.accountsArray.map((account) => (
            <AccountItem isActive={this.isActive(account.id)} key={account.id} account={account} delAccount={this.props.delAccount} onClickAccount={this.onClickAccount} />
        ));
    }
}

// PropTypes
// AccController.propTypes = {
//     accController: PropTypes.array.isRequired
// }

export default AccController
