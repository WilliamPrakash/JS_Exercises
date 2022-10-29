import swap from '../Sorting_Algorithms/helperMethods.js'

// Finds the minimum value in the array, puts it in the first position,
// finds the second minimum value, places it in the second position, etc...


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
