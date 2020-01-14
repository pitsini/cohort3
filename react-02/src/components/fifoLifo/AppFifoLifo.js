import React, { useState, useContext } from 'react'
import { Queue, Stack } from './fifoLifoPojo'
import { RandomImage } from './randomImage.js'
import { themes, ButtonThemeContext, ToggleThemeContext } from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';
import '../../css/fifoLifo.css';

const myQueue = new Queue();
const myStack = new Stack();

export function AppFifoLifo() {
    // Context exercise
    const [theme, setTheme] = useState(themes.blue);

    const toggleTheme = () => {
        setTheme(preTheme => (
            preTheme === themes.blue
                ? themes.pink
                : themes.blue
        ))
    }
    
    return (
        <ButtonThemeContext.Provider value={theme}>
            <ToggleThemeContext.Provider value={toggleTheme}>
                <ThemeTogglerButton />
                <div className="flexCenter">
                    <Fifo />
                    <Lifo />
                </div>
            </ToggleThemeContext.Provider>
        </ButtonThemeContext.Provider>
    )
}

export function Fifo() {
    // useContext
    const theme = useContext(ButtonThemeContext);

    const [randomPick, setRandomPick] = useState();
    const [msg, setMsg] = useState();
    const [queues, setQueues] = useState([]);

    const randomItem = () => {
        const theOne = RandomImage();
        setRandomPick(theOne);
    }

    const addQueue = () => {
        if (!randomPick) { 
            setMsg(`Please random item first`);
            return;
        }
        setQueues([randomPick, ...queues]);
        myQueue.add(randomPick);

        setMsg(`Added new item on top!`);
    }

    const removeQueue = () => {
        if (queues.length === 0) {
            setMsg(`No more item to remove`);
            return;
        }
        myQueue.remove();
        setQueues(queues.slice(0, queues.length - 1));
        setMsg(`Took item out from the bottom`);
    }

    return (
        <div className="flexCenter">
                <div className="white_border main">
                    <h3>Queue (FIFO - First In First Out)</h3>
                    <div className="white_border"  style={{ background: theme.background }}>                            
                    <button style={{ background: theme.backgroundBtn }} onClick={randomItem}>
                        Random Item
                    </button>
                    <h5>{randomPick}</h5>
                    </div>                    
                <div id="showArea" className="white_border" style={{ background: theme.background }}>
                    <div className="flexCenter">
                        <button onClick={addQueue} style={{ background: theme.backgroundBtn }}>Put In</button>
                        <button onClick={() => removeQueue()} style={{ background: theme.backgroundBtn }}>Take Out</button>
                    </div>
                    <h4>{msg}</h4>
                </div>
                <div id="showArea" className="white_border whiteBg">
                    {myQueue.queues}
                </div>
            </div>
        </div>
    )
}

export function Lifo() {
    // useContext
    const theme = useContext(ButtonThemeContext);

    const [randomPick, setRandomPick] = useState();
    const [msg, setMsg] = useState();
    const [stacks, setStacks] = useState([]);

    const randomItem = () => {
        const theOne = RandomImage();
        setRandomPick(theOne);
    }

    const addStack = () => {
        if (!randomPick) {
            setMsg(`Please random item first`);
            return;
        }
        setStacks([randomPick, ...stacks]);
        myStack.add(randomPick);

        setMsg(`Added new item on top!`);
    }

    const removeStack = () => {
        if (stacks.length === 0) {
            setMsg(`No more item to remove`);
            return;
        }
        myStack.remove();
        setStacks(stacks.slice(1, stacks.length));
        setMsg(`Took item out from the top`);
    }

    return (
        <div className="flexCenter">
            <div className="white_border main">
                <h3>Stack (LIFO - Last In First Out)</h3>
                <div className="white_border" style={{ background: theme.background }}>
                    <button style={{ background: theme.backgroundBtn }} onClick={randomItem}>
                        Random Item
                    </button>
                    <h5>{randomPick}</h5>
                </div>
                <div id="showArea" className="white_border" style={{ background: theme.background }}>
                    <div className="flexCenter">
                        <button onClick={addStack} style={{ background: theme.backgroundBtn }}>Put In</button>
                        <button onClick={() => removeStack()} style={{ background: theme.backgroundBtn }}>Take Out</button>
                    </div>
                    <h4>{msg}</h4>
                </div>
                <div id="showArea" className="white_border whiteBg">
                    {myStack.stacks}
                </div>
            </div>
        </div>
    )
}