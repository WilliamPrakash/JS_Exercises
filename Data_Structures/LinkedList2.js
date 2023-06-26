
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    add(data) {
        if(this.head == null) {
            this.head = new Node(data)
        } else {
            let current = this.head
        while(current.next != null) {
            current = current.next
        }
        current.next = new Node(data)
        }
    }

    print() {
        let display = ''
        let current = this.head
        while(current) {
            display += current.data.toString() + ' -> '
            //display.push(' -> ')
            current = current.next
        }
        console.log(display)
    }
}


let ll = new LinkedList()
ll.add(14)
ll.add(3)
ll.add(89)
ll.add(-22)
ll.print()
