
// First, make a linked list
class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        // size????
    }

    addNode(data){
        // Make new node
        var node = new Node(data)
        var current

        if(this.head = null){
            this.head = node
        } else {
            current = this.head
            // Iterate to end of array
            while(current.next){
                current = current.next
            }
            current.next = node
        }        
    }

    printLL(){
        let current = this.head
        while (current){
            print(this.head.data)
            this.head = head.next
        }
    }
}

var ll = new LinkedList()
ll.addNode(88)
ll.addNode(109)
ll.addNode(15)
//ll.printLL()