import React, { Component } from 'react'
import ClassCounter from './1/ClassCounter'
import HookCounter from './1/HookCounter'
import ClassCounterTwo from './1/ClassCounterTwo'
import HookCounterTwo from './1/HookCounterTwo'
import HookCounterThree from './1/HookCounterThree'
import HookCounterFour from './1/HookCounterFour'
import HookUseEffectOne from './1/HookUseEffectOne'
import ClassUseEffectOne from './1/ClassUseEffectOne'

class App extends Component {
    render() {
        return (
            <div style={{ color: 'white' }}>
                Exercise 1:
                <center>
                    <p>Class Component : <ClassCounter /></p>
                    <p>Hook Component : <HookCounter /></p>
                </center>
                <hr />
                Exercise 2:
                <center>
                    <p>Class Component : <ClassCounterTwo /></p>
                    <p>Hook Component : <HookCounterTwo /></p>
                </center>
                <hr />
                Exercise 3:
                <center>
                    <p>Hook Component : <HookCounterThree /></p>
                </center>
                <hr />
                Exercise 4:
                <center>
                    <p>Hook Component : <HookCounterFour /></p>
                </center>
                <hr />
                Exercise 5:
                <center>
                    <p>Class Component : <ClassUseEffectOne /></p>
                    <p>Hook Component : <HookUseEffectOne /></p>
                </center>
                <hr />
            </div>
        )
    }
}

export default App
