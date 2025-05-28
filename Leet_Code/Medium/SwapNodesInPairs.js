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
    
    // source: https://www.youtube.com/watch?v=uvYp4vyOfhA&list=WL&index=26&t=2s
    let dummy = new ListNode(0, head)
    let prev = dummy, curr = head

    while (curr != null && curr.next != null) {
        let nextPairNode = curr.next.next
        let second = curr.next

        second.next = curr
        curr.next = nextPairNode
        prev.next = second

        prev = curr
        curr = nextPairNode
    }

    return dummy.next
    
}

let nodes = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))))
//let nodes = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
//let nodes = new ListNode(1, new ListNode(2, null))
//let nodes = new ListNode(1, null)
swapPairs(nodes)

/* Partially working inner while loop logic
        tempNode = head.next
        if (head.next.next != null) { // There's at least another pair
            head.next = head.next.next
            tempNode.next = head
            head = tempNode
            head = head.next.next // move up 2 nodes
        } else { // Last pair
            //head.val = 80 // this updates savedHeadRef
            head = head.next
            break
        }*/
