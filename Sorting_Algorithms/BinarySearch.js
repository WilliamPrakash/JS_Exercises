/* source: https://www.geeksforgeeks.org/binary-search-in-javascript/
Binary Search is a searching technique that works on the "Divide and Conquer" approach. It is
used to search for any element in a SORTED array. Compared with linear, binary search is much
faster with a Time Complexity of O(logN), whereas linear search works in O(N) time complexity */

"use strict";

/* Iterative approach */
function BinarySearch(arr, find) {
    
    // Continuously cut the search area in half
    while (arr.length > 0) {
        // Find middle index
        let midIndex = (arr.length % 2) == 1 ? Math.floor(arr.length / 2) : arr.length / 2;

        // Only one item left
        if (midIndex == 0) {
            return arr[midIndex]
        }

        // Check middle value of the array
        if (arr[midIndex] == find) {
            return midIndex;
        }

        // Grab elements that could contain "find"
        if (find > arr[midIndex]) {
            arr = arr.slice(midIndex, arr.length);
            
        } else if (find < arr[midIndex]) {
            arr = arr.slice(0, midIndex);
        }

    }
    
    

    

}

BinarySearch([1, 3, 5, 7, 8, 9], 9);