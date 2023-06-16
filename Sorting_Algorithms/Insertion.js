import swap from './helperMethods.js'
/*
    best: O(N), worst: O(N^2)
    1. Assume the first element is already sorted
    2. Compare the first and second elements - should the second value
    stay in its place or be inserted before the first value?
    3. Next, you can do a similar comparison with the third value - 
    should it be inserted in the first, second, or third position?
*/

function insertionSort(arr) {
    // go through each element in the array, starting at
    // index 0 so we can compare to index 1
    for(let i = 1; i < arr.length; i++) {
        // go backwards
        // i is always one index ahead, j is one index behind
        for(let j = i-1; j >= 0; j--) {
            if(arr[i] < arr[i+1]) {
                let temp = arr[i+1]
                arr[i+1] = arr[i]
                arr[i] = temp
            }
        }
    }

    return arr
}


console.log(insertionSort([23, 1, 10, 5, 2]))
