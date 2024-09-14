
/*
Binary search trees are sorted from left to right,
least to greatest.
On avg, operations are able to skip about half
of the tree so that each look up, insertion, or deletion
takes time proportional to the log of the number
of items stored in the tree.
*/

// Source: https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/

class BinarySearchTree {
    constructor(data) {
        this.root = new Node(data)
    }

    add(data) {
        // Start at the root
        let node = this.root

        // Function to find where to put new node
        // Can be called recursively (unfortunately)
        let searchTree = function(node) {
            if(data < node.data) {
                if (node.left === null) {
                    node.left = new Node(data)
                    return
                } else if (node.left !== null) {
                    // Recursive call
                    return searchTree(node.left)
                }
            } else if (data > node.data) {
                if(node.right === null) {
                    node.right = new Node(data)
                    return
                } else if (node.right !== null) {
                    // Recursive call
                    return searchTree(node.right)
                }
            } else { // don't add repeating data to the tree
                return null
            }
        }
        return searchTree(node)
    }

    findMin() {
        let current = this.root
        while (current.left !== null) {
            current = current.left
        }
        return current.data
    }

    findMax() {
        let current = this.root
        while (current.right !== null) {
            current = current.right
        }
        return current.data
    }

    remove(index) {

    }

    print() {
        
    }

}

// Binary Search Trees only have 2 children per parent (node)
class Node {
    constructor(data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }
}

// The way this is currently configured requires you to provide a root node value
let bst = new BinarySearchTree(3)
bst.add(1)
bst.add(5)
bst.add(2)
bst.add(4)
console.log(bst)
console.log()

