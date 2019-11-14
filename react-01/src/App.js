import React, { Component } from 'react';
import { MyComponent, EvenComponent, OddComponent} from './components/MyComponent';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.counter = 21;
    this.state = {
      myState: "TBD",

    }
  }

  onPushMe = (event) => {
    console.log("You pushed me");
    this.counter ++;
    this.setState({
      myState: "now:" + this.counter
    });
  }

  EvenOrOdd = (props) => {
    if (props.countNumber % 2 === 0) { //even
    return <EvenComponent />;
  }
    return <OddComponent />; //odd
}

  render() {
    const whatToSay = "What Ever";
    
    return (
      
      <div className="App">
        <header className="App-header">
          <this.EvenOrOdd countNumber={this.counter}/>
          <MyComponent sayWhat={whatToSay} pushChange={this.onPushMe} />
          {/* <MyComponent sayWhat={whatToSay} pushChange={this.onPushMe} /> */}
          <img src={logo} className="App-logo" alt="logo" />
          <h1>I am in control of this application and my name is New {this.state.myState}</h1>

          if Even
          <EvenComponent />
          else 

          <OddComponent />
          {/* <button onClick={this.onPushMe}>
            Push Me
          </button> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
