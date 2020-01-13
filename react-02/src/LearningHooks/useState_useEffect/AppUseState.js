import React, { Component } from 'react'
import ClassCounter from './ClassCounter'
import HookCounter from './HookCounter'
import ClassCounterTwo from './ClassCounterTwo'
import HookCounterTwo from './HookCounterTwo'
import HookCounterThree from './HookCounterThree'
import HookCounterFour from './HookCounterFour'
import HookUseEffectOne from './HookUseEffectOne'
import ClassUseEffectOne from './ClassUseEffectOne'

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
