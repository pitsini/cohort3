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

export class BlockController {
    constructor() {
        this.blocks = [
            "././images/FIFO_LIFO/1.gif",
            "././images/FIFO_LIFO/2.gif",
            "././images/FIFO_LIFO/3.gif",
            "././images/FIFO_LIFO/4.gif",
            "././images/FIFO_LIFO/5.gif",
            "././images/FIFO_LIFO/6.gif",
            "././images/FIFO_LIFO/7.gif",
            "././images/FIFO_LIFO/8.gif",
            "././images/FIFO_LIFO/9.gif"
        ]
    }

    randomPick() {
        const arr = this.blocks;
         return arr[Math.floor(Math.random() * arr.length)];
    }
}