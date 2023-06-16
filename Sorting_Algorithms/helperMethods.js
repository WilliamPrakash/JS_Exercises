

function swap(arr, j) {
    let temp = arr[j]
    arr[j] = arr[j+1]
    arr[j+1] = temp
    return arr
}

export default swap