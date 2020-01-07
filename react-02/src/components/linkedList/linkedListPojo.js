export class ListNode {
    constructor(subject, amount) {
        this.subject = subject;
        this.amount = amount;
        this.forwardNode = null;
    }

    show() {
        return `Subject: ${this.subject} | Amount: ${this.amount}`;      
    }
}

export class LinkedList {
    constructor() {
        this.current = null;
        this.head = null;
    }

    insert(subject, amount) {
        // 1) Show error if subject or amount is empty
        // '!amount' is included when 'amount = 0'. That is why I need to check 'typeof' amount too.
        if (!subject || (!amount && typeof amount != 'number')) return `Error: Subject or amount is empty`;

        // create new listNode
        const newNode = new ListNode(subject, amount);
        
        // 2) LinkedList has 0 node
        if (this.current === null) this.head = newNode;

        // 3) The current node is the last node
        else if (this.current.forwardNode === null) this.current.forwardNode = newNode;

        // 4) The current node is not the last node
        else {  
            newNode.forwardNode = this.current.forwardNode;
            this.current.forwardNode = newNode;
        }

        // Set current to be the new node
        this.current = newNode;
        return `Successful insert!`
    }

    first() {
        return this.head;
    }

    last() {

    }

    next() {

    }

    previous() {

    }

    // insert

    delete() {

    }

    total() {

    }
}