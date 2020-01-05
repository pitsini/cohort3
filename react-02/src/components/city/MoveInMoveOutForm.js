import React, { Component } from 'react'

export class MoveInMoveOutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activityType: 'moveIn',
            amount: '',
            // message: ''
        };
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('type: ', this.state.activityType);
        console.log('amount: ', this.state.amount);

        this.props.activities(this.state.activityType, this.state.amount);
        this.setState({ amount: '' });
        // this.setState({ activityType: 'deposit', balance: '' });
        
    }

    render() {
        return (
            <div>
                <select id="choice" name='activityType' value={this.state.value} onChange={this.handleChange}>
                    <option value="movedIn">Moved In</option>
                    <option value="movedOut">Moved Out</option>
                </select>
                <input 
                    type="number" 
                    name="amount" 
                    placeholder="Amount" 
                    id="moveInOut" 
                    value={this.state.amount}
                    onChange={this.handleChange}
                />
                <input 
                    type="submit" 
                    value="Submit" 
                    id="moveInOutBtn" 
                    onClick={this.handleSubmit}
                />
            </div>
        )
    }
}

export default MoveInMoveOutForm
