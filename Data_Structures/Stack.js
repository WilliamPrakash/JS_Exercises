// LIFO




class Stack {
    constructor() {
        //this.size = 0
        this.pointer = 10
        this.stack = [10]
    }

    push(value) {
        // this line also decrements this.pointer
        this.stack[this.pointer--] = value
    }
    pop() {
        // what's the function to pop something off of an array?
        // I suppose I could use splice...
        console.log('value to be popped: ' + this.stack[this.pointer])
    }
    print() {
        console.log('*** Diagram of stack: ***\n')
        // print from top to bottom
        // start at pointer and work your way down (up index wise)
        console.log('   Index   |   Value  ')
        for(let i = this.pointer; i < this.stack.length; i++) {
            console.log(i + '  |  ' + this.stack[i])
        }
        console.log('*** End of stack ***')
    }

}

let stack1 = new Stack()
stack1.push('Will')
stack1.push('JP')
stack1.push('Rob')
stack1.print()
stack1.pop()

