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


// linked list

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    display() {
        console.log(this.head)
    }
}

const list = new LinkedList();
// list.append(1);
// list.append(2);
// list.append(3);

// list.print();

// list.display();

// const result = {
//     data: 1,
//     next: {
//         data: 2, 
//         next: {
//             data: 3,
//             next: null
//         }
//     }
// }

class DoublyLinkedNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const newNode = new DoublyLinkedNode(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    display() {
        console.log("head", this.head);
        console.log("tail", this.tail);
    }
}

// const doubleLinkedList = new DoublyLinkedList();
// doubleLinkedList.append(1);
// doubleLinkedList.append(2);
// doubleLinkedList.append(3);
// doubleLinkedList.print();
// doubleLinkedList.display()


