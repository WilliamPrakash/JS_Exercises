
// LIFO

class Stack {
    constructor() {
        this.frame = new Array(10)
        this.pointer = this.frame.length - 1    // modify this value
    }

    push(val) {
        this.frame[this.pointer] = val
        this.pointer -= 1
    }

    pop() {
        // pointer will be pointing to the top of the stack, aka, the next empty element
        console.log('popped value: ' + this.frame[this.pointer+1])
        this.frame.splice(this.pointer+1, 1)
        console.log(this.frame)
        this.pointer -= 1
    }

    isEmpty() {
        if(this.pointer == this.frame.length - 1) return true
        else return false
    }

    isFull() {
        if(this.pointer > 0) return true
        else return false
    }

    peek() {
        console.log('peek: ' + this.frame[this.pointer+1])
    }

    print() {
        console.log('*** Stack Frame ***')
        for(let i = this.pointer; i < this.frame.length; i++) {
            console.log(this.frame[i])
        }
        console.log('*******************')
    }
}


let stack = new Stack()
stack.push(10)
stack.push(7)
stack.push(24)
//stack.print()
//stack.pop()
stack.peek()

