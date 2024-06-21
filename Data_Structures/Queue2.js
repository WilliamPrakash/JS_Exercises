
// FIFO
// Enqueue, dequeue, print

class Queue {
    constructor(size) {
        this.queue = new Array(size)
        this.pointer = this.queue.length - 1
    }
    
    // Add to Queue
    enqueue(val) {
        // Find next empty array element
        if(this.pointer < 0) {
            console.log('Full')
            return
        }
        this.queue[this.pointer] = val
        this.pointer--
    }

    // Remove from Queue
    dequeue() {
        //this.queue.splice(this.queue.length-1, 1)
        let i = this.queue.length - 1
        let ret = this.queue[i]
        while(this.queue[i] && this.queue[i-1]) {
            this.queue[i] = this.queue[i-1]
            i--
        }
        this.queue[i] = null
        this.pointer++
        this.queue.length++
    }

    print() {
        console.log(this.queue)
    }
}


let q = new Queue(10)
q.enqueue(5)
q.enqueue(4)
q.enqueue(3)
q.enqueue(2)
q.enqueue(1)
q.print()
q.dequeue()
q.print()
q.enqueue(10)
