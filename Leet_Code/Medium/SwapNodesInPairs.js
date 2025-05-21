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
    // Make sure there's a pair to swap
    if (!head) {
        return head // no nodes
    }
    else if (head && !head.next) {
        return head // one node
    }

    /* Node swapping loop logic:
    Check if there's a node before the pair ???
    Check if there's a node after the pair
    Currently on the first of the pair to be swapped

    1 -> 2 -> 3 -> 4
    1 -> 3 -> 4 ; var temp = 2
    temp.next = 1

    1. head.val (1)
    2. save head.next (2) to a temp var
    3. assign head.next (1) to head.next. (3) (assuming there is one)
    4. assign temp.next to head.next.next.next? */

    console.log(head)
    let temp = head.next
    if (head.next.next) {
        head.next = head.next.next
    }
    temp.next = head;
    console.log(temp)
    
}

let nodes = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
//let nodes = new ListNode(1, new ListNode(2, new ListNode(3, null)))
//let nodes
swapPairs(nodes)
