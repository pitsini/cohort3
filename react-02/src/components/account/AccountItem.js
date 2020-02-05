import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import '../../css/account.css';

export class AccountItem extends Component {
    getStyle = (color) => {        
        return {
            background: color,
            color: 'black',
            borderBottom: '1px #ccc dotted'
        }
    }

    render() {
        const { accountName, balance, id } = this.props.account
        return (
            <div style={this.getStyle(this.props.isActive ? "#bebebe" : "#f4f4f4")} onClick={() => this.props.onClickAccount(id)}>
                <div style={flex}>
                    <div style={showContent}>{accountName}</div>
                    <div style={showContent}>{balance.toFixed(2)}</div>
                    <div id="btnDiv">
                        <button style={btnStyle} onClick={() => this.props.delAccount(id)}>x</button>
                    </div>
                </div>
            </div>
        )
    }
}

// PropTypes
// AccountItem.propTypes = {
//     account: PropTypes.object.isRequired
// }

const flex = {
    display: 'flex',
    justifyContent: 'center'
}

const showContent = {
    width: '30%',
    margin: '10px',
}


const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '0px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    height: '30px',
    width: '30px'
}

export default AccountItem
