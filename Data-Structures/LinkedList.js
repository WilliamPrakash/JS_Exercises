
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
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            console.log('Invalid');
            return;
        } else {
            // Create a node
            var node = new Node(data);
            var current, following;
            current = this.head;

            // Iterate through till you get to the index
            /*for (var i = 0; i++; i <= index) {
                current = current.next;
            }*/

            // or set current to head.node and just start at beginning

            // this way does index - size
            var remainderSpaces = size - index;
            var i = 0;
            while (i < remainderSpaces) {
                current = current.next;
                i++;
            }

            // set the next
            current.next = node;
            node.next = following;
        }
    }

    print() {
        var current = this.head;
    }


}

const ll = new LinkedList();