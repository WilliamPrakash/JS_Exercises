

var arr = [1,4,2,5,-2,3]
BubbleSort(arr)


function BubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        // this loop iterates over the e
        for(let j = 0; j < arr.length; j++) {
            // If element at index j is greater than element at index j + 1, swap them
            if(arr[j] > arr[j+1]) {
                let temp = arr[j] // load first element in temp variable so it doesn't get overwritten
                arr[j] = arr[j+1] // move smaller element into index in front
                arr[j+1] = temp   // move larger element stored in temp back an index position
            }
        }
    }
    console.log(arr)
}