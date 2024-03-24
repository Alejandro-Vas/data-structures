// Массивы


const array = [1, 2, 3, 4, 5];

// Stack
class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};

        this.push = function (value) {
            this.storage[this.count] = value;
            this.count++;
        };

        this.pop = function () {
            if (this.count === 0) return undefined;
            this.count--;
            let result = this.storage[this.count];
            delete this.storage[this.count];
            return result;
        };

        this.peek = function () {
            return this.storage[this.count - 1];
        };

        this.size = function () {
            return this.count;
        };
    }
}

const stack = new Stack();

console.log("intial", stack.storage);

stack.push('a')
stack.push('b')
stack.push('c')

console.log("after push",stack.storage)

console.log("peek", stack.peek())

console.log("storage", stack.storage);