
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

    add(data) {
        var node = new Node(data);
        var current;

        if(this.head == null){
            this.head = node;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insertAt(index, data) {
        if (index-1 > this.size || index < 0) {
            throw new Error('Error: incorrect index specified');
        } else {
            var node = new Node(data);
            var current, following;
            current = this.head;

            for (var i = 0; i < index-1; i++ ) {
                current = current.next;
            }
            following = current.next;
            current.next = node;
            node.next = following;
        }
    }

    // Remove at specific index
    removeAt(index) {
        if (this.size <= 0 || index < 0 || index > this.size) {
            console.log('Invalid parameters');
            return;
        } else {
            var current = this.head;
            var i = 1;
            while (i + 1 < index) {
                current = current.next;
                i++;
            }
            // Set current = two nodes ahead, garbage collection will clear the node in the middle
            current.next = current.next.next;
            this.size--;
            return;
        }
    }

    // Remove first instance of specific val
    removeVal(val) {
        if(this.size <= 0) {
            console.log('Linked list is empty');
            return;
        } else {
            var current = this.head;
            var prev;
            while(current.data != val) {
                prev = current;
                current = current.next;
            }

            // If current.data does not equal the value, that means you reached the end of the list and should return
            if(current.data != val) {
                console.log('Specified data does not exist in the list');
                return;
            } else if (!current.next) {
                current.next = null;
            } else {
                prev.next = prev.next.next;
            }
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
ll.add(1)
ll.add(2)
ll.add(3)
ll.add(4)
ll.print()
ll.insertAt(3, 5)
//ll.removeAt(2);
//ll.removeVal(61)
ll.print()