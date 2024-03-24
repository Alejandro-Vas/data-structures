// Stack
class Stack {
    constructor() {
        this.length = 0;
        this.storage = {};
    };

    push(value) {
        this.storage[this.length] = value;
        this.length++;
    };

    pop() {
        if (this.length === 0) return undefined;
        this.length--;

        let result = this.storage[this.length];
        delete this.storage[this.length];
        return result;
    };

    length() {
        return this.length;
    };
}


const stack = new Stack();

// console.log("initial", stack.storage);

// stack.push('a')
// stack.push('b')
// stack.push('c')

// console.log("after push",stack.storage)
// stack.pop()
// console.log("result", stack.storage);

class Queue {
    constructor() {
        this.collection = []
    }

    print() {
        console.log(this.collection);
    };

    enqueue(element) {
        this.collection.push(element);
    };

    dequeue() {
        return this.collection.shift();
    };

    front() {
        return this.collection[0];
    };

    isEmpty() {
        return this.collection.length === 0;
    };

    length() {
        return this.collection.length;
    };
}

const queue = new Queue();

// queue.print();
// queue.enqueue("a");
// queue.enqueue("b");
// queue.enqueue("c");
// queue.print();
// queue.dequeue()
// queue.print();

