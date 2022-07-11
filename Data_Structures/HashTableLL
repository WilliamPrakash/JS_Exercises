

class LinkedList {
  constructor(headData) {
    this.size = 0
    this.head = headData
  }

  add(data) {
    this.head = new Node(data)
    this.size++
  }
}


class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}


class HashTable {
    constructor() {
        this.size = 0
        this.nodeContainer = new Array(100)
    }

    createHash(value) {
        let hash = 0
        value.split('').forEach(char => {
            hash += char.charCodeAt(0)
        })
        
        console.log('generated hash: ' + hash % this.nodeContainer.length)
        return (hash % this.nodeContainer.length)
    }

    set(value) {
        let index = this.createHash(value)
        console.log('index: ' + index)
        // index is taken
        if(this.nodeContainer[index] != null) {
            while(this.nodeContainer[index].next) {
                this.nodeContainer[index].next = this.nodeContainer[index].next.next
            }
            this.nodeContainer[index].next = new Node(value)
        } 
        // index isn't taken
        else {
            let ll = new LinkedList()
            ll.add(value)
            this.nodeContainer[index] = ll
        }
    }

    print() {
        console.log(this.nodeContainer)
    }

}

let testHT = new HashTable()
testHT.set('will')
testHT.set('Devon')
testHT.set('will')
testHT.print()


