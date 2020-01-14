import { Queue, Stack } from './fifoLifoPojo'

test('test Queue class', () => {
    const myQueue = new Queue();

    // Add 1st item
    myQueue.add('Pink');
    expect(myQueue.queues).toEqual(['Pink']);

    // Add 2nd item
    myQueue.add('Green');
    expect(myQueue.queues).toEqual(['Green','Pink']);

    // Remove 1 item.. Should remove 'Pink'
    myQueue.remove();
    expect(myQueue.queues).toEqual(['Green']);
});

test('test Stack class', () => {
    const myStack = new Stack();

    // Add 1st item
    myStack.add('Black');
    expect(myStack.stacks).toEqual(['Black']);

    // Add 2nd item
    myStack.add('White');
    expect(myStack.stacks).toEqual(['White', 'Black']);

    // Remove 1 item.. Should remove 'White'
    myStack.remove();
    expect(myStack.stacks).toEqual(['Black']);
}); 