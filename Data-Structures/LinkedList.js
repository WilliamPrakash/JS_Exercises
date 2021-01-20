
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Functions
    add(data) {
        var node = new Node(data);  // creates a new node with data passed in
        var current;    // store the current node

        // If list is empty, add the element and make it head
        if(this.head == null){
            this.head = node;
        } else {
            current = this.head;

            // Iterate to the end of the linked list
            while(current.next) {
                current = current.next;
            }

            // Add node
            current.next = node;
        }
        this.size++;
    }

    // Definitely needs work -- NOT correct
    insertAt(index, data) {
        // Check for bad data
        if (index < 0 || index > this.size) {
            console.log('Invalid');
            return;
        } else {
            // Create a node
            var node = new Node(data);
            var current, following;
            current = this.head;

            // Iterate through till you get to the index
            for (var i = 0; i++; i < index) {
                current = current.next;
            }

            // FOLLOWING IS UNDEFINED SET IT HERE
            following = current.next;

            // set the next
            current.next = node;
            node.next = following;
        }
    }

    print() {
        var current = this.head;
        var output = ""

        while(current) {
            output += " -> " + current.data;
            //console.log('->' + current.data);
            current = current.next;
        }
        console.log(output);
    }


}

const ll = new LinkedList();
ll.add(45)
ll.add(61)
ll.add(90)
ll.add(12)
ll.print()
ll.insertAt(2, 100)
ll.print()