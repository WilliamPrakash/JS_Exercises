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
    /*else if (!head.next.next) { // two nodes
        head.next.next = new ListNode(head.val, null)
        head = head.next
        return head
    }*/

    // At this point, there's at least 3 nodes
    // You'll need the prev node
    let savedHeadRef = head.next // save ref to head.next cause it'll get swapped to the front
    let temp
    // Swap the first 2 nodes
    temp = head.next
    head.next = head.next.next
    temp.next = head
    head = temp
    head = head.next
    // Different swapping methodology here:
    while (head != null && head.next != null && head.next.next != null) {
        temp = head.next
        head.next = head.next.next
        temp.next = null
        head.next.next = temp
        console.log(head)
        head = head.next
    }
    // case for odd values
    // 1,2,3,4,5 test case is missing 5 on the end of the return
    //if (head.next != null)

    return savedHeadRef
    
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
