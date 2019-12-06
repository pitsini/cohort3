import React, { Component } from 'react'
// import PropTypes from 'prop-types';

export class AccountItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            color: 'black',
            padding: '5px',
            borderBottom: '1px #ccc dotted'
        }
    }
    render() {
        const { accountName, balance } = this.props.account
        return (
            <div style={this.getStyle()}>
                <p>
                    {accountName}
                    {' '}
                    {balance}
                    <button style={btnStyle}>x</button>
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
