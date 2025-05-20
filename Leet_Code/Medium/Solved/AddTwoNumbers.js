/* 2. Add Two Numbers
You are given two non-empty linked lists representing 
two non-negative integers. The digits are stored
in reverse order, and each of their nodes contains
a single digit. Add the two numbers and return 
the sum as a linked list.

[2,4,3]  +  [5,6,4]  =  [7,0,8] */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    
    let l1Copy = l1, l2Copy = l2
    let shortest, longest, equal;

    // Find longest ListNode
    while (true) {
        if (l1Copy.next == null) {
            shortest = l1
            longest = l2
            l2Copy.next == null ? equal = true : null
            break
        } else if (l2Copy.next == null) {
            shortest = l2
            longest = l1
            l1Copy.next == null ? equal = true : null
            break
        }
        l1Copy = l1Copy.next
        l2Copy = l2Copy.next
    }

    let l3 = new ListNode()
    // Iterate over shorter list, adding to longer list same index
    
 

    return l3
};


let l1 = new ListNode(5)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)
let l2 = ListNode(5, ListNode(6, ListNode(4)))
addTwoNumbers(l1, l2)
