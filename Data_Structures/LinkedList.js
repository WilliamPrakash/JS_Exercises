/* Example */

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

    isEmpty() {
        if(this.head == null) return true
        else return false
    }

    add(data) {
        if(this.isEmpty()) {
            this.head = new Node(data)
        } else {
            var current = this.head
            while(current.next) {
                current = current.next
            }
            let newNode = new Node(data)
            current.next = newNode
        }
        this.size++
    }

    // index specifies the position the new node will take
    insertAt(index, data) {
        let newNode = new Node(data)
        if(this.isEmpty()) {
            console.log('linked list is empty, placing data at head')
            this.add(newNode)
        } else {
            let prev = this.head
            for(let i = 0; i < index-1; i++) {
                prev = prev.next
            }
            let post = prev.next
            prev.next = newNode
            newNode.next = post
        }
        this.size++
    }

    removeAt(index) {
        if(this.isEmpty()) {
            console.log('can\'t remove something from an empty list...')
        } else {
            let prev = this.head
            for(let i = 0; i < index-1; i++) {
                prev = prev.next
            }
            prev.next = prev.next.next
        }

        this.size--
    }

    print() {
        if(this.isEmpty()) {
            console.log('linked list is empty...')
        } else {
            let current = this.head
            while(current) {
                process.stdout.write(current.data + ' -> ')
                current = current.next
            }
        }
        console.log()
    }
}

let ll = new LinkedList()
ll.add('will')
ll.add('grandpa')
ll.add('noah')
ll.print()
ll.insertAt(1,'TEST')
ll.print()
ll.removeAt(1)
ll.print()




