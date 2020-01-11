import React, { useState } from 'react'
import { LinkedList } from './linkedListPojo'
import '../../css/linkedList.css';


const myLinkedList = new LinkedList();
export function AppLinkedList() {
    const [node, setNode] = useState({ id: 1, subject: '', amount: '' }); 
    const [nodes, setNodes] = useState([]);
    const [msg, setMsg] = useState('');
    const [total, setTotal] = useState(0);
    let index = -1;


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
        myLinkedList.insert(node.id, node.subject, node.amount);

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
            index = nodes.map(e => e.id).indexOf(myLinkedList.current.id);
                nodes.splice(index + 1, 0, {
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
        <div className="flex_center">
            <div id="menu">
                <div className="white_border">
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
                        <button onClick={insertNode}>Insert</button>
                    </span>
                </div>
                <div id="showArea" className="white_border">
                    {nodes.map(node => (
                        <div key={node.id}>
                            {node.subject}: {node.amount}
                           </div>
                    ))}
                </div>
                <div id="showArea" className="white_border">
                    <h4>{msg}</h4>
                    <span className="flex_center">
                        <button onClick={firstNode}>First</button>
                        <button onClick={previousNode}>Previous</button>
                        <button onClick={deleteNode}>Delete</button>
                        <button onClick={nextNode}>Next</button>
                        <button onClick={lastNode}>Last</button>
                    </span>
                    <h4>Total Amount = {total}</h4>     
                </div>
            </div>
        </div>
    )
}