

var arr = [1,4,2,5,-2,3]
BubbleSort(arr)


function BubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        // Last i elements are already in place
        for(let j = 0; j < (arr.length); j++) {
            // Checking if the item at present iteration
            // is greater than the next iteration
            if(arr[j] > arr[j+1]) {
                // If the condition is true then swap them
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr)
}