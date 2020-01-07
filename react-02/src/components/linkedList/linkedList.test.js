import { ListNode, LinkedList } from './linkedListPojo'

test('test ListNode class', () => {
    let myListNode;
    myListNode = new ListNode('Smith', 10);

    // checking properties
    expect(myListNode.subject).toEqual('Smith');
    expect(myListNode.amount).toEqual(10);

    // checing 'show' method
    expect(myListNode.show()).toEqual(`Subject: Smith | Amount: 10`);
    myListNode = new ListNode('Smith', 0);
    expect(myListNode.show()).toEqual(`Subject: Smith | Amount: 0`);
});

test('test LinkedList class', () => {
    // create blank LinkedList
    const myLinkedList = new LinkedList();

    // Expect head and current node to be null
    expect(myLinkedList.current).toBeNull();
    expect(myLinkedList.head).toBeNull();
    
    // Expect error from inserting empty subject and amount
    expect(myLinkedList.insert('', 1)).toEqual(`Error: Subject or amount is empty`);
    expect(myLinkedList.insert('A', '')).toEqual(`Error: Subject or amount is empty`);
    
    //-------------------------------------------------
    // Insert 'A' node (1st node) to LinkedList (Manually)
    // So myLinkedList is ... [ 'A' ]
    //-------------------------------------------------
    const aNode = new ListNode('A', 1);
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
    expect(myLinkedList.insert('B', 2)).toContain('Successful');

    // Expect forwardNode of 'A' node should point to 'B' Node
    expect(aNode.forwardNode.subject).toEqual('B');

    // Expect current node should be 'B' node
    expect(myLinkedList.current.subject).toEqual('B');
    expect(myLinkedList.current.amount).toEqual(2);
    expect(myLinkedList.current.forwardNode).toEqual(null);

    // set the current node to be 'aNode' (which is the first node)
    myLinkedList.current = aNode;

    //-------------------------------------------------
    // Insert 'C' node to LinkedList
    // So myLinkedList should be ... [ 'A' ==> 'C' ==> 'B' ]
    //-------------------------------------------------
    expect(myLinkedList.insert('C', 3)).toContain('Successful');

    // Expect current node should be 'C' node
    expect(myLinkedList.current.subject).toEqual('C');
    expect(myLinkedList.current.amount).toEqual(3);

    // Expect forwardNode of 'A' node should point to 'B' Node
    expect(myLinkedList.current.forwardNode.subject).toEqual('B');
});