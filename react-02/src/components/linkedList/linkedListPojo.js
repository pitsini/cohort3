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

    first() {
        this.current = this.head;
    }

    last() {
        do {
            this.next();
        } while (this.current.forwardNode !== null)
    }

    next() {
        if (this.current.forwardNode === null) return `Error: This is the last node`;
        this.current = this.current.forwardNode;
        return `Successful: move to the next!`
    }

    previous() {
        // The current node is the first
        if (this.current === this.head) return `Error: There is no previous node for this current node`;
        
        // put the current node to variable
        const theCurrent = this.current;


        // Set current node to be the first
        this.first();

        // loop through linkedList to find which node that has forwardNode equal 'theCurrent'
        while (this.current.forwardNode !== theCurrent) {
            this.next();
        }
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

    delete() {
        switch (true) {
            // If there is 0 node in LinkedList
            case (this.current === null && this.head === null):
                return `Error: There is no node left in linkedList`;

            // If currentNode is the headNode
            case (this.current === this.head):
                // if there is only 1 node in LinkedList
                if (this.current.forwardNode === null) {
                    this.head = null;
                    this.current = null;
                }

                // if there are more than 1 node in Linkedlist
                else {
                    this.head = this.current.forwardNode;
                    this.next();
                }
                break;
            // If currentNode is the lastNode
            case (this.current.forwardNode === null):
                this.previous();
                this.current.forwardNode = null;
                break;

            default:
                const fNode = this.current.forwardNode;
                this.previous();
                this.current.forwardNode = fNode;
                break;
        }
    }

    total() {
        if (this.current === null) return 0;

        const currentNodeCopy = this.current;        
        this.first();
        let sum = this.current.amount;
        do {
            this.next();
            sum += this.current.amount;
        } while (this.current.forwardNode != null)

        this.current = currentNodeCopy;
        return sum;
    }
}