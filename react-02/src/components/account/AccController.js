import React, { Component } from 'react'
import AccountItem from "./AccountItem";
// import PropTypes from 'prop-types';

export class AccController extends Component {
    render() {
        // console.log(this.props.AccController);
        return this.props.accController.map((eachAccount) => (
            <AccountItem key={eachAccount.accountName}  account={eachAccount} />
        ));
    }
}

// PropTypes
// AccController.propTypes = {
//     accController: PropTypes.array.isRequired
// }

export default AccController
