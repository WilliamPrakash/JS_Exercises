import swap from './helperMethods.js'

/*  
    Best: O(N), Worst: O(N^2)
    compares every two adjacent values and swaps them
    if the first one is bigger than the second 
*/

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if( arr[j] > arr[j + 1] ) {
                swap(arr,j)
                /*let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp*/
            }
        }
    }
    return arr
}

let unsortedArray = [4,1,0,8,3]
console.log(bubbleSort(unsortedArray))
