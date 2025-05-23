/* 24. Swap Nodes in Pairs
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without
modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Input: head = [1,2,3,4]
Output: [2,1,4,3]
Input: head = [1]
Output: [1]
Input: head = [1,2,3]
Output: [2,1,3] */

"use strict";

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var swapPairs = function(head) {
    if (!head) { // no nodes
        return head
    }
    else if (head && !head.next) { // one node
        return head
    }
    else if (!head.next.next) { // two nodes
        head.next.next = new ListNode(head.val, null)
        head = head.next
        return head
    }

    /* Node swapping loop logic:
    Preserve prior nodes
    Preserve future nodes

    1 -> 2 -> 3 -> 4
    1 -> 3 -> 4 ; var temp = 2
    temp.next = 1

    1. head.val (1)
    2. save head.next (2) to a temp var
    3. assign head.next (1) to head.next. (3) (assuming there is one)
    4. assign temp.next to head.next.next.next? */

    // At this point, there's at least 3 nodes
    let savedHead = head
    head = head.next
    while (head.next.next != null) {
        let firstNode = head
        let secondNode = head.next
        // Check if secondNode.next != null ???
        firstNode.next = secondNode.next
        secondNode.next = firstNode
        console.log(secondNode)

    }
    
    
}

//let nodes = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
let nodes = new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(3, null))))
//let nodes = new ListNode(1, new ListNode(2, null))
//let nodes = new ListNode(1, null)
swapPairs(nodes)
