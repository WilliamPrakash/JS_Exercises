
class Queue {
    constructor() {
        this.container = new Array(10)
        this.frontPointer = this.container.length - 1
        this.backPointer = this.container.length - 1
    }

    enqueue(val) {
        this.container[this.backPointer] = val
        if(this.backPointer == 0) this.backPointer = this.container.length
        //else if (this.backPointer == this.frontPointer) console.log('queue full')
        else this.backPointer -= 1
    }

    dequeue() {
        console.log('dequeued value: ' + this.container[this.frontPointer])
        this.container.splice(this.frontPointer, 1)
        this.frontPointer -= 1
    }

    printQueue() {
        console.log(this.container)
    }

}

// Initialize instance of Queue
const queue = new Queue();
queue.enqueue(5)
queue.enqueue(21)
queue.enqueue(17)
queue.enqueue(90)
queue.enqueue(43)
queue.enqueue(55)
queue.enqueue(101)
queue.enqueue(38)
queue.enqueue(72)
queue.enqueue(64)
queue.printQueue()
queue.dequeue()
queue.printQueue()



