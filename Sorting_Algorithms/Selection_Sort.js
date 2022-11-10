import swap from './helperMethods.js'

// best/worst: O(N^2)
// finds the minimum value in the data structure, places it in the
// first position, finds the second min val, places it in the second position, etc...

function selectionSort(arr) {
    let newArrIndx = 0
    let newArr = []
    let min = arr[0]
    // 
    for (let i = 0; i < arr.length; i++) {

    }
}

let unsortedArray = [3,9,5,1,0]
let sortedArray = selectionSort(unsortedArray)

console.log(sortedArray)
