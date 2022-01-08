
class Queue {
    constructor() {
        this.container = [];
    }

    enqueue(val) {
        this.container.push(val);
    }

    dequeue() {
        if(this.container.length == 0) {
            console.log('Queue is empty...');
        }
        console.log(this.container.shift());
    }

    front() {
        if(this.container.length == 0) {
            console.log('Queue is empty...');
        }
        console.log('front of queue: ' + this.container[0])
    }
    
    isEmpty() {
        return( this.container.length <= 0 ? true : false);
    }

    printQueue() {
        var i = 0;
        var output = ''
        // you gotta print it in reverse if you wanna
        while(i < this.container.length) {
            output += this.container[i] + "    ";
            i++;
        }
        console.log(output);
    }

}

// Initialize instance of Queue
const queue = new Queue();
queue.enqueue(18);
queue.enqueue(7);
queue.enqueue(62);
queue.enqueue(32);
queue.enqueue(75);
queue.printQueue();
queue.front();
queue.dequeue();
queue.printQueue();



