import React, { Component } from 'react'

export class DepositWithdrawForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activityType: 'deposit',
            balance: '',
            message: ''
        };
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('type: ', this.state.activityType);
        console.log('amount: ', this.state.balance);

        this.props.activities(this.state.activityType, this.state.balance);
        this.setState({ balance: '' });        
    }

    render() {
        return (
            <div id='accActivityDiv'>
                <h3 className='headerStyle'>Deposit / Withdraw</h3>
                <h4 className='headerStyle'>{this.props.currentAccName}</h4>
                <div style={{ display: 'flex' }}>
                    <select name='activityType' value={this.state.value} onChange={this.handleChange} style={{ width: '40%' }}>
                        <option value='deposit'>Deposit</option>
                        <option value='withdraw'>Withdraw</option>
                    </select>
                    <input
                        type="number"
                        name="balance"
                        style={{ flex: '4', padding: '5px', width: '40%' }}
                        placeholder="Amount"
                        value={this.state.balance}
                        onChange={this.handleChange}
                    />
                    <input
                        type="submit"
                        value="Submit"
                        className="btn"
                        style={{ flex: 1, padding: '5px', width: '20%' }}
                        onClick={this.handleSubmit}
                    />
                </div>
                <div>{this.state.message}</div>
            </div>
        )
    }
}

export default DepositWithdrawForm
