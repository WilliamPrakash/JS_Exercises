import swap from './helperMethods.js'

// best: O(N), worst: O(N^2)
// 1. assume the first element is already sorted
// 2. compare the first and second elements - should the second value
// stay in its place or be inserted before the value
// 3. Next, you can do a similar comparison with the third value - 
// should it be inserted in the first, second, or third position?

/* is this right??? */

function insertionSort(arr) {
    let minIndex
    for (let i = 0; i < arr.length - 1; i++) {
        // minIndex is continually moving towards the back of the array
        minIndex = i
        // Each time this loop is hit, it iterates through
        // one less element cause it's been sorted
        for(let j = i; j < arr.length; j++) {
            // The idea is to scan through what's left of the unsorted
            // portion of the array, checking each remaining element to see if
            // it's less than the current minimum
            if(arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        if(i != minIndex) {
            swap(arr, i, minIndex)
        }
    }
    return arr
}


let sortedArray = insertionSort([23, 1, 10, 5, 2]);
console.log(sortedArray)
