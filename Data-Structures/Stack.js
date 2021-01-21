// LIFO

class Stack {
    constructor() {
        this.container = [];
        this.size = 0;
    }

    push(val) {
        this.container.push(val);
        this.size++;
    }

    pop() {
        if(this.size <= 0) {
            return 'stack is empty';
        } else {
            this.size--;
            return this.container.pop();
        }
    }

    peek() {
        console.log('Next value to be popped:' + this.container[this.container.length - 1]); 
    }

    isEmpty() {
        return (this.container.size <= 0 ? true : false);
    }

    printStack() {
        var i = this.container.length;
        while(i >= 0) {
            console.log(this.container[i])
            i--;
        }
    }

}

const stack = new Stack();
stack.push(6)
stack.push(43)
stack.push(15)
stack.push(24)
stack.push(90)
stack.printStack()
//stack.pop()
stack.peek()
stack.printStack()