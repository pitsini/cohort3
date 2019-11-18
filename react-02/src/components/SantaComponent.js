import React from 'react';

const MyComponent = (props) => {
    return (
        <div>
            <h1>{props.sayWhat}</h1>
            <button onClick={props.pushChange}>Push Me</button>
        </div>
    )
}

const EvenComponent = (props) => {
    return <h1>Even</h1>
}

const OddComponent = (props) => {
    return <h1>Odd</h1>
}
 
export { MyComponent, EvenComponent, OddComponent };