import swap from './helperMethods.js'

/*
    best/worst: O(N^2)
    Find the minimum value in the array, place it in the
    first position, finds the second min val, places it in the second position, etc...
*/

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let min = arr[i]
        let minIndex = i
        // iterate through all elements after i
        for(let j = i+1; j < arr.length; j++) {
            if(min > arr[j]) {
                min = arr[j]
                minIndex = j
            }
        }
        // move min to original index (i)
        let temp = arr[i]
        arr[i] = min
        arr[minIndex] = temp
    }
    return arr
}

let unsortedArray = [3,9,5,0,1]
console.log(selectionSort(unsortedArray))
