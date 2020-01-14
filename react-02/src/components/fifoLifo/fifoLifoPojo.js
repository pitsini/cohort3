export class Queue {
    constructor() {
        this.queues = []
    }

    // Add items to the beginning of an array
    add(item) {
        // const myRandomPick = myBlockController.randomPick();
        this.queues.unshift(item);
    }

    // Remove an item from the end of an array
    remove() {
        this.queues.pop();
    }
}

export class Stack {
    constructor() {
        this.stacks = []
    }

    // Add items to the beginning of an array
    add(item) {
        this.stacks.unshift(item);
    }

    // Remove an item from the beginning of an array
    remove() {
        this.stacks.shift();
    }
}