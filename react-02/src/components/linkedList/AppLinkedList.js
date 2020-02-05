import React, { useState } from 'react'
import { LinkedList } from './linkedListPojo'
import '../../css/linkedList.css';
import { themes, ButtonThemeContext, ToggleThemeContext } from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';

const myLinkedList = new LinkedList();

export function AppLinkedList() {
    const [node, setNode] = useState({ id: 1, subject: '', amount: '' }); 
    const [nodes, setNodes] = useState([]);
    const [msg, setMsg] = useState('');
    const [total, setTotal] = useState(0);
    let index = -1;

    // Context exercise
    const [theme, setTheme] = useState(themes.green);

    const toggleTheme = () => {
        setTheme(preTheme => (
            preTheme === themes.green
                ? themes.yellow
                : themes.green
        ))
    }
    
    const deleteNode = () => {
        // still has node in linkedList
        if (myLinkedList.current) {
            index = nodes.map(e => e.id).indexOf(myLinkedList.current.id);
            nodes.splice(index, 1);
            setNodes(nodes);
        } 

        myLinkedList.delete();
        setTotal(myLinkedList.total());
        if (myLinkedList.msg) setMsg(myLinkedList.msg);        
    }

    const insertNode = () => {
        // console.log('nodes', nodes);
        // console.log('id', myLinkedList.current.id);
        // console.log('index', index);

        if (myLinkedList.current) {
            index = nodes.map(e => e.id).indexOf(myLinkedList.current.id);
        }
        myLinkedList.insert(node.id, node.subject, node.amount);
        setMsg(myLinkedList.msg);
        console.log('myLinkedList.msg', myLinkedList.msg);
        // if textbox is not empty
        if (!myLinkedList.msg.includes('Error')) {
            if (!myLinkedList.current || !myLinkedList.current.forwardNode ) {
                setNodes([...nodes, {
                    id: node.id,
                    subject: node.subject,
                    amount: node.amount
                }]);
            }
            else {
                // index = nodes.map(e => e.id).indexOf(myLinkedList.current.id);


                nodes.splice(index+1, 0, {
                    id: node.id,
                    subject: node.subject,
                    amount: node.amount
                });
                setNodes(nodes);
            }

            setTotal(myLinkedList.total());
            setNode({ 
                id: node.id + 1,
                subject: '',
                amount: ''
            })
        }
        if (myLinkedList.msg) setMsg(myLinkedList.msg);
    }

    const previousNode = () => {
        myLinkedList.previous();
        if (myLinkedList.msg) setMsg(myLinkedList.msg);
    }

    const nextNode = () => {
        myLinkedList.next();
        if (myLinkedList.msg) setMsg(myLinkedList.msg);
    }

    const firstNode = () => {
        myLinkedList.first();
        if (myLinkedList.msg) setMsg(myLinkedList.msg);
    }

    const lastNode = () => {
        myLinkedList.last();
        if (myLinkedList.msg) setMsg(myLinkedList.msg);
    }

    return (
        <div>
            <ButtonThemeContext.Provider value={theme}>
                <ToggleThemeContext.Provider value={toggleTheme}>
                    <ThemeTogglerButton  />
                    <div className="flex_center">
                        <div id="menu">
                            <div className="white_border" style={{ background: theme.background }}>
                                <h2>Linked List</h2>
                                <span>
                                    <input
                                        type="text"
                                        placeholder="Subject..."
                                        value={node.subject}
                                        onChange={e => setNode({ ...node, subject: e.target.value })}
                                    />
                                    <input
                                        type="number"
                                        placeholder="Amount..."
                                        value={node.amount}
                                        onChange={e => setNode({ ...node, amount: e.target.value })}
                                    />
                                    <button onClick={insertNode} 
                                        style={{ background: theme.backgroundBtn }}>
                                    Insert
                                    </button>
                                </span>
                            </div>
                            <div id="showArea" className="white_border">
                                {nodes.map(node => (
                                    <div key={node.id}>
                                        {node.subject}: {node.amount}
                                    </div>
                                ))}
                            </div>
                            <div id="showArea" className="white_border" style={{ background: theme.background }}>
                                <h4>{msg}</h4>
                                <span className="flex_center">
                                    <button onClick={firstNode} style={{ background: theme.backgroundBtn }}>First</button>
                                    <button onClick={previousNode} style={{ background: theme.backgroundBtn }}>Previous</button>
                                    <button onClick={deleteNode} style={{ background: theme.backgroundBtn }}>Delete</button>
                                    <button onClick={nextNode} style={{ background: theme.backgroundBtn }}>Next</button>
                                    <button onClick={lastNode} style={{ background: theme.backgroundBtn }}>Last</button>
                                </span>
                                <h4>Total Amount = {total}</h4>     
                            </div>
                        </div>
                    </div>
                </ToggleThemeContext.Provider>
            </ButtonThemeContext.Provider>
        </div>
    )
}