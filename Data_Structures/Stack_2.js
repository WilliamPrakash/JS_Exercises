

class stack {
    constructor(size) {
        this.stack = new Array(size)
        // always point to empty index
        this.pointer = size.length
    }

    push(val) {
        if (this.pointer == 0) return
        this.stack[this.pointer] = val
        this.pointer--
    }

    pop() {
        if(isEmpty) return
        //this.stack[this.pointer] = 
    }

    isEmpty() {
        if(this.stack.length == 0  ) {
            return true
        } else {
            return false
        }
    }

    print () {
        console.log(this.stack)
    }
}


let s1 = new stack(10)
s1.push(1)
s1.push(5)
s1.print()