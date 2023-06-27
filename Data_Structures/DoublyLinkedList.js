
class Node {
    constructor(data) {
        this.previous = null
        this.node = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.next = null
        this.previous = null
    }

    add(data) {
        if(this.next == null) {
            this.next = new Node(data)
        } else {
            let current = this.next
            let prev
            while(current.next != null) {
                prev = current
                current = current.next
            }
            // need to assign the previous node at some point here...
            this.previous = prev
            current = new Node(data)
            // link to previous node
            if(this.previous == null) {
                
            }
        }
    }

    printForward() {

    }

    printBackward() {

    }
}

