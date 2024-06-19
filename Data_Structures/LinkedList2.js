/* Practice */

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    add(val) {
        if (this.size == 0) {
            this.head = new Node(val)
            this.size++
        } else {
            let current = this.head
            while(current.next != null) {
                current = current.next
            }
            let newNode = new Node(val)
            current.next = newNode
            this.size++
        }
    }

    addAt(val, indx) {
        // currently assuming 
        let current = this.head
        for(let i = 0; i < indx-1; i++) {
            current = current.next
        }
        let tempNext = current.next
        current.next = new Node(val)
        current.next.next = tempNext
    }

    // Removes last node
    remove() {
        if (this.size == 0) {
            console.log('Nothing to remove')
        } else {
            let current = this.head
            //
            while(current.next.next != null) {
                current = current.next
            }
            current.next = null
            //current.next.data = null
            this.size--
        }
    }

    removeAt(indx) {
        // not working and I don't think 
        let current = this.head
        for(let i = 0; i < indx-1; i++) {
            current = current.next
        }
        current.next = current.next.next
    }

    print() {
        let current = this.head
        while(current != null) {
            process.stdout.write(current.data.toString())
            process.stdout.write(' -> ')
            current = current.next
        }
    }

}

let ll = new LinkedList()
ll.add(2)
ll.add(7)
ll.add(9)
ll.add(11)
ll.addAt(10,2)
ll.print()
console.log()
ll.removeAt(3)
ll.print()
console.log()
