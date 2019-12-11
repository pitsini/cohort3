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

    onClickAccount = (selectedId) => {
        this.setActiveDiv(selectedId);
        return this.props.onClickAccount(selectedId);
    }

    isActive = (id) => {
        return this.state.selectedId === id;
    }

    setActiveDiv = (selectedId) => {
        this.setState({ selectedId });
    }

    render() {
        // const { accountName, balance, id } = this.props.account
        return this.props.accountsArray.map((account) => (
            <AccountItem 
                isActive={this.isActive(account.id)} 
                key={account.id} 
                account={account} 
                delAccount={this.props.delAccount} 
                onClickAccount={this.onClickAccount} 
            />
        ));
    }
}


// export class AccControllerSummary extends Component {
//     summaryStyle = () => {
//         return {
//             background: '#575757',
//             color: '#fff',
//             // textAlign: 'center',
//             padding: '2px',
//         }
//     }

//     render() {
//         // const { accountName, balance, id } = this.props.account
//         const Highest = this.props.accountsArray.checkHighest();
//         return (
//             <div id="accSummaryDiv" style={this.summaryStyle()}>
//                 <ul style={{
//                     marginLeft: '10%',
//                     textAlign: 'left'
//                 }}>
//                     <li>Highest: Checking Account: $100</li>
//                     <li>Lowest: Saving Account: $50</li>
//                     <li>Total Balance: $150</li>
//                 </ul>
//             </div>
//         )
//     }
// }

// PropTypes
// AccController.propTypes = {
//     accController: PropTypes.array.isRequired
// }

// export default AccController
