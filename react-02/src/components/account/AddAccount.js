import React, { Component } from 'react'

export class AddAccount extends Component {
    state = {
        accountName: '',
        balance: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onClick = (e) => {
        e.preventDefault();     // prevent a browser to reload/refresh
        this.props.addAccount(this.state.accountName, this.state.balance);
        this.setState({ 
            accountName: '',
            balance: ''
        });
    }

    render() {
        return (
            <div style={{ display: 'flex' }}>
                <input
                    type="text"
                    name="accountName"
                    style={{ flex: '4', padding: '5px' }}
                    placeholder="Account Name"
                    value={this.state.accountName}
                    onChange={this.onChange}                    
                />
                <input
                    type="number"
                    name="balance"
                    style={{ flex: '4', padding: '5px' }}
                    placeholder="Balance"
                    value={this.state.balance}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Add Account"
                    className="btn"
                    style={{ flex: 1, padding: '5px' }}
                    onClick={this.onClick} 
                />
            </div>
        )
    }
}

export default AddAccount
