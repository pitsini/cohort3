import React, { Component } from 'react'
import AccountItem from "./AccountItem";
// import PropTypes from 'prop-types';

export class AccController extends Component {
    render() {
        // console.log(this.props.accController.allAccounts.length);
        // return (
        //     <div></div>
        // )
        return this.props.accController.map((account) => (
            <AccountItem key={account.id} account={account} delAccount={this.props.delAccount} />
        ));
    }
}

// PropTypes
// AccController.propTypes = {
//     accController: PropTypes.array.isRequired
// }

export default AccController
