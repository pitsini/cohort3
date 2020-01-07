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
        // 1) show error if subject or amount is empty
        if (!subject || (!amount && typeof amount != 'number'))     // '!amount' is included when 'amount = 0'. That is why I need to check 'typeof' amount too
            return `Error: Subject or amount is empty`;

        // create new listNode
        const newNode = new ListNode(subject, amount);
        
        switch (true) {
            // 2) LinkedList has 0 node
            case (this.current === null):
                this.head = newNode;
                console.log('2')
                break;
            // 3) The current node is the last node
            case (this.current.forwardNode === null):
                this.current.forwardNode = newNode;
                console.log('3')
                break;
            
            // 4) The current node is not the last node
            default:
                newNode.forwardNode = this.current.forwardNode;
                this.current.forwardNode = newNode;
                console.log('4')
                break;
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