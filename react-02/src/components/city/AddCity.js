import React, { Component } from 'react'

class AddCity extends Component {
    state = {
        city: '',
        lat: '',
        long: '',
        population: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.value);
    };

    onClick = (e) => {
        e.preventDefault();     // prevent a browser to reload/refresh
        this.props.addCity(this.state.city, this.state.lat, this.state.long, this.state.population);
        this.setState({
            city: '',
            lat: '',
            long: '',
            population: ''
        });
    }

    render() {
        return (
            <div id="communityDetail">
                <input type="text" name="city" id="cityName" placeholder="City name" value={this.state.city} onChange={this.onChange} />
                <input type="number" name="lat" id="latitude" placeholder="Latitude" value={this.state.lat} onChange={this.onChange} />
                <input type="number" name="long" id="longitude" placeholder="Longitude" value={this.state.long} onChange={this.onChange} />
                <input type="number" name="population" id="population" placeholder="Population" value={this.state.population} onChange={this.onChange} />
                <input type="submit" value="Add" className="addCity" onClick={this.onClick} />
            </div>
        )
    }
}

export default AddCity
