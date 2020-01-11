import { ListNode, LinkedList } from './linkedListPojo'

test('test ListNode class', () => {
    let myListNode;
    myListNode = new ListNode(1,'Smith', 10);

    // Checking properties
    expect(myListNode.subject).toEqual('Smith');
    expect(myListNode.amount).toEqual(10);

    // Checing 'show' method
    expect(myListNode.show()).toEqual(`Subject: Smith | Amount: 10`);
    myListNode = new ListNode(0, 'Smith', 0);
    expect(myListNode.show()).toEqual(`Subject: Smith | Amount: 0`);
});
test('testing delete()', () => {
    // Create blank LinkedList
    const myLinkedList = new LinkedList();

    // --------- Testing 1 nodes in LinkedList ----------------
    // Insert() - Expect current node should be the last node
    myLinkedList.insert(1, 'A', 1);
    expect(myLinkedList.current.subject).toEqual('A');

    // delete() - Expect LunkedList should be empty
    myLinkedList.delete();
    expect(myLinkedList.current).toEqual(null);
    expect(myLinkedList.head).toEqual(null);

    // --------- Testing 2 nodes in LinkedList ----------------
    // Insert 2 nodes in linkedList
    // So myLinkedList is ... [ 'A' ==> 'B' ]
    myLinkedList.insert(1, 'A', 1);
    myLinkedList.insert(2, 'B', 2);
    expect(myLinkedList.current.subject).toEqual('B');

    // Move currentNode to be 'A'
    myLinkedList.first();
    expect(myLinkedList.current.subject).toEqual('A');

    // delete() - Expect current node should be 'B'
    myLinkedList.delete();
    expect(myLinkedList.current.subject).toEqual('B');
    expect(myLinkedList.head.subject).toEqual('B');

    // delete() - Expect LunkedList should be empty
    myLinkedList.delete();
    expect(myLinkedList.current).toEqual(null);
    expect(myLinkedList.head).toEqual(null);

    // --------- Testing 3 nodes in LinkedList ----------------
    // myLinkedList is ... [ 'A' ==> 'B' ==> 'C' ]
    myLinkedList.insert(1, 'A', 1);
    myLinkedList.insert(2, 'B', 2);
    myLinkedList.insert(3, 'C', 3);
    expect(myLinkedList.current.subject).toEqual('C');

    // Move currentNode to 'B'
    myLinkedList.previous();
    expect(myLinkedList.current.subject).toEqual('B');

    // delete() - Expect both current & head should be null
    myLinkedList.delete();
    expect(myLinkedList.current.subject).toEqual('A');
    expect(myLinkedList.head.subject).toEqual('A');
});

test('testing first(), last() and next()', () => {
    // Create blank LinkedList
    const myLinkedList = new LinkedList();

    // Insert 3 nodes in linkedList
    // So myLinkedList is ... [ 'A' ==> 'B' ==> 'C' ]
    myLinkedList.insert(1, 'A', 1);
    myLinkedList.insert(2, 'B', 2);
    myLinkedList.insert(3, 'C', 3);

    // Expect current node should be the last node
    expect(myLinkedList.current.subject).toEqual('C');

    // --------- Testing next() ----------------
    // next() - Expect return error message
    myLinkedList.next()
    expect(myLinkedList.msg).toContain(`Error: This is the last node`);

    // first() - Set current node on the first
    myLinkedList.first();
    expect(myLinkedList.current.subject).toEqual('A');

    // next() - Expect next node should be 'B'
    myLinkedList.next();
    expect(myLinkedList.current.subject).toEqual('B');

    // next() - Expect next node should be 'C'
    myLinkedList.next();
    expect(myLinkedList.current.subject).toEqual('C');

    // --------- Testing first() and last() ------------
    // set current node to be 'A' (using 'first' method)
    myLinkedList.first();
    expect(myLinkedList.current.subject).toEqual('A');
    myLinkedList.last();
    expect(myLinkedList.current.subject).toEqual('C');

    // --------- Testing previous() ----------------
    myLinkedList.previous();
    expect(myLinkedList.current.subject).toEqual('B');

    // first() - Expect error from previous()
    myLinkedList.first();
    myLinkedList.previous()
    expect(myLinkedList.msg).toContain(`Error: There is no previous node`);

});

test('Insert method testing', () => {
    // Create blank LinkedList
    const myLinkedList = new LinkedList();

    // Expect head and current node to be null
    expect(myLinkedList.current).toBeNull();
    expect(myLinkedList.head).toBeNull();
    
    // Expect error from inserting empty subject and amount
    myLinkedList.insert(1, '', 1)
    expect(myLinkedList.msg).toContain(`Error: Subject or amount is empty`);
    myLinkedList.insert(1, 'A', '')
    expect(myLinkedList.msg).toContain(`Error: Subject or amount is empty`);
    
    //-------------------------------------------------
    // Insert 'A' node (1st node) to LinkedList (Manually)
    // So myLinkedList is ... [ 'A' ]
    //-------------------------------------------------
    const aNode = new ListNode(1, 'A', 1);
    myLinkedList.head = aNode;
    myLinkedList.current = aNode;

    // Expect current node should be 'A' node
    expect(myLinkedList.current.subject).toEqual('A');
    expect(myLinkedList.current.amount).toEqual(1);
    expect(myLinkedList.current.forwardNode).toEqual(null);

    //-------------------------------------------------
    // Insert 'B' node to LinkedList (Using 'insert' method)
    // So myLinkedList should be ... [ 'A' ==> 'B' ]
    //-------------------------------------------------
    myLinkedList.insert(2, 'B', 2)
    expect(myLinkedList.msg).toContain('Successful');

    // Expect forwardNode of 'A' node should point to 'B' Node
    expect(aNode.forwardNode.subject).toEqual('B');

    // Expect current node should be 'B' node
    expect(myLinkedList.current.subject).toEqual('B');
    expect(myLinkedList.current.amount).toEqual(2);
    expect(myLinkedList.current.forwardNode).toEqual(null);

    // Set the current node to be 'aNode' (which is the first node)
    myLinkedList.current = aNode;

    //-------------------------------------------------
    // Insert 'C' node to LinkedList
    // So myLinkedList should be ... [ 'A' ==> 'C' ==> 'B' ]
    //-------------------------------------------------
    myLinkedList.insert(3, 'C', 3)
    expect(myLinkedList.msg).toContain('Successful');

    // Expect current node should be 'C' node
    expect(myLinkedList.current.subject).toEqual('C');
    expect(myLinkedList.current.amount).toEqual(3);

    // Expect forwardNode of 'A' node should point to 'B' Node
    expect(myLinkedList.current.forwardNode.subject).toEqual('B');
});

test('Total method testing', () => {
    // Insert 3 nodes in linkedList
    // So myLinkedList is ... [ 'A' ==> 'B' ==> 'C' ]
    const myLinkedList = new LinkedList();
    myLinkedList.insert(1, 'A', 1);
    myLinkedList.insert(2, 'B', 2);
    myLinkedList.insert(3, 'C', 3);

    myLinkedList.previous();
    expect(myLinkedList.total()).toEqual(6);
});