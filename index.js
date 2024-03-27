
// Collections

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

// https://codesandbox.io/p/sandbox/reverent-cherry-kyhf2x
// https://notistack.com/features/basic


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

const doubleLinkedList = new DoublyLinkedList();

// doubleLinkedList.append(1);
// doubleLinkedList.append(2);
// doubleLinkedList.append(3);
// doubleLinkedList.print();
// doubleLinkedList.display()

class HashTable {
    constructor(size = 100) {
        this.size = size;
        this.buckets = new Array(size);
    }

    hash(key) {
        return key.split('').reduce((acc, char) => {
            return acc + char.charCodeAt(0);
        }, 0) % this.size;
    }

    set(key, value) {
        const index = this.hash(key);

        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }

        for (let i = 0; i < this.buckets[index].length; i++) {
            if (this.buckets[index][i][0] === key) {
                this.buckets[index][i][1] = value;
                return;
            }
        }

        this.buckets[index].push([key, value]);
    }

    get(key) {
        const index = this.hash(key);
        if (this.buckets[index]) {
            for (let i = 0; i < this.buckets[index].length; i++) {
                if (this.buckets[index][i][0] === key) {
                    return this.buckets[index][i][1];
                }
            }
        }
        return undefined;
    }
}

const hashTable = new HashTable();

// hashTable.set('a', 'a value');
// hashTable.set('b', 'b value');

// console.log(hashTable.get('a'))
// console.log(hashTable.get('b'))

// hashTable.set('b', 'new b value');

// console.log(hashTable.get('b'))


// dictionary (js Map)
const dictionary = new Map();

// dictionary.set('apple', 'яблоко');
// dictionary.set('banana', 'банан');
// dictionary.set(123, 123);

// console.log(dictionary.get('apple'));

// console.log(dictionary)

// console.log("has orange", dictionary.has('orange')); 
// console.log("has 123", dictionary.has(123)); 

// dictionary.delete('banana');

// console.log("has banana", dictionary.has('banana'));


// Set (unique js array)
const set = new Set()

// set.add('a')
// set.add('b')
// set.add('b') // again

// console.log(set)

// Binary Tree
class BinaryNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new BinaryNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inorderHelper(node, callback) {
        if (node !== null) {
            this.inorderHelper(node.left, callback);
            callback(node);
            this.inorderHelper(node.right, callback);
        }
    }

    inorder(callback) {
        this.inorderHelper(this.root, callback);
    }

    printNodes() {
        this.inorder(node => console.log(node.value));
    }
}

const binaryTree = new BinaryTree();
// binaryTree.insert(10);
// binaryTree.insert(5);
// binaryTree.insert(15);
// binaryTree.insert(3);
// binaryTree.insert(8);

// binaryTree.printNodes()

// https://www.cs.usfca.edu/~galles/visualization/BST.html

// const result = {
//     value: 10,
//     left: {
//         value: 5,
//         left: {
//             value: 3,
//             left: null,
//             right: null
//         },
//         right: {
//             value: 8,
//             left: null,
//             right: null
//         }
//     },
//     right: {
//         value: 15,
//         left: null,
//         right: null
//     }
// }


class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            throw new Error('Vertex not found in graph');
        }

        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            throw new Error('Vertex not found in graph');
        }

        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            throw new Error('Vertex not found in graph');
        }

        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex];
    }

    printGraph() {
        const vertices = Object.keys(this.adjacencyList);
        for (let vertex of vertices) {
            const edges = this.adjacencyList[vertex].join(', ');
            console.log(`${vertex} => ${edges}`);
        }
    }
}

const graph = new Graph();

// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');

// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'C');
// graph.addEdge('A', 'D');
// graph.addEdge('B', 'D');
// graph.printGraph();









