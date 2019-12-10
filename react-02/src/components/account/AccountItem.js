import React, { Component } from 'react'
// import PropTypes from 'prop-types';
// import '../../css/account.css';

export class AccountItem extends Component {
    getStyle = (color) => {        
        return {
            background: color,
            color: 'black',
            padding: '5px',
            borderBottom: '1px #ccc dotted'
        }
    }

    render() {
        const { accountName, balance, id } = this.props.account
        return (
            <div style={this.getStyle(this.props.isActive ? "#bebebe" : "#f4f4f4")} onClick={() => this.props.onClickAccount(id)}>
                <p>
                    {accountName}
                    {' '}
                    {balance}
                    <button style={btnStyle} onClick={() => this.props.delAccount(id)}>x</button>
                </p>
            </div>
        )
    }
}

// PropTypes
// AccountItem.propTypes = {
//     account: PropTypes.object.isRequired
// }

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default AccountItem
