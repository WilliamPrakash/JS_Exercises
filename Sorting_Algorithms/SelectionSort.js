import swap from './helperMethods.js'

/*
    best/worst: O(N^2)
    Find the minimum value in the array, place it in the
    first position, finds the second min val, places it in the second position, etc...
*/

function selectionSort(arr) {
    // find min in entire array
    let min = arr[0]
    let minIndex = 0

    for(let j = 0; j < arr.length; j++){
        if(min > arr[j]) {
            min = arr[j]
            minIndex = j
        }
    }

    // put min at index i ??? instead of hardcoded 0
    let temp = arr[0]
    arr[0] = min
    arr[minIndex] = temp

    return arr
}

let unsortedArray = [3,9,5,0,1]
console.log(selectionSort(unsortedArray))
