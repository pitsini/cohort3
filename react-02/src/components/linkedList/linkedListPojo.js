export class ListNode {
    constructor(id, subject, amount) {
        this.id = id;
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
        this.msg = '';
    }

    first() {
        if (this.current === null) {
            this.msg = `Error: No node on linkedlist`;
            return;
        }

        this.current = this.head;
        this.msg = `Successful first [${this.current.subject}: ${this.current.amount}]`
    }

    last() {
        if (this.current === null) {
            this.msg = `Error: No node on linkedlist`;
            return;
        }

        do {
            this.next();
        } while (this.current.forwardNode !== null)
        this.msg = `Successful last [${this.current.subject}: ${this.current.amount}]`
    }

    next() {
        this.msg = '';
        if (this.current === null) { this.msg = `Error: No node on linkedlist`; }
        else if (this.current.forwardNode === null) { this.msg = `Error: This is the last node`; }
        else {
            this.current = this.current.forwardNode;
            this.msg = `Successful next [${this.current.subject}: ${this.current.amount}]`
        }        
    }

    previous() {
        this.msg = '';
        // The current node is the first

        if (this.current === null) { this.msg = `Error: No node on linkedlist`; }
        else if (this.current === this.head) { this.msg = `Error: There is no previous node`; }
        else {
            // put the current node to variable
            const theCurrent = this.current;

            // Set current node to be the first
            this.first();

            // loop through linkedList to find which node that has forwardNode equal 'theCurrent'
            while (this.current.forwardNode !== theCurrent) {
                this.next();
            }
            // this.msg = `Successful: move to the previous!`
            this.msg = `Successful previous [${this.current.subject}: ${this.current.amount}]`
        }
    }

    insert(id, subject, amount) {
        this.msg = '';
        // 1) Show error if subject or amount is empty
        // '!amount' is included when 'amount = 0'. That is why I need to check 'typeof' amount too.
        if (!subject || (!amount && typeof amount != 'number')) {
            this.msg = `Error: Subject or amount is empty`;
            return;
        }

        // create new listNode
        const newNode = new ListNode(id, subject, amount);

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
        this.msg = `Successful insert [${this.current.subject}: ${this.current.amount}]`
    }

    delete() {
        if (this.current === null) { 
            this.msg = `Error: No node on linkedlist`; 
            return; 
        }
        
        const delSubject = this.current.subject;
        const delAmount = this.current.amount;
        this.msg = ``;
        switch (true) {
            // If there is 0 node in LinkedList
            case (this.current === null && this.head === null):
                this.msg = `Error: There is no node left in linkedList`;
                break;

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
                this.msg = `Successful delete [${delSubject}: ${delAmount}]`;
                break;

            // If currentNode is the lastNode
            case (this.current.forwardNode === null):
                this.previous();
                this.current.forwardNode = null;
                this.msg = `Successful delete [${delSubject}: ${delAmount}]`;
                break;

            default:
                const fNode = this.current.forwardNode;
                this.previous();
                this.current.forwardNode = fNode;
                this.msg = `Successful delete [${delSubject}: ${delAmount}]`;
                break;
        }
    }

    total() {
        if (this.current === null) return 0;

        const currentNodeCopy = this.current;        
        this.first();
        let sum = Number(this.current.amount);
        while (this.current.forwardNode != null) {
            this.next();
            sum += Number(this.current.amount);
        } 

        this.current = currentNodeCopy;
        return sum;
    }
}