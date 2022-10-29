

export default function swap(arr, oldIndex, newIndex) {
    let temp = arr[oldIndex];
    arr[oldIndex] = arr[newIndex];
    arr[newIndex] = temp;
    return arr
}
