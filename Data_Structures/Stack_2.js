

class stack {
    constructor(size) {
        this.stack = new Array(size)
        this.pointer = this.stack.length - 1
    }

    push(val) {
        if (this.pointer == 0) {
            console.log('Stack is full')
            return
        }
        this.stack[this.pointer] = val
        this.pointer--
    }

    pop() {
        if(this.isEmpty()) {
            console.log('Stack is empty')
            return
        }
        this.stack.pop()
    }

    isEmpty() {
        if(this.stack.length == 0) {
            return true
        } else {
            return false
        }
    }

    print () {
        console.log(this.stack)
    }
}


let s1 = new stack(5)
s1.push(1)
s1.push(5)
s1.push(14)
s1.push(27)
s1.print()
s1.pop()
s1.pop()
s1.pop()
s1.pop()
s1.pop() // popping: <1 empty item>
//s1.pop()
s1.print()
