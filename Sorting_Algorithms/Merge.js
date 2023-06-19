
/*
    Best/Worst: O(N Log N)
    Divide array into smaller arrays of 1 or 2

*/

function mergeSort(arr) {
    // Base case
    if(arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)

    // Recursive calls
    let left = mergeSort(arr.slice(0, mid))    
    let right = mergeSort(arr.slice(mid))
    
    console.log('right: ' + right)
    console.log('----')

    arr = merge(left, right)
    return arr
}

function merge(left, right) {
    let sortedArr = []
    while(left.length && right.length) {
        // insert the smallest item
        if(left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    //use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right]
}

let unsortedArr = [6,11,2,-7,31,20]
console.log(mergeSort(unsortedArr))