import swap from '../Sorting_Algorithms/helperMethods.js'
/* i need to init the parent folder with npm init*/

// Best: O(N), Worst: O(N^2)
// the bubble sort compares every two adjacent values
// and swaps them if the first one is bigger than the second



function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        // iterate through each element of array
        for (let j = 0; j < arr.length - 1; j++) {
            // for each item in the array, check it's equality to all other array elements
            if( arr[j] > arr[j + 1] ) {
                // pass in array, current index, index of 
                swap(arr, j, j + 1)
                /*
                    let temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                */
            }
        }
    }
    return arr
}

let unsortedArray = [4,1,0,8,3]
let sortedArray = bubbleSort(unsortedArray)
console.log(sortedArray)
